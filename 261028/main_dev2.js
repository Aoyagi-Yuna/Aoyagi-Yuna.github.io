//発展3
let favorites = ["とかげ","なとり","須田景凪","アナタシア","真空ジェシカ"];

function pickOne() {
  let title = document.querySelector("#message");
  let n = Math.floor(Math.random() * favorites.length);
  title.textContent = favorites[n];
}
let button = document.querySelector("#btn");
button.addEventListener("click",pickOne);