import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

function askQuestion(query: string): string {
  return prompt(query);
}

async function main() {
  try {
    // Get first number
    let num1Input = askQuestion('Enter the first number: ');
    const num1 = parseFloat(num1Input);
    if (isNaN(num1)) {
      console.error('Invalid input: first number must be a valid number');
      return;
    }

    // Get second number
    let num2Input = askQuestion('Enter the second number: ');
    const num2 = parseFloat(num2Input);
    if (isNaN(num2)) {
      console.error('Invalid input: second number must be a valid number');
      return;
    }

    // Get operation
    let operation = askQuestion('Enter an operation (+, -, *, /): ');
    operation = operation.trim();

    // Validate operation
    if (!['+', '-', '*', '/'].includes(operation)) {
      console.error('Invalid operation: please enter one of +, -, *, /');
      return;
    }

    // Perform calculation
    let result: number;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          console.error('Error: Division by zero is not allowed');
          return;
        }
        result = num1 / num2;
        break;
      default:
        // This should not happen due to validation above
        console.error('Unknown operation');
        return;
    }

    // Output result
    console.log(`Result: ${num1} ${operation} ${num2} = ${result}`);
  } catch (err) {
    console.error('An unexpected error occurred:', err);
  }
}

main();