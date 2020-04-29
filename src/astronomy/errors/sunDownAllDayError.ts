import { GeoCoordinates } from '../../geoCoordinates'

type SunDownAllDayError = Error

const sunDownAllDayError = (date: Date, geoCoordinates: Readonly<GeoCoordinates>): SunDownAllDayError => ({
  name: 'SunDownAllDayError',
  message: `The sun is down all day on ${date.toISOString()} at latitude: ${geoCoordinates.getValue('latitude')} and longitude: ${geoCoordinates.getValue('longitude')}`
})

export {
  SunDownAllDayError,
  sunDownAllDayError
}
