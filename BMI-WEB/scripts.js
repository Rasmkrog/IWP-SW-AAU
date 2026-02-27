//BMI = weight/(height(m))^2

function formCalculation(event) {
    event.preventDefault();
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    var BMI = calBmi(weight, "kg", height, "cm");
    resetForm();

    console.log(BMI);
    document.getElementById("result").innerHTML = BMI.toFixed(2);
}

function calBmi(weight, weightUnit, height, heightUnit) {
    if (heightUnit == "cm") {
        height = height / 100;
    }
    var bmi = weight / (height * height);
    return bmi;
}

function resetForm() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
}
