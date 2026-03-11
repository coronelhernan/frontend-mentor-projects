import { Link } from "react-router-dom";

/**
 * CountryCard
 * -----------
 * Componente que representa una tarjeta de un país.
 * Se utiliza dentro de una lista para mostrar información básica
 * obtenida desde la API (nombre, población, región y capital).
 *
 * Cada tarjeta funciona también como un enlace que dirige
 * a la página de detalle del país.
 *
 * Props:
 * - image: URL de la bandera del país
 * - name: nombre del país
 * - population: población del país
 * - region: región a la que pertenece
 * - capital: capital del país
 */

export default function CountryCard({
  image,
  name,
  population,
  region,
  capital,
}) {
  return (
    // Contenedor principal de la tarjeta
    // Se usa grid para separar la imagen del contenido
    <li className="w-4/5 bg-[var(--color-surface)] rounded-md overflow-hidden shadow-sm grid grid-rows-[150px_auto]">
      
      {/* Imagen de la bandera */}
      <img
        src={image}
        alt={`Flag of ${name}`}
        className="w-full h-full object-cover"
      />

      {/* 
        Link de React Router que redirige al detalle del país.
        encodeURIComponent se usa para evitar problemas con espacios
        o caracteres especiales en el nombre del país dentro de la URL.
      */}
      <Link
        to={`/detail/${encodeURIComponent(name)}`}
        className="block bg-[var(--color-surface)] rounded-md overflow-hidden shadow-sm"
      >
        {/* Contenedor del contenido textual */}
        <div className="px-8 py-6 space-y-2 lg:px-6 lg:py-12">
          
          {/* Nombre del país */}
          <h2 className="text-[var(--color-text)] font-bold text-xl">{name}</h2>

          {/* Información básica del país */}
          <p className="text-[var(--color-text)] text-base lg:text-sm">
            <span className="font-semibold">Population:</span> {population}
          </p>

          <p className="text-[var(--color-text)] text-base lg:text-sm">
            <span className="font-semibold">Region:</span> {region}
          </p>

          <p className="text-[var(--color-text)] text-base lg:text-sm">
            <span className="font-semibold">Capital:</span> {capital}
          </p>

        </div>
      </Link>
    </li>
  );
}
