fn main() {
    let mut a = 5; // let 변수 선언시 mut 키워드가 없을 경우 Default는 immutable이다.
    println!("{}", a);
    a = 4;
    println!("{}", a);
    const MAX_VALUE: u32 = 100_000; // 상수 선언시에는 type을 명시해야한다.

    let b = 5;
    let b = b + 1;
    let b = b + 2; // 변수 가리기를 통해 값을 변경 할 수 있다.

    println!("{}", b);
}
