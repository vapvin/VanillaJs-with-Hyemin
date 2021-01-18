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

// const person1 = Person("test", 12);

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

const obj = {
    aaa:6,
    acd(){
        console.log(this);
    },
    abc: {
        test:{
            a: 5,
            ad: () => {
                console.log(this);
            }
        }
    },
    abcd: () => {
        console.log(this);
    }
}

obj.abcd();
obj.acd();
obj.abc.test.ad();

