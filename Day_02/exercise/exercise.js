/* 
    Görevler - Seviye 1
        + 1- Challenge adında bir değişken tanımlayın ve '30 Days Of JavaScript' başlangıç ​​değerine atayın.
        + 2- console.log() kullanarak tarayıcı konsolunda değişkeni yazdırın,
        + 3- console.log() kullanarak tarayıcı konsolunda dizenin length değerini yazdırın,
        + 4- toUpperCase() yöntemini kullanarak tüm dize karakterlerini büyük harflerle değiştirin,
        + 5- toLowerCase() yöntemini kullanarak tüm dize karakterlerini küçük harflerle değiştirin,
        + 6- substr() veya substring() yöntemini kullanarak string'in ilk kelimesini kesin-silin (dilimleyin)
        + 7- Days Of JavaScript ifadesini 30 Days Of JavaScript'ten ayırın.
        + 8- includes() yöntemini kullanarak string'in Script kelimesini içerip içermediğini kontrol edin
        + 9- split() yöntemini kullanarak string öğesini bir array'ye bölün
        + 10- 30 Days Of JavaScript dizesini split() yöntemini kullanarak boşlukta bölün
        + 11- 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dizeyi virgülden split ve bir dizi olarak değiştirin.
        + 12- replace() yöntemini kullanarak 30 Days of JavaScript'i 30 Days of Python olarak değiştirin.
        + 13- 'JavaScript'in 30 Günü' dizesinde dizin 15'teki karakter nedir? charAt() yöntemini kullanın.
        + 14- charCodeAt() kullanan 'JavaScript'in 30 Günü' dizesindeki J karakter kodu nedir?
        + 15- 30 Days of JavaScript'te a öğesinin ilk oluşumunun konumunu belirlemek için indexOf kullanın
        + 16- 30 Days of JavaScript'te a öğesinin son oluşumunun konumunu belirlemek için lastIndexOf kullanın.
        + 17- Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için indexOf kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
        + 18- Aşağıdaki cümlede çünkü kelimesinin son geçtiği yeri bulmak için lastIndexOf kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
        + 19- Aşağıdaki cümlede çünkü kelimesinin ilk geçtiği yeri bulmak için search kullanın: 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
        + 20- Bir dizgenin başındaki ve sonundaki boşlukları kaldırmak için trim() kullanın. Örneğin '30 Days Of JavaScript'.
        + 21- 30 Days Of JavaScript dizesiyle startsWith() yöntemini kullanın ve sonucu doğru yapın
        + 22- 30 Days Of JavaScript dizesiyle endsWith() yöntemini kullanın ve sonucu doğru yapın
        + 23- JavaScript'in 30 Günü'ndeki tüm a'leri bulmak için match() yöntemini kullanın
        + 24- concat() kullanın ve '30 Days of' ve 'JavaScript'i tek bir dize olan '30 Days of JavaScript' ile birleştirin
        + 25- 30 Gün JavaScript'i 2 kez yazdırmak için repeat() yöntemini kullanın
 */

let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3));
console.log(challenge.substring(0, 2));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",")
);
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(
  "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır.".indexOf(
    "çünkü"
  )
);
console.log(
  "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır.".lastIndexOf(
    "çünkü"
  )
);
console.log(
  "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır.".search(
    "çünkü"
  )
);
console.log("   30 Days Of JavaScript  ".trim());
console.log(challenge.startsWith("3"));
console.log(challenge.endsWith("t"));
console.log(challenge.match(/a/gi));
console.log("30 Days of".concat(" JavaScript"));
console.log("JavaScript".repeat(2));

/* 
    Görevler - Seviye 2
        + 1- console.log() kullanarak aşağıdaki ifadeyi yazdırın:
        + 2- console.log()'u kullanarak Rahibe Teresa'nın aşağıdaki alıntısını yazdırın:
        + 3- '10' tipinin tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın.
        + 4-  parseFloat('9.8') 10'a tam olarak eşit değilse, 10'a eşit olup olmadığını kontrol edin.
        + 5-  Hem python hem de jargonda 'on' ifadesinin bulunup bulunmadığını kontrol edin
        + 6-  Umarım bu kurs jargonla dolu değildir. Cümlede jargon olup olmadığını kontrol edin.
        + 7-  0 ile 100 arasında rastgele bir sayı üretin.
        + 8-  50 ile 100 arasında rastgele bir sayı üretin.
        + 9-  Dahil olmak üzere 0 ile 255 arasında rastgele bir sayı oluşturun.
        + 10- Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin.
        + 11- Aşağıdaki kalıbı yazdırmak için console.log() ve kaçış karakterlerini kullanın.
        + 12- substr kullanarak çünkü çünkü ifadesini aşağıdaki cümleden ayırın:'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
*/

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);
let sayi = "10";
console.log(sayi == 10);
console.log(parseFloat("9.8") == 10);
console.log("python".search("on"));
console.log("jargonda".search("on"));
console.log("Umarım bu kurs jargonla dolu değildir".search("jargon"));
let sayi1 = Math.random();
let numSayi10to100 = sayi1 * 101;
console.log(numSayi10to100);
let sayi2 = Math.random();
let numSayi150to100 = sayi1 * 51 + 50;
console.log(numSayi150to100);
let numSayi10to255 = sayi1 * 256;
console.log(numSayi10to255);

let rastgele = Math.random();
let rastgele0to9 = rastgele * 10;
let rastgeleDuzgun = Math.floor(rastgele0to9);
console.log("JavaScript".charAt(rastgele0to9));

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
let metin = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır";
console.log(metin.lastIndexOf("çünkü"));
console.log(metin.substring(37, 48));

/* 
    Görevler - Seviye 3
        + 1- 'Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.' Bu cümledeki love kelimesini sayın.
        + 2- Aşağıdaki cümledeki tüm çünkü sayısını saymak için match() kullanın:'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
        + 3- Aşağıdaki metni temizleyin ve en sık kullanılan kelimeyi bulun (ipucu, değiştirme ve normal ifadeleri kullanın).
        4- Aşağıdaki metinden sayıları çıkararak kişinin yıllık toplam gelirini hesaplayın.
*/

let love =
  "Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.";
console.log(love.match(/aşk/gi));

let cunku = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır";
console.log(cunku.match(/çünkü/gi));

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence);

let fixedSentence = sentence.replace(/[&\/\\#,+()$~@%.'":*?<>{}]/g, "");
console.log(fixedSentence);

let maas =
  "Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.";
let regEx = /\d+/g;
let maasDizi = maas.match(regEx);
console.log(maasDizi);
let maasSayi = parseInt(maasDizi);
console.log(maasSayi);
