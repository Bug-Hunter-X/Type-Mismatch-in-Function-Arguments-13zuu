function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if(isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Both arguments must be numbers or convertible to numbers');
  }
  return numA + numB;
}

let result = addSafe(1, "2"); //Now working