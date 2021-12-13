let el = document.querySelector(".landing h1");
let i = 0;
let text = "Hi, I'am Abdelillah";

function typing() {
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

let scrollB = document.querySelector(".scrollbar");
let maxHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", function () {
  let height = (this.scrollY * 100) / maxHeight;
  document.querySelector(".scrollbar").style.height = `${height}%`;
});

let els = document.querySelectorAll(".reveal");
let windowHeight = window.innerHeight;

window.addEventListener("scroll", function () {
  for (let i = 0; i < els.length; i++) {
    let reveal = els[i].getBoundingClientRect().top;
    if (reveal < windowHeight - 100) {
      els[i].classList.add("active");
    } else {
      els[i].classList.remove("active");
    }
  }
});

let sct = document.querySelectorAll(".sct");
let bulls = document.querySelectorAll(".bulls ul li");
window.addEventListener("scroll", function () {
  for (let i = 0; i < sct.length; i++) {
    let pos = sct[i].offsetTop;
    if (this.scrollY >= pos) {
      bulls.forEach((e) => e.classList.remove("active"));
      bulls[i].classList.add("active");
    }
  }
});
