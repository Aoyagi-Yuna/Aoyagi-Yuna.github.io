let characters = [
  {name:"とかげ", type:"水", attack:5, emoji:"💧"},
  {name:"ねこ", type:"草", attack:10, emoji:"🌱"},
  {name:"しろくま", type:"雪", attack:3, emoji:"❄️"}
];

for (let i = 0; i < characters.length; i++) {
  let character = characters[i];
  console.log(`${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack}`);
}