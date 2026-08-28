# Contexto del proyecto

Última actualización: 2026-08-28

## Objetivo actual

Corregir el rechazo repetido de AdSense por “contenido de poco valor”, confirmar que Google conoce las seis guías y preparar una nueva revisión solo cuando exista evidencia de indexación y rastreo.

## Estado actual

El código fuente está disponible en este workspace y el remoto es `https://github.com/ssebastiian/myhome.git`. El 2026-08-28 AdSense volvió a indicar “contenido de poco valor”; el usuario informa que es la décima revisión. El código ya contiene seis guías extensas y diferenciadas, pero todavía no existe evidencia disponible en esta sesión de que las seis estén indexadas. Los cambios de esta sesión son únicamente locales y no se desplegaron.

## Trabajo completado

- Se creó `AGENTS.md` con reglas para leer, conservar y actualizar el contexto.
- Se creó este archivo como memoria persistente del proyecto.
- Se realizó una auditoría pública inicial de la portada y las 14 URLs del sitemap.
- Se añadió a `AGENTS.md` la misión permanente de crecimiento y monetización responsable de TopiApps.
- Se confirmó en el historial que ya se retiraron numerosos artículos genéricos; se decidió no restaurarlos ni generar contenido masivo.
- Se creó la sexta guía `que-datos-puedes-compartir-con-una-ia.html`, con unas 1.600 palabras, fuentes oficiales, matriz de seis categorías y un orientador que funciona en el navegador.
- Se creó `matriz-datos-antes-de-usar-ia.csv` como sexta descarga gratuita.
- Se actualizaron portada, biblioteca, recursos, enlaces relacionados, cantidades y sitemap para integrar la guía nueva.
- Se añadió una ficha visual de evidencia y utilidad en la portada y en la guía nueva.
- Se creó `ADSENSE_REVIEW_CHECKLIST.md` con las acciones que requieren Cloudflare, Search Console y AdSense.
- Se auditó el rechazo más reciente contra las políticas vigentes de AdSense y la guía de contenido útil de Google.
- Se retiró el cargador de AdSense de la portada, cuya función principal es orientar y navegar; la metaetiqueta oficial de verificación permanece en el `<head>`.
- Se actualizó la política de privacidad para indicar que el cargador publicitario queda limitado a las seis guías editoriales.

## Decisiones y restricciones

- Separar las instrucciones permanentes del estado cambiante para que `AGENTS.md` sea estable y este archivo pueda actualizarse con frecuencia.
- Guardar resúmenes y decisiones, no conversaciones completas ni secretos.
- Priorizar contenido para personas y mejoras medibles; evitar contenido masivo o tácticas que puedan infringir las políticas de Google.
- No solicitar una nueva revisión de AdSense hasta comprobar indexación, consentimiento y configuración de dominio.
- Añadir pocas guías con utilidad demostrable —herramienta, conjunto de datos, prueba o procedimiento— en lugar de aumentar el volumen por sí mismo.
- No inventar credenciales, experiencia, cifras o pruebas para reforzar la autoría; pedir evidencia real al usuario cuando haga falta.
- No responder al décimo rechazo con cambios cosméticos, relleno ni artículos masivos. La siguiente solicitud debe esperar a conocer la indexación de cada guía.
- Mantener anuncios solo en páginas cuyo contenido editorial sea el centro de atención. La portada se verifica mediante `google-adsense-account`, método admitido por Google cuando no se desea cargar anuncios allí.
- No realizar despliegues en esta tarea, por solicitud expresa del usuario.

## Archivos importantes

- `AGENTS.md`: reglas permanentes para todos los agentes.
- `PROJECT_CONTEXT.md`: estado, decisiones y próximos pasos entre sesiones.
- `ADSENSE_REVIEW_CHECKLIST.md`: acciones previas a una nueva solicitud de revisión.
- `articles/que-datos-puedes-compartir-con-una-ia.html`: nueva guía de privacidad y clasificación de datos.
- `downloads/matriz-datos-antes-de-usar-ia.csv`: hoja editable asociada a la guía.
- `main.js`: incluye la lógica del orientador local de datos.
- `styles.css`: ficha de evidencia y componentes del orientador.
- `index.html`: conserva la verificación de AdSense, pero ya no carga el script publicitario.
- `pages/privacy.html`: refleja el alcance real del cargador de AdSense y la fecha de revisión actual.

