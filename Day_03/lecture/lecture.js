// Boolean Değerleri

// Örnek Boolean Değerleri
/* 
let isLightOn = true; // ışık açık doğru
let isRaining = false; // yağıyor yanlış
let isHungry = false; // aç yanlış
let isMarried = true; // evli doğru
let truValue = 4 > 3; // true -- doğru
let falseValue = 4 < 3; // false -- yanlış
*/

//True değerleri
/*
 *Sıfır hariç tüm sayılar (pozitif ve negatif) doğrudur
 *Boş bir dize ('') dışında tüm dizeler doğrudur
 *Boole değeri doğru
 */

//False Değerleri
/*
 *0
 *0n
 *null
 *undefined
 *NaN
 *the boolean false
 *'', "", ``, empty string
 */

// Tanımsız (Undefined) : Bir değişken bildirirsek ve bir değer atamazsak, değer tanımsız olacaktır. Buna ek olarak, eğer bir fonksiyon değer döndürmüyorsa tanımsız olacaktır.
/* 
let firstName;
console.log(firstName);
 */

// Boş (Null)
/* 
let empty = null;
console.log(empty);
 */

// Operatörler

// Atama Operatörleri : JavaScript'te eşittir işareti bir atama operatörüdür. Değişken atamak için kullanılır.
/* 
let firstName = "Erdem Alptuğ";
let country = "Türkiye";
 */

// Artimetik Operatörleri : Aritmetik operatörler matematiksel operatörlerdir.
/*
 *Toplama(+): a + b
 *Çıkarma(-): a - b
 *Çarpma(*): a * b
 *Bölme(/): a / b
 *Kalan(Bölmedeki kalan)(%): a % b
 *(Örneğe Bak) Üstel Sayı (**): a ** b
 */

/* 
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo; //Toplama
let diff = numOne - numTwo; //Çıkarma
let mult = numOne * numTwo; //Çarpma
let div = numOne / numTwo; //Bölme
let remainder = numOne % numTwo; //Kalanı bulma
let powerOf = numOne ** numTwo; //Üslü sayı
console.log(sum, diff, mult, div, remainder, powerOf);
 */

/* 
const PI = 3.14;
let radius = 100; //metre cinsinden uzunluk

//Daire alanı hesabı
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);

const gravity = 9.81;
let mass = 72;

//Bir cismin ağırlık hesabı
const weight = mass * gravity;
console.log(weight);

const boilingPoint = 100;
let bodyTemp = 37;
console.log(
  `Suyun kaynama nokatası ${boilingPoint} oC'dir. \nİnsan vücüt sıcaklığı ${bodyTemp} oC'dir. \nDünyanın yerçekimi ${gravity} m/s2'dir.`
);
 */

// Karşılaştırma Operatörleri : Programlamada değerleri karşılaştırırız, iki değeri karşılaştırmak için karşılaştırma operatörlerini kullanırız. Bir değerin diğer değere eşit veya büyük olup olmadığını kontrol ederiz.
/* 
console.log(3 > 2); // true, çünkü 3 2 den büyüktür
console.log(3 >= 2); // true, çünkü 3 2 den büyüktür
console.log(3 < 2); // false,  çünkü 3 2 den büyüktür
console.log(2 < 3); // true, çünkü 2 3 den küçüktür
console.log(2 <= 3); // true, çünkü 2 3 den küçüktür
console.log(3 == 2); // false, çünkü 3 2 ye eşit değildir
console.log(3 != 2); // true, çünkü 3 2 ye eşit değildir
console.log(3 == "3"); // true, sadece değeri karşılaştırıyor
console.log(3 === "3"); // false, hem değeri hemde veri türünü karşılaştırıyor o yüzden yanlış. Birisi int değeri birisi string değerinden ( Bu denklik operatörü )
console.log(3 !== "3"); // true, hem değeri hemde veri türünü karşılaştırıyor o yüzden doğru. (Bu denk değil operatörü)
console.log(3 != 3); // false, değeri karşılaştırıyor
console.log(3 !== 3); // false, hem değeri hem de veri türünü karşılaştırıyor
console.log(0 == false); // true, eşdeğer
console.log(0 === false); // false, tam olarak aynı değil
console.log(0 == ""); // true, eşdeğer
console.log(0 == " "); // true, eşdeğer
console.log(0 === ""); // false, tam olarak aynı değil
console.log(1 == true); // true, eşdeğer
console.log(1 === true); // false, tam olarak aynı değil
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, eşit değil
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false
 */

