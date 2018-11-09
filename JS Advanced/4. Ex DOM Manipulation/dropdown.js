function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');


    let newOption = document.createElement('option');
    newOption.textContent = `${text.value} ${value.value}`;

    console.log(newOption);

    document.getElementById('menu').appendChild(newOption);

    text.value = '';
    value.value = '';
}