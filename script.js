//          LOADING SCREEN

const button = document.querySelector(".tickets-btn");
console.log(button);
button.addEventListener("mouseenter", () => {
  console.log("Mouse entered button");
});

button.addEventListener("mouseleave", () => {
  console.log("Mouse left button");
});

document.addEventListener("DOMContentLoaded", function () {
  const xOfLogoLoading = document.querySelector(".logo__x--loading");
  const restOfLogoLoading = document.querySelector(".logo__rest--loading");
  const navLogoLoading = document.querySelector(".nav__logo--loading");
  const loadingScreen = document.querySelector(".loading-screen");

  setTimeout(function () {
    restOfLogoLoading.classList.add("expand--logo");
    xOfLogoLoading.classList.add("resize-x");
  }, 500);

  setTimeout(function () {
    restOfLogoLoading.classList.remove("expand--logo");
    xOfLogoLoading.classList.remove("resize-x");
  }, 2000);

  setTimeout(function () {
    navLogoLoading.classList.add("color-fade");
  }, 2700);

  setTimeout(function () {
    navLogoLoading.classList.add("color-dark");
    navLogoLoading.style.overflow = "visible";
    restOfLogoLoading.style.color = "#ffffff00";
    xOfLogoLoading.classList.add("x--maximize");
  }, 3000);

  setTimeout(function () {
    navLogoLoading.classList.add("opacity-zero");
    loadingScreen.classList.add("opacity-zero");
  }, 3300);

  setTimeout(function () {
    loadingScreen.style.display = "none";
  }, 3900);
});

//        ON PAGE LOAD

document.addEventListener("DOMContentLoaded", function () {
  const xOfLogo = document.querySelector(".logo__x");
  const restOfLogo = document.querySelector(".logo__rest");
  const ticketsBtn = document.querySelector(".tickets-btn");

  setTimeout(function () {
    restOfLogo.classList.add("expand--logo");
    xOfLogo.classList.add("resize-x");
  }, 3600);

  setTimeout(function () {
    ticketsBtn.classList.add("tickets-btn-show");
  }, 3800);
});

//        NAV

const navItems = document.querySelectorAll(".nav__item");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((navItem) => {
      navItem.classList.remove("nav__item--active");
    });
    item.classList.add("nav__item--active");
  });
});
