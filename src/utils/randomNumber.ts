const ACC = 1;

function randomNumber(min: number, max: number, round?: boolean): number {
  let value = Math.random() * (max - min + ACC) + min;

  if (round ?? false) value = Math.floor(value);

  return value;
}

export default randomNumber;
