function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.getElementById("result");

    if (weight == "" || weight <= 0 || height == "" || height <= 0) {
        result.innerHTML = " Please enter valid values!";
        result.style.color = "red";
    }

    height = height / 100;

    let bmi = (weight / (height * height)).toFixed(2)

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
        result.style.color = "orange";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
        result.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.99) {
        category = "Overweight";
        result.style.color = "darkorange";
    } else {
        category = "Obese";
        result.style.color = "red";
    }
    result.innerHTML = `Your BMI is <b>${bmi}</b> (${category})`;
}