import { getDateTimeUtcOfAngleAfterNoon } from 'suntimes'
import { GeoCoordinates } from '../geoCoordinates'
import { AsrJursiticMethod } from '../madhab'
import { ErrorOr, failure, success, matchErrorOr } from '../either'
import { getNullMembers } from '../validation'
import { asrElevationAngle } from '../asrElevationAngle'
import { getDeclinationOfTheSun } from '../astronomy'

export default (
  date: Date,
  geoCoordinate: GeoCoordinates,
  asrjuristicMethod: AsrJursiticMethod): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinate, asrjuristicMethod])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }
  const elevationAngle = asrElevationAngle(
    asrjuristicMethod.value,
    geoCoordinate.latitude,
    getDeclinationOfTheSun(date))

  return matchErrorOr(elevationAngle,
    err => failure(err),
    angle => success(
      getDateTimeUtcOfAngleAfterNoon(
        angle.value,
        date,
        geoCoordinate.getValue('latitude'),
        geoCoordinate.getValue('longitude')))
  )
}
