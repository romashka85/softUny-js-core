function BMI() {
    function getStatus() {
        if (bmi < 18.5){
            return 'underweight';
        }else if (bmi < 25){
            return 'normal';
        }else if (bmi < 30){
            return 'overweight';
        }else {
            return 'obese';
        }
    }
    let [name, age, weight, height] = arguments;
    let heightInMeters = height/100;
    let bmi = weight / Math.pow(heightInMeters,2);
    //Round the BMI
    let status = getStatus();

    let evaluation = {
      name: name,
      personalInfo: {
          age: age,
          weight: weight,
          height: height
      },
      BMI: Math.round(bmi),
      status: status
    };
    if (evaluation.status === 'obese' ) {
        evaluation.recommendation = 'admission required';
    }
    return evaluation;

}

console.log(BMI('Honey Boo Boo', 36, 92, 177));
