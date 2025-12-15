// Tema claro / escuro
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Animação suave ao carregar
window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
  setLang("pt");
});

// Conteúdo em PT e EN
const content = {
  pt: {
    subtitle: "Portfólio • Tecnologia • Design • Administrativo",
    aboutTitle: "Sobre mim",
    aboutText: "Sou formado em Análise e Desenvolvimento de Sistemas, com interesse em tecnologia, design e área administrativa. Gosto de interfaces clean, criativas e bem organizadas.",
    skillsTitle: "Habilidades",
    skills: [
      "HTML • CSS • JavaScript",
      "Design Gráfico • UI/UX",
      "Back-end (Django / Python)",
      "Pacote Office (Excel, Word, PowerPoint)",
      "Área Administrativa",
      "Organização • Proatividade"
    ],
    linksTitle: "Links"
  },

  en: {
    subtitle: "Portfolio • Technology • Design • Administrative",
    aboutTitle: "About me",
    aboutText: "I have a degree in Systems Analysis and Development, with interest in technology, design and administrative roles. I enjoy creating clean, creative and well-organized interfaces.",
    skillsTitle: "Skills",
    skills: [
      "HTML • CSS • JavaScript",
      "Graphic Design • UI/UX",
      "Back-end (Django / Python)",
      "Microsoft Office (Excel, Word, PowerPoint)",
      "Administrative Area",
      "Organization • Proactivity"
    ],
    linksTitle: "Links"
  }
};

// Troca de idioma
function setLang(lang) {
  document.getElementById("subtitle").innerText = content[lang].subtitle;
  document.getElementById("about-title").innerText = content[lang].aboutTitle;
  document.getElementById("about-text").innerText = content[lang].aboutText;
  document.getElementById("skills-title").innerText = content[lang].skillsTitle;
  document.getElementById("links-title").innerText = content[lang].linksTitle;

  const skillsList = document.getElementById("skills-list");
  skillsList.innerHTML = "";

  content[lang].skills.forEach(skill => {
    const li = document.createElement("li");
    li.innerText = skill;
    li.classList.add("skill-item");
    skillsList.appendChild(li);
  });
}