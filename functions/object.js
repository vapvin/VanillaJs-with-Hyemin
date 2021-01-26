// // 객체 - 데이터랑 함수들의 집합

// const obj = { // 멤버
//     a: "data", // 프로퍼티, 속성
//     d: 3,
//     e: {
//         g: 5
//     },

//     b: function(){ // 메소드
//        console.log("b"); 
//     }
// }

// console.log(obj.a);
// console.log(obj.b);

// 객체 생성 방법 - 3개

// 객체 리터럴

// const obj1 = {
//     a: 5
// };

// const user1 = {
//     name: "name",
//     age: 24
// }

// const user2 = {
//     name: "name",
//     age: 24
// }

// // 내장함수를 이용한 방법

// const obj2 = new Object();

// obj2["a"] = 5;

// console.log(obj1)
// console.log(obj2)

// // 객체 생성자 

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// const obj3 = new Person("name", 24);
// const obj4 = new Person("name1", 14);
// console.log(obj3);
// console.log(obj4);


// const obj = {
//     name: "현규",
//     sayHello: function(){
//         console.log(this.name + "님 안녕하세요");
//     }
// }

// obj.sayHello();

// const a = "test";

// function test(){
//     console.log(this);
// }

// test();

// 생성자 함수

// function Person(name, age){ // 생성자 함수는 new 키워드로 호출을 하게되면 빈객체를 먼저 생성한다.
//     this.name = name; // 함수 내부의 this는 처음 생성된 빈 객체를 가르키게 된다.
//     this.age = age;
//     console.log(this);
// }

// const person1 = new Person("test", 12);

// console.log(person1)

// const Person = () => {
//     this.age = 0;
//     console.log(this.age);

//     setTimeout(() => {
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }

// Person();

// const obj = {

//     abc: () => {
//         console.log(this);
//         setTimeout(() => {
//             console.log(this)
//             setTimeout(() => {
//                 console.log(this);
//             }, 100)
//         }, 100)
//     }
// }

// obj.abc();

// const obj = {
//     aaa:6,
//     acd(){
//         console.log(this);
//     },
//     abc: {
//         test:{
//             a: 5,
//             ad: () => {
//                 console.log(this);
//             }
//         }
//     },
//     abcd: () => {
//         console.log(this);
//     }
// }


// obj.abcd();
// obj.acd();
// obj.abc.test.ad();

// const a = () => {
//     console.log(this);
// }

// function test(){
//     console.log(this);

//     function name(){
//         console.log(this);
//     }

//     name();
// }


// a();
// test();


// const obj = {
//     a: 5,
//     test: function(){
//         console.log(this);
        
//         function test1(){
//             console.log(this);
//         }
//         test1();
//     }
// }
// obj.test();

// function test(){
//     this
// }

// function add(){
//     this.name = "test";
//     console.log(this);
// }

// const b = new add();

// const add = {
//     test: function(){
//         console.log(this);

//         const test1 = () => {
//             console.log(this);
//             const test2 = () => {
//                 console.log(this);
//                 function test4(){
//                     console.log(this);
//                 }
//                 test4();
//             }
//             test2()
//         }
//         test1();
//     }
// }

// const test3 = () => {
//     console.log(this);
// }

// add.test();
// console.log(add);
// test3();

// function Person(name){
//     this.name = name;
// }

// Person.getName = function(name){
//     return new Person(name);
// }

// const human = Person.getName("현규");

// var p = new Person();

// Class ( C++, Java, Python, etc..)
// 상속, 캡슐화, 은닉화 이런걸 통해서 객체지향 프로그래밍을 구현하려고 만들었어
// javascript 는 Class기반(X), Prototype(O)

// 프로퍼티, 메소드 하나로 추상화를 한다.
// 선언식 표현식


// class Human {
//     constructor(name, tall, weight){
//         this.name = name;
//         this._tall = tall;
//         this._weight = weight;
//     }

//     get bmi(){
//         return this.weight / ((this.tall/10) * (this.tall/10));
//     }

  
    // Method

    // printName(){
    //     return this.name;
    // }

    // // static Method
    // static create(name, age){
    //     return new Human(name, age);
    // }
// }

// const obj = new Human("현규", 175, 71);
// console.log(obj.name);
// console.log(obj.tall);
// console.log(obj.weight);
// console.log(obj.bmi);


// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.getName = function(){
//         return this.name;
//     }
// }

// const human1 = new Person('test1', 25);
// const human2 = new Person('test2', 26);
// const human3 = new Person('test3', 27);
// const human4 = new Person('test4', 28);
// const human5= new Person('test5', 29);
// console.log(human.create());

// function Person(){
//     this.name = 'name';
// }

// Person.prototype.getName = function(){
//     console.log(this.name);
// }

// const a =  new Person();
// console.log(a)
// a.getName();

class Person {
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log("Hello");
    }
}

class Baby extends Person {
    constructor(name, age){
        super(name);
        this.age = age;
    }
    
    sayHello(){
        super.sayHello();
        console.log("World");
    }
    sayName(){
        console.log(this.name);
    }
}
const human = new Person("test");
const baby1 = new Baby('아기', 1);
console.log(human);
console.log(baby1);
baby1.sayHello();
baby1.sayName();