// 🟩 Callback Function using function expression
const printYes = function () {
  console.log("yes!");
};
const printNo = function () {
  console.log("no!");
};
function randomQuiz(answer, printYes, printNo) {
  // 콜백함수
  if (answer === "I love you") {
    printYes();
  } else {
    printNo();
  }
}
randomQuiz("wrong", printYes, printNo);
randomQuiz("I love you", printYes, printNo);

// 🟩 Anonymous Function
const printYes2 = function () {
  console.log("yes!");
};

// 🟩 Named Function
//   : Better debugging in debugger's stack traces
const printNo2 = function print() {
  console.log("no!");
  print(); // 함수안에서 함수 자신 스스로를 부르는 것을 recursion라고 함!
};

// 🟩 Arrow Function
//    : Always anonymous
const simplePrint = function () {
  console.log("simplePrint");
};
// ↑ ↓ 같은 기능!
const simplePrint2 = () => console.log("simplePrint");

const add3 = function (a, b) {
  return a + b;
};
// ↑ ↓ 같은 기능!
const add2 = (a, b) => a + b; // 나중에 함수형 프로그래밍, 배열, 리스트를 볼때 더욱더 빛을 빌휘함!

// 🟩 IIFE: Immediately Invoked Function Expression
//          함수를 생성하자마자 바로 호출하는 것!
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

// 🟩 class
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

// 🟩 getters & setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;   // set age() 가 호출된다! 안전장치를 거침!
  }

  get age() {
    return this._age;
  }
  set age(value) {
    /*if (value < 0) {
      throw Error('age can not be negative!');  // 안전장치를 거침!
    }*/
    this._age = value < 0 ? 0 : value;  // value 가 0보다 작으면 0을 쓰고 아니면 해당 value 를 쓰자
  }
}

const user1 = new User('Steve', 'Jobs', -1);  // age can not be negative!
console.log(user1.age); // getter 호출 (괄호 없이 호출한다)
user1.age = 12;         // setter 호출 (괄호 없이 호출한다)
console.log(user1.age);

// 🟢 객체 안에다가 getter & setter 넣기
var 사람 = {
  name: "Park",
  age: 30,
  get nextAge() {
    return this.age + 1;
  },
  set setAge(나이) {
    this.age = parseInt(나이);
  }
};
// 사람.nextAge(); // get 을 적어준 이후로 함수형식()으로 못씀!
// 사람.setAge(2); // set 을 적어준 이후로 함수형식()으로 못씀!
사람.setAge = '20';
사람.nextAge;

class 사람1 {
  constructor(){
    this.name = "Park";
    this.age = 20;
  }
}

// 🟩 Fields (public, private)
class Experiment {
    publicField = 2;    // public
    #privateField = 0;  // private
}

const experiment = new Experiment();
console.log(experiment.publicField);    // 접근 가능!
console.log(experiment.privateField);   // 접근 불가! (undefined)

// 🟩 Static properties and methods
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

