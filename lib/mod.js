export function mod(a, b) {
  if (b === 0) throw new RangeError('Modulo by zero');
  return a % b;
}
