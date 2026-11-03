let text = ["大吉","中吉","小吉","末吉","吉"];
let img = ["omikuji_daikichi.png","omikuji_chuukichi.png","omikuji_syoukichi.png","omikuji_suekichi.png","omikuji_kichi.png"];

function fortune() {
  return Math.floor(Math.random() * text.length);
}

function pickUp() {
  let title = document.querySelector("#message");
  let picture = document.querySelector("#image");
  let n = fortune();

  title.textContent = text[n];
  picture.src = img[n];
}

let button = document.querySelector("#btn");
button.addEventListener("click",pickUp);