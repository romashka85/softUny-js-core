function getDay() {
    console.log((new Date()).getDate() % 2 == 0 ? 'even' : 'odd');
}
getDay();