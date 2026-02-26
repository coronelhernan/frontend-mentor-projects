import { Moon } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const handleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark)
  }

  return (
    <nav
      className="bg-[var(--color-surface)] text-[var(--color-text)] 
      h-22 w-full flex justify-between items-center px-4
      lg:px-18 lg:h-20 shadow-sm"
    >
      <h1 className="text-base font-bold lg:text-2xl">
        Where in the world?
      </h1>

      <div className="flex gap-2 items-center">
        <button
          onClick={() => handleTheme()}
          className="p-2 rounded-full hover:opacity-80 transition"
        >
          <Moon size={24} className="text-[var(--color-text)]" />
        </button>

        <span className="text-base">
          Dark mode
        </span>
      </div>
    </nav>
  );
}
