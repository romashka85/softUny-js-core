function extrLinks(input) {
    let string = input.join(' ');
    let regex = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/gm;

    let emails = string.match(regex);
    if (emails === null){
        console.log();
    } else {
        console.log(emails.join('\n'));
    }
}

extrLinks(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko']
);


