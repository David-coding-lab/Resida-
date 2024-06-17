import "./Shared_Components/shared.css";
import "./App.css";
import "./Components/components.css"
import Header from "./Shared_Components/Header";
import Hero from "./Components/Hero";
import SubHero from "./Components/SubHero";
import ExpSection from "./Components/ExpSection";
import SubExpSection from "./Components/SubExpSection";
import QuickPreviewSection from "./Components/QuickPreviewSection";
import NeighborhoodGuid from "./Components/NeighborhoodGuid";
import FeaquredPropertiesSection from "./Components/FeaquredPropertiesSection";
import PropertySaleSection from "./Components/PropertySaleSection";
import DiscoverySection from "./Components/Discovry_section";
import FindHomesSection from "./Components/FindHomesSection";
import NeedAnOfficeSpace from "./Components/NeedAnOfficeSection";
import DownloadAppSection from "./Components/DownloadAppSection";
import Footer from './Shared_Components/Footer'
import { useState } from "react";
import ResidaIsComingSoon from "./Shared_Components/ResidaIsComingSoon";
import Overlay from "./Overlay";
export function randomNumber() {
  return Math.floor(Math.random() * 10000);
}
export default function App() {
  const [residaComingSoon, setResidaComingSoon] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
      {/* remember to work on this */}
      {showOverlay && <Overlay />}
      {residaComingSoon && (
        <ResidaIsComingSoon
          setResidaComingSoon={setResidaComingSoon}
          setShowOverlay={setShowOverlay}
        />
      )}
      <div>
        <Header setResidaComingSoon={setResidaComingSoon}/>
        <Hero setResidaComingSoon={setResidaComingSoon} />
        <SubHero setResidaComingSoon={setResidaComingSoon} />
        <ExpSection />
        <SubExpSection />
        <QuickPreviewSection setResidaComingSoon={setResidaComingSoon} />
        <NeighborhoodGuid setResidaComingSoon={setResidaComingSoon} />
        <FeaquredPropertiesSection />
        <PropertySaleSection setResidaComingSoon={setResidaComingSoon} />
        <DiscoverySection setResidaComingSoon={setResidaComingSoon} />
        <FindHomesSection />
        <NeedAnOfficeSpace />
        <DownloadAppSection setResidaComingSoon={setResidaComingSoon} />
        <Footer />
      </div>
    </>
  );
}
