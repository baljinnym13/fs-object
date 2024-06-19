// at
// arrayiin indexrvv handah pvvnkts
// concat
// array hoorond nemdeg
// icludes
// array dotroos utga haina/
// indexof
// array dah utguudaas utga haij olood indexiig butsaana //
// join //
// array dotroh utguugiig niilvvlj string vvsgene
// pop //
// array dah hamgiin svvliin utgiig awna
// push //
// array dotor shine utga nemene
// shift //
// array dah ehnii utgaiig awna
// unshift //
// array iin urd utga nemene
// sort //
// utgiin daraalalaar erembelne utgiin ehnii temdegteer
// reverse //
// arrayiin utgiig urwuu bolgono
// slice //
// arrayiin utgiig huulj awaad shine array vvsgene arr.slice( ehlel , togsgol)
// splice
// arrayd utga nemej ustgah vildel hiine
// splice (ehleh indix , ustgah utgin too , nemeh utguud)
// bodlogo 1 Ugugdsun array ruu too nemj oruuldag function bich. jishee ni: input1: [1, 2, 4] input2: 5 output: [1, 2, 4, 5]

function toonemehfuc(arr, num) {
  let newArray = [...arr]; // Эхний массивыг хуулаад шинэ массив үүсгэнэ
  newArray.push(num); // Шинэ массив дээр тоог нэмнэ
  return newArray; // Шинэ массивыг буцаана
}
let toonemehArray = [1, 2, 4];
console.log("ehnii array:", toonemehArray);
let nemehNumber = 5;
let result1 = toonemehfuc(toonemehArray, nemehNumber);
console.log("too nemsen array:", result1); // Гаралт: [1, 2, 4, 5]
console.log("================");

// bodlogo 2 Array uusgeh function bich. jishee ni: input1: [ ] input2: 5 output [1, 2, 3, 4, 5]

function arrayvvsgehfuc(start, end) {
  let newArray = [];
  for (let i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
}
let vvsgeharrayinurt = 5;
let result2 = arrayvvsgehfuc(1, vvsgeharrayinurt);
console.log("fuc-r vvssen array:", result2); // Гаралт: [1, 2, 3, 4, 5]
console.log("===============");

// bodlogo 3 Garaas too avj(prompt ashiglaj hiih), tuhain tonuudiin niilber bolon dundaj oloh function bich.

function calculateSumAndAverage() {
  let numbers = []; // Хоосон массив үүсгэнэ
  let sum = 0;
  let average = 0;

  // Хэрэглэгчийн тоог авах
  let input = prompt();
  // "Тоог оруулна уу (буцаана хийгээд, хоосон утга оруулахад авах хэсэг)"
  while (input !== "") {
    let number = parseInt(input); // Хэрэв хэрэглэгчийн оруулсан тэмдэгт биш байвал, буцаана хийнэ
    if (!isNaN(number)) {
      numbers.push(number); // Массив руу тоог нэмнэ
      sum += number; // Нийлбэр руу тоог нэмэх
    }
    input = prompt();
    //   "Тоог оруулна уу (буцаана хийгээд, хоосон утга оруулахад авах хэсэг)" // Дараагийн тоог авах
  }

  // Дундаж тоо олох
  if (numbers.length > 0) {
    average = sum / numbers.length;
  }

  // Нийлбэр болон дундаж тоог хэвлэх
  console.log("Таны оруулсан тоонууд:", numbers);
  console.log("Нийлбэр:", sum);
  console.log("Дундаж:", average);
}

// Функцыг дуудах
calculateSumAndAverage();
console.log("===========");

// bodlogo 4 Ugugdsun temdegt muriin buh usgiig tom useg bolgoh function bich. input: 'the quick brown fox' output: 'The Quick Brown Fox '
