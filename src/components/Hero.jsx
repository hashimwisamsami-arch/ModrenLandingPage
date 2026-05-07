import { HERO_CONTENT } from "../constants";
import { useLang } from "../context/LanguageProvider.jsx";

function Hero() {
  const { lang } = useLang();

  return (
    <section className="max-w-7xl mx-auto border-b-2">
      <div className="flex flex-col items-center my-20">
        <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
          {HERO_CONTENT[lang].title}
        </h1>
        <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter">
          {HERO_CONTENT[lang].subtitle}
        </p>
        <img
          src={HERO_CONTENT[lang].image}
          className="w-full h-[65vh] object-cover rounded-2xl p-2"
          alt="Hero"
        />
      </div>
    </section>
  );
}

export default Hero;
