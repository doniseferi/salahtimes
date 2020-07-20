import {
  fajr,
  dhuhr
  // asr,
  // maghrib,
  // ishaa
} from '../../salah'
import { fajrDateTimeUtc, dhuhrDateTimeUtc } from '../index'
import {
  generateRandomDate,
  randomGeoCoordinates,
  iterativeTest,
  randomLongitude
} from '../../testUtils/index'
import { GeoCoordinates, Longitude } from '../../geoCoordinates'
import { matchErrorOr } from '../../either'

describe('Adapter', () => {
  test('adapts fajr domains complex objects', () => {
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
        matchErrorOr(fajr(date, location), err => expect(fajrDateTimeUtc(date, latitude, longitude)).toEqual(err.message), succ => expect(fajrDateTimeUtc(date, latitude, longitude)).toEqual(succ))
      }
    })
  })
  test('adapts dhuhr domains complex objects', () => {
    iterativeTest<{
      date: Date
      longitude: Longitude
    }, void>({
      numberOfExecutions: 500,
      generateInput: () => {
        const longitude = randomLongitude()
        const date = generateRandomDate(2000, 2050) as Date
        return {
          date,
          longitude
        }
      },
      assert: ({ date, longitude }) => {
        matchErrorOr(dhuhr(date, longitude), err => expect(dhuhrDateTimeUtc(date, longitude.value)).toEqual(err.message),
          succ => expect(dhuhrDateTimeUtc(date, longitude.value)).toEqual(succ))
      }
    })
  })
  test('wraps internal errors and returns meaningful message', () => {
    const actual = fajrDateTimeUtc(new Date('2016-06-05T05:38:29.153Z'), 89.98527584587697, 177.3319593704241)
    expect(actual).toEqual('The sun is up all day on 2016-06-04T05:38:29.153Z at latitude: 89.98527584587697 and longitude: 177.3319593704241')
  })
})
