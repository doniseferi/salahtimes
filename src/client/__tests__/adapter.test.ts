import {
  fajr
  // dhuhr,
  // asr,
  // maghrib,
  // ishaa
} from '../../salah'
import { fajrDateTimeUtc } from '../index'
import {
  generateRandomDate,
  randomGeoCoordinates,
  iterativeTest
} from '../../testUtils/index'
import { GeoCoordinates } from '../../geoCoordinates'

describe('Adapter', () => {
  test('wraps fajr', () => {
    iterativeTest<{
      date: Date
      location: GeoCoordinates
    }, void>({
      numberOfExecutions: 500,
      generateInput: () => {
        const location = randomGeoCoordinates()
        const date = generateRandomDate(2000, 2050) as Date
        return {
          date,
          location
        }
      },
      assert: ({ date, location }) => {
        const latitude = location.getValue('latitude')
        const longitude = location.getValue('longitude')
        try {
          const actual = fajrDateTimeUtc(date, latitude, longitude)
          const expected = fajr(date, location)
          expect(actual).toEqual(expected)
        } catch {}
      }
    })
  })
  test('wraps internal errors and returns meaningful message', () => {
    const actual = fajrDateTimeUtc(new Date('2016-06-05T05:38:29.153Z'), 89.98527584587697, 177.3319593704241)
    expect(actual).toEqual('The sun is up all day on 2016-06-04T05:38:29.153Z at latitude: 89.98527584587697 and longitude: 177.3319593704241')
  })
})
