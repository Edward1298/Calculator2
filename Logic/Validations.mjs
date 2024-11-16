export function Validations(num1, num2, operator)
{
    if (!num1 || !num2 || !operator) {
        return 'Missing parameters: a, b, and operator are required.';
    }
    else if (isNaN(num1) || isNaN(num2)) {
        return 'Both a and b must be valid numbers.';
      } else{
        return "ok"
      }

}