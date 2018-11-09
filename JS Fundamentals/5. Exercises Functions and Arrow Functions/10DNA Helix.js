function generateDna(number) {
    let rows = +number;
    let sequence = 'ATCGTTAGGG';
    let currentIndex = 0;

    for (let i = 0; i < rows; i++) {
        let currenrRow = i % 4;
        
        if (currentIndex === sequence.length){
            currentIndex = 0;
        } 
        
        if (currenrRow === 0){
            console.log('**' + sequence[currentIndex++]+ sequence[currentIndex++] + '**');
        }
        else if (currenrRow === 1 || currenrRow === 3){
            console.log('*' + sequence[currentIndex++] + '--' + sequence[currentIndex++] + '*');
        }
        else {
            console.log(sequence[currentIndex++] + '----' + sequence[currentIndex++]);
        }
    }

}
generateDna(4);