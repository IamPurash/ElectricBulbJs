const btnOn = document.querySelector(".on");
const btnOff = document.querySelector(".off");
const lightOn = document.querySelector(".img1");
const lightOff = document.querySelector(".img2");
const container = document.querySelector(".container");

btnOn.addEventListener("click", function () {
  lightOff.classList.add("hidden");
  document.querySelector(".audio").play();
});
btnOff.addEventListener("click", function () {
  lightOff.classList.remove("hidden");
}); // document.querySelector(".audio").pause(); });
