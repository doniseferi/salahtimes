import { Latitude, Longitude } from '.'

interface GeoCoordinates {
  latitude: Readonly<Latitude>
  longitude: Readonly<Longitude>
  getValue: (value: 'latitude' | 'longitude') => number
}

const geoCoordinates = (
  latitude: Readonly<Latitude>,
  longitude: Readonly<Longitude>): Readonly<GeoCoordinates> => {
  const getCoordinateValue = (coordinate: Latitude | Longitude): number => coordinate.value

  return Object.freeze({
    latitude: latitude,
    longitude: longitude,
    getValue: (value: 'latitude' | 'longitude') => value === 'latitude' ? getCoordinateValue(latitude) : getCoordinateValue(longitude)
  })
}

export {
  GeoCoordinates,
  geoCoordinates
}
