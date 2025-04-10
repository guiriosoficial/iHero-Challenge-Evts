import { randomNumber } from '.';

function randomInterval(
  callback: () => void,
  minInterval: number,
  maxInterval: number,
): void {
  const loop = (): void => {
    callback();
    const interval = randomNumber(minInterval, maxInterval);
    setTimeout(loop, interval);
  };

  loop();
}

export default randomInterval;
