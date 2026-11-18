let selectedType = "すべて";
let searchWord = "";
let sortOrder = "default";

function render() {
  let sortedCharacters = characters.slice();

  let visibleCharacters = [];
  sortedCharacters.forEach((character) => {
    let matchesType = selectedType === "すべて" || character.type === selectedType;
    let matchesWord = character.name.includes(searchWord);
    if (matchesType && matchesWord) {
      visibleCharacters.push(character);
    }
  });

  if (sortOrder === "attackDesc") {
    visibleCharacters.sort((a, b) => b.attack - a.attack);
  } else if (sortOrder === "attackAsc") {
    visibleCharacters.sort((a, b) => a.attack - b.attack);
  }

  let resultCount = document.querySelector("#resultCount");
  resultCount.textContent = `12体中${visibleCharacters.length}体を表示`;

  let characterList = document.querySelector("#characterList");
  characterList.innerHTML = "";
  if (visibleCharacters.length === 0) {
    characterList.innerHTML = `<li>見つかりませんでした</li>`;
  } else {
    visibleCharacters.forEach((character) => {
      let rarityStars = "";
      for (let j = 0; j < character.rarity; j++) {
        rarityStars += "★";
      }
      let imageTag = `<img src="${character.image}" width="80">`;
      characterList.innerHTML += `<li>${imageTag}${character.name} ${character.type} ／ 攻撃力 ${character.attack} ${rarityStars}</li>`;
    });
  }

  typeTabs.forEach((tab) => {
    if (tab.textContent === selectedType) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

let sortSelect = document.querySelector("#sortSelect");
sortSelect.addEventListener("change", () => {
  sortOrder = sortSelect.value;
  render();
});

let typeTabs = document.querySelectorAll(".type-tab");
typeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedType = tab.textContent;
    render();
  });
});

let searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", () => {
  searchWord = searchInput.value;
  render();
});

render();