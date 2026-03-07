// Hook de React Router para acceder a parámetros de la URL
import { useParams } from "react-router-dom";

// Barra de navegación de la aplicación
import Navbar from "../components/sections/Navbar";

// Componente que renderiza toda la información del país
import CountryDetail from "../components/ui/CountryDetail";

// Hook personalizado encargado de obtener un país desde la API
import { useCountry } from "../hooks/useCountry";

/**
 * Detail Page
 *
 * Página encargada de mostrar el detalle completo de un país.
 *
 * Flujo:
 * 1. Obtiene el nombre del país desde la URL (useParams)
 * 2. Decodifica el nombre para evitar problemas con espacios o caracteres especiales
 * 3. Usa el hook `useCountry` para obtener los datos desde la API
 * 4. Maneja estados de carga, error o país inexistente
 * 5. Renderiza el componente CountryDetail con la información del país
 */

export default function Detail() {

  // Obtiene el parámetro dinámico de la URL
  // Ejemplo de ruta: /detail/Argentina
  const { name } = useParams();

  // Decodifica el nombre del país
  // Esto es necesario porque la URL puede tener caracteres codificados
  // Ejemplo: "United%20States"
  const decodedName = decodeURIComponent(name);

  // Hook que obtiene el país desde la API
  const { country, loading, error } = useCountry(decodedName);

  // Estado de carga mientras se hace la request
  if (loading) return <p>Loading...</p>;

  // Manejo de errores de la API
  if (error) return <p>Error: {error}</p>;

  // Si no se encuentra el país
  if (!country) return <p>Country not found</p>;

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr]">

      {/* Navbar de la aplicación */}
      <Navbar />

      {/* Renderiza el detalle completo del país */}
      <CountryDetail country={country} />

    </div>
  );
}
