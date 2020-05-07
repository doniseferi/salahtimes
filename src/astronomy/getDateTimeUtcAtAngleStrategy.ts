import { GeoCoordinates } from '../geoCoordinates'
import { getNullMembers } from '../validation'
import { failure, success, ErrorOr, matchErrorOr } from '../either'
import { AngularDegrees } from '../maths'
import { HighLatitudeMethod, highLatitudeMethodHandler } from '../highLatitudeMethods'

type GetDateTimeUtcAtAngle = (
  date: Date,
  geoCoordinates: Readonly<GeoCoordinates>,
  degrees: Readonly<AngularDegrees>) => ErrorOr<string>

type GetDateTimeUtcAtAngleStrategy = (
  func: GetDateTimeUtcAtAngle,
  date: Date,
  geoCoordinates: Readonly<GeoCoordinates>,
  degrees: Readonly<AngularDegrees>,
  highLatitudeMethod: HighLatitudeMethod) => ErrorOr<string>

const getDateTimeUtcAtAngleStrategy: GetDateTimeUtcAtAngleStrategy = (
  getDateTimeAtAngle: GetDateTimeUtcAtAngle,
  date: Date,
  geoCoordinates: Readonly<GeoCoordinates>,
  degrees: Readonly<AngularDegrees>,
  highLatitudeMethod: HighLatitudeMethod
): ErrorOr<string> => {
  const nullProperties = getNullMembers([getDateTimeAtAngle, date, geoCoordinates, degrees, highLatitudeMethod])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  return matchErrorOr(
    getDateTimeAtAngle(date, geoCoordinates, degrees),
    err => err.name === 'SunDoesntReachAltitudeError'
      ? highLatitudeMethodHandler(highLatitudeMethod, date, geoCoordinates, degrees)
      : failure(err),
    val => success(val))
}

export {
  GetDateTimeUtcAtAngle,
  GetDateTimeUtcAtAngleStrategy,
  getDateTimeUtcAtAngleStrategy
}
