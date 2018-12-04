function attachEvents() {
    //Get all location codes (async 1)
    //Find given location code
    //request today's forecast(async 2)
    //request upcoming forecast (async 2)
    //compile data and display
    //handle errors

    const  host = 'https://judgetests.firebaseio.com/';
    const symbols = {
        'Sunny': '&#x2600;', // ☀
        'Partly sunny': '&#x26C5;', // ⛅
        'Overcast': '&#x2601;',   // ☁
        'Rain': '&#x2614;'  // ☂
    };

    $('#submit').click(getWeather);

    function getWeather(){
        let locationName = $('#location').val();
        //Get all location codes (async 1)
        $.get(host + 'locations.json')
            .then(parseData);

        function parseData(codes) {
            let code = undefined;
            //Find given location code
            for (let loc of codes){
                if (loc.name === locationName) {
                    code = loc.code;
                    break;
                }
            }

            //request today's forecast(async 2)
            Promise.all([
                $.get(`${host}forecast/today/${code}.json`),
                $.get(`${host}forecast/upcoming/${code}.json`)
            ]).then(displayResults);
            //request upcoming forecast (async 2)
        }

        function displayResults([today, upcoming]) {
            const todayDiv = $('#current');
            const upcomingDiv = $('#upcoming');

            const symbol = symbols[today.forecast.conditions];

            const htmlSymbol = `<span class="condition symbol">${symbol}</span>`;
            const htmlContent = `<span class="condition">
                                    <span class="forecast-data">${today.name}</span>
                                    <span class="forecast-data">${today.forecast.low}&#176;/${today.forecast.high}&#176;</span>
                                    <span class="forecast-data">${today.forecast.condition}</span>
                                 </span>`;
            todayDiv.empty();
            todayDiv.append(`<div class="label">Current conditions</div>`);

            todayDiv.append(htmlSymbol);
            todayDiv.append(htmlContent);

            upcomingDiv.empty();
            upcomingDiv.append(`<div class="label">Three-day forecast</div>`);

            for (let day of upcoming) {
                upcomingDiv.append(renderUpcoming(day));
            }

            $('#forecast').show();

        }
            function renderUpcoming(data) {
                const symbol = symbols[data.forecast.conditions];

               return`<span class="upcoming">
                                    <span class="symbol">${symbol}</span>
                                    <span class="forecast-data">${data.low}&#176;/${data.high}&#176;</span>
                                    <span class="forecast-data">${data.condition}</span>
                                 </span>`;
            }



    }


}
