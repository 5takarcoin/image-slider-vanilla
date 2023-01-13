const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const bottom = document.querySelector(".bottom");
const images = document.querySelectorAll(".image");

let slideNumber = 0;
const length = images.length;

let start = Date.now();

let forward = true;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.classList.add("button");
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    slideNumber = index;
    slide();
  });
});

const buttonColor = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
  buttons[slideNumber].style.backgroundColor = "white";
};

const slide = () => {
  slider.style.transform = `translateX(-${800 * slideNumber}px)`;
  buttonColor();
  start = Date.now();
};

const nextSlide = () => {
  slideNumber = (slideNumber + 1) % length;
  slide();
};

const prevSlide = () => {
  slideNumber = (slideNumber - 1 + length) % length;
  slide();
};

slide();

right.addEventListener("click", () => {
  nextSlide();
  forward = true;
});

left.addEventListener("click", () => {
  prevSlide();
  forward = false;
});

setInterval(() => {
  if (Date.now() - start >= 5000) {
    if (forward) nextSlide();
    else prevSlide();
  }
}, 1000);
