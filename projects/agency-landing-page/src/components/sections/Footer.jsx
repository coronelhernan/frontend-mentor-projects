import { Logo } from "../../icons/Logo";
import { IconFacebook } from "../../icons/IconFacebook";
import { IconTwitter } from "../../icons/IconTwitter";
import { IconPinterest } from "../../icons/IconPinterest"
import { IconInstagram } from "../../icons/IconInstagram";

const icons = [IconFacebook, IconInstagram, IconTwitter, IconPinterest];

export function Footer() {
  return (
    <footer className="bg-[#8ed5c7] min-h-88 flex flex-col items-center py-6 text-center">
      <Logo className="w-40 h-32 text-[#2c7566]" />

      <div className="links_footer flex gap-12 text-graphic font-body text-xl font-medium">
        <a className="hover:text-white transition-200" href="#">About</a>
        <a className="hover:text-white transition-200" href="#">Services</a>
        <a className="hover:text-white transition-200" href="#">Projects</a>
      </div>

      <div className="icons_footer flex justify-center items-center gap-7 mt-20">
        {icons.map((Icon, index) => (
          <Icon
            key={index}
            className="w-6 h-6 text-graphic cursor-pointer hover:text-white transition-colors duration-200"
          />
        ))}
      </div>
    </footer>
  )
}
