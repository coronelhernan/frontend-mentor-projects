import { ArrowLeft } from "lucide-react";
import DataCountryDetail from "./DataCountryDetail";
import { Link } from "react-router-dom";

/**
 * CountryDetail
 * -------------
 * Componente encargado de mostrar la vista de detalle de un país.
 * Presenta la bandera del país, un botón para regresar al inicio
 * y delega la visualización de la información detallada al componente
 * DataCountryDetail.
 *
 * Props:
 * - @param {Object} country: objeto que contiene toda la información del país
 *   (nombre, bandera, población, región, capital, etc.)
 */

export default function CountryDetail({ country }) {
  return (
    <>
      {/* Contenedor principal del contenido */}
      <section className="h-full w-full px-8 py-6 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* 
            Sección izquierda:
            - Botón para volver a la página principal
            - Bandera del país
          */}
          <div className="flex flex-col gap-10 lg:gap-16">
            
            {/* Navegación para volver al home */}
            <nav>
              <Link
                to="/"
                className="w-36 flex bg-[var(--color-surface)] text-[var(--color-text)] shadow-surface
                py-2 px-5 gap-4 rounded-xs shadow-sm
                hover:opacity-80 transition"
              >
                {/* Icono de flecha proveniente de lucide-react */}
                <ArrowLeft size={24} />
                Back
              </Link>
            </nav>

            {/* Imagen de la bandera del país */}
            <figure className="max-w-lg">
              <img
                src={country.flag}
                alt={`Flag of ${country.name}`}
                className="w-full object-contain"
              />
            </figure>
          </div>

          {/* 
            Sección derecha:
            Renderiza toda la información detallada del país.
            Esta lógica se separa en otro componente para mantener
            este componente más limpio y modular.
          */}
          <DataCountryDetail country={country} />

        </div>
      </section>
    </>
  );
}
