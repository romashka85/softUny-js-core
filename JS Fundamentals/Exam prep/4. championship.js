function championship(arr) {
    let book = {};
    for (let element of arr) {
        let tokens = element.split(' -> ');
        let teamName = tokens[0];
        let pilotName = tokens[1];
        let pilotPoints = +tokens[2];

        if (!book.hasOwnProperty(teamName)) {
            book[teamName] = {
                totalPoints: 0,
                pilots: {}
            };
        }
        if (!book[teamName]["pilots"].hasOwnProperty(pilotName)) {
            book[teamName]["pilots"][pilotName] = 0;
        }
        book[teamName]["pilots"][pilotName] += pilotPoints;
        book[teamName]["totalPoints"] += pilotPoints;
    }
    let winners=Object.entries(book)
        .sort((a,b) => b[1]["totalPoints"] - a[1]["totalPoints"]).slice(0,3);

    for(let winnerTeam of winners){
        console.log(`${winnerTeam[0]}: ${winnerTeam[1]["totalPoints"]}`);
        let sortedPilots=Object.entries(winnerTeam[1]["pilots"]).sort((a,b)=> b[1]-a[1]);
        for(let pilot of sortedPilots){
            console.log(`-- ${pilot[0]} -> ${pilot[1]}`);
        }
    }
}

championship(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"]
);