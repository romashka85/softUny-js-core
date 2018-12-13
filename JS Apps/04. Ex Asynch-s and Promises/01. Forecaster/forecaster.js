function attachEvents() {
    //Get all location codes (async 1)
    //Find given location code

    //compile data and display
    //handle errors

<<<<<<< HEAD

    const host = 'https://judgetests.firebaseio.com/';
=======
    const  host = 'https://judgetests.firebaseio.com/';
>>>>>>> 18f551654fee0b9d2cb02bd2b8ec74df36b5fcbe
    const symbols = {
        'Sunny': '&#x2600',             // ☀
        'Partly sunny': '&#x26C5',      // ⛅
        'Overcast': '&#x2601',          // ☁
        'Rain': '&#x2614',              // ☂
        'Degrees': '&#176'              // °

    };

    $('#submit').on('click', getWeather);

    function getWeather(){
        let locationName = $('#location').val();

        $.get(host + 'locations.json')
            .then(parseData)
            .catch(handelError);

        function parseData(codes) {
            let code = undefined;
            for(let loc of codes){
                if (loc.name == locationName){
                    code = loc.code;
                    break;
                }
            }
            //request today's forecast(async 2)
            //request upcoming forecast (async 2)
            Promise
                .all([
                $.get(`${host}forecast/today/${code}.json`),
                $.get(`${host}forecast/upcoming/${code}.json`)
            ])
                .then(displayResolts)
                .catch(handelError);
        }
        function displayResolts([today, upcoming]) {
            const todayDiv = $('#current');
            const upcomingDiv = $('#upcoming');
            let symbolToday = symbols[today.forecast.condition];




            const htmlSymbol = `<span class="condition symbol">${symbolToday}</span>`;

            const htmlContent =`
            <span class="condition">
                <span class="forecast-data">${today.name}</span>
                <span class="forecast-data">${today.forecast.low}&#176;/${today.forecast.high}&#176;</span>
                <span class="forecast-data">${today.forecast.condition}</span>
            </span>
            `;


            todayDiv.empty();
            todayDiv.append(`<div class="label">Current conditions</div>`);

            todayDiv.append(htmlSymbol);
            todayDiv.append(htmlContent);

            upcomingDiv.empty();
            upcomingDiv.append(`<div class="label">Three-day forecast</div>`);

            for(let day of upcoming.forecast){
                upcomingDiv.append(renderUpcomingData(day));
            }
            $('#forecast').show();

        }
        
        function renderUpcomingData(data) {
            const symbol = symbols[data.condition];
           return `<span class="upcoming">
                        <span class="symbol">${symbol}</span>
                        <span class="forecast-data">${data.low}&#176;/${data.high}&#176;</span>
                        <span class="forecast-data">${data.condition}</span>
                   </span>`;
        }
    }
    function handelError() {
        $('#forecast').text('Error');
        $('#forecast').show();
    }

}
