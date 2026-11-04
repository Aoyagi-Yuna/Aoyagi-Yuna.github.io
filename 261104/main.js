let characters = [
  {name:"とかげ", type:"水", attack:5, emoji:"💧"},
  {name:"ねこ", type:"草", attack:10, emoji:"🌱"},
  {name:"しろくま", type:"雪", attack:3, emoji:"❄️"}
];

function showCharacters(type) {
  characterList.innerHTML = "";
  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    if (type === "すべて" || character.type === type) {
      characterList.innerHTML += `<li>${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack}<li>`;
    }
  }
}
showCharacters("すべて");

function showAll() {
  showCharacters("すべて");
}
function showWater() {
  showCharacters("水");
}
function showGrass() {
  showCharacters("草");
}
function showSnow() {
  showCharacters("雪");
}

let showAllButton = document.querySelector("#allButton");
let showWaterButton = document.querySelector("#waterButton");
let showGrassButton = document.querySelector("#grassButton");
let showSnowButton = document.querySelector("#snowButton");

showAllButton.addEventListener("click", showAll);
showWaterButton.addEventListener("click", showWater);
showGrassButton.addEventListener("click", showGrass);
showSnowButton.addEventListener("click", showSnow);