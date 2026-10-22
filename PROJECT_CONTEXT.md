# Contexto del proyecto

Última actualización: 2026-10-22

## Objetivo actual

Salir del ciclo de rechazos de AdSense por “contenido de poco valor” mediante evidencia real de indexación, utilidad original y audiencia antes de solicitar otra revisión.

## Estado actual

El código fuente está disponible en este workspace y el remoto es `https://github.com/ssebastiian/myhome.git`. El 2026-10-20 el usuario informó un nuevo rechazo de AdSense con el mismo motivo, “contenido de poco valor”. La exportación de Cobertura descargada ese día contiene datos hasta el 2026-10-11: registra 13 URLs indexadas y 25 sin indexar, pero las capturas detalladas confirman que ninguna de las seis guías activas aparece en las exclusiones relevantes. La exportación general de Rendimiento del 2026-10-20 cubre exactamente los 28 días posteriores al despliegue, del 2026-09-21 al 2026-10-18: 8 clics, 804 impresiones, CTR de 1,0 % y posición media ponderada aproximada de 7,97. Frente a los 28 días anteriores disponibles, con 3 clics, 577 impresiones, CTR de 0,52 % y posición 26,34, mejoraron los clics (+167 %), las impresiones (+39 %) y el CTR (+91 %). La señal sigue siendo pequeña y está concentrada: la guía de verificación aporta 6 clics y 595 impresiones; costos aporta 1 clic y 64 impresiones; la portada, 1 clic y 20 impresiones. La guía de datos tiene 85 impresiones y posición 7,04, pero ningún clic. Las exportaciones con sufijos `(1)` y `(2)` no contienen el detalle de esa guía: ambas se generaron con un filtro de Consulta incorrecto y devuelven ceros. La base técnica y editorial contiene seis guías extensas, ocho descargas, tres herramientas locales, navegación clara, autor, política editorial, sitemap y páginas legales. Para reforzar evidencia propia se publicaron pruebas reproducibles de la rúbrica, la calculadora de costos y el orientador: 10 comprobaciones automatizadas cubren 15 escenarios y todas pasan. El 2026-10-22 también quedó preparada localmente una prueba editorial real de VÉRIFICA con 39 comprobaciones sobre primeras respuestas de Gemini, Claude y ChatGPT. La mejora aún no está desplegada. No existe un bloqueo técnico local confirmado y no debe solicitarse otra revisión de AdSense antes de publicar y medir esta mejora material.

