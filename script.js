function clearDisplay() {
    document.getElementById("result").value = "";
}

function addToDisplay(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    const result = document.getElementById("result").value;
    const finalResult = eval(result); // Solo para realizar sumas
    document.getElementById("result").value = finalResult;
}
