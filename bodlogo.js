//  bodlogo 1 Өгөгдсөн 2 тооны ихийг олох функц бич.
let a = 16;
let b = 14;
let ih = (a, b) => {
  if (a > b) {
    console.log("ih:", a);
  } else {
    console.log("ih:", b);
  }
};
ih(a, b);

// bodlogo 2 Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
function findNumberIndex(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i; // Индексийг буцаана
    }
  }
  return -1; // Олдсон тоо байхгүй бол -1 буцаана
}

// Жишээ array
let array = [1, 3, 5, 7, 9];

// Тэст хийх
console.log(findNumberIndex(array, 5)); // 2 гэж хэвлэнэ (индекс нь 0-с эхлэнэ)
console.log(findNumberIndex(array, 8)); // -1 гэж хэвлэнэ (8 тоо олдсонгүй)

// bodlogo 3 Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
function findCharacterIndex(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i; // Индексийг буцаана
    }
  }
  return -1; // Олдсон тэмдэгт байхгүй бол -1 буцаана
}

// Жишээ тэмдэгт мөр
let str = "Hello, World!";

// Тэст хийх
console.log(findCharacterIndex(str, "o")); // 4 гэж хэвлэнэ (индекс нь 0-с эхлэнэ)
console.log(findCharacterIndex(str, "z")); // -1 гэж хэвлэнэ ('z' тэмдэгт олдсонгүй)

// bodlogo 4 Өгөгдсөн array - ийн дундажыг олох функц бич.
function findAverage(arr) {
  let sum = 0;

  // Нийт элементүүдийг нэмэх
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  // Дундаж тоо
  let average = sum / arr.length;

  return average;
}

// Жишээ array
let arr = [2, 4, 6, 8, 10];

// Дундажыг олох
let avg = findAverage(array);
console.log("Дундаж:", avg); // Дундаж: 6 гэж хэвлэнэ

// bodlogo 5 Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
let niilber = [2, 3, 4, 5, 6];
let niilber1 = 0;
for (let i = 0; i < niilber.length; i++) {
  niilber1 = niilber1 + niilber[i];
}
console.log("niilber:", niilber1);

// bodlogo 6 Өгөгдсөн тоо анхны эсэхийг олох функц бич.

function isPrime(number) {
  // 1 болон 0 байхгүй учир хоосон буюу анхны болгоно
  if (number <= 1) {
    return false;
  }

  // 2 болон 3 байхгүй учир үргэлж анхны болгоно
  if (number <= 3) {
    return true;
  }

  // 2-ээс эхлэн үргэлж шалгана
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  // 5-с эхлэн үргэлж шалгана
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

// Тэст хийх
console.log(isPrime(17)); // true гэж хэвлэнэ (17 нь анхны тоо)
console.log(isPrime(15)); // false гэж хэвлэнэ (15 нь анхны тоо биш)

// bodlogo 7 Palindrome too eseh jishee ni: input: 121 output: true, input: -121 output: false, input: 12  output: false

// function isPalindrome(x) {
//   // Хэрэв тоо отрицатель байвал эсвэл 0-с бага байвал false буцаана
//   if (x < 0 || (x % 10 === 0 && x !== 0)) {
//     return false;
//   }
// }
// let reversed = 0;
// let original = x;

// Тоо хоёр түр хувааж үлдсэн дэд бүтэн тоо байхад, түүнийг хооронд нь үржүүлэх

// bodlogo 8 Ugugdsun string urvuulna gargah jishee ni: input: hello output: olleh

// function reverseString(str) {}
// split() ашиглаж тэмдэгт мөрийг массив болгож байна, reverse() ашиглаж массивыг эсвэл элментүүдийг өөр байрыгаар байрлуулж байна
let string = "hello";
let rev;
for (let i = string.length; i < 0; i--) {
  rev += string[i];
}
console.log("reverse:", rev);
