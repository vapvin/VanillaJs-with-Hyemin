// function* test(){
//     asdfasdfasdfasd

//     yield 1;
//     asdfasdfadsfasdf

//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     yield 6;
//     yield 7;
//     yield 8;
// }
// // React, React-Hooks
// // Redux, useQuery

// // Redux-Thunk

// // Redux-saga

// // Iterable, Iterator 반복자 있다.
// // Iterable => Symbol.iterator
// // Iterator => next()
// // Iterator를 만들기 위한 함수 => Generator 함수

// // Iterator = 반복자 or 반복기
// // 생성자 = Generator
// const abc = test();
// console.log(abc);

// for(item of abc){
//     console.log(item)
// }

// try {
//     if(){

//     } catch {

//     }
// }

function test(callback) {
  console.log(callback);
  callback();
}

function hello(a) {
  console.log(a);
}

test(() => hello("Hello"));

