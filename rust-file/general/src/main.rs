fn main() {
    let mut a = 5; // let 변수 선언시 mut 키워드가 없을 경우 Default는 immutable이다.
    println!("{}", a);
    a = 4;
    println!("{}", a); 
}
