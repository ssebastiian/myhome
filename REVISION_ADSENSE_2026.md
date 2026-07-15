# Revisión de TopiApps para Google AdSense

Fecha de auditoría: 15 de julio de 2026.

## Diagnóstico del quinto rechazo

El aviso recibido es **“contenido de poco valor”**. El sitio ya tenía 29 artículos de más de 750 palabras, navegación, contacto, privacidad, términos y `ads.txt`. Por tanto, añadir palabras o repetir listas de herramientas no resolvía el problema principal.

Los riesgos encontrados fueron:

1. Los 29 artículos no enlazaban fuentes externas dentro del contenido.
2. La firma “TopiApps Editorial” no identificaba a una persona responsable.
3. La mayoría de las páginas repetía la misma nota editorial y una estructura muy parecida.
4. Había afirmaciones sobre productos, privacidad, salud, derecho y finanzas sin una fuente primaria visible cerca de la guía.
5. El código automático de AdSense se cargaba en contacto, privacidad, términos, archivo de artículos y la página 404. Esas superficies no deben competir con el contenido editorial ni mostrar anuncios accidentalmente.
6. Un artículo destacado seguía presentándose como comparativa de 2025 pese a estar en 2026.
7. La política editorial afirmaba revisión humana, pero no explicaba con suficiente precisión quién revisaba, cómo se usaba IA ni cómo se documentaban fuentes.

## Cambios implementados

- Se publicaron dos guías originales de unas 2.000 palabras cada una:
  - método reproducible para verificar respuestas de IA;
  - plantilla para calcular costo total, ahorro útil y punto de equilibrio.
- La biblioteca pasó de 29 a 31 artículos.
- Todos los artículos muestran como autor a Sebastián Carrillo y enlazan un perfil editorial.
- Los 31 artículos contienen al menos una fuente externa visible en el cuerpo.
- 26 artículos incluyen bloques de fuentes primarias; los cinco artículos compactos incluyen la fuente junto a la firma.
- La política editorial ahora explica firma, verificación, fuentes y uso de IA.
- La página “Nosotros” identifica al responsable editorial.
- Se retiró el cargador de anuncios de 404, contacto, términos, privacidad, política editorial, nosotros y el archivo de artículos.
- Se conservó AdSense en la portada y en las 31 páginas editoriales: 32 páginas monetizables.
- Se actualizaron portada, biblioteca y sitemap con los artículos nuevos.
- Se validaron enlaces internos, JSON-LD y sintaxis XML del sitemap.

## Cobertura publicitaria segura

El código base de AdSense ya está presente en la portada y en cada artículo. Con **Anuncios automáticos** activados en la cuenta, Google puede probar formatos dentro de esas páginas sin inventar `data-ad-slot` que no existen en el panel.

No se recomienda añadir bloques manuales antes de la aprobación. Después de aprobar:

1. Activar Anuncios automáticos para `topiapps.com`.
2. Habilitar formatos en página y superpuestos compatibles con la experiencia deseada.
3. Usar la vista previa de AdSense para excluir encabezado, navegación, tablas densas y notas de fuentes.
4. Revisar móvil antes de guardar.
5. Si se crean bloques manuales, copiar el `data-ad-slot` real generado por AdSense; nunca inventarlo.
6. Mantener sin anuncios la página 404, contacto, privacidad, términos, autor y política editorial.
7. No colocar anuncios pegados a menús, botones, enlaces o elementos que puedan provocar clics accidentales.
8. No pedir, insinuar ni recompensar clics.

“Más anuncios” no equivale a “más ingresos”. Una densidad que interrumpe la lectura puede reducir permanencia, confianza y posibilidades de aprobación.

## Acciones externas obligatorias antes de solicitar otra revisión

Estas tareas no pueden resolverse desde el repositorio:

- Publicar los cambios en el hosting.
- Abrir cada correo publicado (`contacto@topiapps.com` y `editorial@topiapps.com`) y confirmar que recibe mensajes.
- En Google Search Console:
  - inspeccionar la portada y los dos artículos nuevos;
  - solicitar indexación;
  - reenviar `https://topiapps.com/sitemap.xml`;
  - comprobar que las páginas no aparezcan como “Descubierta: actualmente sin indexar”, duplicadas o bloqueadas.
- En AdSense, verificar que el sitio está exactamente como `topiapps.com` y que `ads.txt` aparece como autorizado.
- Configurar en Privacidad y mensajes una CMP certificada por Google para usuarios del EEE, Reino Unido y Suiza si el sitio recibe ese tráfico.
- Activar Anuncios automáticos solamente después de revisar la vista previa de ubicaciones.
- Revisar que el dominio responda con HTTPS, sin redirecciones inesperadas y con todas las páginas accesibles sin iniciar sesión.

## Prueba editorial previa al reenvío

Abrir diez artículos al azar y responder sí a todo:

- ¿La intención de la página es distinta a la de sus artículos relacionados?
- ¿La introducción explica una decisión concreta?
- ¿Hay ejemplos o criterios que no sean una lista de marcas?
- ¿Las afirmaciones sensibles tienen una fuente primaria?
- ¿La firma lleva a un perfil real?
- ¿La fecha es coherente con el contenido?
- ¿Todos los enlaces funcionan?
- ¿El lector puede distinguir publicidad, navegación y contenido?
- ¿La página funciona en una pantalla pequeña?
- ¿El contenido seguiría siendo útil si no existiera Google Search?

## Límites y expectativa realista

Ningún cambio de código garantiza la aprobación: Google toma la decisión y puede evaluar señales que no están en el repositorio, como indexación, historial del dominio, navegación real, cumplimiento de consentimiento y estado de la cuenta. Tampoco existe en la documentación oficial un mínimo garantizado de artículos o palabras.

No conviene reenviar la solicitud en cuanto se despliegue. Primero hay que comprobar que Google rastreó la versión nueva y que las páginas clave están indexadas. Reenviar repetidamente una versión que el rastreador todavía no ve no aporta evidencia nueva.

## Referencias oficiales

- [Comprobar si las páginas están preparadas para AdSense](https://support.google.com/adsense/answer/7299563?hl=es)
- [Políticas para Editores de Google](https://support.google.com/adsense/answer/10502938?hl=es)
- [Políticas del Programa AdSense](https://support.google.com/adsense/answer/48182?hl=es-us)
- [Prácticas recomendadas para colocar anuncios](https://support.google.com/adsense/answer/1282097?hl=es-419)
- [Crear contenido útil, fiable y centrado en las personas](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=es)
