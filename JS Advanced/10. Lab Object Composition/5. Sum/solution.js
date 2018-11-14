function getModel() {

    let num1, num2, result;
    function init(num1Sel, num2Sel, resultSel) {
        num1 = $(num1Sel);
        num2 = $(num2Sel);
        result = $(resultSel);
    }
    function add() {
        result.val(+num1.val() + +num2.val());
    }
    function subtract() {
        result.val(+num1.val() - +num2.val());
    }
    return {
        init,
        add,
        subtract
    }
}