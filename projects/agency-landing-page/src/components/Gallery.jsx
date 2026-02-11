import { ResponsiveImage } from "./ResponsiveImage";
import gallery from "../data/gallery.json";

export function Gallery() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
      {gallery.images.map((img, index) => (
        <ResponsiveImage
          key={index}
          mobileSrc={img.mobile}
          desktopSrc={img.desktop}
          alt={img.alt}
          className="w-full h-auto"
        />
      ))}
    </section>
  );
}
