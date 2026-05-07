import { useState } from "react";
import logo from "../assets/logo.webp";
import { RiCloseLine, RiEarthFill, RiMenu3Line } from "@remixicon/react";
import { LINKS } from "../constants/index.js";
import { LANGS } from "../constants/index.js";
import { useLang } from "../context/LanguageProvider.jsx";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleLang = () => {
    setIsLangOpen(!isLangOpen);
  };
  const { lang, setLang } = useLang();

  const handleSelect = (code) => {
    setLang(code); // حفظ اللغة
    setIsLangOpen(false); // إغلاق القائمة
    console.log("Current language:", code);
  };

  return (
    <nav className="border-b-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        <div className="pl-2">
          <a href="#">
            <img src={logo} width={150} height={15} alt="VastuSpaze" />
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS[lang].map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="relative">
          <button
            onClick={toggleLang}
            className="text-2xl pr-2 focus:outline-none justify-between"
            aria-label={isLangOpen ? "Close menu" : "Open menu"}
          >
            {console.log(lang)}
            {isLangOpen ? <RiCloseLine /> : <RiEarthFill />}
          </button>

          {isLangOpen && (
            <div className="absolute ltr:right-0 rtl:left-0  mt-2 w-24 bg-white shadow-lg-lg border">
              {LANGS.map((lang) => (
                <button
                  key={lang.code}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => {
                    handleSelect(lang.code);
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-4 border-b-4`}
      >
        {LINKS[lang].map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="uppercase text-lg font-medium block py-2 tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
