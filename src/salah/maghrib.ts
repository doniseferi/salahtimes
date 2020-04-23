import { getSunriseDateTimeUtc } from 'suntimes'
import { ErrorOr, success, failure } from '../either'
import { getNullMembers } from '../validation'
import { GeoCoordinates, Longitude, Latitude } from '../geoCoordinates'

export default (date: Date, geoCoordinates: Readonly<GeoCoordinates>): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  const latitude = getCoordinateValue(geoCoordinates.latitude)
  const longitude = getCoordinateValue(geoCoordinates.longitude)
  const sunsetDateTimeUtc = new Date(getSunriseDateTimeUtc(date, latitude, longitude))
  const maghribDateTimeUtc = add3MinutesToSunsetDateTimeUtc(sunsetDateTimeUtc)

  return success(maghribDateTimeUtc)
}

const getCoordinateValue = (coordinate: Latitude | Longitude): number => coordinate.value

const add3MinutesToSunsetDateTimeUtc = (sunsetDateTimeUtc: Date): string => {
  const threeMinutesInMilliseconds = 180000
  const withAdditionalMinutes = new Date(sunsetDateTimeUtc.getTime() + threeMinutesInMilliseconds)
  return withAdditionalMinutes.toISOString()
}