La captura revisada el 2026-10-22 vuelve a mostrar la categoría general “Contenido de poco valor” y no identifica una URL ni una infracción técnica concreta. La auditoría editorial del repositorio confirma que la principal brecha ya no es extensión, navegación o indexación: varias guías explican métodos con ejemplos ficticios y pruebas de la lógica local, pero todavía no demuestran suficiente experiencia de primera mano con salidas reales y resultados observados. La guía VÉRIFICA, que concentra 6 de los 8 clics, es la candidata prioritaria para una prueba real reproducible.

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
- Se analizó `topiapps.com-Coverage-2026-10-01.xlsx`: el informe de Cobertura termina el 2026-09-20 y, por tanto, no mide las mejoras desplegadas el 2026-09-21.
- Se revisó la captura de AdSense del 2026-10-01: el sitio figura como “Preparando” y el estado de `ads.txt` como “No se encuentra”. La comprobación pública demostró que el archivo está implementado correctamente; el estado de AdSense corresponde a su último rastreo y debe actualizarse sin cambiar el archivo.
- Se analizó `topiapps.com-Coverage-2026-10-20.xlsx`: el informe llega hasta el 2026-10-11 y permite comparar 21 días posteriores al despliegue con los 21 anteriores.
- Se revisó el nuevo rechazo de AdSense informado el 2026-10-20. El mensaje sigue siendo una categoría general y no identifica páginas concretas.
- Se verificaron de nuevo las políticas oficiales vigentes de AdSense y Google Search: Google exige contenido único y valioso, buena navegación y una experiencia satisfactoria; no publica un mínimo de artículos, palabras, visitas o semanas que garantice aprobación.
- Se identificaron las 4 URLs en “Rastreada: actualmente sin indexar”: `downloads/laboratorio-formulas-hojas-calculo.csv`, el antiguo artículo de resumen de PDF y dos variantes del antiguo artículo de facturación. No son guías activas que deban recuperarse.
- Se identificaron las 2 URLs en “Descubierta: actualmente sin indexar”: `pages/editorial-policy` y `pages/terms`. Son páginas auxiliares, accesibles, canónicas, enlazadas internamente y presentes en el sitemap; su indexación no es necesaria para monetizar las guías.
- Se analizó `topiapps.com-Performance-on-Search-2026-10-20.xlsx` y se comparó con los 28 días finales del informe anterior. El periodo posterior al despliegue registra 8 clics y 804 impresiones frente a 3 clics y 577 impresiones.
- Se comprobó que los clics reales no aparecen asociados a las consultas visibles del Excel. Search Console omite consultas poco frecuentes por privacidad; los ceros de la pestaña Consultas no contradicen los 8 clics totales.
- Se analizó `topiapps.com-Performance-on-Search-2026-10-20 (1).xlsx`: se aplicó un filtro de Consulta con el texto de una instrucción, no un filtro de Página por la URL de la guía. El archivo devuelve cero clics e impresiones y deja vacías las pestañas de dimensiones; no sirve para diagnosticar el rechazo de AdSense ni el CTR de la guía.
- Se analizó `topiapps.com-Performance-on-Search-2026-10-20 (2).xlsx`: sigue usando `Consulta` y el valor `que-datos-puedes-compartir-con-una-ia. Abrir Consultas y exportar los`. También devuelve ceros; todavía no es la exportación solicitada por Página.
- Se contrastó la captura de “Contenido de poco valor” con las políticas oficiales vigentes el 2026-10-22. Google prohíbe anuncios en pantallas sin contenido del editor o con contenido de poco valor, y recomienda información, investigación o análisis originales, valor adicional frente a otras fuentes y experiencia de primera mano.
- Se auditó la evidencia visible en las seis guías y se identificó que VÉRIFICA no publicaba una prueba con respuestas reales; esa brecha quedó atendida localmente con el estudio del 2026-10-22.
- Se definió un protocolo mínimo para la prueba real de VÉRIFICA: ejecutar una misma consulta en tres asistentes, registrar herramienta, plan, modo, fecha y respuesta sin editar; separar cada afirmación comprobable; contrastarla con fuentes primarias; y publicar resultados y límites como estudio de caso, no como clasificación general de productos.
- El usuario entregó el 2026-10-22 las primeras respuestas de Gemini y Claude; posteriormente entregó la tercera respuesta atribuida a ChatGPT.
- La ejecución de Gemini quedó identificada a las 12:43 p. m. COT del 2026-10-22. La interfaz solo se identificó como “Gemini, desarrollado por Google”, sin nombre de modelo, y confirmó que la búsqueda web estaba desactivada. El plan sigue sin confirmarse: la respuesta “no aplicable” describe al asistente, no el tipo de cuenta usado.
- La comprobación preliminar encontró diferencias materiales: Gemini marcó como no confirmados los límites de Gemini y Copilot aunque sus ayudas oficiales publican 100 MB y 10 archivos por solicitud para Gemini, y 50 MB y 20 archivos por conversación para Copilot. Gemini también aplicó a la versión nueva de Copilot una afirmación y un control de entrenamiento que corresponden a documentación anterior. Claude identificó mejor el cambio de versión, pero dejó sin confirmar el uso de conversaciones en la aplicación nueva cuando Microsoft indica que prompts, respuestas y archivos no se usan para entrenar modelos fundacionales.
- Se recibió la tercera respuesta, atribuida a ChatGPT, y se cerró el conjunto de 39 comprobaciones: 13 criterios equivalentes por asistente. Los resultados locales son Gemini: 5 confirmadas, 7 corregidas y 1 no verificada; Claude: 11 confirmadas y 2 corregidas; ChatGPT: 13 confirmadas. Son resultados de una ejecución, no una clasificación general.
- Se creó `downloads/resultados-prueba-verifica-asistentes-2026-10-22.csv` y se actualizó la guía VÉRIFICA con protocolo, resultados, hallazgos, limitaciones, fuentes oficiales y enlace a la descarga.
- Se actualizaron portada, biblioteca, Recursos, perfil editorial y sitemap para reflejar la prueba real y el inventario de ocho descargas.

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
- Las mejoras publicadas probablemente aumentan la posibilidad de aprobación porque aportan utilidad y evidencia propia, pero no permiten calcular una probabilidad ni garantizan el resultado. La señal pendiente es el interés real posterior al despliegue.
- Durante la ventana de medición se permite promocionar orgánicamente una guía concreta ante una audiencia realmente interesada. No comprar tráfico, usar intercambios, automatizar visitas, enviar mensajes masivos ni pedir clics en anuncios; esas prácticas pueden producir tráfico no válido o spam.
- Para promocionar una guía en LinkedIn, usar una publicación breve con contenido útil y enlace a TopiApps, no un artículo casi vacío ni una copia completa de la guía. La versión extensa y principal debe permanecer en el sitio.
- No reenviar la solicitud de AdSense basándose en el Excel de Cobertura del 2026-10-01. Su fecha de descarga no equivale a actualidad de los datos: la última fecha del gráfico es anterior al despliegue que se pretende evaluar.
- No borrar, reemplazar ni duplicar `ads.txt` mientras AdSense lo muestra como “No se encuentra”: el archivo público, el identificador y las redirecciones son correctos. Google indica que la actualización puede tardar varios días y hasta un mes en sitios con pocas solicitudes de anuncios.
- El crecimiento de impresiones del informe del 2026-10-20 es una señal favorable, no una prueba de interés suficiente para AdSense: faltan clics, consultas, páginas de entrada y comportamiento posterior al clic.
- El total agregado de 25 URLs sin indexar no debe interpretarse como 25 páginas activas defectuosas: las URLs detalladas son redirecciones, 404, artículos retirados, una descarga y dos páginas auxiliares. No se detectó una guía activa excluida por calidad.
- Mantener las tres URLs de artículos retirados fuera del sitemap y como 404 mientras no exista un reemplazo equivalente. No restaurarlas ni redirigirlas a una página genérica solo para limpiar Search Console.
- No solicitar indexación del CSV: es una descarga de apoyo, no una página de contenido destinada a resultados de búsqueda.
- No sumar las impresiones de la pestaña Páginas para reconstruir el total: Search Console puede acreditar una misma búsqueda a varias URLs o fragmentos y aplica agregaciones distintas. Usar el total diario de la pestaña Gráfico.
- No cambiar el título o la intención de la guía de datos sin filtrar primero sus consultas. Sus 85 impresiones y posición 7,04 con CTR cero muestran oportunidad, pero la exportación general no revela qué búsquedas las generaron.
- No interpretar los ceros de una exportación filtrada sin revisar la pestaña `Filtros`. Para este análisis se necesita `Página: URL exacta`, no introducir la URL ni las instrucciones en un filtro de Consulta.
- Tratar la falta de evidencia editorial de primera mano como hipótesis principal, no como diagnóstico revelado por Google: el aviso no informa qué URL o señal produjo el rechazo.
- Fijar el prompt y el método antes de ejecutar la prueba de VÉRIFICA. Usar una sola ejecución por asistente, conservar también los aciertos y declarar que la muestra no permite decidir cuál producto es mejor.
- No inferir modelos, planes o modos de búsqueda que no quedaron registrados. Publicar esos campos como “no confirmado” y separar esa limitación de la verificación factual.

