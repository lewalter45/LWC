const checkbox = document.getElementById("menu-toggle");
checkbox.addEventListener("change", toggleMenu);

function toggleMenu() {
  const menuItems = document.querySelector(".menu-items");
  if (this.checked) {
    menuItems.style.transform = "translateX(0)";
  } else {
    menuItems.style.transform = "translateX(-150%)";
  }
}
