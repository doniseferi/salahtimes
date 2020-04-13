import { getDeclinationOfTheSun, getDateTimeUtcOfAngleAfterNoon } from 'suntimes'
import { GeoCoordinates, Latitude, Longitude } from '../geoCoordinates'
import { AsrJursiticMethod } from '../madhab'
import { ErrorOr, failure, success, matchErrorOr } from '../either'
import { getNullMembers } from '../validation'
import asrElevationAngle from '../asrElevationAngle'
import { degrees } from '../maths'

export default (
  date: Date,
  geoCoordinate: GeoCoordinates,
  asrjuristicMethod: AsrJursiticMethod): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinate, asrjuristicMethod])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  const declinationOfTheSun = matchErrorOr(
    degrees(getDeclinationOfTheSun(date)),
    err => failure(err),
    res => success(res))

  const elevationAngle =
  declinationOfTheSun.path === 'error'
    ? failure(new Error())
    : asrElevationAngle(
      asrjuristicMethod.value,
      geoCoordinate.latitude,
      declinationOfTheSun.result)

  return matchErrorOr(elevationAngle,
    err => failure(err),
    angle => success(
      getDateTimeUtcOfAngleAfterNoon(
        angle.value,
        date,
        getCoordinateValue(geoCoordinate.latitude),
        getCoordinateValue(geoCoordinate.longitude)))
  )
}

const getCoordinateValue = (coordinate: Latitude | Longitude): number => coordinate.value
