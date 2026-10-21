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


function multiply(a,b){
  return a * b;
}
console.log(multiply(3,5));

function splitBill(total,people){
  return Math.ceil(total / people);
}
console.log(splitBill(2500,5));
console.log(splitBill(5000,6));


function judgeAge(age){
  let result;
  if (score <= 0){
    result = "エラー";
  } else if (score < 18){
    result = "未成年";
  } else if (score >= 65){
    result = "高齢者";
  } else {
    result = "成人";
  }
  console.log(`${age}歳は${result}です`);
}

judgeAge(-5);
judgeAge(15);
judgeAge(30);
judgeAge(80);