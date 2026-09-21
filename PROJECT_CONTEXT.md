# Contexto del proyecto

Última actualización: 2026-09-21

## Objetivo actual

Salir del ciclo de rechazos de AdSense por “contenido de poco valor” mediante evidencia real de indexación, utilidad original y audiencia antes de solicitar otra revisión.

## Estado actual

El código fuente está disponible en este workspace y el remoto es `https://github.com/ssebastiian/myhome.git`. El 2026-09-21 el usuario informó un decimoquinto rechazo con el mismo motivo de AdSense y confirmó que la validación de Search Console ya fue completada. El Excel de Rendimiento para 2026-06-20 a 2026-09-19 muestra 4 clics, 801 impresiones, CTR de 0,5 % y posición media 27; todavía no refleja las mejoras publicadas el 2026-09-21. Las impresiones aumentaron de 168 en los 28 días anteriores a 577 en los últimos 28 días del archivo, mientras la posición ponderada permaneció cerca de 27. La base técnica y editorial contiene seis guías extensas, siete descargas, tres herramientas locales, navegación clara, autor, política editorial, sitemap y páginas legales. Para reforzar evidencia propia se publicaron pruebas reproducibles de la rúbrica, la calculadora de costos y el orientador: 10 comprobaciones automatizadas cubren 15 escenarios y todas pasan. El commit `ce034fb` está en `main` y `origin/main`, y la presencia pública de las tres secciones de pruebas se confirmó el 2026-09-21. Las tres guías actualizadas fueron rastreadas por Google después del despliegue y están indexadas. No existe un bloqueo técnico local. El riesgo restante es convertir la visibilidad creciente en interés sostenido de usuarios y experiencia real con tareas o productos externos, sin inventar casos.

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
- Se auditó el decimoquinto rechazo contra las políticas y guías oficiales vigentes de AdSense y Google Search al 2026-09-21.
- Se comprobó mediante búsqueda pública que Google ya descubre varias páginas importantes de TopiApps; la hipótesis de desindexación total queda descartada.
- Se revisaron de nuevo autoría, política editorial, estructura, inventario, sitemap y presencia de analítica en el repositorio sin modificar el sitio.
- El usuario confirmó que completó la validación pendiente en Search Console; `ADSENSE_REVIEW_CHECKLIST.md` quedó actualizado con esa confirmación.
- Se separó la lógica de las tres herramientas locales de su interfaz para poder probar exactamente las mismas funciones que usa el navegador.
- Se añadió `tests/main.test.js` con 10 comprobaciones automatizadas que cubren valores normales, fronteras, entradas fuera de rango, ausencia de ahorro, equilibrio, beneficio negativo y las rutas del orientador.
- Se creó `downloads/registro-pruebas-herramientas-locales.csv` con 15 escenarios, entradas resumidas, resultado esperado, observado, estado, método y límite.
- Se publicaron los resultados y sus límites en las guías de evaluación, costos y clasificación de datos; también se enlazaron desde Recursos y el perfil editorial.
- Se depuró la sección de pendientes: las métricas, las credenciales del autor y las pruebas con productos externos son mejoras futuras condicionadas a evidencia real, no bloqueos técnicos.
- Se aclaró que solicitar un nuevo rastreo solo sirve para que Google Search conozca la versión actualizada; no corrige por sí solo el rechazo de AdSense por “contenido de poco valor”.
- Se recibió una línea base de Search Console anterior a las mejoras: 4 clics y 801 impresiones en tres meses, con CTR de 0,5 % y posición media 27.
- Se analizó el Excel exportado de Search Console: la guía de verificación concentra 377 impresiones y 3 clics; la portada tiene 65 impresiones y 1 clic; las otras páginas no registran clics en el periodo.
- Se confirmó que la guía de evaluación fue rastreada el 2026-09-21 a las 16:01:07, después del commit de las mejoras a las 11:24:13, y figura como “La URL está en Google”. No debe solicitarse otra indexación para esa URL.
- Se confirmó que las guías de costos y datos fueron rastreadas el 2026-09-21 a las 16:03:07, después del despliegue, y figuran como “La URL está en Google”. Ya no debe solicitarse indexación para ninguna de las tres guías.

## Decisiones y restricciones

