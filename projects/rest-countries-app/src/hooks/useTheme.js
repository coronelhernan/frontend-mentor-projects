import { useEffect, useState } from "react";

/**
 * Hook useTheme
 * -------------
 * Este hook gestiona el tema de la aplicación (modo claro / modo oscuro).
 *
 * Funcionalidades:
 * - Guarda la preferencia del usuario en localStorage.
 * - Aplica o remueve la clase "dark" al elemento <html>.
 * - Permite alternar entre tema claro y oscuro.
 *
 * Retorna:
 * - isDark: boolean que indica si el tema actual es oscuro.
 * - toggleTheme: función para cambiar entre modo oscuro y claro.
 */

export function useTheme() {
  /**
   * Estado que controla si el tema oscuro está activo.
   *
   * Se inicializa leyendo el valor guardado en localStorage
   * para mantener la preferencia del usuario entre sesiones.
   *
   * Se usa una función inicializadora para evitar que
   * localStorage se consulte en cada render.
   */
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("dark");
    return savedTheme === "true";
  });

  /**
   * Efecto que se ejecuta cada vez que cambia el tema.
   * - Agrega o remueve la clase "dark" del elemento raíz
   *   del documento (<html>).
   * - Guarda la preferencia del usuario en localStorage.
   */
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("dark", isDark);
  }, [isDark]);

  /**
   * Función para alternar entre modo oscuro y claro.
   *
   * Utiliza la versión funcional de setState para
   * asegurar que el nuevo estado se base en el valor previo.
   */
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Valores expuestos por el hook para ser utilizados en los componentes de la aplicación.
  return { isDark, toggleTheme };
}
