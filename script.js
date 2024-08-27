function generateRandomDigit() {
    // Get the input values
    const minValue = parseInt(document.getElementById("minValue").value);
    const maxValue = parseInt(document.getElementById("maxValue").value);

    // Check if the input values are valid
    if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
        document.getElementById("result").textContent = "Please enter valid minimum and maximum values.";
        return;
    }

    // Generate a random number within the specified range
    const randomDigit = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    // Display the result
    document.getElementById("result").textContent = `Random Number: ${randomDigit}`;
}
