function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Avatar tema claro")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Avatar tema escuro")
  }

  //pegar a tag img
  //se tiver light mode, adicionar a imagem light
  //se tiver sem light mode, manter a imagem normal
}
