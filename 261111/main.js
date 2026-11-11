//攻撃力が高い順
characters.sort(function (a,b){
  return b.attack - a.attack;
});
for (let i = 0; i < characters.length; i++) {
  let character = characters[i];
  console.log(`${character.name}は${character.attack}`);
}

//攻撃力が低い順
characters.sort(function (a,b){
  return a.attack - b.attack;
});
for (let i = 0; i < characters.length; i++) {
  let character = characters[i];
  console.log(`${character.name}は${character.attack}`);
}

//レア度が高い順
characters.sort(function (a,b){
  return b.rarity - a.rarity;
});
for (let i = 0; i < characters.length; i++) {
  let character = characters[i];
  console.log(`${character.name}は${character.rarity}`);
}

//
let sortedCharacters = characters.slice();
sortedCharacters.sort(function (a,b){
  return b.attack - a.attack;
});
for (let i = 0; i < sortedCharacters.length; i++) {
  let sortedCharacter = sortedCharacters[i];
  console.log(`${sortedCharacter.name}は${sortedCharacter.attack}`);
}


//演習2
characters.sort((a,b) => b.attack - a.attack);
characters.forEach(character => console.log(character.name + "は" + character.attack));

let showByType = (type) => {
  let characterList = document.querySelector("#character-list");
  characterList.innerHTML = "";
  characters.forEach(character => {
    if (type === "すべて" || character.type === type) {
      characterList.innerHTML += `<li>${character.name}（${character.type}）</li>`;
    }
  });
};

let typeTabs = document.querySelectorAll(".type-tab");
typeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    let type = tab.textContent;
    showByType(type);
  });
})