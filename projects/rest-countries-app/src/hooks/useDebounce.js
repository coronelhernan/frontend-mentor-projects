import { useState, useEffect } from "react";

/**
 * Hook useDebounce
 * ----------------
 * Este hook permite retrasar la actualización de un valor
 * durante un período de tiempo determinado.
 *
 * Es útil para optimizar operaciones costosas que se ejecutan
 * con mucha frecuencia, como:
 * - búsquedas en inputs
 * - llamadas a APIs
 * - filtros de listas grandes
 *
 * Funcionamiento:
 * 1. Recibe un `value` y un `delay`.
 * 2. Cada vez que `value` cambia, se inicia un temporizador.
 * 3. Si `value` cambia nuevamente antes de que termine el tiempo,
 *    el temporizador anterior se cancela.
 * 4. Solo cuando el usuario deja de cambiar el valor durante el
 *    tiempo indicado (`delay`), el estado `debouncedValue`
 *    se actualiza.
 *
 * Ejemplo de uso:
 * const debouncedSearch = useDebounce(search, 500);
 *
 * Esto evita ejecutar filtros o requests en cada tecla presionada.
 */

export function useDebounce(value, delay) {
  // Estado que almacena el valor "debounced" (valor actualizado después del retraso)
  const [debouncedValue, setDebouncedValue] = useState(value);

  /**
   * useEffect que se ejecuta cuando cambia el valor
   * o el tiempo de retraso.
   */
  useEffect(() => {
    // Crear temporizador
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup:
    // Cancela el temporizador anterior si el valor cambia antes de que termine el delay
    return () => clearTimeout(timer);
  }, [value, delay]);


  // Devuelve el valor actualizado luego del delay
  return debouncedValue;
}
