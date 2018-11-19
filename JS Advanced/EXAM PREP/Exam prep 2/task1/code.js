
function addSticker() {

    let ulSticker = $('#sticker-list');
    let title = $('.title');
    let text = $('.content');
    
    if (title.val() !== '' && text.val() !== ''){
        let li = $('<li>').attr('class', 'note-content');
        let a = $('<a>x</a>').attr('class', 'button');
        let h2 = $(`<h2>${title.val()}</h2>`);

        let hr = $('<hr>');
        let p = $(`<p>${text.val()}</p>`);

        a.appendTo(li);
        h2.appendTo(li);
        hr.appendTo(li);
        p.appendTo(li);

        li.appendTo(ulSticker);

        a.on('click', () => li.remove());

        title.val('');
        text.val('');
    }

}