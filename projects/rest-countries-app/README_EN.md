This README is written in English.  
If you prefer Spanish, click here: [Versión en español](README.md)

# REST Countries API Explorer

Solution to the **REST Countries API with Color Theme Switcher** challenge on Frontend Mentor.  
Application built with **React** that consumes the countries API and allows users to explore detailed information about each country.

---

## 📌 Description

This application allows users to explore country information using the public Rest Countries API.

Users can:

- View all countries from the API
- Search countries by name
- Filter countries by region
- View detailed information about a specific country
- Navigate to border countries
- Toggle between light and dark mode

The application implements **in-memory caching**, **custom hooks**, and a modular component-based architecture.

---

## 🖼 Screenshot

![REST Countries App](/projects/rest-countries-app/public/preview.jpg)

---

## 🔗 Links

- 🔍 Frontend Mentor Solution  
https://www.frontendmentor.io/solutions/add-your-solution-link

- 💻 Source Code  
https://github.com/coronelhernan/frontend-mentor-projects/tree/main/projects/rest-countries-app

- 🌐 Live Site  
https://rest-countries-app-2026.netlify.app/

---

## 🛠 Built With

### 🎨 Frontend
<p>
  <img src="https://skillicons.dev/icons?i=html" />
  <img src="https://skillicons.dev/icons?i=css" />
  <img src="https://skillicons.dev/icons?i=js" />
  <img src="https://skillicons.dev/icons?i=react" />
  <img src="https://skillicons.dev/icons?i=tailwind" />
</p>

### ⚙️ Tooling
<p>
  <img src="https://skillicons.dev/icons?i=vite" />
  <img src="https://skillicons.dev/icons?i=pnpm" />
</p>

### ☁️ Deployment
<p>
  <img src="https://skillicons.dev/icons?i=netlify" />
</p>

---

## 🧠 Technical Decisions

### 📦 Hook-based architecture

Custom hooks were created to encapsulate reusable logic:

- `useCountries` → fetches and manages the list of countries
- `useCountry` → retrieves detailed information for a single country
- `useFilters` → handles search and region filtering
- `useDebounce` → optimizes search by preventing unnecessary renders
- `useTheme` → manages dark mode using `localStorage`

This approach separates **business logic** from UI components.

---

### ⚡ Caching system

The `countries.js` service implements **in-memory caching using `Map`** to prevent multiple API requests when the data has already been fetched.

Three caches are managed:

- full countries list
- individual country details
- border countries

This improves **performance** and reduces unnecessary API calls.

---

### 🧩 Reusable components

The interface is divided into reusable UI components such as:

- `CountryCard`
- `BorderItem`
- `ListBorderCountries`
- `Navbar`

This helps maintain a clean and scalable structure.

---

## 🚧 Challenges

- Handling navigation between countries using **React Router**.
- Normalizing data returned by the API.
- Implementing **manual caching** to optimize requests.
- Managing derived state using **useMemo** to avoid unnecessary computations.

---

## 📈 Future Improvements

- Implement **React Query or SWR** for data fetching and caching.
- Improve accessibility by adding ARIA attributes.
- Add subtle animations for page transitions.
- Implement basic component testing.

---

## 👤 Author

Hernán Coronel

- GitHub  
https://github.com/coronelhernan

- Frontend Mentor  
https://www.frontendmentor.io/profile/coronelhernan
