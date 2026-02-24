import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-dark-secondary text-dark-text h-22 w-full flex justify-between items-center px-4
    
    // Desktop mode
    lg:px-18 lg:h-20
    ">
      <h1 className="text-base font-body font-bold lg:text-2xl">
        Where in the world?
      </h1>

      <div className="theme flex gap-2 items-center">
        <button className="toogle p-2 rounded-full">
          <Moon size={24} />
        </button>
        <h1 className="text-base font-body">
          Dark Mode
        </h1>
      </div>
    </nav>
  );
}
