// 심볼이란 고유한 데이터야 ES6 추가된 새로운 데이터 타입이고 '고유한' 무언가를 만들기 위한 것

const userdata = {
    [Symbol("a")]: "a",
    b: "b",
    c: "c"
}
const abc=Object.getOwnPropertySymbols(userdata);

console.log(userdata[abc[0]])