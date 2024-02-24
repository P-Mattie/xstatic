//          LOGO
document.addEventListener("DOMContentLoaded", function () {
  const xOfLogo = document.querySelector(".logo__x");
  const restOfLogo = document.querySelector(".logo__rest");
  const ticketsBtn = document.querySelector(".tickets-btn");

  setTimeout(function () {
    restOfLogo.classList.add("expand--logo");
    xOfLogo.classList.add("resize-x");
  }, 500);

  setTimeout(function () {
    ticketsBtn.classList.add("tickets-btn-show");
  }, 1000);
});
