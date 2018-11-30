$(function attachEvents() {
    $('#btnLoad').on('click', loadContacts);
    $('#btnCreate').on('click', createContacts);
    let baseServiseUrl = "https://phonebook-yulia.firebaseio.com/phonebook";
    
    function loadContacts() {
        $('#phonebook').empty();
        $.get(baseServiseUrl + '.json')
            .then(displayContacts)
            .catch(displayError);
    }
    
    function displayContacts(contacts) {            //как се разбира какво точно търсиме??
     for (let key in contacts){
         let person = contacts[key]['person'];
         let phone = contacts[key]['phone'];
         let li = $('<li>');
         li.text(person + ': ' + phone + ' ');
         $('#phonebook').append(li);
         li.append($(`<button>Delete</button>`).on('click', deleteContact.bind(this, key)));
     }
    }
    function displayError(err) {
        $('#phonebook').append($('<li>Error</li>'))
    }
    
    function createContacts() {
        let newContactJASON = JSON.stringify({
            person: $('#person').val(),
            phone: $('#phone').val()
        });
        $.post(baseServiseUrl + '.json', newContactJASON)
            .then(loadContacts)
            .catch(displayError);
        $('#person').val('');
        $('#phone').val('');

    }
    function deleteContact(key) {
        let request = {
            method: 'DELETE',
            url: baseServiseUrl + '/' + key + '.json'
        };
        $.ajax(request)
            .then(loadContacts)
            .catch(displayError);
    }

});