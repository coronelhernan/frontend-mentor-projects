// Navbar de la aplicación
import Navbar from "../components/sections/Navbar";

// Icono usado en el input de búsqueda
import { Search } from "lucide-react";

// Componente que renderiza la lista de países
import { Countries } from "../components/Countries";

// Hook personalizado que maneja toda la lógica de datos,
// filtros, estados de carga y errores
import { useCountries } from "../hooks/useCountries";

/**
 * Home Page
 *
 * Página principal de la aplicación.
 *
 * Responsabilidades:
 * - Mostrar la barra de navegación
 * - Permitir buscar países por nombre
 * - Filtrar países por región
 * - Mostrar la lista de países obtenidos desde la API
 *
 * La lógica de negocio NO vive aquí, sino en el hook `useCountries`.
 */

export default function Home() {

  // Hook que centraliza toda la lógica de la página
  const {
    loading,            // estado de carga mientras se obtiene la API
    error,              // error en caso de fallar la request
    region,             // región seleccionada
    search,             // texto de búsqueda
    filteredCountries,  // países filtrados por región y búsqueda
    handleRegion,       // handler para cambiar la región
    handleSearch        // handler para el input de búsqueda
  } = useCountries();

  // Estado de carga
  if (loading) return <p>Loading countries...</p>;

  // Manejo de error
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen flex flex-col items-center gap-5 lg:gap-12">

      {/* Barra de navegación */}
      <Navbar />

      {/* =======================
           Filters section
         ======================= */}
      <div
        className="filters flex flex-col w-full px-4 gap-10
        lg:px-18 lg:flex-row lg:justify-between"
      >

        {/* Search input */}
        <div className="relative">

          {/* Icono dentro del input */}
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[--color-text] lg:left-8"
            size={20}
          />

          <input
            value={search}
            onChange={handleSearch}
            type="search"
            placeholder="Search for a country..."
            className="bg-[var(--color-surface)] text-[var(--color-text)] shadow-surface
            placeholder:text-[--color-text-muted]
            h-12 rounded-md w-full pl-10 pr-4 outline-none
            lg:w-120 lg:text-sm lg:pl-18"
            autoFocus
          />
        </div>

        {/* Region filter */}
        <select
          value={region}
          onChange={handleRegion}
          className="bg-[var(--color-surface)] text-[var(--color-text)] shadow-surface
          h-12 w-3/5 rounded-md px-6 lg:w-48"
          id="select-regions"
         >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* =======================
           Countries list
         ======================= */}

      {/* Componente que renderiza las cards de países */}
      <Countries countries={filteredCountries} />

    </div>
  );
}
