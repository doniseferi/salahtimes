import { getDateTimeUtcOfAngleBeforeNoon as beforeNoon, getDateTimeUtcOfAngleAfterNoon as afterNoon } from 'suntimes'
import { GeoCoordinates } from '../geoCoordinates'
import { getNullMembers } from '../validation'
import { failure, success, ErrorOr, matchErrorOr } from '../either'
import { AngularDegrees } from '../maths'
import { sunDoesntReachAltitudeError } from '.'
import { HighLatitudeMethod, highLatitudeMethodHandler } from '../highLatitudeMethods'

type GetDateTimeUtcAtAngle = (
  date: Date,
  geoCoordinates: GeoCoordinates,
  degrees: Readonly<AngularDegrees>) => ErrorOr<string>

  type GetDateTimeUtcAtAngleStrategy = (
    func: GetDateTimeUtcAtAngle,
    date: Date,
    geoCoordinates: GeoCoordinates,
    degrees: AngularDegrees,
    highLatitudeMethod: HighLatitudeMethod) => ErrorOr<string>

const getDateTimeUtcAtAngleStrategy: GetDateTimeUtcAtAngleStrategy = (
  func: GetDateTimeUtcAtAngle,
  date: Date,
  geoCoordinates: GeoCoordinates,
  degrees: AngularDegrees,
  highLatitudeMethod: HighLatitudeMethod
): ErrorOr<string> => {
  const nullProperties = getNullMembers([degrees, date, geoCoordinates])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  return matchErrorOr(
    func(date, geoCoordinates, degrees),
    err => err.name === 'SunDoesntReachAltitudeError'
      ? highLatitudeMethodHandler(highLatitudeMethod, date, geoCoordinates, degrees)
      : failure(err),
    val => success(val))
}

const getDateTimeUtcOfAngleBeforeNoon: GetDateTimeUtcAtAngle = (
  date: Date,
  geoCoordinates: GeoCoordinates,
  degrees: Readonly<AngularDegrees>): ErrorOr<string> =>
  getDateTimeAtAngleAdapter(beforeNoon, date, geoCoordinates, degrees)

const getDateTimeUtcOfAngleAfterNoon: GetDateTimeUtcAtAngle = (
  date: Date,
  geoCoordinates: GeoCoordinates,
  degrees: Readonly<AngularDegrees>): ErrorOr<string> =>
  getDateTimeAtAngleAdapter(afterNoon, date, geoCoordinates, degrees)

type GetDateTimeUtcAtAngleSuntimesWrapper = (angle: number, date: Date, latitude: number, longitude: number) => string

const getDateTimeAtAngleAdapter = (getDateTimeUtcAtAngle: GetDateTimeUtcAtAngleSuntimesWrapper, date: Date, geoCoordinates: GeoCoordinates, degrees: Readonly<AngularDegrees>): ErrorOr<string> => {
  const nullProperties = getNullMembers([getDateTimeUtcAtAngle, date, geoCoordinates, degrees])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  const latitude = geoCoordinates.getValue('latitude')
  const longitude = geoCoordinates.getValue('longitude')
  const angle = degrees.value
  const dateTimeUtcAtAngle = getDateTimeUtcAtAngle(angle, date, latitude, longitude)

  return dateTimeUtcAtAngle.includes('The sun\'s altitude does not drop to') ||
  dateTimeUtcAtAngle.includes('The sun\'s altitude does not rise to')
    ? failure(sunDoesntReachAltitudeError(date, geoCoordinates))
    : success(dateTimeUtcAtAngle)
}

export {
  getDateTimeUtcOfAngleBeforeNoon,
  getDateTimeUtcOfAngleAfterNoon,
  getDateTimeUtcAtAngleStrategy,
  GetDateTimeUtcAtAngleStrategy
}
