// Get the result input field
const resultField = document.getElementById('result');

// Initialize current input and expression
let currentInput = '';
let expression = '';

// Get all the calculator buttons
const buttons = document.querySelectorAll('.btn');

// Loop through the buttons and add event listeners
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = button.getAttribute('data-value');

        // Handle clear button
        if (value === 'C') {
            currentInput = '';
            expression = '';
            resultField.value = '';
            return;
        }

        // Handle delete button
        if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            resultField.value = currentInput;
            return;
        }

        // Handle equal button
        if (value === '=') {
            try {
                expression = eval(currentInput);
                resultField.value = expression;
                currentInput = expression; // Allow chaining calculations
            } catch (error) {
                resultField.value = 'Error';
            }
            return;
        }

        // Append the value to the current input and update the result field
        currentInput += value;
        resultField.value = currentInput;
    });
});
