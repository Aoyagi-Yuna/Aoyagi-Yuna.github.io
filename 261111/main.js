characters.sort(function (a,b){
  return b.attack - a.attack;
});

for (let i = 0; i < characters.length; i++) {
  let character = characters[i];
  console.log(`${character.name}は${character.attack}`);
}