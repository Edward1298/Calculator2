
export function Calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Cannot divide by zero.';
            }
            return num1 / num2;
        default:
            return 'Invalid operator. Supported operators are +, -, *, /.';
    }
}
