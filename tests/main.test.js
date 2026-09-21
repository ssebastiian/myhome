const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

global.document = { querySelector: () => null };

const { calculateWeightedScore, calculateCostModel, assessDataSelection } = require("../main.js");

const weights = [25, 20, 15, 15, 10, 10, 5];
const scoreItems = (values) => values.map((value, index) => ({ value, weight: weights[index] }));

test("la rúbrica conserva los límites 0, 60 y 80", () => {
  assert.deepEqual(calculateWeightedScore(scoreItems([0, 0, 0, 0, 0, 0, 0])), {
    score: 0,
    verdict: "incomplete",
    message: "Completa la prueba antes de decidir.",
  });
  assert.equal(calculateWeightedScore(scoreItems([4, 4, 3, 3, 2, 2, 2])).score, 80);
  assert.equal(calculateWeightedScore(scoreItems([4, 4, 3, 3, 2, 2, 2])).verdict, "pilot");
  assert.equal(calculateWeightedScore(scoreItems([3, 3, 2, 2, 2, 2, 2])).score, 61);
  assert.equal(calculateWeightedScore(scoreItems([3, 3, 2, 2, 2, 2, 2])).verdict, "adjust");
  assert.equal(calculateWeightedScore(scoreItems([4, 4, 4, 4, 4, 4, 4])).score, 100);
});

test("la rúbrica limita entradas fuera del rango de 0 a 4", () => {
  const result = calculateWeightedScore(scoreItems([9, 9, 9, 9, 9, 9, 9]));
  assert.equal(result.score, 100);
  assert.equal(result.verdict, "pilot");
});

const baseCostInput = {
  volume: 600,
  before: 12,
  withAi: 6,
  review: 3,
  correctionRate: 10,
  correctionTime: 5,
  hourlyRate: 15,
  licenses: 120,
  variable: 25,
  implementation: 60,
  training: 45,
  incidents: 30,
  currency: "UM",
};

test("el caso base de costos reproduce los resultados publicados", () => {
  const result = calculateCostModel(baseCostInput);
  assert.equal(result.minutesSaved, 2.5);
  assert.equal(result.grossValue, 375);
  assert.equal(result.monthlyCost, 280);
  assert.equal(result.netBenefit, 95);
  assert.equal(result.breakEven, 448);
  assert.equal(result.status, "positive");
});

test("la calculadora identifica ausencia de ahorro temporal", () => {
  const result = calculateCostModel({
    ...baseCostInput,
    volume: 100,
    before: 5,
    withAi: 4,
    review: 2,
    correctionRate: 0,
    licenses: 0,
    variable: 0,
    implementation: 0,
    training: 0,
    incidents: 0,
  });
  assert.equal(result.minutesSaved, -1);
  assert.equal(result.breakEven, null);
  assert.equal(result.status, "no_time_savings");
});

test("la calculadora distingue equilibrio y beneficio negativo", () => {
  const shared = {
    ...baseCostInput,
    volume: 100,
    before: 10,
    withAi: 4,
    review: 0,
    correctionRate: 0,
    correctionTime: 0,
    hourlyRate: 60,
    licenses: 600,
    variable: 0,
    implementation: 0,
    training: 0,
    incidents: 0,
  };
  const equilibrium = calculateCostModel(shared);
  assert.equal(equilibrium.netBenefit, 0);
  assert.equal(equilibrium.breakEven, 100);
  assert.equal(equilibrium.status, "break_even");

  const negative = calculateCostModel({ ...shared, withAi: 5 });
  assert.equal(negative.netBenefit, -100);
  assert.equal(negative.breakEven, 120);
  assert.equal(negative.status, "negative");
});

test("el orientador pide una categoría antes de decidir", () => {
  assert.equal(assessDataSelection({ kinds: [] }).level, "empty");
});

test("el orientador detiene secretos y categorías reguladas", () => {
  assert.equal(assessDataSelection({ kinds: ["secret"], approvedEnvironment: true }).level, "stop");
  assert.equal(assessDataSelection({ kinds: ["regulated"], approvedEnvironment: true }).level, "stop");
});

test("el orientador minimiza datos personales incluso en un entorno aprobado", () => {
  const result = assessDataSelection({
    kinds: ["personal"],
    approvedEnvironment: true,
    externalAction: true,
  });
  assert.equal(result.level, "minimize");
  assert.match(result.actions[2], /revisión humana/);
});

test("el orientador exige aprobación para información interna", () => {
  assert.equal(
    assessDataSelection({ kinds: ["internal"], approvedEnvironment: false }).level,
    "caution",
  );
});

test("el orientador permite continuar con datos públicos en un entorno aprobado", () => {
  assert.equal(
    assessDataSelection({ kinds: ["public"], approvedEnvironment: true }).level,
    "continue",
  );
});

const root = path.resolve(__dirname, "..");
const htmlFiles = fs
  .readdirSync(root, { recursive: true })
  .filter((file) => file.endsWith(".html") && !file.startsWith(".git/"));

test("todos los bloques JSON-LD contienen JSON válido", () => {
  let blocks = 0;
  for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(root, file), "utf8");
    const matches = html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
    for (const match of matches) {
      assert.doesNotThrow(() => JSON.parse(match[1]), `JSON-LD inválido en ${file}`);
      blocks += 1;
    }
  }
  assert.equal(blocks, 15);
});

test("los enlaces y fragmentos internos de los HTML apuntan a destinos existentes", () => {
  const resolveTarget = (pathname) => {
    if (pathname === "/") return path.join(root, "index.html");
    const direct = path.join(root, pathname.slice(1));
    if (fs.existsSync(direct)) return direct;
    if (fs.existsSync(`${direct}.html`)) return `${direct}.html`;
    return direct;
  };

  for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(root, file), "utf8");
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
    for (const href of hrefs) {
      if (/^(https?:|mailto:)/.test(href)) continue;
      const [pathname, fragment] = href.split("#");
      const targetFile = pathname ? resolveTarget(pathname) : path.join(root, file);
      assert.ok(fs.existsSync(targetFile), `Destino inexistente en ${file}: ${href}`);
      if (fragment) {
        const targetHtml = fs.readFileSync(targetFile, "utf8");
        assert.match(targetHtml, new RegExp(`id=["']${fragment}["']`), `Fragmento inexistente en ${file}: ${href}`);
      }
    }
  }
});

test("cada HTML mantiene identificadores únicos", () => {
  for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(root, file), "utf8");
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, `Identificadores duplicados en ${file}`);
  }
});
