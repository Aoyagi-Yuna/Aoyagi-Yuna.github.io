let character = {
  name:"とかげ",
  type:"水",
  attack:5,
  emoji:"💧"
};

console.log(character.name);
console.log(character.attack);
console.log(`${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack}`);

let title = document.querySelector("#title");
title.textContent = `${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack}`;