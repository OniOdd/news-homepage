"use strict";

const burgerMenuBtn = document.getElementById("js-burger-menu");

burgerMenuBtn.addEventListener("click", () => {
  const bodyElem = document.body;
  const navMenuElem = document.getElementById("js-menu");

  bodyElem.classList.toggle("lock-screen");
  navMenuElem.classList.toggle("show-menu");
  burgerMenuBtn.classList.toggle("close-menu");
});
