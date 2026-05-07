import hero from "../assets/hero.webp";
import kitchenImage from "../assets/kitchen.webp";
import bathroomImage from "../assets/bathroom.webp";
import livingRoomImage from "../assets/living-room.webp";

import portfolio1 from "../assets/portfolio1.webp";
import portfolio2 from "../assets/portfolio2.webp";
import portfolio3 from "../assets/portfolio3.webp";
import portfolio4 from "../assets/portfolio4.webp";
import portfolio5 from "../assets/portfolio5.webp";
import portfolio6 from "../assets/portfolio6.webp";

import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LANGS = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "ku", label: "KU" },
];

export const LINKS = {
  en: [
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Portfolio",
      link: "#portfolio",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Reviews",
      link: "#reviews",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ],
  ar: [
    { name: "الخدمات", link: "#services" },
    { name: "الأعمال", link: "#portfolio" },
    { name: "من نحن", link: "#about" },
    { name: "المراجعات", link: "#reviews" },
    { name: "اتصل بنا", link: "#contact" },
  ],
  ku: [
    { name: "خزمەتگوزاریەکان", link: "#services" },
    { name: "کارەکان", link: "#portfolio" },
    { name: "دەربارەی ئێمە", link: "#about" },
    { name: "پێداچوونەوەکان", link: "#reviews" },
    { name: "پەیوەندی", link: "#contact" },
  ],
};

export const HERO_CONTENT = {
  en: {
    title: "VastuSpaze",
    subtitle: "Reimagine Your Space with Expert Renovation Services",
    image: hero,
  },
  ar: {
    title: "فاستو سبيز",
    subtitle: "أعد تصور مساحتك مع خدمات التجديد الاحترافية",
    image: hero,
  },
  ku: {
    title: "VastuSpaze",
    subtitle: "شوێنەکەت نوێ بکەوە بە خزمەتگوزاری نووسازی پیشەیی",
    image: hero,
  },
};

