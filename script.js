function calculateBMI() {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const result = document.getElementById('result');

  if (height === "" || weight === "") {
    result.textContent = "Please enter both height and weight!";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  result.textContent = `Your BMI is ${bmi} (${category})`;
}
