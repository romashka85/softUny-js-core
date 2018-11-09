// function executeCommand(arr) {
//     let resolt = '';
//     for (let el of arr){
//         let tokens = el.split(' ');
//         let command = tokens[0];
//         let target = tokens[1];
//         switch (command) {
//             case 'print':
//                 console.log(resolt);
//                 break;
//             case 'append':
//                 resolt = resolt + target;
//                 break;
//             case 'removeStart':
//                 resolt = resolt.substr(+target);
//                 break;
//             case 'removeEnd':
//
//                resolt = resolt.slice(0, resolt.length - +target);
//
//                 break;
//         }
//
//     }
// }
// executeCommand(['append hello',
//     'append again',
//     'removeStart 3',
//     'removeEnd 4',
//     'print']
// );

let commandProcessor = (function() {
    let text = '';
    return {
        append: (newText) => text += newText,
        removeStart: (count) => text = text.slice(count),
        removeEnd: (count) => text = text.slice(0, text.length - count),
        print: () => console.log(text)
    }
})();

commandProcessor.append('hello');
commandProcessor.append('again');
commandProcessor.removeStart(3);
commandProcessor.removeEnd(4);
commandProcessor.print();




// const input = ['append hello',
//     'append again',
//     'removeStart 3',
//     'removeEnd 4',
//     'print'];

// const operations = {
//     current: '',
//     append: function (str) {
//         this.current += str;
//         return this;
//     },
//     removeStart: function(index) {
//         this.current = this.current.slice(index);
//         return this;
//     },
//     removeEnd: function(index){
//         this.current = this.current.slice(0, this.current.length - index);
//         return this;
//     },
//     print: function()  {
//         console.log(this.current);
//         return this;
//     },
//     execute: function (input) {
//
//     input.forEach((el) => {
//         const parts = el.split(' ');
//
//         this[parts[0]].call(this, parts[1]);
//         })
//     }
// };
//
// operations.execute(input);


