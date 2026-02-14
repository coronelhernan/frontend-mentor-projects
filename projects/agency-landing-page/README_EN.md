This README is in English.  
If you prefer Spanish, click here: [Versión en Español](README.md)

# Sunnyside Agency Landing Page

Solution to the **Sunnyside Agency Landing Page** challenge on Frontend Mentor.  
Project developed using React and Tailwind CSS, applying a mobile-first approach and component-based architecture.

---

## 📌 Description

Creative agency landing page replicating the original challenge design, ensuring:

- Fully responsive design
- Mobile dropdown menu
- Hover states for interactive elements
- Modular structure with reusable components
- Scalable styles using Tailwind CSS

---

## 🖼 Screenshot

![Sunnyside Landing Page](../agency-landing-page/public/preview.jpg)

---

## 🔗 Links

- 🔍 Frontend Mentor solution:  
  https://www.frontendmentor.io/solutions/responsive-landing-page-for-sunnyside-with-react-js-and-tailwind-css-ciLu2jtYhd

- 💻 Source code / Full solution:  
  [View on GitHub](https://github.com/coronelhernan/frontend-mentor-projects/tree/main/projects/agency-landing-page)

- 🌐 Live site:  
  https://landing-sunnyside-2026.netlify.app/

---

## 🛠 Technologies used

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

### ☁️ Deployment
<p>
  <img src="https://skillicons.dev/icons?i=netlify" />
</p>

---

## 🧠 Technical decisions

### 📱 Responsive menu

The mobile menu was implemented using `useState` to control visibility.  
Absolute positioning was used to create a dropdown behavior aligned with the original design.

### 🖼 Responsive image handling

Background images switch between mobile and desktop using Tailwind breakpoints (`lg:`), maintaining a mobile-first approach.

### 🗂 Project organization

Modular structure based on components:

- `Header`
- `Menu`
- `Sections`
- `Footer`
- Utilities folder for assets
- Clear separation between logic and presentation

---

## 🚧 Challenges faced

- Fine-tuning breakpoints between mobile and desktop.
- Differences between local and production environments (case sensitivity in imports).
- Deploy configuration within a monorepo using `netlify.toml`.

---

## 📈 Possible improvements

- Improve accessibility by adding ARIA attributes.
- Include smooth menu animations.
- Optimize images for better performance.
- Add basic component tests.

---

## 👤 Author

Hernán Coronel  

- GitHub: https://github.com/coronelhernan
- Frontend Mentor: https://www.frontendmentor.io/profile/coronelhernan
