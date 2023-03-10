// π© Callback Function using function expression
const printYes = function () {
  console.log("yes!");
};
const printNo = function () {
  console.log("no!");
};
function randomQuiz(answer, printYes, printNo) {
  // μ½λ°±ν¨μ
  if (answer === "I love you") {
    printYes();
  } else {
    printNo();
  }
}
randomQuiz("wrong", printYes, printNo);
randomQuiz("I love you", printYes, printNo);

// π© Anonymous Function
const printYes2 = function () {
  console.log("yes!");
};

// π© Named Function
//   : Better debugging in debugger's stack traces
const printNo2 = function print() {
  console.log("no!");
  print(); // ν¨μμμμ ν¨μ μμ  μ€μ€λ‘λ₯Ό λΆλ₯΄λ κ²μ recursionλΌκ³  ν¨!
};

// π© Arrow Function
//    : Always anonymous
const simplePrint = function () {
  console.log("simplePrint");
};
// β β κ°μ κΈ°λ₯!
const simplePrint2 = () => console.log("simplePrint");

const add3 = function (a, b) {
  return a + b;
};
// β β κ°μ κΈ°λ₯!
const add2 = (a, b) => a + b; // λμ€μ ν¨μν νλ‘κ·Έλλ°, λ°°μ΄, λ¦¬μ€νΈλ₯Ό λ³Όλ λμ±λ λΉμ λΉνν¨!

// π© IIFE: Immediately Invoked Function Expression
//          ν¨μλ₯Ό μμ±νμλ§μ λ°λ‘ νΈμΆνλ κ²!
(function hello() {
  console.log("IIFE");
})();

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}

console.log(calculate('add', 1, 5));
// console.log(calculate('haha', 1, 2));  // unknown command

// π© class
class Person {
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// π© getters & setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;   // set age() κ° νΈμΆλλ€! μμ μ₯μΉλ₯Ό κ±°μΉ¨!
  }

  get age() {
    return this._age;
  }
  set age(value) {
    /*if (value < 0) {
      throw Error('age can not be negative!');  // μμ μ₯μΉλ₯Ό κ±°μΉ¨!
    }*/
    this._age = value < 0 ? 0 : value;  // value κ° 0λ³΄λ€ μμΌλ©΄ 0μ μ°κ³  μλλ©΄ ν΄λΉ value λ₯Ό μ°μ
  }
}

const user1 = new User('Steve', 'Jobs', -1);  // age can not be negative!
console.log(user1.age); // getter νΈμΆ (κ΄νΈ μμ΄ νΈμΆνλ€)
user1.age = 12;         // setter νΈμΆ (κ΄νΈ μμ΄ νΈμΆνλ€)
console.log(user1.age);

// π’ κ°μ²΄ μμλ€κ° getter & setter λ£κΈ°
var μ¬λ = {
  name: "Park",
  age: 30,
  get nextAge() {
    return this.age + 1;
  },
  set setAge(λμ΄) {
    this.age = parseInt(λμ΄);
  }
};
// μ¬λ.nextAge(); // get μ μ μ΄μ€ μ΄νλ‘ ν¨μνμ()μΌλ‘ λͺ»μ!
// μ¬λ.setAge(2); // set μ μ μ΄μ€ μ΄νλ‘ ν¨μνμ()μΌλ‘ λͺ»μ!
μ¬λ.setAge = '20';
μ¬λ.nextAge;

class μ¬λ1 {
  constructor(){
    this.name = "Park";
    this.age = 20;
  }
}

// π© Fields (public, private)
class Experiment {
    publicField = 2;    // public
    #privateField = 0;  // private
}

const experiment = new Experiment();
console.log(experiment.publicField);    // μ κ·Ό κ°λ₯!
console.log(experiment.privateField);   // μ κ·Ό λΆκ°! (undefined)

// π© Static properties and methods
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
console.log(article1.publisher);
Article.printPublisher();

// π© Inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}
class Rectangle extends Shape {
  constructor(width, height, color) {
    super(width, height, color);
  }
  draw() {
    super.draw();
    console.log('π¦')
  }
}
class Triangle extends Shape {
  constructor(width, height, color) {
    super(width, height, color);
  }
  draw() {
    super.draw();
    console.log('πΊ')
  }
  getArea() {
    return super.getArea() / 2;   // overriding!
  }
  toString() {
    return `Triangle:\ncolor: ${this.color}\nwidth: ${this.width}\nheight: ${this.height}`
  }
}

const rectangle = new Rectangle(10, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 30, "red");
triangle.draw();
console.log(triangle.getArea());

console.log(rectangle instanceof Rectangle);  // true
console.log(triangle instanceof Rectangle);   // false
console.log(triangle instanceof Triangle);    // true
console.log(triangle instanceof Shape);       // true
console.log(triangle instanceof Object);      // true λͺ¨λ  ν΄λμ€λ€μ Object λ₯Ό μμνλ€!

console.log(triangle.toString());

