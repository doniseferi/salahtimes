import { GeoCoordinates } from '../geoCoordinates'
import { ErrorOr, failure, success } from '../either'
import { getSunriseDateTimeUtc } from 'suntimes'
import { getNullMembers } from '../validation'
import { sunUpAllDayError, sunDownAllDayError } from '.'

const getSunsetDateTimeUtc = (date: Date, geoCoordinates: Readonly<GeoCoordinates>): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  const latitude = geoCoordinates.getValue('latitude')
  const longitude = geoCoordinates.getValue('longitude')
  const sunriseDateTimeUtc = getSunriseDateTimeUtc(date, latitude, longitude)

  return sunriseDateTimeUtc.includes('The sun is up all day')
    ? failure(sunUpAllDayError(date, geoCoordinates))
    : sunriseDateTimeUtc.includes('The sun is down all day')
      ? failure(sunDownAllDayError(date, geoCoordinates))
      : success(sunriseDateTimeUtc)
}

export {
  getSunsetDateTimeUtc
}
