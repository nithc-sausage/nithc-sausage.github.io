let age = 25;
age = 26;  // 再代入可能
console.log(age);// 26

const name = "Mike";

const number = 10; // 数値
const string = "Hello"; // 文字列
const boolean = true; // 真偽値
const nullValue = null; // null
const undefinedValue = undefined; // undefined


const x = 10;
const y = 5;

console.log(x + y); // 15 (加算)
console.log(x - y); // 5 (減算)
console.log(x * y); // 50 (乗算)
console.log(x / y); // 2 (除算)
console.log(x % y); // 0 (剰余)
console.log(x === y); // false (厳密等価)
console.log(x > y); // true (大なり)
console.log(x >= 10 && y < 10); // true (論理AND)


const score = 85;

if (score >= 90) {
  console.log("優");
} else if (score >= 80) {
  console.log("良");
} else if (score >= 70) {
  console.log("可");
} else {
  console.log("不可");
}//出力結果：良


for (let i = 1; i <= 5; i++) {
    console.log(i);
}

  for (初期化式; 条件式; 増分式) {
  // 条件式が真の間、繰り返し実行されるコード
}

function add(a, b) {
    return a + b;
}
  
  const result = add(3, 4);
  console.log(result); // 7
  

  const list = document.getElementById("list");

  const newItem = document.createElement("ul");
  newItem.textContent = "新しいアイテム";
  
  list.appendChild(newItem);


var value;

