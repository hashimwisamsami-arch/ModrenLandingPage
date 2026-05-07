import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import { CONTACT_INFO } from "../constants";
import { useLang } from "../context/LanguageProvider.jsx";

function ContactUs() {
  const { lang } = useLang();

  return (
    <section className="max-w-7xl mx-auto" id="contant">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          {CONTACT_INFO[lang].h2_tag}
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
          {CONTACT_INFO[lang].text}
        </p>
        <div className="flex flex-col lg:flex-row justify-around mx-4">
          <div className="flex mb-8 lg:mb-0">
            <RiPhoneLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold ">
                {CONTACT_INFO[lang].phone.label}
              </p>
              <p className="text-neutral-600">
                {CONTACT_INFO[lang].phone.value}
              </p>
            </div>
          </div>
          <div className="flex mb-8 lg:mb-0">
            <RiMailLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold ">
                {CONTACT_INFO[lang].email.label}
              </p>
              <p className="text-neutral-600">
                {CONTACT_INFO[lang].email.value}
              </p>
            </div>
          </div>
          <div className="flex mb-8 lg:mb-0">
            <RiMapPinLine className="text-3xl mr-4" />

            <div>
              <p className="text-lg font-semibold ">
                {CONTACT_INFO[lang].address.label}
              </p>
              <p className="text-neutral-600">
                {CONTACT_INFO[lang].address.value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
