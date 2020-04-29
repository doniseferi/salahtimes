import { getDateTimeUtcOfAngleBeforeNoon as beforeNoon, getDateTimeUtcOfAngleAfterNoon as afterNoon } from 'suntimes'
import { GeoCoordinates } from '../geoCoordinates'
import { getNullMembers } from '../validation'
import { failure, success, ErrorOr } from '../either'
import { AngularDegrees } from '../maths'
import { sunDoesntReachAltitudeError } from '.'

type GetDateTimeUtcAtAngle = (angle: number, date: Date, latitude: number, longitude: number) => string

const getDateAtAngle = (getDateTimeUtcAtAngle: GetDateTimeUtcAtAngle, date: Date, geoCoordinates: GeoCoordinates, degrees: Readonly<AngularDegrees>): ErrorOr<string> => {
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

const getDateTimeUtcOfAngleBeforeNoon = (date: Date, geoCoordinates: GeoCoordinates, degrees: Readonly<AngularDegrees>): ErrorOr<string> =>
  getDateAtAngle(beforeNoon, date, geoCoordinates, degrees)

const getDateTimeUtcOfAngleAfterNoon = (date: Date, geoCoordinates: GeoCoordinates, degrees: Readonly<AngularDegrees>): ErrorOr<string> =>
  getDateAtAngle(afterNoon, date, geoCoordinates, degrees)

export {
  getDateTimeUtcOfAngleBeforeNoon,
  getDateTimeUtcOfAngleAfterNoon
}
