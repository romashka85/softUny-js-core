function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let product = $('.custom-select');
    let prise = $('#price');
    let quantity = $('#quantity');

    let button = $('#submit');

    let capacity = $('#capacity');
    let sum = $('#sum');

    let totalCapacity = 0;
    let totalSum = 0;

    button.attr('disabled', true);
    product.on('keyup', () => button.attr('disabled', false));

    button.on('click', listItems);

    function listItems(){
        if (product.val !== ''){

            totalCapacity += +quantity.val();
            totalSum += +prise.val();

            if (totalCapacity < 150){
                let li = $(`<li>Product: ${product.val()} Price: ${prise.val()} Quantity: ${quantity.val()}</li>`);
                li.appendTo($('.display'));

                capacity.val(totalCapacity);
                sum.val(totalSum);

                product.val('');
                prise.val('1');
                quantity.val('1');
                button.attr('disabled', true);

            }
            else {
                capacity.val('full').attr('class', 'fullCapacity');
                product.attr('disabled', true);
                prise.attr('disabled', true);
                quantity.attr('disabled', true);
                button.attr('disabled', true);
            }
        }

    }
}
