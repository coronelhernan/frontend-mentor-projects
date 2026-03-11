import { useEffect, useState } from "react";
import { getCountriesByCodes } from "../../services/countries";
import { Link } from "react-router-dom";

/**
 * ListBorderCountries
 * --------------------
 * Componente encargado de obtener y mostrar los países limítrofes
 * de un país específico.
 *
 * Recibe un array de códigos de países (CCA3) y realiza una petición
 * a la API para obtener sus nombres. Luego renderiza cada país como
 * un link que permite navegar a su página de detalle.
 *
 * Props:
 * - array: lista de códigos de países fronterizos (por ejemplo: ["FRA", "DEU", "ITA"]).
 *
 * Funcionamiento:
 * 1. Cuando el componente se monta o cambia el array de códigos,
 *    se ejecuta un efecto para cargar los países.
 * 2. Se llama al servicio getCountriesByCodes para obtener
 *    los nombres correspondientes a esos códigos.
 * 3. Los resultados se guardan en el estado local `countries`.
 * 4. Finalmente se renderiza una lista de links hacia la vista
 *    de detalle de cada país.
 */

export default function ListBorderCountries({ array }) {
  // Estado local para almacenar los países fronterizos obtenidos desde la API
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    /**
     * Función asíncrona que consulta los países fronterizos
     * utilizando los códigos recibidos por props.
     */
    const loadBorders = async () => {
      try {
        const data = await getCountriesByCodes(array);
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Solo ejecuta la petición si existen códigos de países
    if (array?.length) loadBorders();
  }, [array]); // Se vuelve a ejecutar si cambia el array de códigos

  return (
    <ul className="flex flex-wrap gap-4 lg:gap-3">
      {countries.map((country) => (
        <li key={country.code}>
          <Link
            to={`/detail/${encodeURIComponent(country.name)}`}
            className="px-4 py-1 bg-[var(--color-surface)] shadow-sm rounded hover:opacity-80"
          >
            {country.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
