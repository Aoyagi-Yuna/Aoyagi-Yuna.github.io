let characters = [
  { name: "ヒノコ", type: "炎", attack: 72, rarity: 2, emoji: "🔥", image: "https://morimorihoge.github.io/teu2026f/images/hinoko.jpg" },
  { name: "カエンジシ", type: "炎", attack: 95, rarity: 4, emoji: "🦁", image: "https://morimorihoge.github.io/teu2026f/images/kaenjishi.jpg" },
  { name: "ホムラリュウ", type: "炎", attack: 120, rarity: 5, emoji: "🐉", image: "https://morimorihoge.github.io/teu2026f/images/homuraryu.jpg" },
  { name: "シズク", type: "水", attack: 55, rarity: 1, emoji: "💧", image: "https://morimorihoge.github.io/teu2026f/images/shizuku.jpg" },
  { name: "ナミウオ", type: "水", attack: 68, rarity: 2, emoji: "🐟", image: "https://morimorihoge.github.io/teu2026f/images/namiuo.jpg" },
  { name: "アオイルカ", type: "水", attack: 88, rarity: 3, emoji: "🐬", image: "https://morimorihoge.github.io/teu2026f/images/aoiruka.jpg" },
  { name: "スミダコ", type: "水", attack: 76, rarity: 3, emoji: "🐙", image: "https://morimorihoge.github.io/teu2026f/images/sumidako.jpg" },
  { name: "メブキ", type: "草", attack: 48, rarity: 1, emoji: "🌱", image: "https://morimorihoge.github.io/teu2026f/images/mebuki.jpg" },
  { name: "トゲボウ", type: "草", attack: 81, rarity: 3, emoji: "🌵", image: "https://morimorihoge.github.io/teu2026f/images/togebou.jpg" },
  { name: "ヒマワリン", type: "草", attack: 64, rarity: 2, emoji: "🌻", image: "https://morimorihoge.github.io/teu2026f/images/himawarin.jpg" },
  { name: "キノコロ", type: "草", attack: 58, rarity: 2, emoji: "🍄", image: "https://morimorihoge.github.io/teu2026f/images/kinokoro.jpg" },
  { name: "コケノオウ", type: "草", attack: 110, rarity: 5, emoji: "🪨", image: "https://morimorihoge.github.io/teu2026f/images/kokenoou.jpg" }
];

let characterList = document.querySelector("#characterList");

function showByType(type){
  characterList.innerHTML = "";
  for(let i = 0; i < characters.length; i++){
    let character = characters[i];
    if(type === "すべて" || character.type === type){  
      characterList.innerHTML += `<li>${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack}</li>`;
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