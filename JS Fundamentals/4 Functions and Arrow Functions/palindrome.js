// function isPalindrome(str) {
//     for (let i=0; i<str.length/2; i++)
//         if (str[i] != str[str.length-i-1])
//             return false;
//     return true;
// }
// console.log(isPalindrome("heceh"));


function isPalindrom(str) {
    return str === str.split('').reverse().join('');
}

let p = isPalindrom("abba");
console.log(p);

