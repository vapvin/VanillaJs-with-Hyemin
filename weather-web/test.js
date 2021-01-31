const a = [1,2,3,4];
// const one = a[0];
// const two = a[1];
// const three = a[2];
// const four = a[3];

a.forEach((_, index) => {
    console.log(index);
})

a.map((item, index, val) => {
    const index = 0;
    console.log(val)
})