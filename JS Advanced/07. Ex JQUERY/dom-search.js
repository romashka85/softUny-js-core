function domSearch(selector, isCaseSensitive = false) {
    let container = $(selector);

    initAddControl();
    initSearchControl(isCaseSensitive);
    initResultControl();

    function initAddControl() {
        let addControlDiv = $("<div></div>");
        addControlDiv.addClass("add-controls");

        let label = $("<label></label>");
        label.text("Enter text:");

        let inputField = $("<input>");
        inputField.appendTo(label);

        label.appendTo(addControlDiv);

        let a = $("<a></a>");
        a.addClass("button");
        a.css("display", "inline-block");
        a.text("Add");
        a.on("click", addElement);
        a.appendTo(addControlDiv);

        container.append(addControlDiv);
    }

    function initSearchControl(isCaseSensitive) {
        let searchControlDiv = $("<div></div>");
        searchControlDiv.addClass("search-controls");

        let label = $("<label></label>");
        label.text("Search:");

        let inputField = $("<input>");
        inputField.appendTo(label);
        inputField.on("input", (event) => searchForElements(event, isCaseSensitive));

        label.appendTo(searchControlDiv);

        container.append(searchControlDiv);
    }

    function initResultControl() {
        let resultControlDiv = $("<div></div>");
        resultControlDiv.addClass("result-controls");

        let ul = $("<ul></ul>");
        ul.addClass("items-list");
        ul.appendTo(resultControlDiv);

        container.append(resultControlDiv);
    }

    function addElement() {
        let elementValue = $(".add-controls label input").val();
        let ul = $(".result-controls ul");

        let liItem = $("<li></li>");
        liItem.addClass("list-item");

        let deleteA = $("<a></a>");
        deleteA.addClass("button");
        deleteA.text("X");
        deleteA.on("click", deleteItem);
        deleteA.appendTo(liItem);

        let liContent = $("<strong></strong>");
        liContent.text(elementValue);
        liContent.appendTo(liItem);

        ul.append(liItem);
    }

    function searchForElements(event, isCaseSensitive) {
        let inputValue = event.delegateTarget.value;

        if (inputValue === "") {
            let lis = $(".list-item");

            lis.css("display", "");
        } else {
            if (isCaseSensitive) {
                $(".list-item")
                    .filter((index, element) => {
                        return !($(element.childNodes[1]).text().includes(inputValue));
                    })
                    .css("display", "none");
            } else {
                $(".list-item")
                    .filter((index, element) => {
                        let currentElementValue = $(element.childNodes[1]).text().toLowerCase();
                        return !(currentElementValue.includes(inputValue.toLowerCase()));
                    })
                    .css("display", "none");
            }
        }
    }

    function deleteItem() {
        $(this.parentNode).remove();
    }
}