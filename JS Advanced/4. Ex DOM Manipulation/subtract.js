function subtract() {
   let fitstNum = document.getElementById('firstNumber').value;
   let seconNum = document.getElementById('secondNumber').value;

   let subtract = Number(fitstNum) - Number(seconNum);

   document.getElementById('result').textContent = subtract;
}