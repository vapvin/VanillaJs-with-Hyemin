// Blocking Non-Blocking 

// 호출된 함수가 리턴을 바로해서 호출한 함수에게 제어권을 넘겨줘서 호출한 함수가 다른 일을 수행할 수 있는 기회를 주면 논블록킹 

// 호출된 함수가 자기 자신의 모든 작업이 끝날때까지 호출한 함수한테 제어권을 넘기지 않고 대기하게끔 하면 블로킹

// main function 

let a = 0;

setTimeout(() =>{
    a = 10;
}, 5000);







// console.log("123");

// 비동기

// 호출된 함수가 