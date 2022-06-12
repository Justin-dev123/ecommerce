const menu = document.querySelector(".menu");

document.addEventListener("click", (e) => {
  const el = e.target;

  if (el.classList.contains("btn-menu")) {
    menu.style.display = "block";
  }
  if (el.classList.contains("btn-close")) {
    menu.style.display = "none";
  }
});
