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
      "I graduated from the Technical course in Systems Development by SENAI of São José do Rio Preto.

I have experience in Front-End, with knowledge in HTML, CSS, JavaScript, Python and MySQL.

I have a great interest in Design (UI/UX and Graphic Design) and Front-End, areas where I can combine creativity and technology to create beautiful, intuitive and functional interfaces.

I am also interested in the administrative area, valuing organization, proactivity and continuous learning.

In addition, I have experience with video translation and digital content creation.";
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