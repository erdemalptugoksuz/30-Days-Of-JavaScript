// Veri Türleri
/*
    1- İlkel veri türleri : Değişmez (değiştirilemez) veri türleridir. İlkel bir veri türü oluşturulduktan sonra onu değiştiremeyiz.
        *Numbers    : Tamsayılar - Ondalık sayılar
        *Strings    : Tek tırnak, çift tırnak veya ters tırnak içerisindeki tüm veriler..
        *Booleans   : true yada false (true = 1 false = 0 bu iki terimi bu şekilde öğrenin. Çevirilerine çok girmeyin kısaca var yada yok )
        *Null       : Boş değer yada değeri yok
        *Undefined  : Bir değer verilmeyen değişken. ( Örn: let variables; )
        *Symbol     : Sembol yapıcısı tarafından oluşturulabilen benzersiz bir değer
    2- İlkel olmayan veri türleri : İlkel olmayan veri türleri düzenlenebilir veya değiştirilebilir. İlkel olmayan veri türlerinin değerini, oluşturulduktan sonra değiştirebiliriz.
        *Objects ( Nesneler )
        *Arrays ( Diziler )
*/

// İlkel veri türleri karşılaştırma örneği
/*
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo);

let js = "JavaScript";
let py = "Python";
console.log(js == py);

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff);
*/

// İlkel olmayan veri türleri örneği
/*
let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums);

// İlkel olmayan veri türleri karşılaştırma örneği
let numbs = [1, 2, 3];
let numbers = [1, 2, 3];
console.log(numbs == numbers); //false

let userOne = {
  name: "Erdem Alptuğ",
  role: "Student",
  country: "Turkey",
};
let userTwo = {
  name: "Erdem Alptuğ",
  role: "Student",
  country: "Turkey",
};
console.log(userOne == userTwo); //false

let numbe = [1, 2, 3];
let number = numbe;
console.log(numbe == number);

let userThree = {
  name: "Erdem Alptuğ",
  role: "Student",
  country: "Turkey",
};
let userFour = userThree;
console.log(userThree == userFour);
*/

// Sayı Veri Türlerini Bildirme
/* 
let age = 35;
const gravity = 9.81; // yer çekimi kuvvet değeri bu değer haliyle değişmeyeceği için const olarak tanımlanıyor. Değişmez değişkenleri const ile tanımlarsınız. Bunu unutmayın.
let mass = 72; // kilogram cinsinden kütle
const PI = 3.14; // pi sayısı matematikte sabit bir sayı olduğu için const ile oluşturulmuş. ( küsüratı almamış )
const boilingPoint = 100; // derece cinsinden sıcaklık, suyun sabit olan kaynama noktası ( derecesi )
const bodyTemp = 37; // derece. İnsan vücudun sabit olan ortalama sıcaklığı
console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);
*/

// Matematik Nesnesi - Objesi ( Math Object )
/*
const PI = Math.PI; // Buraya kısa bir açıklama getirelim. Math objesi sayesinde PI sayısının değerini otomatik alıyoruz.

console.log(PI); // 3.141592653589793

// En yakın sayıya yuvarlama
// Eğer .5'in altındaysa aşağıya üstündeyse yukarıya yuvarlar. Örn: 3.14 ise 3 yapar 3.51 ise 4 yapar.

console.log(Math.round(PI)); // 3.14 olduğu için 3 e yuvarlama yapıyor

console.log(Math.round(9.81)); // Ondası 0.5 üstünde olduğu için 10 yapar

console.log(Math.floor(PI)); // floor aşağı yuvarlar Bu 3 olur

console.log(Math.ceil(PI)); // ceil yukarı yuvarlar Bu 4 olur

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // En küçük sayıyı bulmaya yaradığı için sonuç -5 döner

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // En büyük sayıyı bulmaya yaradığı için sonuç 20 döner

const randNum = Math.random(); // 0 ile 0.999999 arasında rastgele bir sayı üretir.
console.log(randNum);

// 0 ile 10 arasında rastgele bir sayı oluşturalım.

const num = Math.floor(Math.random() * 11); // 0 ile 10 arasında rastgele sayı oluşturur
console.log(num);

//Mutlak değer
console.log(Math.abs(-10)); // 10

//Kare kök
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Üs
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logaritma
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Sırasıyla 2 ve 10'un doğal logaritmasını döndürür
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometri
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);

// Rastgele sayı üretme
let randomNum = Math.random(); // 0 ile 0.999 arasında oluşturur
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // Sonuç : minimum  0 ve maksimum 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen); // yuvarlama yapıyor
console.log(randomNumRoundToFloor); // Sonuç 0 ile  10 arasında çıkar
*/

