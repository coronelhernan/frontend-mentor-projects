import { IMAGES } from "../../../utils/landingImages";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import texts from "../../data/standOut.json";
const { mobile, desktop } = IMAGES;

export function StandOutWithCup() {
  return (
    <section
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        grid-areas-standout-mobile
        lg:grid-areas-standout-desktop
        min-h-[600px]"
    >
      <div className="grid-area-cup min-h-[320px] lg:min-h-[600px]">
        <ResponsiveImage
          mobileSrc={mobile.standOut}
          desktopSrc={desktop.standOut}
          alt="Transform section"
          className="min-h-[320px] lg:min-h-[600px]"
        />
      </div>

      <div className="content flex justify-center items-center">
        <article className="grid-area-transform flex flex-col justify-center text-center bg-white py-16 px-4 gap-6
          lg:text-start lg:justify-center lg:items-start lg:gap-8">
          <h1 className="text-3xl text-muted font-heading font-extrabold">
            Stand out to the <br />
            right audience
          </h1>

          <p className="text-lg font-body font-semibold text-gray-600 whitespace-pre-line lg:hidden">
            {texts.texts[0].description_mobile}
          </p>

          <p className="hidden lg:block text-lg font-body font-semibold text-gray-600 whitespace-pre-line">
            {texts.texts[0].description_desktop}
          </p>

          <a
            href="#"
            className="font-heading text-lg font-bold
              underline underline-offset-0
            decoration-red-100 decoration-6
              hover:decoration-primary">
                LEARN MORE
          </a>
        </article>
      </div>
    </section>
  );
}