// π₯ Object reference
//   : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// π© Objects
//   : key + value μ μ§ν©μ²΄    Ex) object = { key: value };
//   : One of the JavaScript's data types
//     A collection of related data and/or functionality.
//     Nearly all objects in JavaScript are instances of Object
//  π’ literals and properties
const obj1 = {};            // β object literal
const obj2 = new Object();  // β object constructor

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const ellie2 = {name: 'ellie', age: 4};   // js μμλ ν΄λμ€κ° μμ΄λ μ΄λ°μμΌλ‘ κ°μ²΄μμ± κ°λ₯!
print(ellie2);
// β jsλ Dynamically-typed languages λΌμ λμ μΌλ‘ νμμ΄ runtime(νλ‘κ·Έλ¨μ΄ λμν λ) λ κ²°μ λλ μΈμ΄!
//   κ·Έλμ μ΄λ° λ―ΈμΉμ§μ ν  μ μλ€! β β
ellie.hasJob = true;  // νμ§λ§ κ°λ₯ν μ΄λ° κ²μ νΌν΄μ μ½λ©νλ κ²μ΄ μ’μ! (μ μ§λ³΄μνλ€λ€)
console.log(ellie.hasJob);  // true
delete ellie.hasJob;
console.log(ellie.hasJob);  // undefined

//  π’ Computed properties
console.log(ellie.name);    // ellie
              // β .(dot)μ μ½λ©νλ κ·Έ μκ°, κ·Έ ν€μ ν΄λΉνλ κ°μ λ°μμ¬λ μ΄λ€!
console.log(ellie['name']); // ellie  β computed properties
              // β [''] (computed properties)λ μ νν μ΄λ€ ν€κ° νμνμ§ λͺ¨λ₯Όλ, μ¦, runtime μμ κ²°μ λ  λ μ΄λ€!
              //                                μ€μκ°μΌλ‘ μνλ ν€μ κ°μ λ°μμ€κ³  μΆμΌλ©΄ [''](computed properties)λ₯Ό μ΄λ€!
ellie['hasJob'] = true;
console.log(ellie['hasJob']);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(ellie, 'name');
printValue(ellie, 'age');

//  π’ Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = Person1('ellie', 30);
console.log(person4);
const person5 = new Person2('ellie', 30);
console.log(person5);

function Person1(name, age) {  // μ΄λ°μμΌλ‘ λ€λ₯Έ κ³μ°μ μνκ³  μμνκ² κ°μ²΄λ§ μμ±νλ ν¨μλ λ³΄ν΅ λλ¬Έμλ‘ μμ!
  return {
    // name: name,
    // age: age,
    name, // jsμλ property value shorthand λΌλ κΈ°λ₯μ΄ μμ΄μ key, value μ΄λ¦μ΄ κ°μΌλ©΄ νλλ‘ μλ΅ν  μ μμ!
    age
  };
}

//  π’ Constructor function
//    β ν΄λμ€κ° μμλλ β μ΄λ°μμΌλ‘ μμ±μ΄ λ§μ΄ λ¨!
function Person2(name, age) {
  this.name = name;
  this.age = age;
}

//  π’ in operator: property existence check (key in obj)
//                  ν΄λΉνλ κ°μ²΄μμ ν€κ° μλμ§ νμΈνλ κ²!
console.log('name' in ellie);   // true
console.log('age' in ellie);    // true
console.log('random' in ellie); // false

//  π’ for (key in obj)
for (key in ellie) {
  console.log(key);       // name, age, hasJob
}

//  π’ for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);  // 1, 2, 4, 5
}
// β β κ°μ μ½λ!!
for (value of array) {
  console.log(value);     // 1, 2, 4, 5
}

//  π’ Fun cloning
//    Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);    // coder

// β Old way (cloning)
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

// β New way (cloning)
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// β β λ κ°κ²°νκ²
const user5 = Object.assign({}, user);
console.log(user5);

// Another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);  // μ€λ³΅λλ key λ λ§μ§λ§μ μλκ² λ€μ΄κ°λ€!
console.log(mixed.color); // blue
console.log(mixed.size);  // big

// π© Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
// 2. Index position
const fruits2 = ['π', 'π'];
console.log(fruits2);

// a. for
for (let i = 0; i < fruits2.length; i++) {
  console.log(fruits2[i]);
}
// b. for of
for (let fruit of fruits2) {
  console.log(fruit);
}
// c. forEach
fruits2.forEach(function (fruit2, index) {
  console.log(fruits2, index);
});
// β β λ κ°λ¨ν
fruits2.forEach((fruits2, index) => console.log(fruits2, index));

// 4. Addition, deletion, copy
//  β push : add an item to the end
fruits2.push('π', 'π');
console.log(fruits2);
//  β pop: remove an item from the end
fruits2.pop();
console.log(fruits2);
//  β unshift: add an item to the beginning
fruits2.unshift('π', 'π');
console.log(fruits2);
//  β shift: remove an item from the beginning
fruits2.shift();
console.log(fruits2);
// π΄note!! shift & unshift are slower than pop, pushπ΄
//  β splice: remove an item by index position
fruits2.push('π');
console.log(fruits2);
fruits2.splice(1, 2);
console.log(fruits2);
fruits2.splice(1, 1, 'π', 'π');
console.log(fruits2);

// 5. combine two arrays
const fruits3 = ['π', 'π'];
const fruits4 = ['π', 'π'];
const newFruits = fruits2.concat(fruits3, fruits4);
console.log(newFruits);

// 6. Searching: find the index
console.log(fruits2);
console.log(fruits2.indexOf('π'));
console.log(fruits2.indexOf('π'));

// 7. includes
console.log(fruits2.includes('π'));
console.log(fruits2.includes('π'));

// 8. lastIndexOf
console.log(fruits2);
fruits2.push('π');
console.log(fruits2);
console.log(fruits2.indexOf('π'));
console.log(fruits2.lastIndexOf('π'));
