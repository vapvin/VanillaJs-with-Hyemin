// pop() 배열의 끝 값을 삭제

const arr1 = [1, 2, 3, 4, 5];
arr1.pop();
console.log(arr1); // [1,2,3,4]

// push() 배열의 마지막 인덱스에 값을 삽입

const arr2 = [1, 2, 3, 4, 5];
arr2.push(6);
console.log(arr2); // [1,2,3,4,5,6]

// unshift() 배열의 첫 인덱스에 값을 삽입

const arr3 = [2,3,4];
arr3.unshift(1);
console.log(arr3); // [1,2,3,4];

// shift() 배열의 첫 인덱스의 값을 삭제

const arr4 = [1,2,3,4];
arr4.shift();
console.log(arr4);