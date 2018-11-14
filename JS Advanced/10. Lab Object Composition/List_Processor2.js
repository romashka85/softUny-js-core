//if we have array of commands

function solve(arrCommands) {
    let processor = (function (){
        let list = [];

        function add(string) {
            list.push(string);
        }
        function remove(string){
            list = list.filter((el) => {
                 return el !== string;
            })
        }
        function print(){
            console.log(list.toString());
        }

        return{
            add: add,
            remove,
            print
        }

    })();

    // for (let command of arrCommands) {
    //     let commandTokens = command.split(' ');
    //     processor[commandTokens[0]](commandTokens[1]);
    // }

    arrCommands.forEach((el) => {
        const operator = el.split(' ');
        return processor[operator[0]](operator[1]);
    })
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);