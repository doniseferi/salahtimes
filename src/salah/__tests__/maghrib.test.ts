import { getSunriseDateTimeUtc } from 'suntimes'
import { maghrib } from '../index'
import { randomGeoCoordinates, generateRandomDate, iterativeTest } from '../../testUtils'
import { success } from '../../either'
import { GeoCoordinates } from '../../geoCoordinates'

describe('Maghrib', () => {
  test('is 3 minutes after sunset', () => {
    iterativeTest<{
      date: Date
      geoCoordinates: Readonly<GeoCoordinates>
      sunsetDateTimeUtc: string
    }, void>({
      numberOfExecutions: 500,
      generateInput: () => {
        const { randomDate, sunsetDateTimeUtc, geoCoordinates } = getExpectedDateTIme()
        return {
          date: new Date(randomDate.getTime()),
          sunsetDateTimeUtc,
          geoCoordinates
        }
      },
      assert: ({ date, geoCoordinates, sunsetDateTimeUtc }) => {
        const maghribDateTimeUtc = maghrib(date, geoCoordinates)
        const expected = (new Date(sunsetDateTimeUtc).getTime()) + 3 * 60000
        expect(maghribDateTimeUtc).toEqual(success(new Date(expected).toISOString()))
      }
    })
  })
})
const getExpectedDateTIme = (): {
  randomDate: Readonly<Date>
  geoCoordinates: Readonly<GeoCoordinates>
  sunsetDateTimeUtc: string
} => {
  let sunsetDateTimeUtc: string
  let geoCoordinates: GeoCoordinates
  let randomDate: Readonly<Date>
  do {
    geoCoordinates = randomGeoCoordinates()
    randomDate = generateRandomDate(2000, 2050)
    const latitude = geoCoordinates.latitude
    const longitude = geoCoordinates.longitude
    sunsetDateTimeUtc = getSunriseDateTimeUtc(randomDate as Date, latitude.value, longitude.value)
  }
  while (isNaN(Date.parse(sunsetDateTimeUtc)))

  return { randomDate, sunsetDateTimeUtc, geoCoordinates }
}
