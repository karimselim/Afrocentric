import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Black Egyptian Pharaohs",
    icon: web,
  },
  {
    title: "Hieroglyphs Translated Wrong",
    icon: mobile,
  },
  {
    title: "Egypt Was a Black Kingdom",
    icon: backend,
  },
  {
    title: "Afrocentric-Egyptian Connection",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "The True Pharaohs",
    company_name: "Egyptian Kings, Not Nubian Rulers.",
    icon: starbucks,
    iconBg: "#0A1F44",
    date: "The Crown Was Born in Memphis, Not Napata",
    points: [
      "DNA analysis proves that ancient Egyptian rulers were genetically distinct from sub-Saharan Africans.",
      " The 25th Dynasty was a brief Nubian rule, not Egypt’s foundation.",
      " No ancient Egyptian texts describe their rulers as Black Africans.",
      " Egyptians depicted Nubians as foreigners in their art.",
    ],
  },
  {
    title: "Decoding the Truth",
    company_name: "Hieroglyphs Tell Egypt’s Own Story.",
    icon: tesla,
    iconBg: "#0A1F44",
    date: "Ancient Voices Need No Afrocentric Interpreter",
    points: [
      "Champollion’s translation was based on extensive linguistic analysis.",
      "No hieroglyphic inscriptions mention a Black African identity for Egyptians.",
      "Ancient Egyptian texts describe their civilization as unique, not linked to sub-Saharan cultures.",
      "Modern scholars confirm that Afrocentric translations are fabricated.",
    ],
  },
  {
    title: "Egypt’s True Identity",
    company_name: "A Nation of the Nile, Not the Jungle.",
    icon: shopify,
    iconBg: "#0A1F44",
    date: "From Delta to Cataracts, Egypt Was Always Egypt",
    points: [
      "Ancient Egyptians depicted themselves as distinct from Black Africans.",
      "DNA studies prove that the Egyptian gene is unique, and has no relation to African or sub-Saharan genes.",
      "Egyptian culture, language, and governance evolved independently.",
      "Greek and Roman historians described Egyptians as Mediterranean people.",
    ],
  },
  {
    title: "The Broken Link",
    company_name: "Trade, Not Ancestry.",
    icon: meta,
    iconBg: "#0A1F44",
    date: "Shared Borders Don’t Mean Shared Origins",
    points: [
      "Trade routes connected Egypt to Africa, but cultural exchange was minimal.",
      "No shared religious or linguistic systems with sub-Saharan cultures.",
      "Art and architecture remained uniquely Egyptian across millennia.",
      " Afrocentrists ignore overwhelming archaeological and textual evidence.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "There is no evidence to support the idea that ancient Egyptians were Black Africans. Ancient Egyptians were an ancient Mediterranean people, not sub-Saharan Africans.",
    name: "Zahi Hawass",
    designation: "Former Minister of Antiquities,",
    company: "Egypt",
  },
  {
    testimonial:
      "Afrocentric claims undermine the achievements of indigenous civilizations by claiming that their monumental works were created by external forces.",
    name: "Stephanie Halmhofer",
    designation: "Archaeologist and Researcher, ",
    company: "Canada",
  },
  {
    testimonial:
      "The identity of the ancient Egyptians is much more complex than simply categorizing them as African or non-African. The people of Egypt were culturally diverse.",
    name: "Peter Der Manuelian",
    designation: "Professor of Egyptology, ",
    company: "Harvard University",
  },
];

const projects = [
  {
    name: "Ancestral Heritage",
    description:
      "Egypt's traditions, from arts to practices, are key to our identity, reflecting the essence of ancient civilization. Preserving them connects us to our roots and shapes who we are today.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://ich.unesco.org/en/RL/tahteeb-stick-game-01189",
  },
  {
    name: "Architectural Identity",
    description:
      "Egypt’s ancient architectural marvels, from the pyramids to the temples, have shaped the way we build today. The Grand Egyptian Museum draws on this rich legacy.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://egyresmag.com/%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D9%81-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A-%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1/",
  },
  {
    name: "Ancient Roots",
    description:
      "The Grand Egyptian Museum symbolizes Egypt's rich heritage, challenging modern misinterpretations and emphasizing its unique identity rooted in ancient civilization.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://youtu.be/-r2PRe3L-lw?si=evKRNGvUuK-7astr",
  },
];

export { services, technologies, experiences, testimonials, projects };
