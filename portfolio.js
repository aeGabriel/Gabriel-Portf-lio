function toggleTheme() {
  document.body.classList.toggle("dark");
}

function setLang(lang) {
  if (lang === "pt") {
    document.getElementById("subtitle").innerText =
      "Portfólio • Tecnologia • Design • Administrativo";

    document.getElementById("about-title").innerText = "Sobre mim";
    document.getElementById("about-text").innerText =
      "Sou formado em Análise e Desenvolvimento de Sistemas, com interesse em tecnologia, design e área administrativa. Gosto de criar interfaces bonitas, organizadas e funcionais.";

    document.getElementById("skills-title").innerText = "Habilidades";
    document.getElementById("skills-list").innerHTML = `
      <li>HTML • CSS • JavaScript</li>
      <li>Design Gráfico • UI/UX</li>
      <li>Back-end (Django / Python)</li>
      <li>Pacote Office (Excel, Word, PowerPoint)</li>
      <li>Área Administrativa e Organização</li>
      <li>Proatividade e Aprendizado rápido</li>
    `;

    document.getElementById("links-title").innerText = "Links";
  } else {
    document.getElementById("subtitle").innerText =
      "Portfolio • Technology • Design • Administrative";

    document.getElementById("about-title").innerText = "About me";
    document.getElementById("about-text").innerText =
      "I have a degree in Systems Analysis and Development, with interest in technology, design, and administrative roles. I enjoy creating clean, organized and visually pleasing interfaces.";

    document.getElementById("skills-title").innerText = "Skills";
    document.getElementById("skills-list").innerHTML = `
      <li>HTML • CSS • JavaScript</li>
      <li>Graphic Design • UI/UX</li>
      <li>Back-end (Django / Python)</li>
      <li>Microsoft Office (Excel, Word, PowerPoint)</li>
      <li>Administrative Organization</li>
      <li>Proactivity and Fast Learning</li>
    `;

    document.getElementById("links-title").innerText = "Links";
  }
}

// idioma padrão
setLang("pt");