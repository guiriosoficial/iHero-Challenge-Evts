import type { Location } from '.'

export class Event {
  public location: Location
  public power: number

  public constructor(
    location: Readonly<Location>,
    power: Readonly<number>
  ) {
    this.location = location
    this.power = power
  }
}
