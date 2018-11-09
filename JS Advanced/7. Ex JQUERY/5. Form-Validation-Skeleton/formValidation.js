function validate() {
let userName = $('#username');
let email = $('#email');
let password = $('#password');
let confirmPassword = $('#confirm-password');
let companyCheckbox = $('#company');
let companyNumber = $('#companyNumber');

let companyInfo = $('#companyInfo');
let submitBtn = $('#submit');
let validationDiv = $('#valid');

let allIsValid = true;

companyCheckbox.on('change', function () {
    if (companyCheckbox.is(':checked')){
        companyInfo.css('display', 'block')
    }else {
        companyInfo.css('display', 'none');
    }
});

    submitBtn.on('click', function (ev) {
        ev.preventDefault();
        validateForm();

        validationDiv.css('display', allIsValid ? 'block'  : 'none');
        allIsValid = true;

    });

    function validateForm() {
        validateInputWithRegex(userName, /^[A-Za-z\d]{3,20}$/gm);
        validateInputWithRegex(email, /^.*?@.*?\..*$/gm);
        if (confirmPassword.val() === password.val()){
            validateInputWithRegex(password, /^\w{5,15}$/gm);
            validateInputWithRegex(confirmPassword, /^\w{5,15}$/gm);
        }else {
            password.css('border', 'solid red');
            confirmPassword.css('border', 'solid red');
            allIsValid = false;
        }
        if (companyCheckbox.is(':checked')){
            validateCompanyInfo();
        }
    }

    function validateInputWithRegex(input, pattern) {
        if (pattern.test(input.val())){
            input.css('border', 'none');
        }else {
            input.css('border', 'solid red');
            allIsValid = false;
        }
    }
    function validateCompanyInfo() {
        let numValue = +companyNumber.val();
        if (numValue >= 1000 && numValue <= 9999){
            companyNumber.css('border', 'none')
        } else {
            companyNumber.css('border', 'solid red');
            allIsValid = false;
        }
    }
}
