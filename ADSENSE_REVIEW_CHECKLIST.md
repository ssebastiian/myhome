# Preparación de TopiApps para una nueva revisión de AdSense

Última actualización: 2026-09-21

No solicitar otra revisión hasta completar y desplegar mejoras materiales, comprobar que Google puede rastrearlas y revisar los puntos siguientes. AdSense no garantiza aprobación aunque todos estén completos.

## 1. Cloudflare: una sola versión del dominio

- [x] Activar la redirección permanente de `http://topiapps.com/*` a `https://topiapps.com/*` desde Cloudflare.
- [x] Crear un registro DNS proxied para `www`.
- [x] Crear un Bulk Redirect `https://www.topiapps.com/*` → `https://topiapps.com/*` con código `301`, conservando ruta y parámetros.
- [x] Verificar que HTTP y `www` terminan en la URL canónica HTTPS en un solo salto cuando sea posible.

La redirección por host no debe simularse dentro de `_redirects`: Cloudflare recomienda configurar DNS y Bulk Redirects para llevar `www` al dominio raíz.

## 2. Google Search Console: confirmar indexación real

- [x] Verificar la propiedad de dominio `topiapps.com`.
- [x] Enviar `https://topiapps.com/sitemap.xml` en el informe Sitemaps.
- [x] Inspeccionar las seis guías con “Inspección de URLs”. La portada ya está indexada y se sirve por HTTPS.
- [x] Solicitar indexación de la portada y la guía nueva después del despliegue.
- [x] Revisar “Indexación de páginas” y anotar las causas de exclusión; no asumir que todas son errores.
- [x] Confirmar que las URLs eliminadas ya no aparecen como páginas activas del sitio.

El usuario confirmó el 2026-09-21 que la validación de Search Console ya fue completada. Los datos detallados de rendimiento no están guardados en el repositorio.

## 3. AdSense: consentimiento y estado del sitio

- [x] En “Privacidad y mensajes”, crear o revisar el mensaje para EEE, Reino Unido y Suiza usando la CMP de Google. AdSense muestra dos mensajes europeos activos; confirmar que `topiapps.com` esté incluido y publicado.
- [x] Confirmar que `topiapps.com` aparece en “Sitios” y que el identificador de editor es `pub-9439862036060464`.
- [x] Confirmar que el estado de `ads.txt` sea “Autorizado”.
- [x] Mantener el cargador de AdSense solo en artículos con contenido sustancial durante la revisión. En el código local queda limitado a las 6 guías; la portada conserva la metaetiqueta oficial de la cuenta para verificación, pero no carga anuncios.
- [x] No colocar anuncios en privacidad, términos, contacto, error 404 ni páginas sin contenido editorial suficiente. Validado públicamente mediante ausencia de `pagead2.googlesyndication.com` y `adsbygoogle`.

## 4. Calidad editorial antes de reenviar

- [x] Leer cada guía en móvil y escritorio y comprobar que la tarea prometida se puede completar.
- [x] Probar calculadoras, orientador y descargas sin conexión a cuentas personales.
- [x] Verificar enlaces externos y fechas de consulta.
- [x] Corregir afirmaciones que no estén respaldadas o presentarlas como criterio editorial.
- [x] Añadir experiencia propia únicamente cuando exista evidencia real; no inventar pruebas, cifras, credenciales ni casos.
- [x] Publicar nuevas guías solo si aportan una prueba, herramienta, conjunto de datos o procedimiento distinto.

## 5. Momento de solicitar revisión

El 2026-09-21 el usuario informó un decimoquinto rechazo por “contenido de poco valor”. No reenviar únicamente por haber cambiado estilos, metadatos, páginas legales o unas pocas frases.

Solicitar la revisión cuando:

- los cambios estén desplegados;
- portada y guías sean accesibles para Google;
- Search Console muestre que el sitemap fue leído;
- las seis guías estén descubiertas y se conozca el estado de indexación de cada una;
- HTTP y `www` estén corregidos;
- el mensaje de consentimiento esté configurado;
- no haya enlaces ni herramientas rotas;
- existan mejoras editoriales materiales basadas en evidencia propia —pruebas ejecutadas, resultados observados, capturas o conjuntos de datos reproducibles— y no solo síntesis de fuentes o ejemplos ficticios;
- Search Console o la analítica disponible muestren interés orgánico sostenido en las páginas que se pretende monetizar.

Registrar en `PROJECT_CONTEXT.md` la fecha de la solicitud y el resultado recibido para no repetir cambios sin evidencia.
