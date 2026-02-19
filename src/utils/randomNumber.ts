const ACC = 1;

export function randomNumber(
  min: number,
  max: number,
  round?: boolean
): number {
  const value = Math.random() * (max - min + ACC) + min

  if (!round) return value

  return Math.floor(value)
}
