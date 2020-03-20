import suntimes from 'suntimes'
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
  const sunsetDateTimeUtc = getSunsetDateTimeUtc(date, latitude, longitude)
  const maghribDateTimeUtc = add3MinutesToSunsetDateTimeUtc(sunsetDateTimeUtc)

  return success(maghribDateTimeUtc)
}

const getCoordinateValue = (coordinate: Latitude | Longitude): number => coordinate.value

const add3MinutesToSunsetDateTimeUtc = (sunsetDateTimeUtc: string): string => {
  const threeMinutesInMilliseconds = 180000
  return new Date(new Date(sunsetDateTimeUtc).getTime() + threeMinutesInMilliseconds).toISOString()
}

const getSunsetDateTimeUtc = (date: Date, latitude: number, longitude: number): string => (
  new Date(suntimes.getSunsetDateTimeUtc(date, latitude, longitude))).toISOString()
