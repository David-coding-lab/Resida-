import "./Shared_Components/shared.css";
import "./Components/components.css";
import "./App.css";
import Header from "./Shared_Components/Header";
import Hero from "./Components/Hero";
import SubHero from "./Components/SubHero";
import ExpSection from "./Components/ExpSection";
import SubExpSection from "./Components/SubExpSection";
import QuickPreviewSection from "./Components/QuickPreviewSection";
import NeighborhoodGuid from "./Components/NeighborhoodGuid";
import FeaquredPropertiesSection from "./Components/FeaquredPropertiesSection";
import PropertySaleSection from "./Components/PropertySaleSection";

export function randomNumber(){
    return Math.floor(Math.random() * 10000)
}
export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SubHero />
      <ExpSection />
      <SubExpSection />
      <QuickPreviewSection />
      <NeighborhoodGuid />
      <FeaquredPropertiesSection />
      <PropertySaleSection />
    </div>
  );
}
