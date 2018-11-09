function splitWithDelim(text, delim) {
    let resolt = text.split(delim).join('\n');
    console.log(resolt);
}

splitWithDelim('One-Two-Three-Four-Five', '-');