// Strings
/*
let space = " ";
let firstName = "Erdem Alptuğ";
let lastName = "Öksüz";
let country = "Türkiye";
let city = "İstanbul";
let language = "JavaScript";
let job = "student";
let age = 19;
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

// String Birleştirme
let fullName = firstName + space + lastName;
console.log(fullName);

// ES5 Toplama Operatörü İle Değişken Birleştirme
let personInfoOne =
  fullName + ". Ben " + age + " yaşındayım. " + country + "'de yaşıyorum.";
console.log(personInfoOne);

//Uzun Değişmez Stringler : String'in bir sonraki satırda devam edeceğini belirtmek için her satırın sonunda ters eğik çizgi karakterini (\) kullanabiliriz.
const paragraph =
  "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";
console.log(paragraph);

// String'lerdeki Kaçış Dizileri

//    \n: yeni satır
//    \t: kalvyedeki tab tuşunun özelliğine eşittir. 8 boşluk anlamına gelir.
//    \\: ters eğik çizgi yazdırır
//    \': tek tırnak yazdırır
//    \": çift tırnak yazdırır

console.log("Merhaba yeni satıra \ngeçtik bakın!");
console.log("Day 1\t3\t5");
console.log("Merhaba işte ters eğik çizgi: \\");
console.log("Merhaba işte tek tırnak: '");
console.log('Merhaba işte çift tırnak: " ');

// Şablon Stringler

// Örnek 1
console.log("2 ve 3 sayılarının toplamı 5'e eşittir.");
let a = 2;
let b = 3;
console.log(`${a} ve ${b} sayılarının toplamı ${a + b}'e eşittir.`);

// Örnek 2
let firstName = "Erdem Alptuğ";
let lastName = "Öksüz";
let country = "Türkiye";
let city = "İstanbul";
let language = "JavaScript";
let job = "Öğrenci";
let age = 19;
let fullNmae = firstName + " " + lastName;

let personInfoTwo = `Ben ${fullNmae}. ${age} yaşındayım. ${country}'de yaşıyorum.`;

let personInfoThree = `Ben ${fullNmae}. Ben ${country}'nin ${city} şehrinde yaşıyorum. Ben bir ${job}'yim. ${language} dilini öğreniyorum.`;

console.log(personInfoTwo);
console.log(personInfoThree);

// Örnek 3
console.log(`${a} büyüktür ${b} sayısından? : ${a > b}`);

// String Metotları

// 1- length : String içerisindeki karakterlerin sayısını belirtir. Boşluklar dahildir.
let js = "JavaScript";
let firstName = "Erdem Alptuğ";
console.log(js.length);
console.log(firstName.length);

// 2- Karakterler erişim
let string = "JavaScript";
let firstLetter = string[0];
console.log(firstLetter);

let secondLetter = string[1];
let thridLetter = string[2];
let lastLetter = string[9];
console.log(lastLetter);

let lastIndex = string.length - 1;
console.log(lastIndex);
console.log(string[lastIndex]);

// 3- toUpperCase() : bu metot string verisini büyük harflere dönüştürür.
console.log(string.toUpperCase());

// 4- toLowerCase() : bu metot string verisini küçük harflere dönüştürür.
console.log(string.toLowerCase());

// 5- substr() : İki argüman alır, başlangıç indeksi ve silenecek karakter sayısı.
console.log(string.substr(4, 6));

// 6- substring() : Başlangıç indeksi ve durma indeksi olmak üzere iki argüman almaktadır.
console.log(string.substring(0, 4));
console.log(string.substring(4));

// 7- split() : Bu metot bir stringi belirtilen yerden bölmeye yarar. ( array oluşturuyor )
let string = "30 Days Of JavaScript";
console.log(string.split()); //belirtmediğimiz için 1 elementli array oluşturdu.
console.log(string.split(" "));

let firstName = "Erdem";
console.log(firstName.split());
console.log(firstName.split("")); //tüm karakterleri array haline getiriyor.

let countries = "Finland, Sweden, Norway, Denmark, and Türkiye";
console.log(countries.split(","));
console.log(countries.split(", "));

// 8- trim() : String'in başında ve sonundaki boşlukları silmeye yarar.
let string = "  30 Days Of JavaScript   ";
console.log(string);
console.log(string.trim(" "));
console.log(string.trim()); //içinde tırnak kullanmasanız dahi boşlukları siler.

// 9- includes() : Bu metot string içerisinde varlık kontrolü yapmaya yarar. Eğer bulursa true, bulamazsa false döner. ( birebir arama yapar )
let string = "30 Days Of JavaScript";
console.log(string.includes("Days"));
console.log(string.includes("days")); //birebir arama yapar o yüzden false!

// 10- replace() : Bu metot string içerisinde değiştirme yapmamızı sağlar. Eski ve Yeni olmak üzere iki argüman alır.
let string = "30 Days Of JavaScript";
console.log(string.replace("JavaScript", "Python"));

// 11- charAt() : Stringdeki indeksi belirttiğinizde o indeksin değerini yazdırır.
let string = "30 Days Of JavaScript";
console.log(string.charAt(0));

let lastIndex = string.length - 1;
console.log(string.charAt(lastIndex));

// 12- charCodeAt : String'teki vermiş olduğunuz index değerinin ASCII numarasını döndürür.
let string = "30 Days Of JavaScript";
console.log(string.charCodeAt(3)); // D ASCII 68

// 13- indexOf(): Bu metot belirtilen değerin indeksini verir. Değer bulunamazsa -1 sonucunu döndürür. ( Birebir arama yapar örneğe bakın )
let string = "30 Days Of JavaScript";
console.log(string.indexOf("D")); //3
console.log(string.indexOf("d")); // -1

// 14- lastIndexOf(): Bu metot belirtilen değerin son değer indeksini verir. Değer bulunamazsa -1 sonucunu döndürür. ( Birebir arama yapar örneğe bakın )
let string =
  "I love JavaScript. If you do not love JavaScript what else can you love";
console.log(string.lastIndexOf("love")); //67
console.log(string.lastIndexOf("Love")); //-1

// 15- concat(): Bu metot birleştirme işlemini sağlar, birden fazla değer alabilir
let string = "30";
console.log(string.concat("Days", "Of", "JavaScript"));

// 16- startsWith: String'in belirtilen değer ile başlayıp başlamadığını kontrol eder. true yada false döndürür.
let string = "Love is the best to in this world";
console.log(string.startsWith("Love")); //true
console.log(string.startsWith("love")); //false

// 17- endsWith: String'in belirtilen değer ile bitip bitmediğini kontrol eder. true yada false döndürür.
let string = "Love is the best to in this world";
console.log(string.endsWith("world")); //true
console.log(string.endsWith("World")); //false

// 18- search: Argüman olarak bir alt dize alır ve ilk eşleşmenin dizinini döndürür. Arama değeri bir dize veya normal ifade kalıbı olabilir.
let string =
  "I love JavaScript. If you do not love JavaScript what else can you love";
console.log(string.search("love")); //2

// 19- match: Argüman olarak bir alt dize veya normal ifade kalıbı alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür. Normal bir ifade kalıbının nasıl göründüğünü görelim. / işareti ile başlar ve / işareti ile biter.
// /love/; // koşulsuz
// /love/gi; // g-bütün metinde ara, i - büyük küçük harf duyarsız

let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.match("love"));

let pattern = /love/gi;
console.log(string.match(pattern));

let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d/g;

// kaçış karakterli d, d'nin normal olmadığı anlamına gelir, d bunun yerine bir rakam gibi davranır
// + bir veya daha fazla basamaklı sayı anlamına gelir,
// ondan sonra g varsa global demektir, her yerde ara.

console.log(txt.match(regEx));
console.log(txt.match(/\d+/g));

// 20- repeat(): bağımsız değişken olarak bir sayı alır ve stringi sayı kadar döndürür.
let string = "love";
console.log(string.repeat(10));
*/

