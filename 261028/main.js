function showMessage1() {
  let title = document.querySelector("#message");
  title.textContent = "完了";
}
let button1 = document.querySelector("#btn1");
button1.addEventListener("click",showMessage1);

function showMessage2() {
  let title = document.querySelector("#message");
  title.textContent = "流石";
}
let button2 = document.querySelector("#btn2");
button2.addEventListener("click",showMessage2);

function plusCount() {
  let counter = document.querySelector("#counter");
  counter.textContent = parseInt(counter.textContent) + 1;
}
let plus = document.querySelector("#plus");
plus.addEventListener("click",plusCount);