let characters = [
  {name:"とかげ", type:"水", attack:5, emoji:"💧"},
  {name:"ねこ", type:"草", attack:10, emoji:"🌱"},
  {name:"しろくま", type:"雪", attack:3, emoji:"❄️"}
];

let characterList = document.querySelector("#characterList")
for (let i = 0; i < characters.length; i++) {
  let character = characters[i];
  characterList.innerHTML += `<li>${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack}<li>`;
}