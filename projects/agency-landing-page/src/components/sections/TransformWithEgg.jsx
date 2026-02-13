import { IMAGES } from "../../../utils/landingImages";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import texts from "../../data/transform.json";
const { mobile, desktop } = IMAGES;

export function TransformWithEgg() {
  return (
    <section
      className="grid grid-cols-1
        lg:grid-cols-2
        grid-areas-transform-mobile
        lg:grid-areas-transform-desktop
        min-h-[600px]"
    >
      <div className="content flex justify-center items-center">
        <article
          className="grid-area-transform flex flex-col justify-center text-center bg-white py-16 px-4 gap-6
          lg:text-start lg:justify-center lg:items-start lg:gap-8">
          <h1 className="text-3xl text-muted font-heading font-extrabold lg:text-left lg:text-4xl">
            Transform your <br /> brand
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
              underline underline-offset-2
            decoration-yellow-200 decoration-6
              hover:decoration-secondary">
              LEARN MORE
          </a>
        </article>
      </div>

      <div className="grid-area-egg min-h-[320px] lg:min-h-[600px]">
        <ResponsiveImage
          mobileSrc={mobile.transform}
          desktopSrc={desktop.transform}
          alt="Transform section"
          className="min-h-[320px] lg:min-h-[600px]"
        />
      </div>
    </section>
  );
}
