import suntimes from 'suntimes'
import { GeoCoordinate, Coordinate } from '../location'
import { asrElevationAngle } from './asrElevationAngle'
import { throwOnError, success, failure, ErrorOr } from '../either'
import { degrees } from '../maths'
import { getNullMembers } from '../validation'
import { AsrJursiticMethod } from './madhhab'

const asr = (
  date: Date,
  geoCoordinate: GeoCoordinate,
  asrjuristicMethod: AsrJursiticMethod): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinate, asrjuristicMethod])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  const declination = suntimes.getDeclinationOfTheSun(date)
  const asrAngle = throwOnError(asrElevationAngle(asrjuristicMethod.value, geoCoordinate.latitude, throwOnError(degrees(declination))))
  return success(
    suntimes.getDateTimeUtcOfAngleAfterNoon(
      asrAngle.value,
      date,
      getCoordinateValue(geoCoordinate.latitude),
      getCoordinateValue(geoCoordinate.longitude)))
}

const getCoordinateValue = (coordinate: Coordinate): number => coordinate.value

export {
  asr
}
