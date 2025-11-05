# Caja de Ahorro — Repositorio listo para GitHub Pages

Este repositorio está organizado para publicar directamente en **GitHub Pages** usando la carpeta `docs/`.

## ¿Cómo publicarlo?
1. Sube todo este contenido a tu repositorio.
2. En GitHub: **Settings → Pages → Source: Deploy from a branch**.
3. Selecciona **Branch: main** y **Folder: /docs**. Guarda.
4. Tu sitio quedará disponible en: `https://<usuario>.github.io/<repositorio>/`
   - Login: `https://<usuario>.github.io/<repositorio>/html/login.html`
   - También funciona desde la raíz por la redirección: `https://<usuario>.github.io/<repositorio>/`

## Estructura
docs/
  ├─ html/login.html         # Página de login
  ├─ css/estilo.css          # Estilos con rutas relativas
  ├─ images/*.png            # Logos
  └─ index.html              # Redirección automática al login

> Nota: Usa rutas relativas (../images/...) dentro de CSS/HTML para que funcione igual local y en Pages.
