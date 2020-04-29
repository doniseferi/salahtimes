import { GeoCoordinates } from '../../geoCoordinates'

type SunUpAllDayError = Error

const sunUpAllDayError = (date: Date, geoCoordinates: Readonly<GeoCoordinates>): SunUpAllDayError => ({
  name: 'SunUpAllDayError',
  message: `The sun is up all day on ${date.toISOString()} at latitude: ${geoCoordinates.getValue('latitude')} and longitude: ${geoCoordinates.getValue('longitude')}`
})

export {
  SunUpAllDayError,
  sunUpAllDayError
}
