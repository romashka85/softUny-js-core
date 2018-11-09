function templateFormat(input) {
    let string = `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n`;

    for (i = 0; i < input.length; i += 2) {
        string += `<question>\n` + input[i] + `\n  </question>\n  <answer>\n    ` + input[i + 1]+`\n  </answer>\n`
    }
    console.log(string + `</quiz>`);

}

templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);




