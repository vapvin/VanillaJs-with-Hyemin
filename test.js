// 객체 키 - 값 쌍을 저장
// for of 객체 

const map = new Map();
map.set(123, "hyemin");
map.set(1234, "test");
map.set(1235, "testsize");

console.log(map);
const ab = map.keys();

console.log(ab);
for(c of ab){
    console.log(c);
}
