//発展3
let favorites = ["とかげ","なとり","須田景凪","アナタシア","真空ジェシカ"];
let pickOne = Math.floor(Math.random() * favorites.length);

function showMessage() {
  let title = document.querySelector("#message");
  title.textContent = pickOne;
}
let button = document.querySelector("#btn");
button.addEventListener("click",showMessage);