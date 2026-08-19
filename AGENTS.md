# Instrucciones para agentes

## Objetivo principal

Mantener continuidad entre sesiones y evitar perder decisiones, avances, pendientes y contexto importante del proyecto.

## Misión de TopiApps

Ayudar a mejorar `https://topiapps.com/`, aumentar tráfico orgánico útil y construir una monetización sostenible, principalmente mediante Google AdSense y recursos propios, sin sacrificar la experiencia del lector ni incumplir políticas.

Todo agente que trabaje en el sitio debe:

- priorizar contenido original, comprobable y útil para personas;
- mejorar SEO técnico, accesibilidad, rendimiento, navegación y conversión con cambios medibles;
- revisar las políticas vigentes de Google antes de recomendar o implementar cambios relacionados con Search o AdSense;
- evitar contenido masivo, superficial o creado solo para captar búsquedas;
- no usar tácticas engañosas, compra de tráfico, clics incentivados ni ubicaciones de anuncios que provoquen clics accidentales;
- proteger la privacidad y aplicar consentimiento válido cuando corresponda;
- separar hechos verificados, hipótesis y recomendaciones;
- medir resultados con Search Console, analítica y AdSense cuando el usuario facilite acceso o exportaciones;
- no prometer aprobación, posiciones en Google ni ingresos específicos.

Orden general de trabajo:

1. Corregir problemas técnicos y de cumplimiento.
2. Confirmar rastreo e indexación en Google Search Console.
3. Fortalecer la cobertura temática y los enlaces internos.
4. Medir tráfico y comportamiento antes de optimizar anuncios.
5. Experimentar de forma controlada y registrar los resultados.

## Inicio obligatorio de cada sesión

Antes de proponer cambios o editar archivos:

1. Leer este archivo completo.
2. Leer `PROJECT_CONTEXT.md` completo.
3. Revisar los archivos directamente relacionados con la solicitud actual.
4. Consultar `git status --short` para reconocer trabajo existente y no sobrescribir cambios del usuario.
5. Continuar desde el estado documentado; no repetir trabajo ya terminado.

Si `PROJECT_CONTEXT.md` no existe, crearlo con la plantilla indicada al final de este archivo.

## Durante el trabajo

- Tratar la solicitud más reciente del usuario como la prioridad actual.
- Conservar los cambios existentes que no pertenezcan a la tarea.
- Registrar decisiones importantes, supuestos y restricciones en `PROJECT_CONTEXT.md` cuando aparezcan.
- Mantener el registro breve y útil: guardar conclusiones y razones, no transcripciones completas.
- Verificar los cambios con las pruebas o comprobaciones adecuadas antes de declarar una tarea terminada.
- Si la documentación contradice el código o la solicitud reciente del usuario, confirmar el estado real y corregir la documentación.
- Nunca guardar contraseñas, tokens, claves privadas, datos personales sensibles ni otros secretos en archivos de contexto.

## Antes de terminar cada tarea

Actualizar `PROJECT_CONTEXT.md` con:

- objetivo vigente;
- estado actual;
- trabajo completado;
- decisiones y motivos relevantes;
- archivos importantes modificados;
- validaciones ejecutadas y sus resultados;
- pendientes concretos o bloqueos;
- siguiente paso recomendado.

Eliminar información obsoleta y marcar claramente lo que ya quedó resuelto. El archivo debe permitir que otro agente retome el trabajo sin depender del historial del chat.

## Comunicación

- Responder al usuario en el idioma que esté usando, salvo que solicite otro.
- Explicar con claridad cualquier supuesto que pueda cambiar el resultado.
- No afirmar que algo está completo si faltan pruebas relevantes o existe un bloqueo.
- Al entregar una tarea, resumir el resultado, las verificaciones y cualquier pendiente real.

## Plantilla de `PROJECT_CONTEXT.md`

```markdown
# Contexto del proyecto

Última actualización: AAAA-MM-DD

## Objetivo actual

Describe el resultado que se busca.

## Estado actual

Resume en pocas líneas dónde está el trabajo.

## Trabajo completado

- Elemento terminado.

## Decisiones y restricciones

- Decisión o restricción — razón.

## Archivos importantes

- `ruta/al/archivo`: propósito o cambio relevante.

## Verificaciones

- Comando o revisión — resultado.

## Pendientes o bloqueos

- Pendiente concreto, o `Ninguno`.

## Próximo paso recomendado

Indica la acción más útil para continuar.
```
