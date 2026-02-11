import { IMAGES } from "../../utils/landingImages";
import { ResponsiveImage } from "./ResponsiveImage";
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
      <div className="grid-area-transform flex flex-col justify-center text-center bg-white py-16 px-4 gap-6">
        <h1 className="text-3xl text-muted font-heading font-bold">Transform Your <br /> brand</h1>
        <p className="text-md font-body font-semibold text-gray-600">
          We are a full-service creative agency <br />
          specializing in helping brands grow fast. <br />
          Engage your clients through compelling <br />
          visuals that do most of the marketing for <br />
          you.
        </p>

        <a href="#"
        className="font-heading text-md font-bold
          underline underline-offset-0
        decoration-amber-100 decoration-8">
          LEARN MORE
        </a>
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
