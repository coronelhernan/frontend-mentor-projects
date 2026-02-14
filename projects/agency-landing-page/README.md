Este README está en español.  
Si prefieres inglés, haz clic aquí: [English version](README_EN.md)

# Sunnyside Agency Landing Page

Solución al desafío **Sunnyside Agency Landing Page** de Frontend Mentor.  
Proyecto desarrollado con React y Tailwind CSS, aplicando enfoque mobile-first y arquitectura basada en componentes.

---

## 📌 Descripción

Landing page de agencia creativa replicando el diseño original del challenge, asegurando:

- Diseño completamente responsive
- Menú mobile tipo dropdown
- Estados hover en elementos interactivos
- Estructura modular con componentes reutilizables
- Estilos escalables mediante Tailwind CSS

---

## 🖼 Captura de pantalla

![Sunnyside Landing Page](../agency-landing-page/public/preview.jpg)

---

## 🔗 Enlaces

- 🔍 Solución en Frontend Mentor:  
  https://www.frontendmentor.io/solutions/responsive-landing-page-for-sunnyside-with-react-js-and-tailwind-css-ciLu2jtYhd

- 💻 Código fuente / Solución completa:  
  [Ver en GitHub](https://github.com/coronelhernan/frontend-mentor-projects/tree/main/projects/agency-landing-page)

- 🌐 Sitio en producción:  
  https://landing-sunnyside-2026.netlify.app/

---

## 🛠 Tecnologías utilizadas

### 🎨 Frontend
<p>
  <img src="https://skillicons.dev/icons?i=html" />
  <img src="https://skillicons.dev/icons?i=css" />
  <img src="https://skillicons.dev/icons?i=js" />
  <img src="https://skillicons.dev/icons?i=react" />
  <img src="https://skillicons.dev/icons?i=tailwind" />
</p>

### ⚙️ Build & Tooling
<p>
  <img src="https://skillicons.dev/icons?i=vite" />
  <img src="https://skillicons.dev/icons?i=pnpm" />
</p>

### ☁️ Deploy
<p>
  <img src="https://skillicons.dev/icons?i=netlify" />
</p>

---

## 🧠 Decisiones técnicas

### 📱 Menú responsive

El menú mobile fue implementado utilizando `useState` para controlar su visibilidad.  
Se utilizó posicionamiento absoluto para crear el comportamiento tipo dropdown alineado al diseño original.

### 🖼 Manejo de imágenes responsive

Las imágenes de fondo se alternan entre mobile y desktop utilizando breakpoints de Tailwind (`lg:`), manteniendo el enfoque mobile-first.

### 🗂 Organización del proyecto

Estructura modular basada en componentes:

- `Header`
- `Menu`
- `Sections`
- `Footer`
- Carpeta de utilidades para assets
- Separación clara entre lógica y presentación

---

## 🚧 Desafíos enfrentados

- Ajuste fino de breakpoints entre mobile y desktop.
- Diferencias entre entorno local y producción (case sensitivity en imports).
- Configuración de deploy dentro de un monorepo usando `netlify.toml`.

---

## 📈 Posibles mejoras

- Mejorar accesibilidad agregando atributos ARIA.
- Incorporar animaciones suaves en el menú.
- Optimizar imágenes para mejorar performance.
- Agregar tests básicos de componentes.

---

## 👤 Autor

Hernán Coronel  

- GitHub: https://github.com/coronelhernan
- Frontend Mentor: https://www.frontendmentor.io/profile/coronelhernan
