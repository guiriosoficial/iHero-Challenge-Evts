import { randomInterval, randomLocation, randomNumber } from 'src/utils/index';
import { Event } from 'src/models';

import type { Socket } from 'socket.io';

const MAX_INTERVAL = 15000,
  MAX_POWER = 5,
  MIN_INTERVAL = 1000,
  MIN_POWER = 1,
  ROUND = true;

function events(socket: Socket, next: (err?: Error) => void): void {
  const callback = (): void => {
    const location = randomLocation(),
      power = randomNumber(MIN_POWER, MAX_POWER, ROUND);

    // eslint-disable-next-line one-var
    const event = new Event(location, power);

    socket.emit('event', event);
  };

  randomInterval(callback, MIN_INTERVAL, MAX_INTERVAL);

  next();
}

export default events;
