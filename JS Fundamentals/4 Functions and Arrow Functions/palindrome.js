// function isPalindrome(str) {
//     for (let i=0; i<str.length/2; i++)
//         if (str[i] != str[str.length-i-1])
//             return false;
//     return true;
// }
// console.log(isPalindrome("heceh"));


function getDay(day) {
    switch (day) {
        case "Monday": return 1;

        case "Tuesday": return 2;
        case "Wednesday": return 3;
        case "Thursday": return 4;
        case "Friday": return 5;
        case "Saturday": return 6;
        case "Sunday": return 7;
        default: return "error"; break;

    }
}

console.log(getDay("Friday"));