// Döngüler

// for döngüsü
/* 
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
console.log("---------");
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
console.log("---------");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
console.log("---------");
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr);
console.log("---------");
//Dizideki tüm elemanları toplama
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
console.log("---------");
//Mevcut diziyi temel alan yeni bir dizi oluşturma
const numbers1 = [1, 2, 3, 4, 5];
const newArr1 = [];
let sum1 = 0;
for (let i = 0; i < numbers1.length; i++) {
  newArr1.push(numbers1[i] ** 2);
}
console.log(newArr1);
console.log("---------");
const countries1 = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newCountries = [];
for (let i = 0; i < countries1.length; i++) {
  newCountries.push(countries1[i].toUpperCase());
}
console.log(newCountries);
*/

// while döngüsü
/* 
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
*/

// do while döngüsü
/* 
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);
*/

// for of dönügüsü
/* 
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}
console.log("---------");
for (const num of numbers) {
  console.log(num * num);
}
console.log("---------");
let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log(sum);
console.log("---------");
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}
for (const tech of webTechs) {
  console.log(tech[0]);
}
console.log("---------");
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];
for (const country of countries) {
  newArr.push(country.toUpperCase());
}
console.log(newArr);
*/

// break
/* 
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}
*/

// continue
/* 
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
*/
