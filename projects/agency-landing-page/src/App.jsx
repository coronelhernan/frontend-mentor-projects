import "./App.css";
import { Header } from "./components/sections/Header";
import { TransformWithEgg } from "./components/sections/TransformWithEgg";
import { StandOutWithCup } from "./components/sections/StandOutWithCup";
import { TwoImagesSection } from "./components/sections/TwoImagesSection";
import { Testimonials } from "./components/sections/Testimonials";
import { Gallery } from "./components/sections/Gallery";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <>
      <Header />
      <TransformWithEgg />
      <StandOutWithCup />
      <TwoImagesSection />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  )
}
