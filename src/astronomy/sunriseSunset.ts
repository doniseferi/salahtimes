import {
  getSunriseDateTimeUtc as sunrise,
  getSunsetDateTimeUtc as sunset
} from 'suntimes'
import { GeoCoordinates } from '../geoCoordinates'
import { ErrorOr, failure, success } from '../either'
import { getNullMembers } from '../validation'
import { sunUpAllDayError, sunDownAllDayError } from '.'

const getSunsetDateTimeUtc = (
  date: Date,
  geoCoordinates: Readonly<GeoCoordinates>): ErrorOr<string> =>
  wrapper(sunset, date, geoCoordinates)

const getSunriseDateTimeUtc = (
  date: Date,
  geoCoordinates: Readonly<GeoCoordinates>): ErrorOr<string> =>
  wrapper(sunrise, date, geoCoordinates)

const wrapper = (
  astronomy: (date: Date, latitude: number, longitude: number) => string,
  date: Date,
  geoCoordinates: Readonly<GeoCoordinates>): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  const latitude = geoCoordinates.getValue('latitude')
  const longitude = geoCoordinates.getValue('longitude')
  const value = astronomy(date, latitude, longitude)

  return value.includes('The sun is up all day')
    ? failure(sunUpAllDayError(date, geoCoordinates))
    : value.includes('The sun is down all day')
      ? failure(sunDownAllDayError(date, geoCoordinates))
      : success(value)
}

export {
  getSunsetDateTimeUtc,
  getSunriseDateTimeUtc
}
