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


const obj = {
    name: "현규",
    sayHello: function(){
        console.log(this.name + "님 안녕하세요");
    }
}

obj.sayHello();

const a = "test";

function test(){
    console.log(this);
}

test();