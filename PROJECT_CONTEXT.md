# Contexto del proyecto

Última actualización: 2026-08-28

## Objetivo actual

Corregir el rechazo repetido de AdSense por “contenido de poco valor”, confirmar que Google conoce las seis guías y preparar una nueva revisión solo cuando exista evidencia de indexación y rastreo.

## Estado actual

El código fuente está disponible en este workspace y el remoto es `https://github.com/ssebastiian/myhome.git`. El 2026-08-28 AdSense volvió a indicar “contenido de poco valor”; el usuario informa que es la décima revisión. El código ya contiene seis guías extensas y diferenciadas, pero todavía no existe evidencia disponible en esta sesión de que las seis estén indexadas. Search Console mostró fallos temporales de obtención al probar `/pages/about` y al reenviar `sitemap.xml`. El informe del sitemap conserva la última lectura correcta del 2026-08-19 y 14 páginas descubiertas. Las comprobaciones públicas inmediatamente posteriores no reprodujeron los errores. El cambio de AdSense fue desplegado por el usuario en el commit `ad574ce`; no se hicieron despliegues adicionales.

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
- Se diagnosticó el fallo de inspección de `/pages/about` sin modificar el sitio: no se encontró una regla o respuesta distinta para esa URL.
- Se comparó el sitemap publicado con el repositorio después del aviso “No se ha podido obtener”: ambos archivos son idénticos y válidos.

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
- No modificar `robots.txt` por un único fallo de la prueba en vivo cuando el archivo y la página responden correctamente; volver a probar y escalar solo si el error persiste o afecta más URLs.
- No revertir ni regenerar `sitemap.xml`: el único cambio del commit `ad574ce` dentro del sitemap fue actualizar la fecha real de modificación de privacidad; el formato y las URLs no cambiaron.

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
- `robots.txt`: permite todo el rastreo y declara el sitemap; no requirió cambios tras el fallo aislado de Search Console.

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
- El 2026-08-28, `robots.txt` y `/pages/about` respondieron HTTP `200` con `cf-cache-status: HIT` usando agentes de navegador, Googlebot, Google Inspection Tool y Mediapartners-Google.
- Cinco solicitudes consecutivas a `robots.txt` y cinco a `/pages/about` respondieron `200`, aproximadamente en 0,25 segundos cada una.
- Las variantes HTTP y `www` de `robots.txt` y `/pages/about` llegaron a la URL HTTPS canónica con una sola redirección y terminaron en `200`.
- La comprobación IPv6 desde el entorno local no tuvo conectividad para ninguna de las dos rutas; al afectar por igual a `robots.txt` y `/pages/about`, no demuestra un fallo específico del sitio ni de esa página.
- El sitemap publicado responde `200`, `Content-Type: application/xml`, 1.839 bytes, XML válido y sin BOM; su SHA-256 coincide con el archivo local.
- El sitemap publicado contiene 15 URLs y todas respondieron `200`. Search Console muestra 14 porque conserva la lectura anterior del 2026-08-19.
- Googlebot, Google Inspection Tool y Mediapartners-Google descargaron el sitemap con `200`; cinco descargas consecutivas adicionales también devolvieron `200`.
- Google Public DNS y Cloudflare DNS resolvieron correctamente los registros A y AAAA de `topiapps.com`; los dos destinos IPv4 sirvieron `sitemap.xml` y `robots.txt` con `200`.

## Pendientes o bloqueos

- Iniciar sesión en Search Console, comprobar que `sitemap.xml` fue leído e inspeccionar por separado la portada y las seis guías.
- Repetir “Probar URL publicada” para `/pages/about`; si el mismo error continúa durante 24 horas o aparece en varias URLs, revisar Estadísticas de rastreo de Search Console y los eventos de seguridad de Cloudflare antes de cambiar reglas.
- Dar a Google unos días para reintentar la obtención del sitemap. Si el estado sigue igual, abrir el detalle del error, probar la URL exacta del sitemap en vivo y revisar Acciones manuales, Estadísticas de rastreo y eventos de Cloudflare antes de reenviarlo otra vez.
- Obtener métricas reales de Search Console, AdSense y, si se instala, analítica.
- Completar el perfil de autor con experiencia y enlaces externos solo si el usuario aporta datos comprobables.
- Desplegar los cambios locales únicamente cuando el usuario decida hacerlo; esta tarea no autorizó despliegue.

## Próximo paso recomendado

Cuando el usuario quiera continuar, desplegar los cambios y usar Search Console para confirmar que las seis guías están descubiertas/indexadas. No solicitar otra revisión de AdSense hasta conocer ese estado y dejar tiempo para que Google procese los cambios.
