import { useState } from "react";

function Lang({ lang, setLang }) {
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
    { code: "ku", label: "KU" },
  ];

  const current = languages.find((l) => l.code === lang);

  return (
    <div className="relative">
      {/* Desktop Buttons */}
      <div className="hidden sm:flex gap-2 bg-gray-100 p-1 rounded-full">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`px-3 py-1 text-sm rounded-full transition-all duration-200
              ${
                lang === l.code
                  ? "bg-black text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="sm:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="px-4 py-2 bg-black text-white rounded-lg flex items-center gap-2"
        >
          {current?.label}
          <span className="text-xs">▼</span>
        </button>

        {open && (
          <div className="absolute mt-2 w-24 bg-white border rounded-lg shadow-lg overflow-hidden z-50">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100
                  ${lang === l.code ? "bg-gray-200 font-semibold" : ""}`}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Lang;
