function addDestination() {
    let city = $('.inputData')[0].value;
    let cuntry = $('.inputData')[1].value   ;
    let season = $('#seasons option:selected').text();

    let tbody = $('#destinationsList');

    if ( city !== '' && cuntry !== ''){
        let row = $('<tr>')
            .append($(`<td>${city}, ${cuntry}</td>`))
            .append($(`<td>${season}</td>`));

        row.appendTo(tbody);

        $('.inputData')[0].value = '';
        $('.inputData')[1].value = '';

        let summer = $('#summer').val();
        let autumn = $('#autumn').val();
        let winter = $('#winter').val();
        let spring = $('#spring').val();

        if (season === 'Summer'){
            summer = +summer + 1;
            $('#summer').val(summer);


        } else if (season === "Autumn"){
            autumn = +autumn + 1;
            $('#autumn').val(autumn);
        } else if (season === "Winter"){
            winter = +winter + 1;
            $('#winter').val(winter);
        } else if (season === "Spring"){
            spring = +spring + 1;
            $('#spring').val(spring);
        }
    }
}