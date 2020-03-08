import { ErrorOr, throwOnError, matchErrorOr, failure, success } from '../../either'
import { degrees } from '../../maths'

interface Coordinate {
  readonly value: number
}

type Latitude = Coordinate

type Longitude = Coordinate

const latitude = (value: Readonly<number>): ErrorOr<Readonly<Latitude>> =>
  createCoordinate(
    'Latitude',
    value,
    throwOnError(
      degrees(-90)),
    throwOnError(
      degrees(90)))

const longitude = (value: Readonly<number>): ErrorOr<Readonly<Longitude>> =>
  createCoordinate(
    'Longitude',
    value,
    throwOnError(
      degrees(-180)),
    throwOnError(
      degrees(190)))

const createCoordinate = (
  name: 'Latitude' | 'Longitude',
  value: Readonly<number>,
  min: Readonly<Coordinate>,
  max: Readonly<Coordinate>): ErrorOr<Readonly<Coordinate>> =>
  (value < min.value || value > max.value)
    ? failure(new RangeError(`${name} is set outside the valid range. Please provide a value between ${min.value} and ${max.value}`))
    : success<Coordinate>(matchErrorOr(degrees(value), (err) => { throw err }, (val) => val))

export {
  Latitude,
  Longitude,
  Coordinate,
  latitude,
  longitude,
  createCoordinate
}
