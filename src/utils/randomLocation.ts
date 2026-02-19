import { limitDecimals, randomNumber } from '.'
import { Location } from 'src/models'

const DECIMALS_LIMIT = 6
const MAX_LATITUDE = 90
const MAX_LONGITUDE = 180
const MIN_LATITUDE = -90
const MIN_LONGITUDE = -180

export function randomLocation(): Location {
  let latitude = randomNumber(MIN_LATITUDE, MAX_LATITUDE)
  let longitude = randomNumber(MIN_LONGITUDE, MAX_LONGITUDE)

  latitude = limitDecimals(latitude, DECIMALS_LIMIT)
  longitude = limitDecimals(longitude, DECIMALS_LIMIT)

  return new Location(latitude, longitude);
}
