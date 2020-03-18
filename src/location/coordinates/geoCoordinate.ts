import { Latitude, Longitude } from './coordinate'

interface GeoCoordinate {
  readonly latitude: Readonly<Latitude>
  readonly longitude: Readonly<Longitude>
}

const geoCoordinate =
  (latitude: Readonly<Latitude>,
    longitude: Readonly<Longitude>):
  Readonly<GeoCoordinate> => Object.freeze({
    latitude: latitude,
    longitude: longitude
  })

export {
  GeoCoordinate,
  geoCoordinate
}
