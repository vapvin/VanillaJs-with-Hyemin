// // // 배열함수 

// // // pop(), push(), unshift(), shift()

// // const arr = [1,2,3,4,5];
// // arr.pop();
// // console.log(arr);
// // arr.push(6);
// // console.log(arr);

// // arr.unshift(4);
// // console.log(arr);
// // arr.shift();
// // console.log(arr);

// // // splice(index, 몇개삭제, 추가할값);

// // const arr2 = [1, 2, 3, 4];

// // arr2.splice(1, 0, "a", "avc");
// // console.log(arr2);

// // // slice(start, end);

// // const arr3 = "Hello World";
// // const newArr = arr3.slice(0, 5);
// // console.log(newArr);

// // // concat();

// // const arr4 = [1,2];
// // const arr5 = [3,4];
// // const newArr2 = arr4.concat(arr5);
// // const newArr3 = [...arr4, ...arr5];
// // console.log(newArr3);q

// // // every()
// // const arr6 = [1,2,3,4,5,6];

// // const test = value => {
// //     return value % 2 === 0;
// // }

// // console.log(arr6.every(test));

// // // some()

// // const arr7 = [1,2,3,4,5,6];
// // console.log(arr7.some(test));

// // // ES5

// // // ES6

// // forEach()
// // const arr8 = [1,2,3,4];
// // arr8.forEach((item, index) => console.log(item, index));

// // // map() return 새로운배열

// const arr9 = [1,2,3,4];
// // const newArr4 = arr9.map((item, index) => item < 3);
// // console.log(newArr4);

// // const newArr5 = arr9.filter(item => item < 3);
// // console.log(newArr5);

// // reduce(이전값, 현재값 => 이전값 + 현재값);
// const result = arr9.reduce((total, num) => total + num);
// console.log(result);

// // reverse()

// const arr10 = [ "1", "3", 2, 10, 11, 5, 4, 7, 6];
// // arr10.reverse();
// // console.log(arr10);

// // sort()

// // arr10.sort((a, b) => {
// //     return a - b;
// // });
// // console.log(arr10);

// // console.log(arr10.toString())

// // valueOf

// // console.log(arr10.valueOf())


// // join

// const arr11 = ["Hello", "World"];
// console.log(arr11.join('!'));

// const newObj = new Object();
// newObj[Symbol.iterator] = function* (){
// 	yield 1; // {1, false, next()}
// 	yield 2; // {2, false, next()}
// 	yield 3; // {value, true }
// };

// console.log(newObj);
// console.log([...newObj])
// const obj = {1, 2, 3}
// for(value of obj){
//     console.log(value);
// }

// function* generatorTest(a){
//     let b = yield 1; 
//     let c = yield 2; 
//     let d = yield a + b + c;//
//     yield a + b + c + d; 
// }

// let test = generatorTest(10);


// console.log(test.next());
// console.log(test.next(30));
// console.log(test.next(40));

function* test(){
    let a = yield;
    let b = yield a;
    let c = yield b;
    let d = yield c;
    yield d
}
let val = test();
console.log(val.next())
console.log(val.next(1))
console.log(val.next(2))
console.log(val.next(3))
console.log(val.next(4))

