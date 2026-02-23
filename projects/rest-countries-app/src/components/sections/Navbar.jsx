import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-dark-secondary text-dark-text h-26 w-full flex justify-between items-center px-4">
      <h1 className="text-base font-body font-bold">Where in the world?</h1>

      <div className="theme flex gap-2 items-center">
        <button className="toogle p-2 rounded-full">
          <Moon size={24} />
        </button>
        <h1 className="text-base font-body">Dark Mode</h1>
      </div>
    </nav>
  );
}
