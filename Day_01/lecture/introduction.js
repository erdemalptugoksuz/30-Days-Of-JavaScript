// Konsola yazı yazdırma
console.log("30GündeJavaScript'e hoş geldiniz!");

// Veri Türlerini Kontrol Etme
console.log(typeof "Erdem Alptuğ"); //string
console.log(typeof 7); //number
console.log(typeof true); //boolean
console.log(typeof null); //object type
console.log(typeof undefined); //undefined

//Bu bir tekli yorumu satırıdır.
/* 
    Bu bir çoklu yorum
    satırıdır.
*/

//Değikenler
let aciklamaLet =
  "Değişken değeri eğer kodumuzun farklı yerlerinde değiştirilmesi gerekiyorsa; let kullanılır.";
const aciklamaConst =
  "Değişken değeri eğer kodumuzun hiçbir yerinde değiştirilmeyecekse; const kullanılır.";

/* 
    Değişken Kuralları
        *JavaScript değişken adı bir sayı ile başlamamalıdır.
        *JavaScript değişken adı, dolar işareti ve alt çizgi dışında özel karakterlere izin vermez.(Türkçe karakterlere özellike dikkat ediniz.)
        *JavaScript değişken adı, camelCase kuralına uymalı.
        *JavaScript değişken adı sözcükler arasında boşluk olmamalıdır.
*/

/*
    Değişken örnekleri:
        ad;
        soyAd;
        ulke;
        sehir;
        anneAdi;
        age;
        evliMi;

        soy_ad;
        evli_mi;
        anne_adi;

        sayi1;
        sayi_1;
        _sayi_1;
        $sayi1;
        yil2020;
        yil_2020;
*/

/*
    Geçersiz değişken örnekleri:
        first-name
        1_num
        num_#_1
*/

// Farklı veri türlerinin, farklı değişkenlerini tanımlama
let ad = "Erdem Alptuğ";
let soyAd = "Öksüz";
let ulke = "Türkiye";
let sehir = "İstanbul";
let yas = 19;
let instagram = "@erdemalptugoksuz";
let evliMi = false;

console.log(ad, soyAd, ulke, sehir, yas, instagram, evliMi);

// Değişkenlere sayı değeri tanımlama
let sayi = 7;
const yerCekim = 9.81;
const kaynamaNoktasi = 100;
const PI = 3.14;

console.log(sayi, yerCekim, kaynamaNoktasi, PI);

// Birden fazla değişkenleri virgül ile ayırarak tek satırda tanımlayabiliriz. Ancak ayrı satırlarda tanımlamak, kodu daha okunabilir kıldığı için tavsiye ederim.
let isim = "Erdem Alptuğ",
  is = "Çiğköfteci",
  konum = "Esenler";

console.log(isim, is, konum);
