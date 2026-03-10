Este README está en español.  
Si prefieres inglés, haz clic aquí: [English version](README_EN.md)

# REST Countries API Explorer

Solución al desafío **REST Countries API with Color Theme Switcher** de Frontend Mentor.  
Aplicación desarrollada con **React** que consume la API de países y permite explorar información detallada de cada uno.

---

## 📌 Descripción

Aplicación que permite consultar información de países utilizando la API pública de Rest Countries.

Los usuarios pueden:

- Ver todos los países disponibles
- Buscar países por nombre
- Filtrar por región
- Ver información detallada de un país
- Navegar hacia los países fronterizos
- Alternar entre modo claro y oscuro

La aplicación implementa **caching en memoria**, **custom hooks** y una arquitectura modular basada en componentes.

---

## 🖼 Captura de pantalla

![REST Countries App](/projects/rest-countries-app/public/preview.jpg)

---

## 🔗 Enlaces

- 🔍 Solución en Frontend Mentor  
https://www.frontendmentor.io/solutions/add-your-solution-link

- 💻 Código fuente  
https://github.com/coronelhernan/frontend-mentor-projects/tree/main/projects/rest-countries-app

- 🌐 Sitio en producción  
https://rest-countries-app-2026.netlify.app/
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

### ⚙️ Herramientas
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

### 📦 Arquitectura basada en hooks

Se crearon **custom hooks** para encapsular lógica reutilizable:

- `useCountries` → obtiene y gestiona la lista de países
- `useCountry` → obtiene la información detallada de un país
- `useFilters` → maneja la búsqueda y el filtrado
- `useDebounce` → optimiza la búsqueda evitando renders innecesarios
- `useTheme` → gestiona el modo oscuro utilizando `localStorage`

Esto permite separar **lógica de negocio** de los componentes de UI.

---

### ⚡ Sistema de cache

El servicio `countries.js` implementa **cache en memoria utilizando `Map`** para evitar múltiples peticiones a la API cuando los datos ya fueron solicitados.

Se manejan tres caches:

- lista completa de países
- detalles individuales
- países fronterizos

Esto mejora la **performance** y reduce llamadas innecesarias a la API.

---

### 🧩 Componentes reutilizables

La interfaz se divide en componentes UI reutilizables como:

- `CountryCard`
- `BorderItem`
- `ListBorderCountries`
- `Navbar`

Esto permite mantener una estructura clara y escalable.

---

## 🚧 Desafíos enfrentados

- Manejo de navegación entre países utilizando **React Router**.
- Normalización de datos provenientes de la API.
- Implementación de **caching manual** para optimizar las peticiones.
- Manejo de estados derivados utilizando **useMemo** para evitar cálculos innecesarios.

---

## 📈 Posibles mejoras

- Implementar **React Query o SWR** para manejar fetching y cache.
- Mejorar accesibilidad agregando atributos ARIA.
- Agregar animaciones sutiles en transiciones de páginas.
- Implementar tests de componentes.

---

## 👤 Autor

Hernán Coronel

- GitHub  
https://github.com/coronelhernan

- Frontend Mentor  
https://www.frontendmentor.io/profile/coronelhernan
