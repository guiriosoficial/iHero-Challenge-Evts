export function limitDecimals(
  number: number,
  decimals: number
): number {
  const fixedNumber = number.toFixed(decimals)
  return parseFloat(fixedNumber)
}
