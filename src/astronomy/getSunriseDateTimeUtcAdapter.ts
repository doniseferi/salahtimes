import { getSunriseDateTimeUtc as sunrise } from 'suntimes'
import { GeoCoordinates } from '../geoCoordinates'
import { ErrorOr, failure, success } from '../either'
import { getNullMembers } from '../validation'
import { sunUpAllDayError, sunDownAllDayError, GetDateTimeUtc } from '.'

const getSunriseDateTimeUtcAdapter: GetDateTimeUtc = (
  date: Date,
  geoCoordinates: Readonly<GeoCoordinates>): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  const result = sunrise(
    date,
    geoCoordinates.getValue('latitude'),
    geoCoordinates.getValue('longitude'))

  return result.includes('The sun is up all day')
    ? failure(sunUpAllDayError(date, geoCoordinates))
    : result.includes('The sun is down all day')
      ? failure(sunDownAllDayError(date, geoCoordinates))
      : success(result)
}

export { getSunriseDateTimeUtcAdapter }
