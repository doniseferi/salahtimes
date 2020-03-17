import suntimes from 'suntimes'
import { Convention, convention as defauttConvention } from '../convention/convention'
import { GeoCoordinate, Coordinate } from '../location'
import { AngularDegrees } from '../maths'
import { failure, ErrorOr, success, Failure } from '../either'
import { getNullMembers } from '../validation'

const ishaa = (date: Date, geoCoordinates: GeoCoordinate, convention: Convention = defauttConvention()): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates, convention])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  const ishaaAngle = adaptishaaAngleForSuntimes(ishaaConvention(convention))
  const latitude = getCoordinateValue(geoCoordinates.latitude)
  const longitude = getCoordinateValue(geoCoordinates.longitude)
  const result = suntimes.getDateTimeUtcOfAngleAfterNoon(ishaaAngle, date, latitude, longitude)
  return isValidDate(new Date(result))
    ? success(result)
    : createFailure(geoCoordinates, convention)
}

const adaptishaaAngleForSuntimes = (angle: Readonly<AngularDegrees>): number => angle.value * -1
const ishaaConvention = (convention: Convention): Readonly<AngularDegrees> => convention.ishaa
const getCoordinateValue = (coordinate: Coordinate): number => coordinate.value
const isValidDate = (value: Date): boolean => getNullMembers(value).length === 0 && !isNaN(value.getTime())
const createFailure = (geoCoordinates: GeoCoordinate, convention: Convention): Failure<Error> =>
  failure(
    new Error(
        `Could not get isha'a date time for latitude: ${getCoordinateValue(geoCoordinates.latitude)} and longitude: ${getCoordinateValue(geoCoordinates.longitude)}` +
        `for convention: ${convention.name} which has a ishaa angle of: ${ishaaConvention(convention).value}°`))

export default ishaa
