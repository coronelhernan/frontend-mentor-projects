import { useState, useMemo } from "react";
import { useDebounce } from "./useDebounce";

/**
 * Hook useFilters
 * ----------------
 * Este hook se encarga de gestionar los filtros de la aplicación:
 * - Filtro por región
 * - Búsqueda por nombre de país
 *
 * Además utiliza el hook `useDebounce` para evitar que el filtro
 * de búsqueda se ejecute en cada tecla presionada, mejorando
 * el rendimiento de la aplicación.
 *
 * Parámetros:
 * - data: array de países obtenido desde la API.
 *
 * Retorna:
 * - region: región seleccionada
 * - search: valor actual del input de búsqueda
 * - filteredCountries: lista de países filtrados
 * - handleRegion: función para cambiar la región
 * - handleSearch: función para actualizar la búsqueda
 */

export function useFilters(data) {
  // Estado para almacenar la región seleccionada
  const [region, setRegion] = useState("");

  // Estado para almacenar el texto ingresado en el input de búsqueda
  const [search, setSearch] = useState("");

  /**
   * Valor de búsqueda con debounce aplicado.
   * Esto retrasa la ejecución del filtro para evitar
   * recalcular en cada tecla presionada.
   */
  const debounceSearch = useDebounce(search, 1000);

  // Maneja el cambio de región desde el select.
  const handleRegion = (e) => {
    setRegion(e.target.value);
  };

  /**
   * Maneja el cambio del input de búsqueda.
   *
   * Se utiliza `trimStart()` para evitar que la búsqueda
   * comience con espacios en blanco al inicio.
   */
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value.trimStart());
  };

  /**
   * Filtrado de países memorizado.
   *
   * useMemo evita recalcular los filtros en cada render, solamente se ejecuta cuando cambian:
   * - los datos originales
   * - la región seleccionada
   * - el valor de búsqueda (debounced)
   */
  const filteredCountries = useMemo(() => {
    return data.filter((country) => {
      // Filtra por región si existe una seleccionada
      const matchesRegion = region ? country.region === region : true;

      // Filtra por nombre de país
      const matchesSearch = country.name
        .toLowerCase()
        .includes(debounceSearch.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [data, region, debounceSearch]);

  // Valores y funciones que expone el hook para ser utilizados en los componentes.
  return {
    region,
    search,
    filteredCountries,
    handleRegion,
    handleSearch,
  };
}
