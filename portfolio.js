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

const texts = {
  pt: {
    aboutTitle: "Sobre mim",
    skillsTitle: "Habilidades",
    subtitle: "Front-End Developer • UI/UX Designer • Design Gráfico • Conteúdo digital • Administrativo",
    aboutText: `Sou formado no curso Técnico em Desenvolvimento de Sistemas pelo SENAI de São José do Rio Preto.
Tenho experiência em Front-End, com conhecimentos em HTML, CSS, JavaScript, Python e MySQL.

Tenho grande interesse em Design (UI/UX e Design Gráfico) e Front-End, áreas onde posso unir criatividade e tecnologia para criar interfaces bonitas, intuitivas e funcionais.

Também tenho interesse na área administrativa, valorizando organização, proatividade e aprendizado contínuo.

Além disso, possuo experiência com tradução de vídeos e criação de conteúdo digital.`
  },
  en: {
    aboutTitle: "About me",
    skillsTitle: "Skills",
    subtitle: "Front-End Developer • UI/UX Designer • Graphic Design • Digital Content • Administrative",
    aboutText: `I graduated in the Technical course in Systems Development from SENAI of São José do Rio Preto.

I have experience in Front-End, with knowledge in HTML, CSS, JavaScript, Python and MySQL.

I have a great interest in Design (UI/UX and Graphic Design) and Front-End, areas where I can combine creativity and technology to create beautiful, intuitive and functional interfaces.

I am also interested in the administrative area, valuing organization, proactivity and continuous learning.

In addition, I have experience with video translation and digital content creation.`
  }
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
  const t = texts[lang];
  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("skills-title").textContent = t.skillsTitle;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("about-text").textContent = t.aboutText;

  renderSkills(lang);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Eventos de botões
document.getElementById("btn-pt").addEventListener("click", () => setLang("pt"));
document.getElementById("btn-en").addEventListener("click", () => setLang("en"));
document.getElementById("btn-theme").addEventListener("click", toggleTheme);

// Inicializa com português
setLang("pt");