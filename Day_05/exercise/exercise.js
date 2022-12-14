/* 
    Egzersiz - Seviye 1
        + 1- boş bir dizi yaratın;
        + 2- Eleman sayısı 5'ten fazla olan bir dizi yaratın.
        + 3- Yarattığınız dizinin uzunluğunu bulun ( length ).
        + 4- Dizinizdeki ilk elemanı, ortadaki elemanı ve sondaki elemanı bulun.
        + 5- mixedDataTypes adında bir dizi yaratın,dizinin içine farklı veri tiplerinde elemanlar koyun ve bu dizinin uzunluğunu bulun. Dizinin uzunluğu 5'ten büyük olmalıdır.
        + 6- ItCompanies adlı bir dizi değişkeni oluşturun ve Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon'a başlangıç değerleri atayın.
        + 7- console.log() kullanarak dizinizi yazdırın.
        + 8- Dizinin içindeki şirketlerin sayısın yazdırın.
        + 9- Dizinin içindeki ilk, ortadaki ve son elemanı yazdırın.
        + 10- Dizideki her şirketi yazdırın.
        + 11- Her bir şirketin adını tek tek büyük harfleri ile değişterin ( ör: facebook -> FACEBOOK) ve her birini yazdırın.
        + 12- Diziyi bir cümle gibi yazdırın: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
        + 13- itCompanies dizisinde belirli bir şirketin olup olmadığını kontrol edin. Varsa şirketi geri döndürün, aksi takdirde not found geri döndürün.
        - 14- Birden fazla 'o' harfi içeren şirketleri filter metodunu kullanmadan filtreleyin.
        + 15- sort() metodunu kullanarak diziyi sıralayın.
        + 16- reverse() metodunu kullanarak diziyi tersine çevirin.
        + 17- Diziden ilk 3 şirketi dilimleyin ( Slice edin ).
        + 18- Diziden son 3 şirketi dilimleyin ( Slice edin ).
        + 19- Ortadaki IT şirketini ya da şirketlerini diziden dilimleyin ( Slice edin ).
        + 20- İlk IT şirketini diziden kaldırın.
        + 21- Ortadaki IT şirketini ya da şirketlerini diziden kaldırın.
        + 22- Sondaki IT şirketini diziden kaldırın.
        + 23- Bütün IT şirketlerini kaldırın.
*/

/* 
let arr = Array();

let arr7 = Array(7);

let arr7Length = arr7.length;

console.log(arr7[0], arr7[4], arr7[arr7Length - 1]);

let mixedDataTypes = ["Erdem", 19, 23.5, true, "Yağmur", true];
console.log(mixedDataTypes.length);

let ItCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(ItCompanies);

console.log(ItCompanies.length);

console.log(
  ItCompanies[0],
  ItCompanies[3],
  ItCompanies[ItCompanies.length - 1]
);

console.log(ItCompanies);

console.log(ItCompanies[0].toUpperCase());
console.log(ItCompanies[1].toUpperCase());
console.log(ItCompanies[2].toUpperCase());
console.log(ItCompanies[3].toUpperCase());
console.log(ItCompanies[4].toUpperCase());
console.log(ItCompanies[5].toUpperCase());
console.log(ItCompanies[6].toUpperCase());

console.log(
  `${ItCompanies[0]}, ${ItCompanies[1]}, ${ItCompanies[2]}, ${ItCompanies[3]}, ${ItCompanies[4]}, ${ItCompanies[5]} and ${ItCompanies[6]} are big IT companies.`
);

if (ItCompanies.includes("Apple")) {
  console.log(ItCompanies);
} else {
  console.log("Not found");
}

console.log(ItCompanies.sort());
console.log(ItCompanies.reverse());

console.log(ItCompanies.slice(3));
console.log(ItCompanies.slice(0, 4));
console.log(ItCompanies.slice(2, 4));

ItCompanies.shift();
console.log(ItCompanies);

ItCompanies.splice(2, 2);
console.log(ItCompanies);

ItCompanies.pop();
console.log(ItCompanies);

console.log("---------------------");

ItCompanies = [];
console.log(ItCompanies);
*/

/* 
    Egzersiz - Seviye 2
    + 1-  Ayrı bir country.js dosyası oluşturun ve country dizisini bu dosyaya kaydedin, ayrı bir web_techs.js dosyası oluşturun ve webTechs dizisini bu dosyaya kaydedin. Daha sonra Main.js dosyasından her iki dosyaya da erişim sağlayın.
        + 1- Önce bütün noktalama işaretlerini kaldırın ve ve string ifadeyi dizi olarak değiştirin ve dizideki kelime sayısını sayın.
        + 2- Aşşağıdaki alışveriş sepetindeki elemanları ekleyin, silin , düzenleyin.
        + 3- Eğer alışveriş sepetine zaten 'Meat' eklenmemişse en başa ekleyin.
        + 4- Eğer alışveriş sepetine zaten 'Sugar' eklenmemişse en sona ekleyin.
        + 5- Eğer bala alerjiniz varsa 'Honey' elemanını diziden silin.
        + 6- 'Tea' elemanını 'Green Tea' olarak güncelleyin.
        + 7- countries dizisinde 'Ethiopia' olup olmadığını kontrol edin. Eğer varsa 'ETHIOPIA' yazdırın. eğer yoksa bunu countries dizisine ekleyin.
        + 8- webTechs dizisinde Sass olup olmadığını kontrol edin eğer varsa 'Sass is a CSS preprocess' yazdırın. Eğer yoksa diziye Sass elemanını ekleyip diziyi yazdırın
        + 9- Aşağıdaki iki değişkeni birleştirin ve bir fullStack değişkeninde atayın.
*/

/* 
console.log(countries);
console.log(webTechs);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let replacedText = text.replace(/[&\/\\#,+()$~@%.'":*?<>{}]/g, "");
let words = replacedText.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
shoppingCart.splice(4, 1);
console.log(shoppingCart);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);
*/

/* 
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
*/

/* 
    Egzersiz - Seviye 3
        + 1- Aşağıdaki dizide 10 öğrencinin yaşı vardır:
            + 1- Diziyi sıralayın ve en küçük ve en büyük yaşı bulun
            2- Medyan yaşı bulun(dizinin ortasındaki eleman ama ortada iki eleman varsa elemanlar ikiye bölünür)
            3- Ortalama yaşı bulun(tüm elemanlar eleman sayısına bölünür)
            4- Yaş aralığını bulun (maks - min)
            5- abs() metodunu kullanarak (min - ortalama) ve (maks - ortalama) değerlerini karşılaştırın
        2- countries array dizisinden ilk 10 ülkeyi dilimleyin ( Slice edin )
        3- countries array dizisinden ortadaki ülkeleri bulun.
        4- countries dizisini çift ise iki eşit diziye bölün. countries dizisi çift değilse, ilk yarı için bir ülke fazla olarak bölün
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
