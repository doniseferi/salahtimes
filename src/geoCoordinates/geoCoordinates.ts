import { Latitude, Longitude } from '.'

interface GeoCoordinates {
  latitude: Readonly<Latitude>
  longitude: Readonly<Longitude>
}

const geoCoordinates = (
  latitude: Readonly<Latitude>,
  longitude: Readonly<Longitude>): Readonly<GeoCoordinates> => (
  Object.freeze({
    latitude: latitude,
    longitude: longitude
  }))

export {
  GeoCoordinates,
  geoCoordinates
}