// 🟩 Inheritance
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
    console.log('🟦')
  }
}
class Triangle extends Shape {
  constructor(width, height, color) {
    super(width, height, color);
  }
  draw() {
    super.draw();
    console.log('🔺')
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
console.log(triangle instanceof Object);      // true 모든 클래스들은 Object 를 상속한다!

console.log(triangle.toString());

// 🟥 Object reference
//   : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// 🟩 Objects
//   : key + value 의 집합체    Ex) object = { key: value };
//   : One of the JavaScript's data types
//     A collection of related data and/or functionality.
//     Nearly all objects in JavaScript are instances of Object
//  🟢 literals and properties
const obj1 = {};            // → object literal
const obj2 = new Object();  // → object constructor

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const ellie2 = {name: 'ellie', age: 4};   // js 에서는 클래스가 없어도 이런식으로 객체생성 가능!
print(ellie2);
// ✔ js는 Dynamically-typed languages 라서 동적으로 타입이 runtime(프로그램이 동작할때) 때 결정되는 언어!
//   그래서 이런 미친짓을 할 수 있다! ↓ ↓
ellie.hasJob = true;  // 하지만 가능한 이런 것을 피해서 코딩하는 것이 좋음! (유지보수힘들다)
console.log(ellie.hasJob);  // true
delete ellie.hasJob;
console.log(ellie.hasJob);  // undefined

//  🟢 Computed properties
console.log(ellie.name);    // ellie
              // ↑ .(dot)은 코딩하는 그 순간, 그 키에 해당하는 값을 받아올때 쓴다!
console.log(ellie['name']); // ellie  → computed properties
              // ↑ [''] (computed properties)는 정확히 어떤 키가 필요한지 모를때, 즉, runtime 에서 결정될 때 쓴다!
              //                                실시간으로 원하는 키의 값을 받아오고 싶으면 [''](computed properties)를 쓴다!
ellie['hasJob'] = true;
console.log(ellie['hasJob']);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(ellie, 'name');
printValue(ellie, 'age');

//  🟢 Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = Person1('ellie', 30);
console.log(person4);
const person5 = new Person2('ellie', 30);
console.log(person5);

function Person1(name, age) {  // 이런식으로 다른 계산은 안하고 순수하게 객체만 생성하는 함수는 보통 대문자로 시작!
  return {
    // name: name,
    // age: age,
    name, // js에는 property value shorthand 라는 기능이 있어서 key, value 이름이 같으면 하나로 생략할 수 있음!
    age
  };
}

//  🟢 Constructor function
//    ✔ 클래스가 없을때는 ↓ 이런식으로 작성이 많이 됨!
function Person2(name, age) {
  this.name = name;
  this.age = age;
}

//  🟢 in operator: property existence check (key in obj)
//                  해당하는 객체안에 키가 있는지 확인하는 것!
console.log('name' in ellie);   // true
console.log('age' in ellie);    // true
console.log('random' in ellie); // false

//  🟢 for (key in obj)
for (key in ellie) {
  console.log(key);       // name, age, hasJob
}

//  🟢 for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);  // 1, 2, 4, 5
}
// ↑ ↓ 같은 코드!!
for (value of array) {
  console.log(value);     // 1, 2, 4, 5
}

//  🟢 Fun cloning
//    Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);    // coder

// ✔ Old way (cloning)
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

// ✔ New way (cloning)
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// ↓ ↓ 더 간결하게
const user5 = Object.assign({}, user);
console.log(user5);

// Another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);  // 중복되는 key 는 마지막에 있는게 들어간다!
console.log(mixed.color); // blue
console.log(mixed.size);  // big

// 🟩 Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
// 2. Index position
const fruits2 = ['🍎', '🍌'];
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
// ↑ ↓ 더 간단히
fruits2.forEach((fruits2, index) => console.log(fruits2, index));

// 4. Addition, deletion, copy
//  ✔ push : add an item to the end
fruits2.push('🍓', '🍑');
console.log(fruits2);
//  ✔ pop: remove an item from the end
fruits2.pop();
console.log(fruits2);
//  ✔ unshift: add an item to the beginning
fruits2.unshift('🍓', '🍑');
console.log(fruits2);
//  ✔ shift: remove an item from the beginning
fruits2.shift();
console.log(fruits2);
// 🔴note!! shift & unshift are slower than pop, push🔴
//  ✔ splice: remove an item by index position
fruits2.push('🍓');
console.log(fruits2);
fruits2.splice(1, 2);
console.log(fruits2);
fruits2.splice(1, 1, '🍆', '🍉');
console.log(fruits2);

// 5. combine two arrays
const fruits3 = ['🍓', '🍑'];
const fruits4 = ['🍓', '🍑'];
const newFruits = fruits2.concat(fruits3, fruits4);
console.log(newFruits);

// 6. Searching: find the index
console.log(fruits2);
console.log(fruits2.indexOf('🍓'));
console.log(fruits2.indexOf('🍕'));

// 7. includes
console.log(fruits2.includes('🍓'));
console.log(fruits2.includes('🍕'));

// 8. lastIndexOf
console.log(fruits2);
fruits2.push('🍑');
console.log(fruits2);
console.log(fruits2.indexOf('🍑'));
console.log(fruits2.lastIndexOf('🍑'));
