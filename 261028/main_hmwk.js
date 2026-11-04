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
  picture.width = "100";
  picture.height = "200";

  if (text[n] === "大吉") {
    title.style.color = 'red';
  } else {
    title.style.color = 'black';
  }
}

let button = document.querySelector("#btn");
button.addEventListener("click",pickUp);