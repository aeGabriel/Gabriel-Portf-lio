let currentLang = "pt";
let darkMode = false;

// TEXTOS EM PT E EN
const content = {
  pt: {
    subtitle: "Portfólio • Tecnologia • Design • Administrativo",

    aboutTitle: "Sobre mim",
    aboutText:
      "Sou formado em Análise e Desenvolvimento de Sistemas, com interesse em tecnologia, design e área administrativa. Gosto de criar interfaces bonitas, funcionais e organizadas, unindo lógica e criatividade.",

    skillsTitle: "Habilidades",

    footer: "© 2025 • Gabriel"
  },

  en: {
    subtitle: "Portfolio • Technology • Design • Administrative",

    aboutTitle: "About me",
    aboutText:
      "I have a degree in Systems Analysis and Development, with interests in technology, design, and administrative areas. I enjoy creating beautiful, functional, and well-organized interfaces that combine logic and creativity.",

    skillsTitle: "Skills",

    footer: "© 2025 • Gabriel"
  }
};

// APLICA O IDIOMA
function setLang(lang) {
  currentLang = lang;

  document.getElementById("subtitle").innerText =
    content[lang].subtitle;

  document.getElementById("about-title").innerText =
    content[lang].aboutTitle;

  document.getElementById("about-text").innerText =
    content[lang].aboutText;

  document.getElementById("skills-title").innerText =
    content[lang].skillsTitle;

  document.querySelector("footer p").innerText =
    content[lang].footer;

  animateSections();
}

// TEMA CLARO / ESCURO
function toggleTheme() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark");
}

// ANIMAÇÃO SUAVE AO TROCAR IDIOMA
function animateSections() {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";

    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 200);
  });
}

// ANIMAÇÃO AO CARREGAR A PÁGINA
window.onload = () => {
  setLang("pt");

  const header = document.querySelector("header");
  header.style.opacity = "0";
  header.style.transform = "translateY(-20px)";

  setTimeout(() => {
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
  }, 200);
};