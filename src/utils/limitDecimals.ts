function limitDecimals(number: number, decimals: number): number {
  return parseFloat(number.toFixed(decimals));
}

export default limitDecimals;
