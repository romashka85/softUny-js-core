function emailValidation(email) {
    let pattern = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/gm;
    let result = pattern.test(email);

    if (result) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}
emailValidation(['inva;lid@ema..i1.bg']);