## Archivos importantes

- `AGENTS.md`: reglas permanentes para todos los agentes.
- `PROJECT_CONTEXT.md`: estado, decisiones y próximos pasos entre sesiones.
- `ADSENSE_REVIEW_CHECKLIST.md`: acciones previas a una nueva solicitud de revisión.
- `articles/que-datos-puedes-compartir-con-una-ia.html`: nueva guía de privacidad y clasificación de datos.
- `downloads/matriz-datos-antes-de-usar-ia.csv`: hoja editable asociada a la guía.
- `main.js`: incluye la lógica del orientador local de datos.
- `tests/main.test.js`: pruebas automatizadas de la rúbrica, calculadora de costos y orientador.
- `downloads/registro-pruebas-herramientas-locales.csv`: evidencia pública de 15 escenarios ejecutados.
- `downloads/resultados-prueba-verifica-asistentes-2026-10-22.csv`: 39 comprobaciones editoriales de primeras respuestas de Gemini, Claude y ChatGPT.
- `articles/como-verificar-respuestas-de-ia-metodo-practico.html`: prueba real, resultados, fuentes y límites del estudio VÉRIFICA.
- `articles/como-evaluar-herramienta-ia-antes-de-pagar.html`: resultados verificables de la rúbrica ponderada.
- `articles/calcular-costo-real-ia-en-un-equipo.html`: resultados verificables de cálculo y punto de equilibrio.
- `pages/autor-sebastian-carrillo.html`: alcance y enlaces a pruebas publicadas sin atribuir credenciales no demostradas.
- `styles.css`: ficha de evidencia y componentes del orientador.
- `index.html`: conserva la verificación de AdSense, pero ya no carga el script publicitario.
- `pages/privacy.html`: refleja el alcance real del cargador de AdSense y la fecha de revisión actual.
- `robots.txt`: permite todo el rastreo y declara el sitemap; no requirió cambios tras el fallo aislado de Search Console.
- `/Users/sebastian.carrillo/Downloads/topiapps.com-Coverage-2026-10-01.xlsx`: exportación de Cobertura de Search Console con datos hasta el 2026-09-20.
- `/Users/sebastian.carrillo/Downloads/topiapps.com-Coverage-2026-10-20.xlsx`: exportación de Cobertura de Search Console con datos hasta el 2026-10-11; no contiene el detalle de URLs.
- `/Users/sebastian.carrillo/Downloads/topiapps.com-Performance-on-Search-2026-09-21.xlsx`: línea base de Rendimiento; sus últimos 28 días disponibles cubren del 2026-08-23 al 2026-09-19.
- `/Users/sebastian.carrillo/Downloads/topiapps.com-Performance-on-Search-2026-10-20.xlsx`: Rendimiento de los 28 días posteriores al despliegue, del 2026-09-21 al 2026-10-18.
- `/Users/sebastian.carrillo/Downloads/topiapps.com-Performance-on-Search-2026-10-20 (1).xlsx`: exportación filtrada incorrectamente por Consulta; sus ceros no representan el rendimiento de la guía ni del sitio.
- `/Users/sebastian.carrillo/Downloads/topiapps.com-Performance-on-Search-2026-10-20 (2).xlsx`: segundo intento todavía filtrado por Consulta; no contiene las consultas de la guía.

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
- El repositorio contiene ahora 6 artículos, 8 descargas y 6 URLs de artículos en el sitemap.
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
- El sitemap sigue declarando 15 URLs: 6 guías y 9 páginas estructurales/editoriales. El sitio ofrece además 8 archivos descargables enlazados desde las guías y recursos.
- No se encontró integración de Google Analytics, Matomo, Plausible, Umami ni Cloudflare Web Analytics en el HTML o JavaScript local; no hay datos de audiencia disponibles en el repositorio.
- `git status --short` estaba limpio antes de esta actualización de contexto.
- `node --test tests/main.test.js` completó 13/13 pruebas: 10 funcionales sobre 15 escenarios y 3 estructurales para JSON-LD, enlaces/fragmentos e identificadores únicos.
- El 2026-10-22, `node --test tests/main.test.js` volvió a completar 13/13 pruebas y `git diff --check` no encontró errores.
- Tras incorporar la prueba real, `node --test tests/main.test.js` completó 13/13; `node --check main.js`, `xmllint --noout sitemap.xml` y `git diff --check` finalizaron correctamente.
- El CSV nuevo se analizó con un lector que respeta comillas: contiene 39 filas de datos y 12 columnas uniformes.
- Tidy no encontró errores en los cinco HTML modificados; solo advirtió sobre elementos vacíos del botón de navegación ya existente.
- No se pudo hacer la revisión visual en navegador local porque el navegador integrado no estaba disponible y el sandbox impidió abrir el servidor HTTP local; la validación estructural y de enlaces sí terminó correctamente.
- La comprobación local en navegador confirmó el caso de costo sin ahorro (`−1 min`, punto de equilibrio no alcanzable), el umbral de rúbrica (`80/100`) y la ruta del orientador para secretos (`Detener y escalar`).
- `main` y `origin/main` apuntan al commit `ce034fb`, que contiene las pruebas y la evidencia nueva.
- La versión pública de las tres guías contiene las secciones “Pruebas ejecutadas” y el sitemap público declara `lastmod` 2026-09-21.
- La captura de Search Console aportada por el usuario cubre aproximadamente del 2026-06-20 al 2026-09-18 y muestra 4 clics, 801 impresiones, CTR de 0,5 % y posición media 27. La visibilidad creció al final del periodo, pero los datos terminan antes del despliegue de las mejoras.
- El Excel descargado amplía la línea base hasta el 2026-09-19. Los últimos 28 días reúnen 577 impresiones y 3 clics frente a 168 impresiones y 0 clics en los 28 días anteriores; es crecimiento de visibilidad, todavía con una muestra pequeña de visitas.
- Entre las tres guías mejoradas, la guía de datos registra 50 impresiones y posición media 6,52; costos, 48 y posición 6,15; evaluación, 16 y posición 13,12. Ninguna recibió clics en el periodo anterior a las mejoras.
- Las URLs antiguas de facturación, resumen de PDF y la variante `-ai-` que aparecen en el histórico responden actualmente `404` y no están en el sitemap. Las variantes `.html` de Contacto y Privacidad redirigen correctamente a sus canónicas.
- “Página de referencia: No se ha detectado ninguna” en Inspección de URLs no es una métrica de visitas; indica que Google no informa otra página de descubrimiento. Las capturas sí muestran el sitemap y un rastreo correcto.
- En Cobertura, el 2026-09-20 figuran 13 URLs indexadas y 25 sin indexar. Las causas suman 10 páginas con redirección, 4 rastreadas sin indexar, 7 respuestas 404, 2 errores de redirección y 2 descubiertas sin indexar.
- El gráfico de Cobertura suma 605 impresiones del 2026-08-24 al 2026-09-20 frente a 180 del 2026-07-27 al 2026-08-23, un aumento aproximado del 236 %. Esta señal es favorable, pero todo el periodo precede a las mejoras del 2026-09-21.
- El 2026-10-01 `https://topiapps.com/ads.txt` respondió HTTP `200`, `Content-Type: text/plain` y mostró `google.com, pub-9439862036060464, DIRECT, f08c47fec0942fa0`.
- `http://topiapps.com/ads.txt` y `https://www.topiapps.com/ads.txt` redirigieron con `301` directamente a `https://topiapps.com/ads.txt`.
- Con el agente `Mediapartners-Google`, tanto `ads.txt` como `robots.txt` respondieron HTTP `200`; `robots.txt` permite `User-agent: *` y no bloquea el rastreo.
- En la nueva exportación de Cobertura, el periodo 2026-09-21 a 2026-10-11 suma 582 impresiones frente a 515 entre 2026-08-31 y 2026-09-20, un aumento del 13,0 %.
- Los últimos 28 días disponibles, 2026-09-14 a 2026-10-11, suman 751 impresiones frente a 499 en los 28 días anteriores, un aumento del 50,5 %.
- El recuento se mantuvo en 13 indexadas y 25 sin indexar todos los días desde el 2026-09-18 hasta el final del informe, 2026-10-11.
- El código local mantiene el cargador de AdSense solo en las seis guías. Portada y páginas auxiliares no cargan `adsbygoogle`; varias conservan la metaetiqueta oficial de verificación.
- La captura de detalle del 2026-10-20 muestra como rastreadas sin indexar el CSV del laboratorio (rastreo 2026-08-22), el antiguo artículo de PDF (2026-07-28) y las dos variantes del antiguo artículo de facturación (2026-06-27).
- La captura de detalle muestra `pages/editorial-policy` y `pages/terms` como descubiertas sin indexar y sin fecha de rastreo. Una búsqueda pública del 2026-10-20 devolvió la política editorial, señal de que el informe de Cobertura puede ir retrasado respecto del índice visible.
- En Rendimiento, el periodo 2026-09-21 a 2026-10-18 suma 8 clics, 804 impresiones, CTR de 0,995 % y posición media ponderada de 7,97.
- En los 28 días anteriores disponibles, 2026-08-23 a 2026-09-19, hubo 3 clics, 577 impresiones, CTR de 0,520 % y posición media ponderada de 26,34.
- La guía de verificación concentra 6 de 8 clics y 595 de 804 impresiones del total del sitio. Costos y portada aportan un clic cada una.
- La guía de datos registra 85 impresiones, posición 7,04 y cero clics. Evaluación tiene 11 impresiones en posición 6; hojas de cálculo, 6 en posición 7,17; la plantilla de política, 22 en posición 50,95.
- La primera mitad del nuevo periodo tuvo 3 clics y 460 impresiones; la segunda, 5 clics y 344 impresiones. El CTR mejoró de 0,65 % a 1,45 %, pero la visibilidad diaria todavía no muestra crecimiento sostenido dentro de las cuatro semanas.
- En la exportación `(1)`, `Filtros!B4` contiene `+que-datos-puedes-compartir-con-una-ia. Abrir Consultas y exportar los`; `Gráfico!B2:C29` está en cero y las pestañas `Consultas`, `Páginas`, `Países` y `Dispositivos` solo contienen sus encabezados.
- En la exportación `(2)`, `Filtros!A4` vuelve a indicar `Consulta`; `Filtros!B4` contiene `que-datos-puedes-compartir-con-una-ia. Abrir Consultas y exportar los`. `Gráfico!B2:C29` está en cero y las tablas de dimensiones siguen vacías.

