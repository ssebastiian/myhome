# TopiApps

Sitio editorial estático en español sobre evaluación y uso responsable de herramientas de inteligencia artificial.

## Biblioteca pública

La versión del 24 de julio de 2026 mantiene **10 guías activas**. Dos son nuevas:

- prueba reproducible de 60 minutos para evaluar una herramienta antes de pagar;
- plantilla de política interna de uso de IA para equipos pequeños.

También incluye dos descargas editables en `/downloads/` y una página de recursos sin registro.

## Control de calidad

La auditoría detectó 23 páginas con estructuras, notas editoriales y fuentes demasiado repetidas. Esas páginas:

- no aparecen en la biblioteca pública;
- se eliminaron del sitemap;
- tienen `noindex, follow`;
- no cargan el script de AdSense;
- permanecen en el repositorio para una futura reescritura sustancial.

No deben volver al inventario activo mediante cambios superficiales. Cada una necesita una decisión distinta, evidencia relacionada, un método o ejemplo útil y revisión ortotipográfica.

## Archivos principales

- `index.html`: portada.
- `pages/articles.html`: biblioteca curada.
- `pages/resources.html`: descargas y plantillas.
- `pages/editorial-policy.html`: proceso editorial y política de retiro.
- `REVISION_ADSENSE_2026.md`: diagnóstico y tareas previas al próximo envío.

## Antes de solicitar otra revisión de AdSense

1. Desplegar esta versión en `topiapps.com`.
2. Verificar en Google Search Console que la portada, la biblioteca y las diez guías activas estén indexadas.
3. Reenviar `https://topiapps.com/sitemap.xml`.
4. Confirmar que `contacto@topiapps.com` y `editorial@topiapps.com` reciben mensajes.
5. Confirmar en AdSense el estado autorizado de `ads.txt`.
6. Configurar una CMP certificada si se sirven anuncios a personas del EEE, Reino Unido o Suiza.
7. No solicitar revisión solo porque se alcanzó una fecha: esperar a que Google haya rastreado la versión nueva.

Las URL públicas y canónicas no llevan `.html`, porque Cloudflare redirige automáticamente los nombres de archivo a rutas limpias.

No existe un número oficial garantizado de artículos o palabras que produzca aprobación.
