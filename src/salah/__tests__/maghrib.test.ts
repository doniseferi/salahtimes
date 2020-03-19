import suntimes from 'suntimes'
import { maghrib } from '../index'
import { GeoCoordinate } from '../../location'
import { randomGeoCoordinates, generateRandomDate, iterativeTest } from '../../testUtils'
import { success } from '../../either'

describe('Maghrib', () => {
  test('is 3 minutes after sunset', () => {
    iterativeTest<{
      date: Date
      geoCoordinates: Readonly<GeoCoordinate>
      sunsetDateTimeUtc: Readonly<Date>
    }, void>({
      numberOfExecutions: 500,
      generateInput: () => {
        const geoCoordinates = randomGeoCoordinates()
        const latitude = geoCoordinates.latitude
        const longitude = geoCoordinates.longitude
        const randomDate = generateRandomDate(2000, 2050)
        const sunsetDateTimeUtc = new Date(suntimes.getSunsetDateTimeUtc(new Date(randomDate.getTime()), latitude.value, longitude.value))
        return {
          date: new Date(randomDate.getTime()),
          sunsetDateTimeUtc,
          geoCoordinates
        }
      },
      assert: ({ date, geoCoordinates, sunsetDateTimeUtc }) => {
        const maghribDateTimeUtc = maghrib(date, geoCoordinates)
        const expected = new Date(sunsetDateTimeUtc.getTime() + 3 * 60000).toISOString()
        expect(maghribDateTimeUtc).toEqual(success(expected))
      }
    })
  })
})
