function solve() {
    let f1 = 0;
    let f2 = 1;

    return function fib(){
        let f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        return f1;
    };
}

let fib = solve();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

let anotherFib = solve();
console.log(anotherFib());
console.log(anotherFib());
console.log(anotherFib());
console.log(anotherFib());
console.log(anotherFib());

// let fib = solve();
// for (let i = 0; i < 10; i++) {
//     console.log(fib());
// }