import { useState, useEffect } from "react";
import { getCountryByName } from "../services/countries";

/**
 * Hook useCountry
 * ----------------
 * Este hook se encarga de obtener la información detallada de un país
 * a partir de su nombre.
 *
 * Responsabilidades:
 * - Realizar la petición a la API para obtener un país específico.
 * - Manejar los estados de carga (loading) y error (error).
 * - Guardar la información del país en el estado local.
 *
 * Flujo de funcionamiento:
 * 1. Recibe el nombre del país como parámetro.
 * 2. Cuando el nombre cambia, se ejecuta el `useEffect`.
 * 3. Se llama al servicio `getCountryByName` para obtener los datos.
 * 4. Se actualiza el estado `country` con la información recibida.
 * 5. En caso de error, se guarda el mensaje en `error`.
 */

export function useCountry(name) {
  // Estado que almacena la información del país
  const [country, setCountry] = useState(null);

  // Estado que indica si la petición sigue en proceso
  const [loading, setLoading] = useState(true);

  // Estado para almacenar errores durante la petición
  const [error, setError] = useState(null);

  /**
   * useEffect que se ejecuta cuando cambia el nombre del país.
   * Se encarga de solicitar los datos del país a la API.
   */
  useEffect(() => {
    const loadCountry = async () => {
      try {
        // Obtener datos del país desde el servicio
        const data = await getCountryByName(name);

        // Guardar datos en el estado
        setCountry(data);
      } catch (err) {
        // Guardar error en caso de fallo
        setError(err.message);
      } finally {
        // Finalizar estado de carga
        setLoading(false);
      }
    };

    // Solo ejecutar si existe un nombre válido
    if (name) loadCountry();
  }, [name]);


  // Retorna los estados necesarios para el componente Detail
  return { country, loading, error };
}