// Mantıksal Operatörler
/* 
// &&   ve işareti operatörü örneği ( ampersand olarak anlandırılıyor)

const check = 4 > 3 && 10 > 5; // true && true -> true
const check = 4 > 3 && 10 < 5; // true && false -> false
const check = 4 < 3 && 10 < 5; // false && false -> false

// || boru veya operatör, örnek

const check = 4 > 3 || 10 > 5; // true  || true -> true
const check = 4 > 3 || 10 < 5; // true  || false -> true
const check = 4 < 3 || 10 < 5; // false || false -> false

//! olumsuzlama örnekleri

let check = 4 > 3; // true
let check = !(4 > 3); //  false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true
 */

// Arttırma Operatörü : JavaScript'te, bir değişkende saklanan bir değeri artırmak için artırma operatörünü kullanırız. Artış, artış öncesi veya sonrası olabilir. Her birini görelim:
/* 
// 1- Öncesi Artış
let count = 0;
console.log(++count);
console.log(count);

// 2- Sonrası Artış
let count1 = 0;
console.log(count1++);
console.log(count1);
 */

// Azaltma Operatörü : JavaScript'te, bir değişkende saklanan bir değeri azaltmak için azaltma operatörünü kullanırız. Azaltma, eksiltme öncesi veya sonrası olabilir. Her birini görelim:
/* 
// 1- Öncesi Azaltma
let count = 0;
console.log(--count);
console.log(count);

// 2- Sonrası Azaltma
let count1 = 0;
console.log(count1--);
console.log(count1);
 */

// Koşul Operatörü (Ternary - Üçlü ) : Üçlü operatör bir koşul yazmaya izin verir. Koşullar yazmanın başka bir yolu da üçlü operatörleri kullanmaktır. Aşağıdaki örneklere bakın:
/* 
let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
isRaining = false;

isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
 */

// Window Metotları

// alert() : En başta gördüğünüz gibi alert() metodu, belirtilen bir mesaj ve bir Tamam butonu ile bir uyarı kutusu görüntüler. Yerleşik bir yöntemdir ve argüman alır.
//alert("Welcome to 30daysofjs");

// prompt() : Pencere yöntemleri, tarayıcınızda giriş değerlerini almak için bir giriş içeren bir bilgi istemi kutusu görüntüler ve giriş verileri bir değişkende saklanabilir. prompt() yöntemi iki argüman alır. İkinci argüman isteğe bağlıdır.
/* 
let number = prompt("Sayı giriniz", "buraya giriniz");
console.log(number);
 */

// confirm() : confirm() yöntemi, bir Tamam ve İptal düğmesiyle birlikte belirli bir mesaj içeren bir iletişim kutusu görüntüler. Bir onay kutusu genellikle bir kullanıcıdan bir şeyi yürütmek için izin istemek için kullanılır. Pencere confirm() argüman olarak bir dize alır. Tamam'a tıklamak doğru değeri verir, İptal düğmesine tıklamak yanlış değeri verir.
/* 
const agree = confirm("Silmek istediğinizden emin misiniz?");
console.log(agree);
 */

// Date Objesi

// Bir Zaman Objesi Oluşturma : Bir kez zaman objesi oluşturduğumuzda zaman objesi, zaman hakkında bilgi sağlayacaktır. Bir zaman objesi oluşturalım.
/* 
const now = new Date();
console.log(now);

// Tam Yılı Almak : Bir zaman objesinden tam yılı çıkaralım veya alalım.
console.log(now.getFullYear());

// Ayı Almak
console.log(now.getMonth());

// Tarih Almak
console.log(now.getDate());

// Günü Almak
console.log(now.getDay());

// Saati Almak
console.log(now.getHours());

// Dakikayı Almak
console.log(now.getMinutes());

// Saniyeyi Almak
console.log(now.getSeconds());
 */

// Zamanı Almak : Bu metot 1 Ocak 1970'den itibaren milisaniye cinsinden süre verir. Unix zamanı olarak da bilinir. Unix zamanını iki şekilde alabiliriz:

// 1- .getTime()
const now = new Date();
console.log(now.getTime());

// 2- .Date.now()
const allSeconds = Date.now();
console.log(allSeconds);

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds);

// Okunabilir değer hali
const now1 = new Date();
const year = now1.getFullYear(); // yılı döndürür
const month = now1.getMonth() + 1; // ayı döndürür (0 - 11) olduğu için +1 ekliyor
const date = now1.getDate(); // günü döndürür (1 - 31)
const hours = now1.getHours(); // sayıyı döndürür (0 - 23)
const minutes = now1.getMinutes(); // sayıyı döndürür (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // çıktı farklı olacaktır
