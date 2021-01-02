// 배열함수 

// pop(), push(), unshift(), shift()

const arr = [1,2,3,4,5];
arr.pop();
console.log(arr);
arr.push(6);
console.log(arr);

arr.unshift(4);
console.log(arr);
arr.shift();
console.log(arr);

// splice(index, 몇개삭제, 추가할값);

const arr2 = [1, 2, 3, 4];

arr2.splice(1, 0, "a", "avc");
console.log(arr2);

// slice(start, end);

const arr3 = "Hello World";
const newArr = arr3.slice(0, 5);
console.log(newArr);

// concat();

const arr4 = [1,2];
const arr5 = [3,4];
const newArr2 = arr4.concat(arr5);
const newArr3 = [...arr4, ...arr5];
console.log(newArr3);

// every()
const arr6 = [1,2,3,4,5,6];

const test = value => {
    return value % 2 === 0;
}

console.log(arr6.every(test));

// some()

const arr7 = [1,2,3,4,5,6];
console.log(arr7.some(test));

// ES5

// ES6

