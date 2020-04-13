import { timeSpan, TimeSpan } from '../time'
import { AngularDegrees, degrees } from '../maths'
import { throwOnError } from '../either'
import {
  GeoCoordinates,
  Latitude,
  Longitude,
  geoCoordinates,
  latitude,
  longitude
} from '../geoCoordinates'

const generateRandomNumber = (
  min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER): number =>
  Math.random() * (max - min) + min

const generateRandomWholeNumber = (min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER): number => Math.round(generateRandomNumber(min, max))

const generateRandomDate = (minYear: number, maxYear: number): Readonly<Date> => {
  const startDate = new Date(minYear, 0, 1, 0, 0, 0, 0)
  const endDate = new Date(maxYear, 11, 31, 23, 59, 59, 999)
  return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
}

const randomTimeSpan = (): Readonly<TimeSpan> => timeSpan(0, 0, 0, 0, generateRandomWholeNumber(1, 1_000_000_000_000))

const randomDegree = (minValue: number = 0, maxValue: number = 360): Readonly<AngularDegrees> => throwOnError(degrees(generateRandomNumber(minValue, maxValue)))

const randomLatitude = (): Readonly<Latitude> => throwOnError(latitude(generateRandomNumber(-90, 90)))

const randomLongitude = (): Readonly<Longitude> => throwOnError(longitude(generateRandomNumber(-180, 180)))

const randomGeoCoordinates = (): Readonly<GeoCoordinates> => geoCoordinates(randomLatitude(), randomLongitude())

export {
  generateRandomNumber,
  generateRandomWholeNumber,
  generateRandomDate,
  randomTimeSpan,
  randomDegree,
  randomGeoCoordinates,
  randomLatitude,
  randomLongitude
}
