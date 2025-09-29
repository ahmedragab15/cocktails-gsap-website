import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default App;
