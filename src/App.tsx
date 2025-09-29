import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./sections/Navbar";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
};

export default App;
