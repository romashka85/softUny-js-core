//if we receive single commands

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


processor.add('hello');
processor.add('again');
processor.remove('hello');
processor.add('again');

processor.print();
