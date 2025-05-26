
const person1 = new Object();
const person2 = new Object();

person1.name = 'John';
person2.name = 'Jan';

console.log(person1.name);

const person3 = {
    name: 'John',
    birthYear: 2000,
    get age(){
        const year = new Date().getFullYear();
        return year - this.birthYear;
    }
}

console.log(person3.age)

let text = ""
for (let x in person3){
    text += person3[x] + " ";
}

console.log(text);

console.log(Object.values(person3));

let texte = ""
for (let [fruit, value] of Object.entries(person3)){
    texte += fruit + ": " + value + "\n";
}
console.log(texte)

let myString = JSON.stringify(person3);

console.log(myString);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const x1 = new Person("Jan", "1", 20, "Braun");
const x2 = new Person("Jan", "2", 20, "Crimson");

console.log(Object.values(x1));
console.log(Object.values(x2));

const x3 = new Person("Jan", "3", 20, "Crimson");
console.log(Object.values(x3));


let i =
    `asd
asda
asdasdasd
asdsda
`
console.log(i)

outerLoop: // Das ist ein Label
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) {
      break outerLoop; // Bricht die äußere Schleife ab!
    }
    console.log(i, j);
  }
}

function printValue(value){
    console.log(value);
}

function myFirst(){
    printValue("Erster");
}

function mySecond(){
    printValue("Zweiter");
}

mySecond();
myFirst();