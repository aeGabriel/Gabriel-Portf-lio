function toggleTheme() {
  document.body.classList.toggle("dark");
}

function setLang(lang) {
  if (lang === "pt") {
    document.getElementById("subtitle").innerText =
      "Portfólio • Tecnologia • Design • Administrativo";

    document.getElementById("about-title").innerText = "Sobre mim";
    document.getElementById("about-text").innerText =
      "Sou formado em Análise e Desenvolvimento de Sistemas, com interesse em tecnologia, design e área administrativa. Gosto de criar interfaces bonitas, funcionais e organizadas.";

    document.getElementById("skills-title").innerText = "Habilidades";
  } else {
    document.getElementById("subtitle").innerText =
      "Portfolio • Technology • Design • Administrative";

    document.getElementById("about-title").innerText = "About me";
    document.getElementById("about-text").innerText =
      "I have a degree in Systems Analysis and Development, with interest in technology, design, and administrative roles. I enjoy creating beautiful, functional, and organized interfaces.";

    document.getElementById("skills-title").innerText = "Skills";
  }
}