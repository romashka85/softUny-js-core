/**
 * Created by Yulia Karaliyska on 23/05/2017.
 */
// function sumVat(input) {
//     let sum = 0;
//     for (let num of input)
//     sum += num;
//     console.log("sum = " + sum);
//     console.log("VAT = " + sum * 0.20);
//     console.log("total = " + sum *1.20);
//     }
// sumVat([1.20, 2.60, 3.50]);

function sumVata(input) {
    let sum = 0;
    for (let i=0; i < input.length; i++) {
        sum += input[i];
    }
    console.log("sum = " + sum);
    console.log("VAT = " + sum *0.2);
    console.log("total = " + sum*1.2);

}
sumVata([1.2, 2.60, 3.50]);


