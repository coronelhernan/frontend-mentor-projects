import { GraphicDesign } from "../components/GraphicDesing"
import { Photography } from "../components/Photography"

export function TwoImagesSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <GraphicDesign />
      <Photography />
    </section>
  );
}