## Verificaciones

- Se comprobó que no existía otro archivo `AGENTS.md` en el proyecto antes de crearlo.
- Las 14 URLs del sitemap responden HTTP `200`, con título, descripción, canonical y un único `H1`.
- `robots.txt` permite rastreo y declara `https://topiapps.com/sitemap.xml`.
- `ads.txt` responde `200` y declara `pub-9439862036060464`; coincide con el identificador del código AdSense.
- Los enlaces internos y las descargas revisadas no devolvieron errores.
- Cloudflare quedó corregido el 2026-08-19: HTTP y ambas variantes `www` redirigen con `301` en un solo salto a `https://topiapps.com/`.
- Las redirecciones conservan rutas internas y parámetros de consulta.
- Search Console confirmó el 2026-08-19 que `https://topiapps.com/` está indexada y se sirve por HTTPS.
- En la revisión documentada del 2026-08-19, AdSense mostraba dos mensajes activos para reglamentos europeos y uno para normativas estatales de EE. UU.; la CMP no forma parte del código estático del repositorio.
- La búsqueda pública usada en la auditoría no mostró páginas de `topiapps.com`; Search Console debe confirmar el estado real de indexación.
- PageSpeed Insights no devolvió métricas por agotamiento de la cuota pública de la API.
- El repositorio contiene ahora 6 artículos, 6 descargas y 6 URLs de artículos en el sitemap.
- `node --check main.js` terminó correctamente.
- `xmllint --noout sitemap.xml` terminó correctamente.
- Los 15 bloques JSON-LD de los archivos HTML se analizaron correctamente.
- Tidy no encontró errores HTML en los seis archivos modificados o creados que se revisaron.
- No se detectaron destinos internos ni fragmentos rotos en los archivos cambiados.
- `git diff --check` terminó sin errores.
- Las cuatro fuentes nuevas de NIST, ICO y OWASP respondieron HTTP `200`.
- En producción, el cargador de AdSense aparece únicamente en la portada y las seis guías; está ausente en las ocho páginas auxiliares y en la página 404.
- La guía nueva y el sitemap actualizado ya están desplegados públicamente.
- Las seis guías contienen entre 1.351 y 1.958 palabras visibles; el solapamiento de secuencias de ocho palabras entre pares fue de 1,22 % a 3,80 %, por lo que no se detectó duplicación interna sustancial.
- Una búsqueda pública `site:topiapps.com` no devolvió resultados en la herramienta consultada. No es una prueba definitiva de desindexación, pero refuerza la necesidad de revisar Search Console.
- Search Console no pudo revisarse en el navegador disponible porque no había una sesión iniciada; no se modificó ninguna cuenta.
- La portada, la biblioteca, una guía, `sitemap.xml` y `robots.txt` respondieron HTTP `200` en la comprobación pública.
- En local, la portada conserva `google-adsense-account` y no carga `adsbygoogle`; una guía sí carga el script y las páginas auxiliares no lo hacen.
- `node --check main.js`, `xmllint --noout sitemap.xml`, los 15 bloques JSON-LD, los enlaces internos y `git diff --check` finalizaron sin errores.

## Pendientes o bloqueos

- Iniciar sesión en Search Console, comprobar que `sitemap.xml` fue leído e inspeccionar por separado la portada y las seis guías.
- Obtener métricas reales de Search Console, AdSense y, si se instala, analítica.
- Completar el perfil de autor con experiencia y enlaces externos solo si el usuario aporta datos comprobables.
- Desplegar los cambios locales únicamente cuando el usuario decida hacerlo; esta tarea no autorizó despliegue.

## Próximo paso recomendado

Cuando el usuario quiera continuar, desplegar los cambios y usar Search Console para confirmar que las seis guías están descubiertas/indexadas. No solicitar otra revisión de AdSense hasta conocer ese estado y dejar tiempo para que Google procese los cambios.