// Veri Türlerini Kontrol Etme : Belirli bir değişkenin veri türünü kontrol etmek için typeof yöntemini kullanırız.
/*
let firstName = "Erdem Alptuğ";
let lastName = "Öksüz";
let country = "Türkiye";
let city = "İstanbul";
let age = 19;
let job;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof job);
console.log(typeof false);
*/

// Veri Türünü Değiştirme (Döküm) : Bir veri tipini başka bir veri tipine dönüştürme. Kullandıklarımız parseInt(), parseFloat(), Number(), + sign, str() Aritmetik işlemler yapmadan önce string sayıları önce integer yada float türüne dönüştürmeliyiz yoksa hata alırız.
/*
// String to Int : String bir numarayı sayıya dönüştürebiliriz. Alıntı içerisindeki herhangi bir sayı string numarasıdır. Bir string numarası örneği: '10', '5', vb. Aşağıdaki metotları kullanarak string'i sayıya dönüştürebiliriz:
//parseInt()
let num1 = "10";
let numInt1 = parseInt(num1);
console.log(numInt1);

//Number()
let num2 = "10";
let numInt2 = Number(num2);
console.log(numInt2);

//Plus sign(+) // artı işareti demek
let num3 = "10";
let numInt3 = +num3;
console.log(numInt3);

// String to Float : String içindeki ondalık numarayı sayıya çevirebiliriz. Tırnak içerisindeki ondalık sayı string ondalık sayıdır. Bir string ondalık numarası örneği: '9.81', '3.14', '1.44' vb. Aşağıdaki metotları kullanarak ondalık stringi sayıya dönüştürebiliriz:
//parseFloat()
let num4 = "9.81";
let numFloat4 = parseFloat(num4);
console.log(numFloat4);

//Number()
let num5 = "9.81";
let numFloat5 = Number(num5);
console.log(numFloat5);

//Plus sign(+) // artı işareti demek
let num6 = "9.81";
let numFloat6 = +num6;

console.log(numFloat6);

// Float to Int : Ondalık sayıları tam sayılara çevirebiliriz. (Int) ( bu aşağıya yuvarlıyor ) Float'ı int'e dönüştürmek için aşağıdaki metodu kullanıyoruz:
//parseInt()
let num7 = 9.81;
let numInt7 = parseInt(num7);
console.log(numInt7);
*/
