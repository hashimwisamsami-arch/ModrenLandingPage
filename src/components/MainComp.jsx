import About from "./About.jsx";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Reviews from "./Reviews";
import Services from "./Services";
import { useEffect } from "react";

import { useLang } from "../context/LanguageProvider.jsx";

function MainComp() {
  const { lang } = useLang();
  useEffect(() => {
    if (lang === "ar" || lang === "ku") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }

    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Reviews />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default MainComp;
