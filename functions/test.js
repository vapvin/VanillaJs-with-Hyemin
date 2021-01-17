// 즉시실행함수
// (function(name){
//     console.log(name);
// })("현규");

// CallBack 익명함수가 쓰이는 곳

// const a = () => console.log("test");
// setTimeout(a, 1000);

// setTimeout(function(){}, )

// function add(a){
//     a();
// }

// add();

// 내부함수

// function parent(){
//     const a = 2;
//     const b = 3;

//     function child(){
//         const b = 4;
//         console.log(a);
//         console.log(b);
//     }
//     return child;
// }

// const child = parent();
// console.log(child)

// function add() {
//     return;
// }

// const a = add;
// const b = add();

// console.log(a);
// console.log(b);

const test = function(){
    console.log("a");
    return function(){
        console.log("b");
    }
}

const test = test();
test();