- Separar las instrucciones permanentes del estado cambiante para que `AGENTS.md` sea estable y este archivo pueda actualizarse con frecuencia.
- Guardar resúmenes y decisiones, no conversaciones completas ni secretos.
- Priorizar contenido para personas y mejoras medibles; evitar contenido masivo o tácticas que puedan infringir las políticas de Google.
- No solicitar una nueva revisión de AdSense hasta comprobar indexación, consentimiento y configuración de dominio.
- Añadir pocas guías con utilidad demostrable —herramienta, conjunto de datos, prueba o procedimiento— en lugar de aumentar el volumen por sí mismo.
- No inventar credenciales, experiencia, cifras o pruebas para reforzar la autoría; pedir evidencia real al usuario cuando haga falta.
- No responder al decimoquinto rechazo con cambios cosméticos, relleno ni artículos masivos.
- Mantener anuncios solo en páginas cuyo contenido editorial sea el centro de atención. La portada se verifica mediante `google-adsense-account`, método admitido por Google cuando no se desea cargar anuncios allí.
- No desplegar ni solicitar una nueva revisión de AdSense hasta que el usuario revise los cambios locales.
- No modificar `robots.txt` por un único fallo de la prueba en vivo cuando el archivo y la página responden correctamente; volver a probar y escalar solo si el error persiste o afecta más URLs.
- No revertir ni regenerar `sitemap.xml`: el único cambio del commit `ad574ce` dentro del sitemap fue actualizar la fecha real de modificación de privacidad; el formato y las URLs no cambiaron.
- No tratar el decimoquinto mensaje como diagnóstico preciso de una URL: “contenido de poco valor” es una categoría amplia y debe contrastarse con Search Console y datos de audiencia.
- No volver a solicitar la indexación de una URL si Search Console ya muestra un último rastreo del 2026-09-21 o posterior. Repetir solicitudes no acelera el rastreo y la indexación no equivale a aprobación de AdSense.
- No volver a solicitar revisión por cambios cosméticos, más palabras o nuevas páginas legales. La próxima mejora debe aportar evidencia propia: pruebas ejecutadas, resultados, capturas o datos descargables reproducibles.
- La declaración de apoyo de IA no es por sí misma la causa del rechazo y debe mantenerse por transparencia; el problema probable es que gran parte del valor actual puede percibirse como síntesis de fuentes y escenarios ficticios, sin suficiente experiencia de primera mano demostrable.
- No existe un número oficial mínimo de artículos, visitas ni semanas que garantice aprobación. Usar señales operativas internas sin presentarlas como requisitos de Google.

## Archivos importantes

