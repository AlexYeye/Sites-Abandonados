let displayValue = "";

function appendToDisplay(value) {
    if (document.getElementById('result').innerText !== "") {
        clearDisplay();
    }
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById('display').value = "";
    document.getElementById('result').innerText = "";
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById('result').innerText = `Resultado: ${result}`;
        document.getElementById('display').value = "";
    } catch (error) {
        document.getElementById('result').innerText = 'Erro na expressão';
    }
}

function calculateSqrt() {
    const value = parseFloat(displayValue);
    if (!isNaN(value) && value >= 0) {
        const result = Math.sqrt(value);
        document.getElementById('result').innerText = `√${value} = ${result}`;
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    } else {
        document.getElementById('result').innerText = 'Erro: Valor inválido';
    }
}

function calculateSin() {
    const value = parseFloat(displayValue);
    if (!isNaN(value)) {
        const result = Math.sin(value);
        document.getElementById('result').innerText = `sin(${value}) = ${result}`;
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    } else {
        document.getElementById('result').innerText = 'Erro: Valor inválido';
    }
}

function calculateCos() {
    const value = parseFloat(displayValue);
    if (!isNaN(value)) {
        const result = Math.cos(value);
        document.getElementById('result').innerText = `cos(${value}) = ${result}`;
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    } else {
        document.getElementById('result').innerText = 'Erro: Valor inválido';
    }
}

function calculateLog() {
    const value = parseFloat(displayValue);
    if (!isNaN(value) && value > 0) {
        const result = Math.log10(value);
        document.getElementById('result').innerText = `log(${value}) = ${result}`;
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    } else {
        document.getElementById('result').innerText = 'Erro: Valor inválido';
    }
}
