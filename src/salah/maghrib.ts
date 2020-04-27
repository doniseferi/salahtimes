import { ErrorOr, success, failure, matchErrorOr } from '../either'
import { getNullMembers } from '../validation'
import { GeoCoordinates } from '../geoCoordinates'
import { sunset } from '../astronomy'

export default (date: Date, geoCoordinates: Readonly<GeoCoordinates>): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  return matchErrorOr(
    sunset(date, geoCoordinates),
    err => handle(err),
    sunset => success(
      add3MinutesToSunsetDateTimeUtc(sunset)))
}

const add3MinutesToSunsetDateTimeUtc = (sunsetDateTimeUtc: string): string => {
  const threeMinutesInMilliseconds = 180000
  const withAdditionalMinutes = new Date(sunsetDateTimeUtc).getTime() + threeMinutesInMilliseconds
  return new Date(withAdditionalMinutes).toISOString()
}

const handle = (err: Error): ErrorOr<string> =>
  err.name === 'SunUpAllDayError'
    ? success(err.message)
    : err.name === 'SunDownAllDayError'
      ? success(err.message)
      : failure(err)
