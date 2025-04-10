import { limitDecimals, randomNumber } from '.';
import { Location } from 'src/models';

const DECIMALS_LIMIT = 6,
  MAX_LATITUDE = 90,
  MAX_LONGITUDE = 180,
  MIN_LATITUDE = -90,
  MIN_LONGITUDE = -180;

function randomLocation(): Location {
  let latitude = randomNumber(MIN_LATITUDE, MAX_LATITUDE),
    longitude = randomNumber(MIN_LONGITUDE, MAX_LONGITUDE);
  latitude = limitDecimals(latitude, DECIMALS_LIMIT);
  longitude = limitDecimals(longitude, DECIMALS_LIMIT);

  return new Location(latitude, longitude);
}

export default randomLocation;
