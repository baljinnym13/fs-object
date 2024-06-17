let person = {
  firstname: "bataa",
  lastname: "bold",
  age: 22,
  score: [77, 45, 234, , 243],
  ismarried: false,
};
console.log(person.firstname);
console.log(person["lastname"]);

let animal = {
  name: "banhar",
  type: "dog",
  age: 2,
  color: "tsagaan",
  uulder: "maldiz",
  sound: function () {
    console.log("woof woof !");
  },
};
console.log("amitanii ner", animal.name);
console.log("amitanii colr", animal.color);
animal.sound();

let employeesname = ["bataa", "saraa"];
let employeesage = [22, 34];
let employees = [
  { name: "bataa", age: 22 },
  { name: "saraa", age: 34 },
];
for (let i = 0; i < employees.length; i++) {
  console.log("name :", employees[i].name);
}
// object huulj awah
let person2 = { ...person };
person2.firstname = "naraa";
person2.lastname = "saraa";
console.log("p1", person);
console.log("p2", person2);
