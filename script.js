document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    let num1 = '';
    let num2 = '';
    let operator = '';

    document.querySelectorAll('.calculator-button').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (!isNaN(value) || value === '.') {
                if (operator === '') {
                    num1 += value;
                    display.value = num1;
                } else {
                    num2 += value;
                    display.value = num2;
                }
            }

            if (this.classList.contains('operator')) {
                if (num1 !== '' && num2 !== '') {
                    calculate();
                }
                operator = value;
            }

            if (this.classList.contains('clear')) {
                clearDisplay();
            }

            if (this.classList.contains('equal')) {
                calculate();
            }
        });
    });

    function clearDisplay() {
        num1 = '';
        num2 = '';
        operator = '';
        display.value = '';
    }

    function calculate() {
        let result;
        switch (operator) {
            case '+':
                result = Number(num1) + Number(num2);
                break;
            case '-':
                result = Number(num1) - Number(num2);
                break;
            case '*':
                result = Number(num1) * Number(num2);
                break;
            case '/':
                if (num2 === '0') {
                    result = 'Error';
                } else {
                    result = Number(num1) / Number(num2);
                }
                break;
            default:
                result = 'Error';
        }
        display.value = result;
        num1 = result.toString();
        num2 = '';
        operator = '';
    }
});