- `AGENTS.md`: reglas permanentes para todos los agentes.
- `PROJECT_CONTEXT.md`: estado, decisiones y próximos pasos entre sesiones.
- `ADSENSE_REVIEW_CHECKLIST.md`: acciones previas a una nueva solicitud de revisión.
- `articles/que-datos-puedes-compartir-con-una-ia.html`: nueva guía de privacidad y clasificación de datos.
- `downloads/matriz-datos-antes-de-usar-ia.csv`: hoja editable asociada a la guía.
- `main.js`: incluye la lógica del orientador local de datos.
- `tests/main.test.js`: pruebas automatizadas de la rúbrica, calculadora de costos y orientador.
- `downloads/registro-pruebas-herramientas-locales.csv`: evidencia pública de 15 escenarios ejecutados.
- `articles/como-evaluar-herramienta-ia-antes-de-pagar.html`: resultados verificables de la rúbrica ponderada.
- `articles/calcular-costo-real-ia-en-un-equipo.html`: resultados verificables de cálculo y punto de equilibrio.
- `pages/autor-sebastian-carrillo.html`: alcance y enlaces a pruebas publicadas sin atribuir credenciales no demostradas.
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
- PageSpeed Insights no devolvió métricas por agotamiento de la cuota pública de la API.
- El repositorio contiene ahora 6 artículos, 7 descargas y 6 URLs de artículos en el sitemap.
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
- La portada, la biblioteca, una guía, `sitemap.xml` y `robots.txt` respondieron HTTP `200` en la comprobación pública.
- En local, la portada conserva `google-adsense-account` y no carga `adsbygoogle`; una guía sí carga el script y las páginas auxiliares no lo hacen.
- `node --check main.js`, `xmllint --noout sitemap.xml`, los 15 bloques JSON-LD, los enlaces internos y `git diff --check` finalizaron sin errores.
- El 2026-08-28, `robots.txt` y `/pages/about` respondieron HTTP `200` con `cf-cache-status: HIT` usando agentes de navegador, Googlebot, Google Inspection Tool y Mediapartners-Google.
- Cinco solicitudes consecutivas a `robots.txt` y cinco a `/pages/about` respondieron `200`, aproximadamente en 0,25 segundos cada una.
- Las variantes HTTP y `www` de `robots.txt` y `/pages/about` llegaron a la URL HTTPS canónica con una sola redirección y terminaron en `200`.
- La comprobación IPv6 desde el entorno local no tuvo conectividad para ninguna de las dos rutas; al afectar por igual a `robots.txt` y `/pages/about`, no demuestra un fallo específico del sitio ni de esa página.
- El sitemap publicado responde `200`, `Content-Type: application/xml`, 1.839 bytes, XML válido y sin BOM; su SHA-256 coincide con el archivo local.
- El sitemap publicado contenía 15 URLs y todas respondieron `200` en la comprobación documentada.
- Googlebot, Google Inspection Tool y Mediapartners-Google descargaron el sitemap con `200`; cinco descargas consecutivas adicionales también devolvieron `200`.
- Google Public DNS y Cloudflare DNS resolvieron correctamente los registros A y AAAA de `topiapps.com`; los dos destinos IPv4 sirvieron `sitemap.xml` y `robots.txt` con `200`.
- El 2026-09-21 la búsqueda pública devolvió resultados individuales para portada, biblioteca, recursos, Nosotros, política editorial y al menos dos de las seis guías; las consultas exactas no devolvieron de forma fiable las otras cuatro guías. Es una señal parcial, no sustituto de Inspección de URLs.
- El sitemap sigue declarando 15 URLs: 6 guías y 9 páginas estructurales/editoriales. El sitio ofrece además 7 archivos descargables enlazados desde las guías y recursos.
- No se encontró integración de Google Analytics, Matomo, Plausible, Umami ni Cloudflare Web Analytics en el HTML o JavaScript local; no hay datos de audiencia disponibles en el repositorio.
- `git status --short` estaba limpio antes de esta actualización de contexto.
- `node --test tests/main.test.js` completó 13/13 pruebas: 10 funcionales sobre 15 escenarios y 3 estructurales para JSON-LD, enlaces/fragmentos e identificadores únicos.
- La comprobación local en navegador confirmó el caso de costo sin ahorro (`−1 min`, punto de equilibrio no alcanzable), el umbral de rúbrica (`80/100`) y la ruta del orientador para secretos (`Detener y escalar`).
- `main` y `origin/main` apuntan al commit `ce034fb`, que contiene las pruebas y la evidencia nueva.
- La versión pública de las tres guías contiene las secciones “Pruebas ejecutadas” y el sitemap público declara `lastmod` 2026-09-21.
- La captura de Search Console aportada por el usuario cubre aproximadamente del 2026-06-20 al 2026-09-18 y muestra 4 clics, 801 impresiones, CTR de 0,5 % y posición media 27. La visibilidad creció al final del periodo, pero los datos terminan antes del despliegue de las mejoras.
- El Excel descargado amplía la línea base hasta el 2026-09-19. Los últimos 28 días reúnen 577 impresiones y 3 clics frente a 168 impresiones y 0 clics en los 28 días anteriores; es crecimiento de visibilidad, todavía con una muestra pequeña de visitas.
- Entre las tres guías mejoradas, la guía de datos registra 50 impresiones y posición media 6,52; costos, 48 y posición 6,15; evaluación, 16 y posición 13,12. Ninguna recibió clics en el periodo anterior a las mejoras.
- Las URLs antiguas de facturación, resumen de PDF y la variante `-ai-` que aparecen en el histórico responden actualmente `404` y no están en el sitemap. Las variantes `.html` de Contacto y Privacidad redirigen correctamente a sus canónicas.
- “Página de referencia: No se ha detectado ninguna” en Inspección de URLs no es una métrica de visitas; indica que Google no informa otra página de descubrimiento. Las capturas sí muestran el sitemap y un rastreo correcto.

## Pendientes o bloqueos

- Ningún bloqueo técnico en el código.
- Observar impresiones, clics y uso real posteriores al 2026-09-21. La indexación ya confirmada de otras URLs no resuelve por sí sola el criterio de AdSense sobre valor único e interés de los usuarios.

Las métricas de audiencia, la ampliación del perfil del autor y las pruebas con productos externos quedan como mejoras futuras opcionales. Solo se incorporarán cuando existan datos o experiencia comprobables; no impiden publicar el trabajo actual.

## Próximo paso recomendado

Conservar el Excel actual como línea base y compararlo con los 28 días posteriores al despliegue. Este periodo es una recomendación de medición, no un requisito oficial de Google. No pedir otra revisión de AdSense solo por haber completado la indexación: las tres guías ya están rastreadas, pero el rechazo vigente exige valor único e interés real de usuarios.
