const btnBar = document.getElementById("bar-line");
const menuBar = document.getElementById("menu-bar");
const btnClose = document.getElementById("btn-close");

if (btnBar) {
  btnBar.addEventListener("click", () => {
    menuBar.classList.add("show");
  });
}

if (btnClose) {
  btnClose.addEventListener("click", () => {
    menuBar.classList.remove("show");
  });
}
