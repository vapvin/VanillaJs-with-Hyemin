// 즉시실행함수
// (function(name){
//     console.log(name);
// })("현규");

// CallBack 익명함수가 쓰이는 곳

// const a = () => console.log("test");
// setTimeout(a, 1000);

// setTimeout(function(){}, )

function add(a){
    a();
}


add("test");
