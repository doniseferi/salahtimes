import { AngularDegrees } from '../maths'
import { GeoCoordinates } from '../geoCoordinates'
import { ErrorOr, failure, success, Failure } from '../either'
import { getNullMembers } from '../validation'

interface BelowHorizonParams {
  getSalahTimeUtc: (angle: number, date: Date, Latitude: number, longitude: number) => string
  salahAngle: Readonly<AngularDegrees>
  date: Date
  geoCoordinates: GeoCoordinates
}

export default ({ getSalahTimeUtc, salahAngle, date, geoCoordinates }: BelowHorizonParams): ErrorOr<string> => {
  const nullProperties = getNullMembers([getSalahTimeUtc, salahAngle, date, geoCoordinates])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  const latitude = geoCoordinates.getValue('latitude')
  const longitude = geoCoordinates.getValue('longitude')
  const result = getSalahTimeUtc(salahAngle.value, date, latitude, longitude)
  return isValidDate(new Date(result))
    ? success(result)
    : createFailure(geoCoordinates, salahAngle)
}

const isValidDate = (value: Date): boolean => getNullMembers(value).length === 0 && !isNaN(value.getTime())
const createFailure = (geoCoordinates: GeoCoordinates, salahAngle: Readonly<AngularDegrees>): Failure<Error> =>
  failure(
    new Error(
        `Could not get salah date time utc for latitude: ${geoCoordinates.getValue('latitude')} and longitude: ${geoCoordinates.getValue('longitude')}` +
        `at angle of: ${salahAngle.value}°`))
