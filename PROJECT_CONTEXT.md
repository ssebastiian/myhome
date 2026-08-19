# Contexto del proyecto

Última actualización: 2026-08-19

## Objetivo actual

Mejorar `https://topiapps.com/`, conseguir tráfico orgánico útil y preparar una monetización sostenible con Google AdSense.

## Estado actual

El código fuente está disponible en este workspace y el remoto es `https://github.com/ssebastiian/myhome.git`. AdSense indicó contenido de poco valor y el sitio figura como “Requiere revisión”. La mejora editorial y técnica ya está desplegada; todavía no se ha confirmado una nueva solicitud de revisión.

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

## Decisiones y restricciones

- Separar las instrucciones permanentes del estado cambiante para que `AGENTS.md` sea estable y este archivo pueda actualizarse con frecuencia.
- Guardar resúmenes y decisiones, no conversaciones completas ni secretos.
- Priorizar contenido para personas y mejoras medibles; evitar contenido masivo o tácticas que puedan infringir las políticas de Google.
- No solicitar una nueva revisión de AdSense hasta comprobar indexación, consentimiento y configuración de dominio.
- Añadir pocas guías con utilidad demostrable —herramienta, conjunto de datos, prueba o procedimiento— en lugar de aumentar el volumen por sí mismo.
- No inventar credenciales, experiencia, cifras o pruebas para reforzar la autoría; pedir evidencia real al usuario cuando haga falta.

## Archivos importantes

- `AGENTS.md`: reglas permanentes para todos los agentes.
- `PROJECT_CONTEXT.md`: estado, decisiones y próximos pasos entre sesiones.
- `ADSENSE_REVIEW_CHECKLIST.md`: acciones previas a una nueva solicitud de revisión.
- `articles/que-datos-puedes-compartir-con-una-ia.html`: nueva guía de privacidad y clasificación de datos.
- `downloads/matriz-datos-antes-de-usar-ia.csv`: hoja editable asociada a la guía.
- `main.js`: incluye la lógica del orientador local de datos.
- `styles.css`: ficha de evidencia y componentes del orientador.

## Verificaciones

- Se comprobó que no existía otro archivo `AGENTS.md` en el proyecto antes de crearlo.
- Las 14 URLs del sitemap responden HTTP `200`, con título, descripción, canonical y un único `H1`.
- `robots.txt` permite rastreo y declara `https://topiapps.com/sitemap.xml`.
- `ads.txt` responde `200` y declara `pub-9439862036060464`; coincide con el identificador del código AdSense.
- Los enlaces internos y las descargas revisadas no devolvieron errores.
- Los cinco artículos tienen aproximadamente entre 1.283 y 1.948 palabras visibles.
- Cloudflare quedó corregido el 2026-08-19: HTTP y ambas variantes `www` redirigen con `301` en un solo salto a `https://topiapps.com/`.
- Las redirecciones conservan rutas internas y parámetros de consulta.
- Search Console confirmó el 2026-08-19 que `https://topiapps.com/` está indexada y se sirve por HTTPS.
- AdSense muestra dos mensajes activos para reglamentos europeos y uno para normativas estatales de EE. UU.; queda confirmar dentro de la configuración que `topiapps.com` esté incluido y publicado.
- No se detectó una CMP activa; la política de privacidad reconoce que debe incorporarse cuando corresponda.
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

## Pendientes o bloqueos

- Verificar la propiedad en Search Console, enviar el sitemap y revisar cobertura de indexación.
- Confirmar que `ads.txt` aparezca como “Autorizado” dentro de AdSense.
- Obtener métricas reales de Search Console, AdSense y, si se instala, analítica.
- Completar el perfil de autor con experiencia y enlaces externos solo si el usuario aporta datos comprobables.

## Próximo paso recomendado

Revisar y desplegar estos cambios; después completar `ADSENSE_REVIEW_CHECKLIST.md` y confirmar en Search Console que la portada y las seis guías sean rastreables antes de solicitar otra revisión.
