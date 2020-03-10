import { GeoCoordinate, Coordinate } from '../location'
import suntimes from 'suntimes'
import { asrElevationAngle } from './asrElevationAngle'
import { throwOnError } from '../either'
import { degrees } from '../maths'

const asr = (date: Date, geoCoordinate: GeoCoordinate) => {
  const declination = suntimes.getDeclinationOfTheSun(date)
  const asrAngle = throwOnError(asrElevationAngle(1, geoCoordinate.latitude, throwOnError(degrees(declination))))
  const result = suntimes.getDateTimeUtcOfAngleAfterNoon(asrAngle.value, date, getCoordinateValue(geoCoordinate.latitude), getCoordinateValue(geoCoordinate.longitude))
  return result
}

const getCoordinateValue = (coordinate: Coordinate) => coordinate.value

export {
  asr
}
