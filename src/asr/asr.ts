import suntimes from 'suntimes'
import { GeoCoordinate, Coordinate } from '../location'
import { asrElevationAngle } from './asrElevationAngle'
import { throwOnError } from '../either'
import { degrees } from '../maths'

//todo: refactor shadow length to be its own object
const asr = (date: Date, geoCoordinate: GeoCoordinate, shadowLength: 1 | 2): string => {
  const declination = suntimes.getDeclinationOfTheSun(date)
  const asrAngle = throwOnError(asrElevationAngle(shadowLength, geoCoordinate.latitude, throwOnError(degrees(declination))))
  return suntimes.getDateTimeUtcOfAngleAfterNoon(asrAngle.value, date, getCoordinateValue(geoCoordinate.latitude), getCoordinateValue(geoCoordinate.longitude))
}

const getCoordinateValue = (coordinate: Coordinate) => coordinate.value

export {
  asr
}
