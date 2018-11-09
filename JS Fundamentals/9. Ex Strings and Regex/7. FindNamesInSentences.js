function findVar(input) {
    let regex = /\b_[a-zA-Z0-9]+\b/g;
    let matchedElements = input.match(regex);
    let finalResolt = [];
    for (let i = 0; i < matchedElements.length; i++) {
        finalResolt.push(matchedElements[i].substring(1));
        
    } 
    console.log(finalResolt.join());
}
findVar('The _id and _age variables are both integers.');