import { useState } from "react";
import { ICONS } from "../../../utils/landingImages";
import { Logo } from "../../icons/Logo";
import { Menu } from "../ui/Menu";
import { ListHeaderItems } from "../lists/ListHeaderItems";

const { menu, arrowDown } = ICONS;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section
      className="h-screen w-full text-center bg-cover bg-center relative
  bg-[url('/images/mobile/image-header.jpg')]
  lg:bg-[url('/images/desktop/image-header.jpg')]">

      {/* HEADER */}
      <header className="h-24 w-full flex items-center justify-between px-6">
        <Logo className="w-36 h-24 lg:h-28 lg:w-40 text-white" />

        {/* BUTTON HAMBURGUER MENÚ */}
        <div className="relative">
          <button  className="lg:hidden" onClick={handleClick}>
            <img src={menu} alt="Menu" className="h-5" />
          </button>

          {/* Links Header */}
          <div className="links_header hidden lg:flex gap-8 ">
            <ListHeaderItems />
          </div>

          {/* MENÚ  */}
          {isOpen && (
            <Menu />
          )}
        </div>
      </header>

      {/* CONTENT */}
      <article className="h-full flex flex-col items-center gap-2 mt-20">
        {/* Mobile */}
        <p className="text-5xl font-bold text-white font-heading lg:hidden">
          WE ARE <br /> CREATIVES
        </p>

        {/* Desktop */}
        <p className="hidden lg:block text-7xl font-bold text-white font-heading mt-8">
          WE ARE CREATIVES
        </p>
        <img src={arrowDown}
          alt="Arrow down" 
          className="h-28 mt-16 lg:h-48 lg:mt-20" 
        />
      </article>
    </section>
  );
}
