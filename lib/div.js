export function div(a, b) {
  if (b === 0) throw new RangeError('Division by zero');
  return a / b;
}
