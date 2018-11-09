function wordInSentence(ourString, wordToCheck) {
    let word = wordToCheck;
    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    let resolt = ourString.match(regex);

     if (resolt !== null) {
         console.log(resolt.length)
     }else {
         console.log(0);
     }
}

wordInSentence('The waterfall was so high, that the child couldn’t see its peak.',
    'the'
);