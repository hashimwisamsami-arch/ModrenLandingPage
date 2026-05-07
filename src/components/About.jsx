import aboutImage from "../assets/about.webp";
import { ABOUT } from "../constants";
import { useLang } from "../context/LanguageProvider.jsx";

function About() {
  const { lang } = useLang();

  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">
        {ABOUT[lang].name}
      </h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
          <img src={aboutImage} alt="About section" className="w-full h-auto" />
        </div>
        <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
          {ABOUT[lang].text}
        </p>
      </div>
    </section>
  );
}

export default About;
