function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/profilepic.jpg")
  } else {
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/75709874?s=400&u=9463438891b1746c6610dc79a4147e8a25633054&v=4"
    )
  }
}
