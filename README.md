# Panadería El Rescoldo

Landing independiente, realizada con HTML, CSS y JavaScript sin frameworks. Todos los recursos de producción son locales. No contiene configuración de Netlify ni se ha desplegado.

## Ver la web

Abrir `index.html` directamente en un navegador. Para servirla por HTTP desde esta carpeta, con Node instalado:

```powershell
npx --yes http-server . -p 8080
```

Visitar `http://localhost:8080`. La copia del teléfono usa Clipboard API en contextos compatibles y selección manual como alternativa. Sin JavaScript, la navegación permanece visible y las fotografías de la galería abren sus archivos.

## Identidad y contenido

Paleta: marfil #F5F0E6, tinta #26221D, terracota #B54F32, corteza #795039 y piedra #D8D0C4. Tipografías locales Archivo Black y Manrope, bajo SIL Open Font License; licencias completas en `fonts/`. Fuentes originales: https://github.com/google/fonts/tree/main/ofl/archivoblack y https://github.com/google/fonts/tree/main/ofl/manrope.

Los datos del negocio proceden del encargo. La dirección y el teléfono coinciden con la ficha pública de Waze: https://www.waze.com/live-map/directions/es/an/el-bosque/panaderia-el-rescoldo?to=place.ChIJNV4Bw0wTDQ0REjxxndtMT_s (consulta: 21 de octubre de 2026). El enlace de Google Maps usa su formato oficial de búsqueda con ese identificador de lugar. La herramienta web no pudo abrir Google Maps, por lo que no se afirma una verificación visual del destino en Maps.

No se han añadido horarios, precios, reseñas, procesos específicos, correo, WhatsApp o redes. Las categorías se presentan como una aproximación general y no como un catálogo confirmado. Antes de publicar, configurar `og:image` con una URL absoluta del dominio definitivo y añadir la URL canónica. Se mantienen rutas relativas para el uso local solicitado.

## Fotografías y licencias

Todas son fotografías de archivo ilustrativas, descargadas el 21 de octubre de 2026 desde Pexels, salvo la fotografía del obrador, procedente de Unsplash y detallada abajo. No se presentan como fotografías del negocio, su equipo o su oferta. Uso permitido por la licencia Pexels: https://www.pexels.com/license/ (consultada en esa fecha). Se han redimensionado y comprimido a JPEG mediante los servicios de imágenes de sus proveedores, sin marcas de agua. No se han utilizado imágenes de las otras landings.

| Archivo | Página original |
| --- | --- |
| img/pan.jpg | https://www.pexels.com/photo/a-loaf-of-bread-on-a-cloth-on-a-table-27418961/ |
| img/portada.jpg | https://www.pexels.com/photo/freshly-baked-artisan-bread-close-up-shot-30350357/ |
| img/bolleria.jpg | https://www.pexels.com/photo/photo-of-a-chocolate-croissant-on-a-cylinder-4828350/ |
| img/dulces.jpg | https://www.pexels.com/photo/tasty-homemade-cinnamon-buns-on-tray-in-kitchen-4256554/ |
| img/manos.jpg | https://www.pexels.com/photo/hands-kneading-dough-on-flour-covered-surface-33593100/ |
| img/harina.jpg | https://www.pexels.com/photo/bowl-with-flour-and-measuring-cup-in-kitchen-6287323/ |
| img/masa.jpg | https://www.pexels.com/photo/close-up-of-dough-preparation-in-bakery-34938517/ |
| img/horno.jpg | https://www.pexels.com/photo/artisanal-bread-and-pastries-baking-in-oven-36445141/ |
| img/corteza.jpg | https://www.pexels.com/photo/close-up-of-freshly-baked-bread-crust-texture-30666754/ |
| img/bandejas.jpg | https://www.pexels.com/photo/freshly-baked-sugary-buns-on-trays-31597725/ |
| img/obrador.jpg | https://unsplash.com/photos/baker-putting-bread-into-a-brick-oven-UfHjDhhI0FQ |
| img/panecillos.jpg | https://www.pexels.com/photo/freshly-baked-buns-on-a-tray-19512381/ |
| img/miga.jpg | https://www.pexels.com/photo/delicious-sourdough-bread-on-table-6605343/ |
| img/masas.jpg | https://www.pexels.com/photo/raw-dough-on-table-with-flour-at-home-4915625/ |

Los archivos de fotografía conservan nombres independientes y se usan una sola vez en el contenido visible. El lightbox amplía las mismas imágenes seleccionadas sin descargar otras fotos.

### Sustitución de «04 / OBRADOR»

Fotografía: **Baker putting bread into a brick oven**, de **Yasin Onus**, publicada el 6 de marzo de 2026. Fuente: https://unsplash.com/photos/baker-putting-bread-into-a-brick-oven-UfHjDhhI0FQ. Licencia Unsplash, que permite uso comercial: https://unsplash.com/license (consultada el 21 de octubre de 2026). Descargada como JPEG optimizado a 1600 × 1067 píxeles y calidad 85 mediante el CDN de Unsplash. Se conserva en `img/obrador.jpg`, también utilizado por el lightbox.

Es una imagen ilustrativa de archivo, no una fotografía de El Rescoldo. No se encontró una fotografía propia con autorización verificable. El encuadre usa `object-fit: cover` y `object-position: 42% 62%`, exclusivamente para esta imagen; mantiene el horno y el pan visibles sin cambiar las dimensiones de la galería. Se conserva el rótulo «04 / OBRADOR», su icono y el comportamiento original.

## Accesibilidad

HTML semántico, enlace para saltar al contenido, textos alternativos, foco visible, menú con estado expandido, lightbox con diálogo nativo modal, cierre con Escape, flechas anterior/siguiente y devolución del foco al enlace original. Animaciones y desplazamiento respetan `prefers-reduced-motion`. El mensaje de copia se anuncia mediante una región de estado.

## Comprobaciones

Pruebas realizadas en Chrome headless mediante Playwright, el 21 de octubre de 2026:

- Carga por HTTP local y capturas completas a 375, 768, 1440 y 1920 px: sin desbordamiento horizontal ni imágenes rotas.
- Revisión visual de las fotografías y de las capturas de escritorio y móvil.
- Menú móvil: apertura, estado `aria-expanded`, navegación a contacto y cierre.
- Galería: apertura modal, cambio con flecha derecha y cierre con Escape.
- Copia real al portapapeles y alternativa de selección manual con permiso denegado.
- Enlaces internos: todos los destinos existen. Los tres enlaces telefónicos usan `tel:+34652802445`.
- Sin errores JavaScript durante las pruebas; comprobación de sintaxis con `node --check`.
- Movimiento reducido: desplazamiento automático, sin animación.
- Comparación SHA-256 de las imágenes del repositorio: sin archivos de fotografía duplicados ni reutilizados.
- Las 14 fotografías de producción ocupan aproximadamente 2,7 MiB en total. No hay configuración de Netlify.

No se ha hecho una auditoría completa con lector de pantalla ni se ha ejecutado una llamada telefónica real. Google Maps no pudo verificarse visualmente, como se detalla arriba. Los archivos temporales de QA están ignorados en `.qa/` y no son necesarios para utilizar la web.
