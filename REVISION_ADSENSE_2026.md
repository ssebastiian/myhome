# Revisión de TopiApps para Google AdSense

Fecha de auditoría: 24 de julio de 2026.

## Veredicto

**No reenviar todavía.** El cambio editorial ya está aplicado en el repositorio, pero primero debe desplegarse, rastrearse e indexarse. La captura de AdSense indica que la próxima solicitud solo puede hacerse a partir del 30 de julio de 2026; esa fecha no significa que Google ya haya visto la nueva versión.

Ningún cambio garantiza la aprobación. Google puede valorar señales que el repositorio no muestra: estado de la cuenta, historial del dominio, indexación, tráfico, consentimiento y comportamiento real de las páginas.

## Causa probable del quinto rechazo

El problema no era la cantidad. Antes de esta auditoría había 31 artículos con una media aproximada de 861 palabras, pero:

1. 29 compartían cuatro párrafos editoriales idénticos.
2. 24 repetían exactamente la misma nota de fecha y comprobación de enlaces.
3. Varias fuentes se añadieron al final sin relacionarlas con una afirmación concreta.
4. La mayoría de las páginas no enlazaba otra guía.
5. Muchos artículos eran listas generales de productos o usos con estructuras casi iguales.
6. El sitio afirmaba tener una biblioteca amplia aunque la diferenciación real era limitada.
7. Una búsqueda pública no devolvió páginas de TopiApps; esto no sustituye Search Console, pero hace imprescindible revisar el informe de indexación.

La corrección anterior aumentó palabras, firmas y enlaces, pero dejó un patrón visible de ampliación mecánica. Eso no solucionaba “contenido de poco valor”.

## Cambios implementados

### Inventario activo

- Se redujo la biblioteca visible de 31 a 10 guías seleccionadas.
- Se retiraron 23 páginas débiles del sitemap, navegación e inventario monetizable.
- Las 23 páginas permanecen en el repositorio con `noindex, follow` y sin cargador de AdSense; sus rutas públicas redirigen temporalmente a la biblioteca activa hasta una reescritura sustancial.
- Las páginas legales, contacto, autor, recursos, archivo y 404 siguen sin cargador de anuncios.

### Dos guías nuevas

1. **Cómo evaluar una herramienta de IA antes de pagar**
   - protocolo de 60 minutos;
   - siete criterios ponderados;
   - calculadora local;
   - fallos eliminatorios;
   - plantilla CSV descargable.

2. **Política interna de uso de IA para equipos pequeños**
   - semáforo de datos;
   - usos permitidos, condicionados y prohibidos;
   - revisión humana por nivel de riesgo;
   - proveedores, conectores e incidentes;
   - plantilla Markdown descargable.

### Revisión de guías existentes

Se reforzaron las páginas activas sobre:

- Excel y hojas de cálculo, con conjunto de prueba y registro de validación;
- resumen de PDF, con protocolo de extracción, resumen y verificación;
- productividad personal, con experimento medible de siete días;
- prompts para negocios, con marco C-O-R-E-A y ficha de prueba;
- estudiantes, con prueba de comprensión sin la herramienta;
- ChatGPT vs Claude, reescrita como protocolo transparente y sin ganador inventado.

### Confianza y experiencia

- La portada ya no contiene consejos internos para conseguir imágenes; ahora dirige a recursos para lectores.
- Se sustituyó la imagen externa principal por una ilustración SVG local.
- La biblioteca explica por qué una página se activa o retira.
- La página “Nosotros” reconoce públicamente el hallazgo de contenido repetido.
- La política editorial documenta pruebas, fuentes, uso de IA, retiro y monetización.
- Todas las guías activas revelan el apoyo de IA en la producción.
- El perfil del editor aclara qué experiencia y credenciales no afirma.
- Se eliminaron plazos de respuesta al correo que no podían garantizarse.

## Cobertura publicitaria

El cargador de AdSense permanece solo en:

- la portada;
- las 10 guías activas.

No se añadieron bloques manuales ni `data-ad-slot` inventados. Si la cuenta se aprueba, las ubicaciones deben revisarse con la vista previa de Anuncios automáticos. No colocar anuncios junto a navegación, descargas, tablas densas o elementos que puedan provocar clics accidentales.

## Tareas externas obligatorias

### Hosting

- Desplegar la versión del 24 de julio de 2026.
- Confirmar HTTPS y respuesta `200` en portada, biblioteca, recursos y diez guías.
- Confirmar que una página retirada contiene `noindex` y no solicita `adsbygoogle.js`.
- Mantener como canónicas las rutas finales sin `.html`; Cloudflare redirige automáticamente las variantes con extensión.

### Google Search Console

- Enviar el sitemap actualizado.
- Inspeccionar y solicitar indexación usando las URL finales sin `.html`, no las variantes redirigidas.
- Inspeccionar la portada, biblioteca, recursos y las dos guías nuevas.
- Solicitar indexación después del despliegue.
- Revisar “Descubierta: actualmente sin indexar”, “Rastreada: actualmente sin indexar”, duplicadas y bloqueadas.
- No reenviar AdSense hasta que las páginas importantes muestren la versión nueva.

### AdSense

- Verificar que el sitio es exactamente `topiapps.com`.
- Confirmar que `ads.txt` está autorizado.
- Configurar en “Privacidad y mensajes” una CMP certificada para EEE, Reino Unido y Suiza cuando corresponda.
- Revisar Anuncios automáticos en móvil antes de activarlos.

### Operación

- Probar recepción real de `contacto@topiapps.com` y `editorial@topiapps.com`.
- Responder o corregir cualquier reporte prioritario.
- Mantener fuera de la biblioteca las páginas retiradas hasta una reescritura auténtica.

## Prueba final antes de solicitar revisión

Abrir todas las guías activas y responder sí:

- ¿La intención es distinta de las otras páginas?
- ¿Existe un método, prueba, tabla, plantilla o ejemplo aplicable?
- ¿Las afirmaciones cambiantes se apoyan en una fuente relacionada?
- ¿Se distingue documentación, ejemplo ficticio y experiencia real?
- ¿La firma y la fecha son visibles?
- ¿La navegación solo conduce a contenido activo?
- ¿No hay enlaces rotos ni imágenes externas innecesarias?
- ¿La página funciona sin anuncios y en una pantalla pequeña?
- ¿Seguiría siendo útil si no existiera Google Search?

## Referencias oficiales

- [Comprobar si las páginas están preparadas para AdSense](https://support.google.com/adsense/answer/7299563?hl=es)
- [Políticas para Editores de Google](https://support.google.com/adsense/answer/10502938?hl=es-419)
- [Políticas del programa AdSense](https://support.google.com/adsense/answer/48182?hl=es)
- [Contenido útil, fiable y centrado en las personas](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=es)
- [Requisitos de consentimiento para editores](https://support.google.com/adsense/answer/13554116?hl=es)
