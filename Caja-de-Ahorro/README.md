# Caja de Ahorro — Estructura Organizada

Proyecto organizado por capas para colaborar en equipo.

## Estructura
src/
  html/      -> Páginas (login.html, etc.)
  css/       -> Estilos (estilo.css)
  js/        -> Scripts (login.js)
  images/    -> Logos e imágenes (LogoHorizontal1.png, LogoHorizontal2.png, LogoCircular.png)
  docs/      -> Documentos del proyecto (manuales, diagramas, etc.)

public/      -> (Opcional) Carpeta para publicar/hostear, si generas un build.

## Cómo abrir local
Abre `src/html/login.html` en tu navegador.
Las rutas internas ya apuntan a `../css/estilo.css` y `../images/...`.

## Sugerencia de Git
- Trabaja siempre dentro de `src/`.
- Si usas GitHub Pages, copia el contenido de `src/` a `public/` o configura tu acción de build.
