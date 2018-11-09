function myBill(bill) {

    let productName = [];
    let productPrice = [];

    for (let i= 0; i < bill.length; i++) {
        if ( i % 2 === 0 ){
            productName.push(bill[i]);
        }
        else {
            productPrice.push(Number(bill[i]));

        }
    }

    console.log(`You purchased ${productName.join(', ')} for a total sum of ${productPrice.reduce((a, b) => a + b)}`);
}

myBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);


//----------второ решение---------


function printBill(input) {
    let items = input.filter((x,i) => i%2==0);
    let sum = input.filter((x,i) => i%2==1)
        .map(Number)
        .reduce((a,b) => a + b);
    console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);
}

printBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
