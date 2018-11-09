function secretData(input) {

let string = input.join('\n');
    let regexName = /\*[A-Z][A-Za-z]*(?=\s|$)/g;
    let regexPhone = /\+[0-9-]{10}(?=\s|$)/g;
    let regexId = /![a-zA-Z0-9]+(?=\s|\t|$)/g;
    let base = /_[0-9A-Za-z]+(?=\s|$)/g;



    let secretStr = string.replace(regexName, m => '|'.repeat(m.length))
        .replace(regexPhone, m => '|'.repeat(m.length))
        .replace(regexId, m => '|'.repeat(m.length))
        .replace(base, m => '|'.repeat(m.length));

    console.log(secretStr);
}


secretData(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.']
);