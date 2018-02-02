function main(lines) {
    let [principalSum, interestRate, comFreq, overallLength] = lines;
    interestRate = interestRate/100;
    comFreq = 12/comFreq;
    let totalAccValue = principalSum*Math.pow((1+interestRate/comFreq),comFreq*overallLength);
    return totalAccValue.toFixed(2);
}
function compound (input) {
    let interest = input[0] * (Math.pow(1 + (input[1]/100)/(12/input[2]),(12/input[2])*input[3]));
    return interest.toFixed(2);
}