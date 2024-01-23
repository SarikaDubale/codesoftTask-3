let currentInput = "";
let display = document.getElementById("display");

function appendCharacter(char) {
    currentInput += char;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput;
}
