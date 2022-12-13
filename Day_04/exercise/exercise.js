/* 
    Egzersiz : Seviye 1
        + 1- prompt(“Enter your age:”) ile kullanıcı girdisi alın. Kullanıcı 18 veya daha büyükse, geri bildirimde bulunun:'Sürecek kadar yaşlısınız', ancak 18 değilse, 18 yaşına girmesi gereken yıl sayısını beklemeye başlayarak başka bir geri bildirim verin.
        + 2- if… else kullanarak myAge ve yourAge değerlerini karşılaştırın. Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin. Yaşı girdi olarak almak için komut prompt(“Enter your age:”) kullanın.
        + 3- a, b'den büyükse, 'a b'den büyüktür', aksi takdirde 'a, b'den küçüktür' döndürür. şekilde uygulamaya çalışın
        + 4- Çift sayılar 2'ye tam bölünür kalan sıfırdır. Bir sayının çift olup olmadığını veya JavaScript kullanıp kullanmadığını nasıl kontrol edersiniz?
*/

/* 
let userAge = parseInt(prompt("Yaşınızı giriniz: "));
if (userAge >= 18) {
  console.log("You are old enough to drive.");
} else if (userAge < 18) {
  console.log(`You are left with ${18 - userAge} years to drive`);
}
*/

/* 
let myAge = 25;
let yourAge = parseInt(prompt("Enter your age: "));
if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
}
*/

/* 
let a = 4;
let b = 3;
let kontrol = a > b;
if (kontrol) {
  console.log("a b'den büyüktür.");
} else {
  console.log("a b'den küçüktür.");
}
kontrol ? console.log("a b'den büyüktür.") : console.log("a b'den küçüktür.");
*/

/* 
let sayi = parseInt(prompt("Sayı giriniz: "));
let tekSayi = sayi % 2 > 0;
let ciftSayi = sayi % 2 == 0;
if (ciftSayi) {
  console.log("Çift");
} else if (tekSayi) {
  console.log("Tek");
} else {
  console.log("Sayı gir!");
}
*/

/* 
    Egzersiz : Seviye 2
        1- Öğrencilere puanlarına göre not verebilecek bir kod yazın:
        2- Mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin. Değerler :
        3- Bir günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin. Komut dosyanız girdi olarak gün alacaktır.
*/

let puan = parseInt(prompt("Notunuzu giriniz: "));
switch (puan) {
  case puan < 80:
    console.log("A");
    break;
}
