import "./App.css";
import { Header } from "../components/Header";
import { TransformWithEgg } from "../components/TransformWithEgg";
import { StandOutWithCup } from "../components/StandOutWithCup";
import { TwoImagesSection } from "../components/TwoImagesSection"
import { Testimonials } from "../components/Testimonials"
import { Gallery } from "../components/Gallery"
import { Footer } from "../components/Footer"


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
