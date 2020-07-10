import { GeoCoordinates } from '../geoCoordinates'
import { AsrJursiticMethod } from '../madhab'
import { ErrorOr, failure, matchErrorOr } from '../either'
import { getNullMembers } from '../validation'
import { asrElevationAngle } from '../asrElevationAngle'
import { getDeclinationOfTheSun, getDateTimeUtcOfAngleAfterNoonAdapter } from '../astronomy'

export default (
  date: Date,
  geoCoordinates: GeoCoordinates,
  asrjuristicMethod: AsrJursiticMethod): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates, asrjuristicMethod])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }
  const elevationAngle = asrElevationAngle(
    asrjuristicMethod.value,
    geoCoordinates.latitude,
    getDeclinationOfTheSun(date))

  return matchErrorOr(
    elevationAngle,
    err => failure(err),
    angle => getDateTimeUtcOfAngleAfterNoonAdapter(
      date,
      geoCoordinates,
      angle)
  )
}