export const SERVICES_CONTENT = {
  en: [
    {
      h2_tag: "Our Home Renovation Services",
      title: "Kitchen Renovation",
      description:
        "Transform your kitchen into a modern, functional space with our comprehensive renovation services. From custom cabinetry to state-of-the-art appliances, we handle all aspects of kitchen remodeling.",
      image: kitchenImage,
      alt: "Kitchen Renovation",
    },
    {
      title: "Bathroom Renovation",
      description:
        "Create a spa-like retreat in your home with our bathroom renovation services. We offer luxurious fixtures, custom tiling, and innovative designs to elevate your bathroom experience.",
      image: bathroomImage,
      alt: "Bathroom Renovation",
    },
    {
      title: "Living Room Renovation",
      description:
        "Update your living room with our expert renovation services. We offer custom designs, new flooring options, and stylish lighting solutions to create a warm and inviting space for your family and guests.",
      image: livingRoomImage,
      alt: "Living Room Renovation",
    },
  ],

  ar: [
    {
      h2_tag: "خدمات تجديد المنازل",
      title: "تجديد المطبخ",
      description:
        ".حوّل مطبخك إلى مساحة حديثة وعملية مع خدمات التجديد الشاملة التي نقدمها. من الخزائن المخصصة إلى الأجهزة المتطورة، نتولى جميع جوانب إعادة تصميم المطبخ",
      image: kitchenImage,
      alt: "تجديد المطبخ",
    },
    {
      title: "تجديد الحمام",
      description:
        "أنشئ ملاذًا يشبه السبا في منزلك مع خدمات تجديد الحمام الخاصة بنا. نقدم تجهيزات فاخرة، وبلاط مخصص، وتصاميم مبتكرة لرفع مستوى تجربة الحمام لديك.",
      image: bathroomImage,
      alt: "تجديد الحمام",
    },
    {
      title: "تجديد غرفة المعيشة",
      description:
        "حدّث غرفة المعيشة لديك مع خدمات التجديد الاحترافية. نقدم تصاميم مخصصة، وخيارات أرضيات جديدة، وحلول إضاءة أنيقة لإنشاء مساحة دافئة وجذابة لعائلتك وضيوفك.",
      image: livingRoomImage,
      alt: "تجديد غرفة المعيشة",
    },
  ],
  ku: [
    {
      h2_tag: "خزمەتگوزاری نووسازی ماڵ",
      title: "نووسازی چێشتخانە",
      description:
        "چێشتخانەکەت بگۆڕە بۆ شوێنێکی نوێ و کارامە بە خزمەتگوزاری نووسازی تەواو. لە کابینەتە تایبەتییەکانەوە بۆ ئامێرە پێشکەوتووەکان، هەموو قۆناغەکانی نووسازی چێشتخانە بەڕێوە دەبەین.",
      image: kitchenImage,
      alt: "نووسازی چێشتخانە",
    },
    {
      title: "نووسازی حەمام",
      description:
        "لە ماڵەکەتدا شوێنێکی ئارام وەک سپا دروست بکە بە خزمەتگوزاری نووسازی حەمام. ئێمە ئامێری لوکس، کاشی تایبەتی و دیزاینی نوێ پێشکەش دەکەین بۆ بەرزکردنەوەی ئەزموونی حەمامەکەت.",
      image: bathroomImage,
      alt: "نووسازی حەمام",
    },
    {
      title: "نووسازی ژووری دانیشتن",
      description:
        "ژووری دانیشتنەکەت نوێ بکەوە بە خزمەتگوزاری نووسازی پیشەیی. دیزاینی تایبەتی، هەڵبژاردنی زەوی نوێ و چارەسەری ڕووناکی شیک پێشکەش دەکەین بۆ دروستکردنی شوێنێکی گەرم و دڵخواز.",
      image: livingRoomImage,
      alt: "نووسازی ژووری دانیشتن",
    },
  ],
};
export const PORTFOLIO_PROJECTS = {
  en: [
    {
      h2_tag: "Portfolio",
      id: 1,
      name: "Modern Kitchen Renovation",
      description:
        "A complete overhaul of a traditional kitchen, featuring custom cabinetry, granite countertops, and state-of-the-art appliances.",
      image: portfolio1,
      link: "#",
    },
    {
      id: 2,
      name: "Luxurious Bathroom Remodel",
      description:
        "Transformed an outdated bathroom into a spa-like retreat with marble tiling, a glass shower, and modern fixtures.",
      image: portfolio2,
      link: "#",
    },
    {
      id: 3,
      name: "Outdoor Living Space",
      description:
        "Designed a beautiful outdoor living area, complete with a pergola, fire pit, and cozy seating for entertainment.",
      image: portfolio3,
      link: "#",
    },
    {
      id: 4,
      name: "Elegant Living Room Update",
      description:
        "Updated a living room with new flooring, stylish lighting, and custom-built shelving units.",
      image: portfolio4,
      link: "#",
    },
    {
      id: 5,
      name: "Basement Conversion",
      description:
        "Converted an unused basement into a modern, multi-functional space including a home theater, gym, and guest bedroom.",
      image: portfolio5,
      link: "#",
    },
    {
      id: 6,
      name: "Home Office Transformation",
      description:
        "Created a sleek and functional home office, optimizing space with ergonomic furniture, ample storage, and modern decor.",
      image: portfolio6,
      link: "#",
    },
  ],

  ar: [
    {
      h2_tag: "الأعمال",
      id: 1,
      name: "تجديد مطبخ حديث",
      description:
        "إعادة تصميم كاملة لمطبخ تقليدي، مع خزائن مخصصة وأسـطح من الغرانيت وأجهزة حديثة متطورة.",
      image: portfolio1,
      link: "#",
    },
    {
      id: 2,
      name: "تجديد حمام فاخر",
      description:
        "تحويل حمام قديم إلى مساحة تشبه السبا مع بلاط رخامي ودش زجاجي وتجهيزات حديثة.",
      image: portfolio2,
      link: "#",
    },
    {
      id: 3,
      name: "مساحة معيشة خارجية",
      description:
        "تصميم مساحة خارجية جميلة مع عريشة ومدفأة ومقاعد مريحة للترفيه.",
      image: portfolio3,
      link: "#",
    },
    {
      id: 4,
      name: "تحديث غرفة معيشة أنيقة",
      description:
        "تحديث غرفة المعيشة بأرضيات جديدة وإضاءة أنيقة ووحدات رفوف مخصصة.",
      image: portfolio4,
      link: "#",
    },
    {
      id: 5,
      name: "تحويل القبو",
      description:
        "تحويل قبو غير مستخدم إلى مساحة حديثة متعددة الوظائف تشمل سينما منزلية وصالة رياضية وغرفة ضيوف.",
      image: portfolio5,
      link: "#",
    },
    {
      id: 6,
      name: "تحويل مكتب منزلي",
      description:
        "إنشاء مكتب منزلي أنيق وعملي مع أثاث مريح ومساحات تخزين واسعة وديكور حديث.",
      image: portfolio6,
      link: "#",
    },
  ],

  ku: [
    {
      h2_tag: "کارەکان",
      id: 1,
      name: "نووسازی چێشتخانەی نوێ",
      description:
        "نووسازی تەواوی چێشتخانەیەکی کۆن بە کابینەتە تایبەتی و سەرپۆشی گرانیت و ئامێرە پێشکەوتووەکان.",
      image: portfolio1,
      link: "#",
    },
    {
      id: 2,
      name: "نووسازی حەمامی لوکس",
      description:
        "گۆڕینی حەمامێکی کۆن بۆ شوێنێکی ئارام وەک سپا بە کاشی مرمەر و دووشی شیشەیی و ئامێری نوێ.",
      image: portfolio2,
      link: "#",
    },
    {
      id: 3,
      name: "شوێنی ژیانی دەرەوە",
      description:
        "دیزاینی شوێنێکی دەرەوەی جوان بە پەرگۆلا و ئاگری ناوەڕاست و دانیشتنی دڵخواز.",
      image: portfolio3,
      link: "#",
    },
    {
      id: 4,
      name: "نوێکردنەوەی ژووری دانیشتن",
      description:
        "نوێکردنەوەی ژووری دانیشتن بە زەوی نوێ و ڕووناکی شیک و ڕەفە دروستکراوە تایبەتی.",
      image: portfolio4,
      link: "#",
    },
    {
      id: 5,
      name: "گۆڕینی ژێرزەمین",
      description:
        "گۆڕینی ژێرزەمینێکی بەکارهێنران نەبوو بۆ شوێنێکی نوێی فرەکارە وەک سینەمای ماڵ و جیم و ژووری میوان.",
      image: portfolio5,
      link: "#",
    },
    {
      id: 6,
      name: "گۆڕینی ئۆفیسی ماڵ",
      description:
        "دروستکردنی ئۆفیسی ماڵێکی شیک و کارامە بە مۆبێلی ڕەحەت و شوێنی هەڵگرتن و دیکۆری نوێ.",
      image: portfolio6,
      link: "#",
    },
  ],
};
export const ABOUT = {
  en: {
    name: "About",
    text: "We provide professional home renovation services with a strong focus on quality and modern design. Our team works to turn your ideas into reality through innovative solutions tailored to your needs, giving your home a modern and distinctive look.",
  },

  ar: {
    name: "من نحن",
    text: "نحن نقدم خدمات تجديد المنازل باحترافية عالية، مع التركيز على الجودة والتصميم العصري. يعمل فريقنا على تحويل أفكارك إلى واقع من خلال حلول مبتكرة تناسب احتياجاتك وتمنح منزلك مظهراً حديثاً ومميزاً.",
  },

  ku: {
    name: "دەربارەی ئێمە",
    text: "ئێمە خزمەتگوزاری نووسازی ماڵ بە شێوەیەکی پیشەیی پێشکەش دەکەین، بە گرنگیدان بە کوالیتی و دیزاینی نوێ. تیمەکەمان کار دەکات بۆ گۆڕینی بیرۆکەکانت بۆ ڕاستی بە چارەسەری نوێ و گونجاو.",
  },
};
export const REVIEWS = {
  en: {
    h2_tag: "Reviews",
    text: "Hear what our clients have to say about their experiences with VastuSpaze. We take pride in our work and are committed to delivering top-notch home renovation services.",
    reviews: [
      {
        name: "Alice Johnson",
        title: "Homeowner",
        review:
          "VastuSpaze transformed our outdated kitchen into a modern masterpiece. The team was professional, attentive to our needs, and delivered beyond our expectations. We couldn't be happier with the results!",
        image: user1,
      },
      {
        name: "Bob Smith",
        title: "Homeowner",
        review:
          "Our bathroom renovation was seamless, thanks to VastuSpaze. They took care of everything from design to execution, and the attention to detail was impeccable. Highly recommended!",
        image: user2,
      },
      {
        name: "Carla Mendes",
        title: "Homeowner",
        review:
          "VastuSpaze helped us create the perfect outdoor living space. Their creativity and craftsmanship turned our backyard into a beautiful oasis. It's now our favorite place to relax and entertain guests.",
        image: user3,
      },
      {
        name: "David Lee",
        title: "Homeowner",
        review:
          "The living room update exceeded our expectations. VastuSpaze's team was skilled and communicative, ensuring a smooth renovation process. The new design has brought a fresh, modern look to our home.",
        image: user4,
      },
      {
        name: "Ella Fernandez",
        title: "Homeowner",
        review:
          "From start to finish, VastuSpaze was a pleasure to work with. They listened to our vision and brought it to life with expert craftsmanship. Our home office is now a stylish and functional space.",
        image: user5,
      },
      {
        name: "Frank Wilson",
        title: "Homeowner",
        review:
          "VastuSpaze did an amazing job on our basement conversion. They created a cozy, multi-functional space that our family loves. The team was professional and delivered on time and within budget.",
        image: user6,
      },
    ],
  },

  ar: {
    h2_tag: "المراجعات",
    text: "استمع إلى ما يقوله عملاؤنا عن تجربتهم مع VastuSpaze. نحن نفخر بعملنا وملتزمون بتقديم أفضل خدمات تجديد المنازل.",
    reviews: [
      {
        name: "Alice Johnson",
        title: "مالك منزل",
        review:
          "قامت VastuSpaze بتحويل مطبخنا القديم إلى تحفة حديثة. كان الفريق محترفًا ويهتم بتفاصيل احتياجاتنا، وكانت النتيجة أفضل من توقعاتنا.",
        image: user1,
      },
      {
        name: "Bob Smith",
        title: "مالك منزل",
        review:
          "تم تجديد حمامنا بسلاسة بفضل VastuSpaze. اهتموا بكل شيء من التصميم إلى التنفيذ مع دقة عالية في التفاصيل.",
        image: user2,
      },
      {
        name: "Carla Mendes",
        title: "مالك منزل",
        review:
          "ساعدتنا VastuSpaze في إنشاء مساحة خارجية مثالية. تحولت حديقتنا إلى مكان جميل للاسترخاء واستقبال الضيوف.",
        image: user3,
      },
      {
        name: "David Lee",
        title: "مالك منزل",
        review:
          "تحديث غرفة المعيشة تجاوز توقعاتنا. كان الفريق محترفًا والتصميم الجديد أعطى منزلنا مظهرًا عصريًا.",
        image: user4,
      },
      {
        name: "Ella Fernandez",
        title: "مالك منزل",
        review:
          "كان العمل مع VastuSpaze تجربة رائعة. استمعوا إلى رؤيتنا وحولوها إلى واقع باحترافية.",
        image: user5,
      },
      {
        name: "Frank Wilson",
        title: "مالك منزل",
        review:
          "قامت VastuSpaze بعمل مذهل في تحويل القبو إلى مساحة متعددة الاستخدامات تحبها عائلتنا.",
        image: user6,
      },
    ],
  },

  ku: {
    h2_tag: "پێداچوونەوەکان",
    text: "گوێ لە وتەی کڕیارەکانمان بگرە دەربارەی ئەزموونیان لەگەڵ VastuSpaze. ئێمە شانازی بە کارەکانمان دەکەین.",
    reviews: [
      {
        name: "Alice Johnson",
        title: "خاوەنی ماڵ",
        review:
          "VastuSpaze چێشتخانەی کۆنمان گۆڕی بۆ دیزاینێکی نوێ. تیمەکە پیشەیی بوو و ئەنجامەکان زۆر باش بوون.",
        image: user1,
      },
      {
        name: "Bob Smith",
        title: "خاوەنی ماڵ",
        review:
          "نووسازی حەمامەکەمان بە ئاسانی ئەنجام درا. هەموو قۆناغەکان بە دقت جێبەجێ کران.",
        image: user2,
      },
      {
        name: "Carla Mendes",
        title: "خاوەنی ماڵ",
        review:
          "VastuSpaze یارمەتیمان دا شوێنێکی دەرەوەی جوان دروست بکەین بۆ پشوودان.",
        image: user3,
      },
      {
        name: "David Lee",
        title: "خاوەنی ماڵ",
        review:
          "نوێکردنەوەی ژووری دانیشتن زۆر باش بوو و ماڵەکەمان مۆدێرنتر کرد.",
        image: user4,
      },
      {
        name: "Ella Fernandez",
        title: "خاوەنی ماڵ",
        review:
          "کارکردن لەگەڵ VastuSpaze ئەزموونێکی باش بوو و بیرۆکەکانمان بە باشی جێبەجێ کران.",
        image: user5,
      },
      {
        name: "Frank Wilson",
        title: "خاوەنی ماڵ",
        review:
          "ژێرزەمینەکەمان گۆڕدرا بۆ شوێنێکی فرەکارە و خێزانەکەمان زۆر خۆشحاڵ بوو.",
        image: user6,
      },
    ],
  },
};

