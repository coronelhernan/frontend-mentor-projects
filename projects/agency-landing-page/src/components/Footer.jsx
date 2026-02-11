import { ICONS } from "../../utils/landingImages";
import { Logo } from "./Logo";
const { facebook, instagram, twitter, pinterest } = ICONS;
const logosSocial = [facebook, instagram, twitter, pinterest];

export function Footer() {
  return (
    <footer className="bg-[#8ed5c7] min-h-88 flex flex-col items-center py-6 text-center">
      <Logo className="w-48 h-32 text-[#2c7566]" />

      <div className="links_footer flex gap-14 text-graphic font-body text-[1.1rem] font-semibold">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
      </div>

      <div className="icons_footer flex gap-8 mt-20">
        {logosSocial.map((icon, index) => {
          return (
            <img 
              key={index}
              className="h-6 w-6" 
              src={icon} 
              alt={`Image icon ${icon}`} 
            />
          );
        })}
      </div>
    </footer>
  );
}
