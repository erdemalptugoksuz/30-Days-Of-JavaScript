// Diziler

// Array constructor'ı ( yapıcı metot ) kullanmak
/* 
const arr = Array();
console.log(arr);
*/

// Köşeli parantez kullanmak([])
/* 
const arr = [];
console.log(arr);
 */

// Değerlere sahip bir dizi oluşturma
/* 
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // sayı dizisi
const fruits = ["banana", "orange", "mango", "lemon"]; // string dizisi, meyveler
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // string dizisi, sebzeler
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // string dizisi, ürünler
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // string dizisi, web teknolojileri
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // string dizisi, ülkeler
console.log("Numbers: ", numbers);
console.log("Number of numbers: ", numbers.length);
 */

// Diziye farklı veri tipleri atamak
/* 
const arr = [
  "Erdem Alptuğ",
  19,
  true,
  { country: "Türkiye", city: "İstanbul" },
  { skills: ["Html", "Css", "Js"] },
];
console.log(arr);
 */

// Split kullanarak dizi oluşturma
/* 
let js = "JavaScript";
const charInJavaScript = js.split("");
console.log(charInJavaScript);

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(", ");
console.log(companies);

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");
console.log(words);
*/

// index kullanarak dizi elemanlarına ulaşmak
/* 
const fruits = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0];
console.log(firstFruit);

let secondFruit = fruits[1];
console.log(secondFruit);

let lastIndex = fruits.length - 1;
let lastfruits = fruits[lastIndex];
console.log(lastfruits);
 */

/* 
const shoppingCart = [
  "Milk",
  "Mango",
  "Tomato",
  "Potato",
  "Avocado",
  "Meat",
  "Eggs",
  "Sugar",
];
console.log(shoppingCart);
console.log(shoppingCart[0]);
console.log(shoppingCart[7]);

let lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]);
*/

// Dizi Elemanlarını Düzenlemek
/* 
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[1] = 20;
console.log(numbers);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
countries[0] = "Afghanistan";
let lastIndex = countries.length - 1;
countries[lastIndex] = "Korea";
console.log(countries);
*/

// Dizileri Manipüle Edebilecek Metotlar

// Dizi Constructor
/* 
// Array
const arr = Array();
console.log(arr);

const eightEmptyValues = Array(8);
console.log(eightEmptyValues);
 */

// fill ile statik değerler yaratmak
/* 
const arr = Array();
console.log(arr);

const eightXValues = Array(8).fill("X");
console.log(eightXValues);
*/

// Concat Kullanarak Dizileri Birleştirmek
/* 
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList);

const fruits = ["banana", "orange", "mango", "lemon"]; // meyveler dizisi
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // sebzeler dizisi
const fruitsAndVegetables = fruits.concat(vegetables); // iki diziyi birleştirdik
console.log(fruitsAndVegetables);
 */

// Dizi uzunluğuna ulaşmak
/* 
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);
 */

// Dizinin elaman index numarasına ulaşmak
/* 
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(5));
console.log(numbers.indexOf(1));

const fruits = ["banana", "orange", "mango", "lemon"];
let index = fruits.indexOf("banana"); // 0
if (index === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}
 */

// Dizinin içindeki son indexe ulaşmak
/* 
const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(numbers.lastIndexOf(2));
console.log(numbers.lastIndexOf(0));
 */

// includes
/* 
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(5));
console.log(numbers.includes(0));

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
console.log(webTechs.includes("Node"));
console.log(webTechs.includes("C"));
 */

// Diziyi kontrol etmek
/* 
const numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers));

const number = 100;
console.log(Array.isArray(number));
*/

// Diziyi stringe çevirmek
/* 
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString());
 */

// Dizi elemanlarını joinlemek
/* 
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join());

const names = ["Erdem", "Yağmur", "Eylül", "Murat"];
console.log(names.join());
console.log(names.join(""));
console.log(names.join(" "));
console.log(names.join(", "));
console.log(names.join(" # "));
 */

// Dizi elemanlarını slice etmek
/* 
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice());
console.log(numbers.slice(0));
console.log(numbers.slice(0, numbers.length));
console.log(numbers.slice(1, 4));
*/

//Dizilerde splice metodu
/* 
const numbers = [1, 2, 3, 4, 5];
numbers.splice();
console.log(numbers);

const numbers1 = [1, 2, 3, 4, 5, 6];
numbers1.splice(3, 3, 7, 8, 9);
console.log(numbers1.splice(3, 3, 7, 8, 9));
*/

// Push kullanarak diziye eleman eklemek
/* 
const arr = ["item1", "item2", "item3"];
arr.push("new item");
console.log(arr);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
*/

// pop kullanarak dizinin sonundaki elemanı silmek
/* 
const numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers);
*/

// Dizinin en başından eleman kaldırmak
/* 
const numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers);
*/

// Dizinin en başına eleman eklemek
/* 
const numbers = [1, 2, 3, 4, 5];
numbers.unshift(0);
console.log(numbers);
*/

// Dizi sırasını terse çevirmek
/* 
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);
*/

// Dizi elemanlarını sıralamak
/* 
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
webTechs.sort();
console.log(webTechs);
*/

// Dizi içinde diziler
/* 
const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];
const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArray);
*/
