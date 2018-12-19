function attachEvents() {
    const baseUrl  = `https://baas.kinvey.com/appdata/kid_HJkia6WR7/`;
    const authHeader = {
        'Authorization': 'Basic eXVsaWE6eXVsaWE=',
        'Content-type': 'application/json'
    };

    $('.load').on('click', loadALlCatches);
    $('.add').on('click', createCatches);

    function request(method, endpoint, data) {
        return $.ajax({
            method: method,
            url: baseUrl + endpoint,
            headers: authHeader,
            data: JSON.stringify(data)
        })
    }
    // AJAX request to load all catches
    function loadALlCatches() {
        request('GET', 'biggestCatches')
            .then(displayAllCatches)
            .catch(handelError);
    }

    function displayAllCatches(data) {
        let catches = $('#catches');
        catches.empty();
        for (let el of data){
            catches.append($(`<div class="catch" data-id="${el._id}">`)
                .append($(`<label>Angler</label>`))
                .append($(`<input type="text" class="angler" value="${el['Angler']}"/>`))
                .append($(`<label>Weight</label>`))
                .append($(`<input type="number" class="weight" value="${el['Weight']}"/>`))
                .append($(`<label>Species</label>`))
                .append($(`<input type="text" class="species" value="${el['Species']}"/>`))
                .append($(`<label>Location</label>`))
                .append($(`<input type="text" class="location" value="${el['Location']}"/>`))
                .append($(`<label>Bait</label>`))
                .append($(`<input type="text" class="bait" value="${el['Bait']}"/>`))
                .append($(`<label>Capture Time</label>`))
                .append($(`<input type="number" class="captureTime" value="${el['Time']}"/>`))
                .append($(`<button class="update">Update</button>`).on('click', updateData))
                .append($(`<button class="delete">Delete</button>`).on('click', deleteDta)))
        }
    }
    
    // Ajax request Create catches
    function createCatches() {
        let catchEl = $('#addForm');
        let dataObj = createDataJson(catchEl);

        request('post', `biggestCatches`, dataObj)
            .then(loadALlCatches)
            .catch(handelError);
    }

    //AJAX request to update data
    function updateData(){
        let catchEl = $(this).parent();
        let dataObj = createDataJson(catchEl);

        request('PUT', `biggestCatches/${catchEl.attr('data-id')}`, dataObj)
            .then(loadALlCatches)
            .catch(handelError);

    }
    //AJAX delete to update data
    function deleteDta(){
        let catchEl = $(this).parent();
        request('delete', `biggestCatches/${catchEl.attr('data-id')}`)
            .then(loadALlCatches)
            .catch(handelError);
    }

    function createDataJson(catchEl){
      return {
          Angler: catchEl.find('.angler').val(),
          Weight: +catchEl.find('.weight').val(),
          Species: catchEl.find('.species').val(),
          Location: catchEl.find('.location').val(),
          Bait: catchEl.find('.bait').val(),
          Time: +catchEl.find('.captureTime').val()
      }
    }

    function handelError(err) {
        alert(`ERROR: ${err.statusText}`)
    }
}
