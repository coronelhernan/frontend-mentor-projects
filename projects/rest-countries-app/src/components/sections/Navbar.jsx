// Navbar principal de la aplicación.
// Incluye el botón para alternar entre modo claro y oscuro usando el hook useTheme.

import { Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function Navbar() {
  // Hook personalizado que maneja el estado del tema y su persistencia en localStorage
  const { toggleTheme, isDark } = useTheme();

  return (
    <nav
      className="bg-[var(--color-surface)] text-[var(--color-text)] 
      h-22 w-full flex justify-between items-center px-4
      lg:px-18 lg:h-20 shadow-sm"
    >
      <h1 className="text-base font-bold lg:text-2xl">Where in the world?</h1>

      <div className="flex gap-2 items-center">
        {/* Botón que alterna entre modo claro y oscuro */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="p-2 rounded-full hover:opacity-80 transition"
        >
          {/* 
            El icono cambia su relleno dependiendo del tema:
            - Dark: luna rellena
            - Light: luna solo contorno
          */}
          {isDark ? (
            <Moon
              size={24}
              fill="currentColor"
              className="text-[var(--color-text)]"
            />
          ) : (
            <Moon
              size={24}
              fill="none"
              className="text-[var(--color-text)]"
            />
          )}
        </button>

        <span className="text-base">Dark mode</span>
      </div>
    </nav>
  );
}
