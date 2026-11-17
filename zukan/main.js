let characterList = document.querySelector("#characterList");

function showByType(type){
  characterList.innerHTML = "";
  for(let i = 0; i < characters.length; i++){
    let character = characters[i];
    if(type === "すべて" || character.type === type){  
      characterList.innerHTML += `
        <li>
          <img src="${character.image}" alt="${character.name}" width="100">
          ${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack}
        </li>
      `;
    }
  }
}

function showAll(){showByType("すべて");}
function showFire(){showByType("炎");}
function showWater(){showByType("水");}
function showGrass(){showByType("草");}

let showAllButton = document.querySelector("#showAll");
let showFireButton = document.querySelector("#showFire");
let showWaterButton = document.querySelector("#showWater");
let showGrassButton = document.querySelector("#showGrass");

showAllButton.addEventListener("click", showAll);
showFireButton.addEventListener("click", showFire);
showWaterButton.addEventListener("click", showWater);
showGrassButton.addEventListener("click", showGrass);

showAll();