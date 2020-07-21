import {
  fajr,
  dhuhr,
  asr,
  maghrib,
  ishaa
} from '../../salah'
import {
  getFajrDateTimeUtc,
  getDhuhrDateTimeUtc,
  getAsrDateTimeUtc,
  getMaghribDateTimeUtc,
  getIshaaDateTimeUtc
} from '../index'
import {
  generateRandomDate,
  randomGeoCoordinates,
  iterativeTest,
  randomLongitude
} from '../../testUtils/index'
import { GeoCoordinates, Longitude } from '../../geoCoordinates'
import { matchErrorOr, throwOnError } from '../../either'
import { madhab } from '../../madhab'

describe('Adapter', () => {
  test('provides a simple interface for the fajr function of the salah times client', () => {
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
        matchErrorOr(
          fajr(date, location),
          err => expect(getFajrDateTimeUtc(date, latitude, longitude)).toEqual(err.message),
          succ => expect(getFajrDateTimeUtc(date, latitude, longitude)).toEqual(succ))
      }
    })
  })
  test('provides a simple interface for the dhuhr function of the salah times client', () => {
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
        matchErrorOr(
          dhuhr(date, longitude),
          err => expect(getDhuhrDateTimeUtc(date, longitude.value)).toEqual(err.message),
          succ => expect(getDhuhrDateTimeUtc(date, longitude.value)).toEqual(succ))
      }
    })
  })
  test('provides a simple interface for the asr function of the salah times client', () => {
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
        matchErrorOr(
          asr(date, location, throwOnError(madhab())),
          err => expect(getAsrDateTimeUtc(date, latitude, longitude)).toEqual(err.message),
          succ => expect(getAsrDateTimeUtc(date, latitude, longitude)).toEqual(succ))
      }
    })
  })
  test('provides a simple interface for the maghrib function of the salah times client', () => {
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
        matchErrorOr(
          maghrib(date, location),
          err => expect(getMaghribDateTimeUtc(date, latitude, longitude)).toEqual(err.message),
          succ => expect(getMaghribDateTimeUtc(date, latitude, longitude)).toEqual(succ))
      }
    })
  })
  test('provides a simple interface for the ishaa function of the salah times client', () => {
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
        matchErrorOr(
          ishaa(date, location),
          err => expect(getIshaaDateTimeUtc(date, latitude, longitude)).toEqual(err.message),
          succ => expect(getIshaaDateTimeUtc(date, latitude, longitude)).toEqual(succ))
      }
    })
  })
  test('wraps internal errors and returns meaningful message', () => {
    const actual = getFajrDateTimeUtc(new Date('2016-06-05T05:38:29.153Z'), 89.98527584587697, 177.3319593704241)
    expect(actual).toEqual('The sun is up all day on 2016-06-04T05:38:29.153Z at latitude: 89.98527584587697 and longitude: 177.3319593704241')
  })
})
