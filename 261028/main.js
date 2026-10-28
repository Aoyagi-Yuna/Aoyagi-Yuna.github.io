//演習1
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


//演習2
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

for (let i = 5; i <= 50; i = i + 5) {
  console.log(i);
}


//演習3
let favorite = ["とかげ","なとり","須田景凪","M!LK","GUMI"];
for (let i = 0; i < favorite.length; i++) {
  console.log(`${i}番は${favorite[i]}`);
}

let scores = [72,85,64,90,58];
let sum2 = 0;
for (let i = 0; i < scores.length; i++) {
  sum2 += scores[i];
}
let average = sum2 / scores.length;
console.log(sum2);
console.log(average);