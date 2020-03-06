import { AngularDegrees, degrees } from '../../maths/index'
import { ErrorOr, success, failure, matchErrorOr } from '../../either'

interface GeoCoordinate {
  readonly latitude: AngularDegrees
  readonly longitude: AngularDegrees
}

const geoCoordinate =
  (latitude: Readonly<AngularDegrees>,
    longitude: Readonly<AngularDegrees>): Readonly<GeoCoordinate> => Object.freeze({
    latitude: latitude,
    longitude: longitude
  })

const createLatitude = (value: Readonly<number>): ErrorOr<Readonly<AngularDegrees>> =>
  createCoordinate(
    'Latitude',
    value,
    matchErrorOr(
      degrees(-90),
      (err) => {
        throw err
      },
      (val) => val
    ),
    matchErrorOr(
      degrees(90),
      (err) => {
        throw err
      },
      (val) => val
    )
  )

const createLongitude = (value: Readonly<number>): ErrorOr<Readonly<AngularDegrees>> =>
  createCoordinate(
    'Longitude',
    value,
    matchErrorOr(
      degrees(-180),
      (err) => {
        throw err
      },
      (val) => val
    ),
    matchErrorOr(
      degrees(180),
      (err) => {
        throw err
      },
      (val) => val
    )
  )

const createCoordinate = (
  name: 'Latitude' | 'Longitude',
  value: Readonly<number>,
  min: Readonly<AngularDegrees>,
  max: Readonly<AngularDegrees>): ErrorOr<Readonly<AngularDegrees>> =>
  (value < min.value || value > max.value)
    ? failure(new RangeError(`${name} is set outside the valid range. Please provide a value between ${min.value} and ${max.value}`))
    : success<AngularDegrees>(matchErrorOr(degrees(value), (err) => { throw err }, (val) => val))

export {
  GeoCoordinate,
  geoCoordinate,
  createLatitude,
  createLongitude
}
