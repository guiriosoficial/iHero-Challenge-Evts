import { randomInterval, randomLocation, randomNumber } from 'src/utils'
import { Event } from 'src/models'

import type { Socket } from 'socket.io'

const MAX_INTERVAL = 15000
const MAX_POWER = 5
const MIN_INTERVAL = 1000
const MIN_POWER = 1
const ROUND = true

export function events(
  socket: Socket,
  next: (err?: Error) => void
): void {
  const callback = (): void => {
    const location = randomLocation()
    const power = randomNumber(MIN_POWER, MAX_POWER, ROUND)

    const event = new Event(location, power)

    socket.emit('event', event)
  };

  randomInterval(callback, MIN_INTERVAL, MAX_INTERVAL)

  next()
}
