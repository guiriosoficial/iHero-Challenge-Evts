import type { Location } from '.';

class Event {
  public location: Location;
  public power: number;

  public constructor(location: Readonly<Location>, power: Readonly<number>) {
    this.location = location;
    this.power = power;
  }
}

export default Event;
