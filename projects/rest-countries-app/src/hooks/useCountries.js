import { useState, useEffect } from "react";
import { getCountries } from "../services/countries";
import { useFilters } from "./useFilters";

/**
 * Hook useCountries
 * -----------------
 * Este hook se encarga de gestionar toda la lógica relacionada con
 * la obtención y filtrado de países dentro de la aplicación.
 *
 * Responsabilidades principales:
 * - Obtener la lista de países desde la API.
 * - Manejar los estados de carga (loading) y errores (error).
 * - Integrar la lógica de filtrado mediante el hook `useFilters`.
 *
 * Flujo de funcionamiento:
 * 1. Al montar el componente se ejecuta un `useEffect`.
 * 2. Se realiza una petición a la API mediante `getCountries`.
 * 3. Se almacenan los países en el estado local.
 * 4. Los datos se pasan al hook `useFilters` para aplicar filtros
 *    por región y por búsqueda.
 * 5. El hook retorna toda la información necesaria para la UI.
 */

export function useCountries() {
  // Estado que almacena la lista completa de países
  const [countries, setCountries] = useState([]);

  // Estado que indica si la aplicación está cargando datos
  const [loading, setLoading] = useState(true);

  // Estado que almacena errores durante la petición a la API
  const [error, setError] = useState(null);

  /**
   * Hook encargado de manejar los filtros de búsqueda y región.
   * Recibe la lista completa de países y devuelve los países filtrados
   * junto con las funciones necesarias para actualizar los filtros.
   */
  const {
    region,
    search,
    filteredCountries,
    handleRegion,
    handleSearch
  } = useFilters(countries);

  /**
   * useEffect que se ejecuta una sola vez al montar el componente.
   * Se encarga de obtener la lista de países desde la API.
   */
  useEffect(() => {

    const loadCountries = async () => {
      try {
        // Obtener países desde el servicio
        const data = await getCountries();

        // Guardar países en el estado
        setCountries(data);
      } catch (err) {
        // Guardar error en caso de fallo
        setError(err.message);
      } finally {

        // Finalizar estado de carga
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  // El hook retorna todos los valores necesarios para ser consumidos por los componentes de la UI.
  return {
    loading,
    error,
    region,
    search,
    filteredCountries,
    handleRegion,
    handleSearch
  };
}
