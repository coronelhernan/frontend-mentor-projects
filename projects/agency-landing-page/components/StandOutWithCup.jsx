import { IMAGES } from "../utils/landingImages";
import { ResponsiveImage } from "./ResponsiveImage";
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
        min-h-[600px]
      "
    >
      <div className="grid-area-cup min-h-[320px] lg:min-h-[600px]">
        <ResponsiveImage
          mobileSrc={mobile.standOut}
          desktopSrc={desktop.standOut}
          alt="Transform section"
          className="min-h-[320px] lg:min-h-[600px]"
        />
      </div>

      <div className="grid-area-standout flex flex-col justify-center text-center bg-white py-16 px-4 gap-6">
        <h1 className="text-3xl text-muted font-heading font-bold">
          Stand out to the <br /> 
          right audience
        </h1>
        <p className="text-md font-body font-semibold text-gray-600">
          Using a collaborative formula of <br />
          designers, researchers, photographers, <br />
          videographers, and copywriters, we'll <br />
          build and extend your brand in digital <br />
          places.
        </p>

        <a
          href="#"
          className="font-heading text-md font-bold
          underline underline-offset-0
        decoration-red-100 decoration-8"
        >
          LEARN MORE
        </a>
      </div>
    </section>
  );
}
