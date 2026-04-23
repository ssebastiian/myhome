# Hogar Claro

Sitio estatico en HTML, CSS y JavaScript, preparado como base para publicacion y optimizacion orientada a Google AdSense.

## Incluye

- Portada profesional
- Paginas de articulos, nosotros, contacto, privacidad y terminos
- Trece articulos originales en espanol sobre hogar practico, ahorro y compras inteligentes
- `robots.txt`, `sitemap.xml` y `ads.txt`
- Estructura responsive y lista para hosting estatico

## Cambios obligatorios antes de publicar

1. Reemplaza `https://www.tudominio.com` por tu dominio real en todos los archivos HTML, `robots.txt` y `sitemap.xml`.
2. Cambia `contacto@tudominio.com` y `editorial@tudominio.com` por correos reales.
3. Sustituye el identificador de `ads.txt` por tu Publisher ID real de AdSense cuando lo tengas.
4. Sube el sitio a un dominio propio y verifica que todas las paginas carguen correctamente.
5. Publica mas contenido antes de pedir la revision para mejorar tus posibilidades.

## Recomendaciones para AdSense

- Usa dominio propio, no subdominio temporal.
- Manten navegacion clara y sin paginas vacias.
- Evita contenido copiado o generado sin revisar.
- Agrega un favicon y, si puedes, una imagen social para compartir.
- Conecta Search Console y envia el sitemap.
- Espera a que Google indexe varias paginas antes de solicitar revision.

## Comando para levantar el servidor

```bash
cd /Users/sebastian.carrillo/Documents/Personal/templateplantila
python3 -m http.server 8000
```

## Donde poner AdSense

- El script global va en el `<head>` de cada pagina, donde deje el comentario `Google AdSense: pega aqui el script global de AdSense`.
- En la portada puedes poner un anuncio manual en [index.html](/Users/sebastian.carrillo/Documents/Personal/templateplantila/index.html), debajo del titulo `Articulos destacados`.
- En la pagina de articulos puedes poner un anuncio manual en [pages/articles.html](/Users/sebastian.carrillo/Documents/Personal/templateplantila/pages/articles.html), encima del listado.
- En los articulos puedes poner anuncios manuales dentro de `<article class="copy-block">`, donde deje el comentario correspondiente.
- Si usas `Auto Ads`, normalmente basta con pegar el script global y Google decide las ubicaciones.
