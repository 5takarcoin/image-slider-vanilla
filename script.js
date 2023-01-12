const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const bottom = document.querySelector(".bottom");
const images = document.querySelectorAll(".image");

let slideNumber = 0;
const length = images.length;

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
    })
})

const buttonColor = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = "transparent";
    });
    buttons[slideNumber].style.backgroundColor = "white"
}

const slide = () => {
  slider.style.transform = `translateX(-${800 * slideNumber}px)`;
  buttonColor();
};

const firstSlide = () => {
  slideNumber = 0;
  slide();
};
const lastSlide = () => {
  slideNumber = length - 1;
  slide();
};

const nextSlide = () => {
  slideNumber++;
  slide();
};

const prevSlide = () => {
  slideNumber--;
  slide();
};

slide();

right.addEventListener("click", () => {
  slideNumber < length - 1 ? nextSlide() : firstSlide();
});

left.addEventListener("click", () => {
  slideNumber > 0 ? prevSlide() : lastSlide();
});
