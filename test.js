const a = [1,2,3,4,5]

const settest = new Set(a);


settest.add(6);
settest.delete(2);
// settest.clear();
const av = settest.entries();

settest.forEach((val, index) => {
    console.log(`${value}, ${value2}`)
});

console.log(settest);
console.log(av);
