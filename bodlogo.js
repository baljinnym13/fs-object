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
// Хэрэв тоо отрицатель байвал эсвэл 0-с бага байвал false буцаана
//   if (x < 0 || (x % 10 === 0 && x !== 0)) {
// return false;
//   }
// }
// let reversed = 0;
// let original = x;

// Тоо хоёр түр хувааж үлдсэн дэд бүтэн тоо байхад, түүнийг хооронд нь үржүүлэх

// bodlogo 8 Ugugdsun string urvuulna gargah jishee ni: input: hello output: olleh

// function reverseString(str) {}
// split() ашиглаж тэмдэгт мөрийг массив болгож байна, reverse() ашиглаж массивыг эсвэл элментүүдийг өөр байрыгаар байрлуулж байна
let string12 = "hello";
let rev = "";
// console.log(string12.length);
for (let i = string12.length - 1; i > -1; i--) {
  console.log("i-", i);
  rev += string12[i];
}

console.log("reverse:", rev);

//  bodlogo 9
let students = [
  {
    name: "Сэд-Эрдэнэ",

    age: 19,

    gender: "male",

    points: 70,
  },

  {
    name: "Индра",

    age: 19,

    gender: "female",

    points: 50,
  },

  {
    name: "Хатнаа ",

    age: 21,

    gender: "male",

    points: 99,
  },

  {
    name: "Тэмүүлэн",

    age: 23,

    gender: "male",

    points: 55,
  },

  {
    name: "Намуун",

    age: 23,

    gender: "female",

    points: 85,
  },
];
// Эхний объектыг хэвлэж гаргах
// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
// Сурагчдын насны дунджийг олох функц бичих
// Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол
// 60-аас дээш оноо авсан cурагчдийг тоол

console.log(students[0]);
let gender = "male";
for (let i = 0; i < students.length; i++) {
  if (students[i].gender === gender) {
    console.log("eregtei suragch :", students[i]);
  } else {
    console.log("emegtei suragch :", students[i]);
  }
}
let age_sum = 0;
let age_ave = 0;
for (let i = 0; i < students.length; i++) {
  age_sum = age_sum + students[i].age;
}
age_ave = age_sum / students.length;
console.log("averge :", age_ave);

let age = 21;
for (let i = 0; i < students.length; i++) {
  if (students[i].age >= age) {
    console.log("21is deesh nastai suragch:", students[i]);
  }
}
let piont = 60;
for (let i = 0; i < students.length; i++) {
  if (students[i].points > piont) {
    console.log("60s deesh onootoi suragch:", students[i]);
  }
}

// bodlogo 1 Ugugdsun array iin hamgiin tom, hamgiin bagiin olj, dundajiin olj, min, max, avg gsn 3 utag butsaadag function bichih. jishee ni: input [1, 2, 3, 4, 5] output { min: 1, max: 5, avg: 3 }

let test = [1, 2, 3, 4, 5];

function utga(arr) {
  let min = arr[0];
  let max = arr[0];
  let ave = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr.length;
  }
  ave = sum / arr.length;
  let odj = { min: min, max: max, avg: ave };
  //   return obj ;
  return { min: min, max: max, avg: ave };
}
let result = utga(test);
console.log("vr dvn:", result);
//   min = Math.min(...arr);
//   max = Math.max(...arr);

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     ave = sum / arr.length;
//   }
//   return min, max, ave;

// utga(test);
// console.log("min :", min, "max :", max, "average :", ave);

// bodlogo 2 Ugugdsun zahialguudiin niit borluulaltiin dun oldog function bichih.
const orders = [
  {
    orderId: 1,
    items: [
      { itemName: "Apple", price: 1 },
      { itemName: "Banana", price: 2 },
    ],
  },
  {
    orderId: 2,
    items: [
      { itemName: "Orange", price: 1.5 },
      { itemName: "Grapes", price: 3 },
    ],
  },
];
let priseall = 0;
function price(order) {
  console.log("work");
  for (let i = 0; i < order.length; i++) {
    console.log(order[i]);
    // let a = order[i].items.length;
    for (let j = 0; j < order[i].items.length; j++) {
      console.log(order[i].items[j]);
      priseall = priseall + order[i].items[j].price;
      console.log(order[i].items[j]);
    }
  }
  return priseall;
}
let s = price(orders);

console.log(s);

// bodlogo 3 Ugugdsun array iin anhnii utagtai bolon квадрат, куб iin oldog function bichih. jishee ni: input [1, 2, 3, 4, 5]
// output[
//   ({ original: 1, square: 1, cube: 1 },
//   { original: 2, square: 4, cube: 8 },
//   { original: 3, square: 9, cube: 27 },
//   { original: 4, square: 16, cube: 64 },
//   { original: 5, square: 25, cube: 125 })
// ];

// bodlogo 4 Ugugdsun company iin data aas hamgiin ih tsalintai ajiltang oldog function bichih.
const company = {
  name: "TechCorp",
  address: "123 Silicon Valley",
  employees: [
    { name: "Alice", salary: 90000 },
    { name: "Bob", salary: 120000 },
    { name: "Charlie", salary: 110000 },
  ],
};
function findmaxsalaryname(companydata) {
  let ajilchid = companydata.employees;
  let maxsalary = ajilchid[0].salary;
  let maxsalaryname = "";
  for (let i = 0; i < ajilchid.length; i++) {
    console.log(ajilchid[i]);
    if (ajilchid[i].salary > maxsalary) {
      maxsalaryname = ajilchid[i].name;
      maxsalary = ajilchid[i].salary;
    }
  }
  return maxsalaryname;
}
let name = findmaxsalaryname(company);
console.log(name);
