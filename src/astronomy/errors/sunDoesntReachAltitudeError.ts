import { GeoCoordinates } from '../../geoCoordinates'

type SunDoesntReachAltitudeError = Error

const sunDoesntReachAltitudeError = (date: Date, geoCoordinates: Readonly<GeoCoordinates>): SunDoesntReachAltitudeError => ({
  name: 'SunDoesntReachAltitudeError',
  message: `The sun doesnt reach altitude on ${date.toISOString()} at latitude: ${geoCoordinates.getValue('latitude')} and longitude: ${geoCoordinates.getValue('longitude')}`
})

export {
  SunDoesntReachAltitudeError,
  sunDoesntReachAltitudeError
}
