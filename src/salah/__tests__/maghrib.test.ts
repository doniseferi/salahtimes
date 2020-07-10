import { getSunsetDateTimeUtc } from 'suntimes'
import { maghrib } from '../index'
import { randomGeoCoordinates, generateRandomDate, iterativeTest } from '../../testUtils'
import { success, throwOnError } from '../../either'
import { GeoCoordinates, geoCoordinates, latitude, longitude } from '../../geoCoordinates'

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
  test('alerts when the sun is up all day', () =>
    expect(
      maghrib(
        new Date(Date.UTC(2037, 7, 2)),
        geoCoordinates(
          throwOnError(latitude(71.980070)),
          throwOnError(longitude(102.474270)))))
      .toEqual(
        success('The sun is up all day on 2037-08-02T00:00:00.000Z at latitude: 71.98007 and longitude: 102.47427'))
  )
  test('alerts when the sun is down all day', () =>
    expect(
      maghrib(
        new Date(Date.UTC(2032, 0, 1)),
        geoCoordinates(
          throwOnError(latitude(89.5250)),
          throwOnError(longitude(-30.4500)))))
      .toEqual(
        success('The sun is down all day on 2032-01-01T00:00:00.000Z at latitude: 89.525 and longitude: -30.45'))
  )
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
    sunsetDateTimeUtc = getSunsetDateTimeUtc(randomDate as Date, latitude.value, longitude.value)
  }
  while (isNaN(Date.parse(sunsetDateTimeUtc)))

  return { randomDate, sunsetDateTimeUtc, geoCoordinates }
}
