const skills = {
  pt: [
    "HTML • CSS • JavaScript",
    "UI/UX • Design Gráfico",
    "Back-end (Django / Python)",
    "Pacote Office (Excel, Word, PowerPoint)",
    "Área Administrativa",
    "Organização • Proatividade"
  ],
  en: [
    "HTML • CSS • JavaScript",
    "UI/UX • Graphic Design",
    "Back-end (Django / Python)",
    "Microsoft Office Suite",
    "Administrative Skills",
    "Organization • Proactivity"
  ]
};

function renderSkills(lang) {
  const container = document.getElementById("skills-cards");
  container.innerHTML = "";
  skills[lang].forEach(skill => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = skill;
    container.appendChild(card);
  });
}

function setLang(lang) {
  if (lang === "pt") {
    document.getElementById("about-title").textContent = "Sobre mim";
    document.getElementById("skills-title").textContent = "Habilidades";
    document.getElementById("subtitle").textContent =
      "Portfólio • Tecnologia • Design • Administrativo";
    document.getElementById("about-text").textContent =
      "Sou formado em Análise e Desenvolvimento de Sistemas, com interesse em tecnologia, design e área administrativa.";
  } else {
    document.getElementById("about-title").textContent = "About me";
    document.getElementById("skills-title").textContent = "Skills";
    document.getElementById("subtitle").textContent =
      "Portfolio • Technology • Design • Administrative";
    document.getElementById("about-text").textContent =
      "I hold a degree in Systems Analysis and Development, with interest in technology, design and administrative areas.";
  }
  renderSkills(lang);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// inicial
setLang("pt");