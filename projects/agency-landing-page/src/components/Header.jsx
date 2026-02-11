import { useState } from "react";
import { IMAGES, ICONS } from "../../utils/landingImages";
import { ListHeaderItems } from "./ListHeaderItems";
import { Logo } from "./Logo";

const { mobile } = IMAGES;
const { menu, arrowDown } = ICONS;

export function Header() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  }

  return (
    <section
      className="h-screen w-full text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${mobile.header})` }}>
      {/* HEADER */}
      <header className="h-24 w-full flex items-center justify-between px-6">
        <Logo className="w-36 h-24 text-white" />

        {/* BUTTON HAMBURGUER MENÚ */}
        <div className="relative">
          <button
            onClick={handleClick}
          >
            <img src={menu} alt="Menu" className="h-5" />
          </button>

          {/* MENÚ  */}
          {visible && (
            <div className="absolute flex flex-col items-center justify-center gap-5 top-full right-0 mt-18 h-96 bg-white w-86 cursor-pointer">
              <ListHeaderItems />            
            </div>
          )} 
        </div>
      </header>

      {/* CONTENT */}
      <article className="h-full flex flex-col items-center gap-2 mt-20">
        <p className="text-5xl font-bold text-white font-heading">
          WE ARE 
        </p>
        <p className="text-5xl font-bold text-white font-heading">
          CREATIVES
        </p>
        <img src={arrowDown} alt="Arrow down" className="h-28 mt-24" />
      </article>
    </section>
  );
}
