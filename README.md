# Monorepo de Proyectos — Frontend Mentor

Monorepo para resolver y almacenar retos de **Frontend Mentor**, utilizando una estructura moderna y escalable con:

* **pnpm workspaces**
* **Vite + React**
* **Tailwind CSS v4**
* **ESLint centralizado**

La idea es tener un entorno común para todos los retos, evitando repetir configuraciones y facilitando el aprendizaje y la organización.

---

## 📁 Estructura del proyecto

```text
/
├── projects/
│   └── project-ejemplo/
├── package.json
├── pnpm-workspace.yaml
├── .eslintrc.cjs
├── .eslintignore
└── README.md
```

Todos los retos de Frontend Mentor viven dentro de la carpeta `projects/`.

Cada subcarpeta dentro de `projects/` corresponde a **un reto independiente**.

Ejemplo:

```text
projects/
  ├── nft-preview-card/
  ├── social-links-profile/
  └── order-summary/
```

---

## 🚀 Configuración inicial del monorepo

### 1️⃣ Inicializar pnpm en la raíz

```bash
pnpm init
```

---

### 2️⃣ Configurar el `package.json` raíz

Ejemplo recomendado:

```json
{
  "name": "frontend-mentor-monorepo",
  "private": true,
  "version": "1.0.0",
  "packageManager": "pnpm@10.22.0",
  "scripts": {
    "lint": "eslint projects/**/*.{js,jsx,ts,tsx}"
  }
}
```

> `private: true` evita publicar el monorepo por error.

---

### 3️⃣ Configurar el workspace de pnpm

Archivo `pnpm-workspace.yaml` en la raíz:

```yaml
packages:
  - "projects/*"
```

Esto le indica a pnpm que **cada carpeta dentro de `projects/` es un proyecto del workspace**.

---

## 🧹 Configuración de ESLint compartido

### Instalar ESLint en la raíz

```bash
pnpm add -D eslint eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier
```

Estas dependencias se comparten entre todos los retos.

---

### `.eslintrc.cjs` (raíz)

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
```

---

### `.eslintignore`

```text
node_modules
dist
build
```

---

## ⚛️ Crear un nuevo reto (proyecto)

> ⚠️ **IMPORTANTE:**
> Los proyectos se crean **desde la raíz del monorepo**, no desde dentro de `projects/`.

### Crear el proyecto con Vite

```bash
pnpm create vite projects/nombre-del-reto
```

Elegir:

* Framework: **React**
* Variante: **JavaScript + SWC**

Luego:

```bash
cd projects/nombre-del-reto
pnpm dev
```

---

## 🎨 Integrar Tailwind CSS v4 (por proyecto)

Desde la carpeta del reto:

```bash
pnpm add -D tailwindcss @tailwindcss/vite
```

### `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### `App.css`

```css
@import "tailwindcss";
```

---

## 🧪 Plantilla rápida para probar Tailwind

```jsx
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-indigo-500">
        Tailwind v4 funcionando 🚀
      </h1>
    </div>
  )
}
```

---

## 📌 Scripts útiles

Ejecutar ESLint sobre todos los retos:

```bash
pnpm lint
```

---