export const CONTACT_INFO = {
  en: {
    h2_tag: "Contact Us",
    text: "Have questions or need more information? Get in touch with us, and we ll be happy to assist you.",
    phone: {
      label: "Phone",
      value: "(123) 456-7890",
    },
    email: {
      label: "Email",
      value: "info@vastuspaze.com",
    },
    address: {
      label: "Address",
      value: "1234 Renovation Ave, Suite 100, Your City, ST 56789",
    },
  },

  ar: {
    h2_tag: "اتصل بنا",
    text: "هل لديك أسئلة أو تحتاج إلى مزيد من المعلومات؟ تواصل معنا وسنكون سعداء بمساعدتك.",
    phone: {
      label: "الهاتف",
      value: "(123) 456-7890",
    },
    email: {
      label: "البريد الإلكتروني",
      value: "info@vastuspaze.com",
    },
    address: {
      label: "العنوان",
      value: "1234 شارع التجديد، جناح 100، مدينتك، الولاية 56789",
    },
  },

  ku: {
    h2_tag: "پەیوەندی بکە بە ئێمە",
    text: "پرسیارت هەیە یان پێویستت بە زانیاری زیاتر هەیە؟ پەیوەندیمان پێوە بکە و خۆشحاڵ دەبین یارمەتیت بدەین.",
    phone: {
      label: "تەلەفۆن",
      value: "(123) 456-7890",
    },
    email: {
      label: "ئیمەیڵ",
      value: "info@vastuspaze.com",
    },
    address: {
      label: "ناونیشان",
      value: "1234 ڕێگای نووسازی، سوێت 100، شارەکەت، ST 56789",
    },
  },
};
