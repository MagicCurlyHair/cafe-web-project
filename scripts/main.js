const sectionMain = document.getElementById("section-main");
console.log(sectionMain.childNodes[1]);
function renderMenu() {
  sectionMain.childNodes[1].style.display = "none";
}

let menuBtn = document.getElementById("menu-button");

menuBtn.addEventListener("click", renderMenu);
