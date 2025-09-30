import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 700;

const ScrollToTop =()=> {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  const handleClick = () => {
    const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 duration-300 ${
        visible ? "opacity-100 translate-0" : "opacity-0 translate-y-10 pointer-events-none"
      } `}
    >
      <button
        aria-label="Scroll to top"
        onClick={handleClick}
        className="w-11 h-11 rounded-full shadow-lg bg-purple-600 hover:!bg-purple-900 transition-colors p-2 cursor-pointer active:scale-75"
      >
        <img src="/images/up-arrow.png" alt="up-arrow" aria-hidden="true" />
      </button>
    </div>
  );
}

export default ScrollToTop