## Pendientes o bloqueos

- Ningún bloqueo técnico en el código.
- Observar impresiones, clics y uso real posteriores al 2026-09-21. La indexación ya confirmada de otras URLs no resuelve por sí sola el criterio de AdSense sobre valor único e interés de los usuarios.
- Si se promociona el sitio fuera de Google, definir una analítica compatible con la privacidad para medir esas visitas, porque Search Console solo registra el rendimiento procedente de la Búsqueda de Google.
- En Search Console, quitar el filtro de Consulta equivocado, añadir un filtro de Página por URL exacta para `https://topiapps.com/articles/que-datos-puedes-compartir-con-una-ia`, abrir Consultas y exportar ese detalle antes de modificar el título, descripción o contenido.
- Revisar visualmente la tabla amplia de resultados en escritorio y móvil antes de desplegar. Los modelos, planes y modos de búsqueda de Claude y ChatGPT siguen sin confirmarse; no bloquean la publicación si se conserva esa limitación visible.
- Desplegar la mejora local y solicitar indexación de la guía VÉRIFICA solo después de confirmar la versión pública.

Las métricas de audiencia, la ampliación del perfil del autor y las pruebas con productos externos quedan como mejoras futuras opcionales. Solo se incorporarán cuando existan datos o experiencia comprobables; no impiden publicar el trabajo actual.

## Próximo paso recomendado

Revisar visualmente la guía y el CSV, desplegar los cambios y confirmar que la sección `#prueba-real` y la descarga responden públicamente. Después solicitar una sola indexación de la guía VÉRIFICA y esperar a que Search Console registre el nuevo rastreo antes de medir su efecto. Mantener pendiente la exportación de consultas de la guía de datos con filtro de Página exacta. No solicitar todavía otra revisión de AdSense.
