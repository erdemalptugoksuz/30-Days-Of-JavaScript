/* 
    Egzersiz: Seviye 1
        + 1- firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturun ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.
        + 2- '10' türünün 10'a eşit olup olmadığını kontrol edin
        + 3- parseInt('9.8') 10'a eşit olup olmadığını kontrol edin
        + 4- Boolean değeri, doğru veya yanlıştır.
        + 5- console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
        - 6- console.log() kullanmadan önce aşağıdaki ifadelerin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
        + 7- Aşağıdaki etkinlikleri yapmak için Date nesnesini kullanın.
*/

/* 
let firstName = "Erdem Alptuğ";
let lastName = "Öksüz";
let country = "Türkiye";
let city = "İstanbul";
let age = 19;
let isMarried = false;
let year = new Date();
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log("-----------------");

console.log("10" == 10);

console.log("-----------------");

console.log(parseInt(9.8) == 10);

console.log("-----------------");

console.log(4 > 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 < 3);
console.log(4 == 3);
console.log("4" === 4);

console.log("-----------------");

console.log("Python".length != "Jargon".length);

console.log("-----------------");

console.log("Dragon".match("on") && "Jargon".match("on"));

console.log("-----------------");

let tarih = new Date();
console.log(tarih.getFullYear());
console.log(tarih.getMonth());
console.log(tarih.getDate());
console.log(tarih.getDay());
console.log(tarih.getHours());
console.log(tarih.getMinutes());
console.log(tarih.getTime());
 */

/* 
    Egzersiz - Seviye 2
        + 1- Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h).
        + 2- Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın (çevre = a + b + c)
        + 3- Komut istemini kullanarak uzunluk ve genişliği alın ve bir dikdörtgenin alanını hesaplayın (alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik))
        + 4- Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14.
        - 5- y = 2x -2'nin eğimini, x kesme noktasını ve y kesme noktasını hesaplayın
        - 6- Eğim m = (y2-y1)/(x2-x1). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun
        - 7- Yukarıdaki iki sorunun eğimini karşılaştırın.
        + 8- y'nin değerini hesaplayın (y = x2 + 6x + 9). Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun.
        9- Kullanıcıdan saat ve saat başına oran girmesini isteyen bir komut dosyası yazın. Kişinin ücretini hesapla?
        10- Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.
        11- Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız.
        12- İki değişken myAge ve yourAge bildirin ve bunlara başlangıç değerleri ile myAge ve yourAge atayın.
        13- İstemi kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.
        14- Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım
        15- Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun
*/

/* 
let base = parseIn(prompt("Enter Base: "));
let height = parseInt(prompt("Enter height: "));
let triangle = 0.5 * base * height;
console.log(`The are of the triangle is ${triangle}`);
*/

/* 
let sideA = parseInt(prompt("Enter side a: "));
let sideB = parseInt(prompt("Enter side b: "));
let sideC = parseInt(prompt("Enter side c: "));
let triangle = sideA + sideB + sideC;
console.log(`The perimeter of the triangle is ${triangle}`);
 */

/* 
let uzunluk = parseInt(prompt("Dikdörtgen uzunluğu giriniz: "));
let genislik = parseInt(prompt("Dikdörtgen genişliği giriniz: "));
let alan = uzunluk * genislik;
let cevre = 2 * (uzunluk + genislik);
console.log(`Dikdörtgenin çevresi: ${cevre}, alanı: ${alan} dır.`);
 */

/* 
let PI = 3.14;
let yarıCap = parseInt(prompt("Daire yarıçapını giriniz: "));
let alan = PI * yarıCap * yarıCap;
let cevre = 2 * PI * yarıCap;
console.log(`Dairenin alanı: ${alan}, çevresi: ${cevre} dir.`);
*/

/* 
let sayiX = parseInt(prompt("x sayısını giriniz: "));
let sayiY = sayiX ** 2 + 6 * sayiX + 9;
console.log(`y = x2 + 6x + 9 sorusunun cevabı ${sayiY} dir.`);
 */
