function navbarFixed() {
  var navbar = document.querySelector("nav");
  if (navbar) {
    document.body.style.paddingTop = navbar.offsetHeight + "px";
  }
  console.log("Navbar height adjusted.");
}

document.addEventListener("DOMContentLoaded", navbarFixed);
window.addEventListener("resize", navbarFixed);

const tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 3000, yoyo: true }
)
tween.start();