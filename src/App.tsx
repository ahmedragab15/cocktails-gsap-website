import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Navbar, Hero, Cocktails, About, Art, Menu, Contact, ScrollToTop } from "./components";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
      <ScrollToTop />
    </main>
  );
};

export default App;
