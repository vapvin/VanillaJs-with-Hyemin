// data type = 자료형

// C언어 정수형(1,2,3) 실수형(1.1, 1.2) char("a") String("abc", 있는게 있고, 없는게 있다) Boolean(true, false) Null(null) undefined(undefined) symbol(es6 이후에 추가됬다.) 객체타입(있는언어 없는언어)
// 원시타입, 참조타입
// Javascript 원시타입 => pass by value

// es6 기준으로 원시타입 6개, 참조타입 1개 총 7개의 데이터타입있어 ES6 JS

// number 
// const number = 1;
const number1 = 1;
const number2 = -3;

// NodeList, DomElement
// string
let string1 = "Hello World"; // 유사배열 read only
string1[0] = "K";
console.log(string1[0]);

// boolean 

const t = true;
const f = false;

//==, === // 비교연산자 사용시 불리언타입만 리턴된다.

const n = null; 
// console.log(typeof(null));
console.log(n === null);

// const a = null;

// undefined

const u = undefined;

let blur; // 쓰레기값 자바스크립트 엔진이 쓰레기값을 => undefined;
console.log(blur);

// symbol ( 객체에 중복되지 않는 키를 만들기 위해 사용 )

// const red = Symbol('red');
// console.log(typeof red);

// const obj = {};
// obj[red] = "빨강";
// console.log(obj);
// console.log(obj[red])
// console.log(obj);

// 참조타입 객체타입 pass by reference 

// 객체는 데이터와, 그 데이터의 동작들을 포함하는 자료

// const a = "s";

// const obj2 = {
//     c: "s", // 프로퍼티 => 속성

//     d: function(data){ // 메소드
//         data = this.c;
//         data = "d";
//         return data;
//     }
// }

// const obj3 = {}
// const obj4 = {}

// console.log(obj3 === obj4);

// 일급객체 first class object 개념
// 함수의 인자로 전달이 가능해야해 (필수) (특징).
// 함수의 결과로 반환 될 수 있어야해 (필수) (특징).
// 변수나 데이터구조(배열, 객체)에 할당 수 있다. (특징)
// 할당할떄 사용된 이름이랑 관계없이 구별이 가능.
// 동적으로 프로퍼티를 할당할 수 있어.

// let a = "3";
// a = "5"



// const arr = [{a: "b"}]
// obj2 = {
//     a: {
//         b: "c"
//     }
// }

// console.log(obj);

// function add() {
//     return 0;
// }

// const a = () => {
//     return a;
// }

// function add(a, b){
//     return a + b;
// }


// const three = () => {
//     return 3;
// }
// console.log(add(three(), 4));

// const obj = {};
// console.log(typeof(obj));
// const arr = [];
// console.log(typeof(arr));


// C, Java, Typescript

const number = "123"; // 자바스크립트 엔진 123 아 이 변수는 number; 동적타이핑

// scope
// block scope, function scope
// var => function scope || let, const => block scope

// function add() {
//     var a = 0;
//     if(true) {
//         var c = 3;
//         console.log(c);
//         console.log(a);
//     }

//     while(true) {
//         const d = "2";
//         console.log(d)
//     }

//     console.log(c);
//     console.log(a);
// }

// add();
// console.log(c);
// console.log(a);


function hello(){
    console.log(a);
}

function prints(){
    const a = "Hello";
    hello();
}
prints();
