import { Degree, degree } from '../../maths/index'
import { left, right, match, Either } from '../../either/index'

interface GeoCoordinate {
  readonly latitude: Degree
  readonly longitude: Degree
}

/**
 * Returns the GeoCoordinate point represented by a latitude and longitude angle.
 *
 * Code sample:
 * ```ts
 *   const myHouse = geoCoordinate(degree(51.5034), degree(0.1276));
 * ```
 *
 * @param latitude - The latitude coordinate in degrees.
 * @param longitude - The longitude coordinate in degrees.
 * @returns The GeoCoordinate value of coordinate latitude and longitude.
 *
 */
const geoCoordinate =
  (latitude: Readonly<Degree>,
    longitude: Readonly<Degree>): Readonly<GeoCoordinate> => Object.freeze({
    latitude: latitude,
    longitude: longitude
  })

const createLatitude = (value: Readonly<number>): Either<RangeError, Readonly<Degree>> =>
  createCoordinate(
    'Latitude',
    value,
    match<Degree, Error, Degree>(
      degree(-90),
      (err) => {
        throw err
      },
      (val) => val
    ),
    match<Degree, Error, Degree>(
      degree(90),
      (err) => {
        throw err
      },
      (val) => val
    )
  )

const createLongitude = (value: Readonly<number>): Either<RangeError, Readonly<Degree>> =>
  createCoordinate(
    'Longitude',
    value,
    match<Degree, Error, Degree>(
      degree(-180),
      (err) => {
        throw err
      },
      (val) => val
    ),
    match<Degree, Error, Degree>(
      degree(180),
      (err) => {
        throw err
      },
      (val) => val
    )
  )

const createCoordinate = (
  name: 'Latitude' | 'Longitude',
  value: Readonly<number>,
  min: Readonly<Degree>,
  max: Readonly<Degree>): Either<RangeError, Readonly<Degree>> =>
  (value < min.value || value > max.value)
    ? left(new RangeError(`${name} is set outside the valid range. 
        Please provide a value between ${min.value} and ${max.value}`))
    : right<Degree>(match<Degree, Error, Degree>(degree(value), (err) => { throw err }, (val) => val))

export {
  GeoCoordinate,
  geoCoordinate,
  createLatitude,
  createLongitude
}
