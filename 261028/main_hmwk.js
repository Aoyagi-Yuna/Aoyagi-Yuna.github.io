let text = ["大吉","中吉","小吉","末吉","吉"];
let img = ["img/omikuji_daikichi.png","img/omikuji_chuukichi.png","img/omikuji_syoukichi.png","img/omikuji_suekichi.png","img/omikuji_kichi.png"];

function fortune() {
  return Math.floor(Math.random() * text.length);
}

function pickUp() {
  let title = document.querySelector("#message");
  let picture = document.querySelector("#image");
  let n = fortune();

  title.textContent = text[n];
  picture.src = img[n];
  picture.width = "200";
  picture.height = "400";

  if (text[n] === "大吉") {
    title.style.color = 'red';
  } else {
    title.style.color = 'black';
  }
}

let button = document.querySelector("#btn");
button.addEventListener("click",pickUp);

let clickCount = 0;
function count() {
  let counter = document.querySelector("#counter");
  clickCount = clickCount + 1;
  counter.textContent = `引いた数：${clickCount}回`;
}
let plus = document.querySelector("#btn");
plus.addEventListener("click",count);