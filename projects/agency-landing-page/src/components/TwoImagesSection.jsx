import { GraphicDesign } from "./GraphicDesing"
import { Photography } from "./Photography"

export function TwoImagesSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <GraphicDesign />
      <Photography />
    </section>
  );
}
