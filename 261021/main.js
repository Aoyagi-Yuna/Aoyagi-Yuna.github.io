let name = "青柳結凪";
let num = 6;

console.log(name);
console.log(num);

num = 15;
console.log(num);

console.log(typeof"123");
console.log(typeof 123);

let x;
console.log(x);


function welcome(name){
  console.log(name + "さん、ようこそ");
}

welcome("たろう");
welcome("じろう");
welcome("さぶろう");

function welcome2(name,favorite){
  console.log(name + "さんは、" + favorite + "が好きです");
}

welcome2("たろう","チョコ");
welcome2("じろう","バナナ");
welcome2("さぶろう","チョコバナナ");

welcome2();
welcome2();