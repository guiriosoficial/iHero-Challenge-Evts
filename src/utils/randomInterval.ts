import { randomNumber } from '.'

export function randomInterval(
  callback: () => void,
  minInterval: number,
  maxInterval: number
): void {
  const loop = (): void => {
    callback()
    const interval = randomNumber(minInterval, maxInterval)
    setTimeout(loop, interval)
  }

  loop()
}
