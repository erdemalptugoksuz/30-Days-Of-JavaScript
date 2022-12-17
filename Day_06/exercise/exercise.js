/* 
    Egzersiz - Seviye 1
        + 1- while ve do while kullanarak 0 dan 10'a kadar giden bir döngü kurun.
        + 2- while ve do while kullanarak 10 dan 0'a kadar giden bir döngü kurun.
        + 3- 0'dan n' e kadar giden bir for döngüsü kurun.
        - 4- Console.log() kullanarak aşağıdaki çıktıyı almayı deneyin.
        + 5- Aşağıdaki çıktıyı almak için bir döngü kurun:
        + 6- Aşağıdaki çıktıyı almak için bir döngü kurun:
        + 7- 0'dan 100'e kadar olan çift sayıları bir döngü yardımı ile ekrana yazdırın.
        + 8- 0'dan 100'e kadar olan tek sayıları bir döngü yardımı ile ekrana yazdırın
        9- 0'dan 100'e kadar olan asal sayıları bir döngü yardımı ile ekrana yazdırın
        10- 0 ile 100 arasındaki tüm sayıların toplamını ekrana yazıdırn
        11- 0 ile 100 arasındaki tek ve çift sayıların toplamını bulun
*/

/* 
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);
*/

/* 
let i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);
*/

/* 
for (let i = 0; i <= 28; i++) {
  console.log(i);
}
*/

/* 
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}
*/

/* 
console.log("i    i^2   i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i ** 2}    ${i ** 3}`);
}
*/

/* 
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  } else {
    continue;
  }
}
*/

/* 
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  } else {
    continue;
  }
}
*/
