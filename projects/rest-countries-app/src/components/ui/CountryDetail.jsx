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
      <section className="h-full w-full py-6 px-8 lg:py-24 lg:px-18">
        <div className="max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* 
            Sección izquierda:
            - Botón para volver a la página principal
            - Bandera del país
          */}
          <div className="flex flex-col gap-10 lg:gap-16 min-w-0">
            
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
            <figure className="w-full max-w-lg h-[320px] flex items-center lg:px-0">
              <img
                src={country.flag}
                alt={`Flag of ${country.name}`}
                className="max-w-full max-h-full object-contain"
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
