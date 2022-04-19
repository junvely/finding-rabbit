"use strict";

const findRabbit = document.querySelector(".findRabbit");
const findPuppy = document.querySelector(".findPuppy");
const rabbit = document.querySelector("#rabbit");
const puppy = document.querySelector("#puppy");
const scrollTop = document.querySelector(".scrollTop");

findRabbit.addEventListener("click", () => {
  rabbit.scrollIntoView({ behavior: "smooth", block: "center" });
});

findPuppy.addEventListener("click", () => {
  puppy.scrollIntoView({ behavior: "smooth", block: "center" });
});

scrollTop.addEventListener("click", () => {
  window.scroll(0, 0);
});
