import { iterativeTest, generateRandomDate, randomLongitude } from '../../testUtils'
import { Longitude } from '../../geoCoordinates'
import { dhuhr } from '..'
import { success } from '../../either'
import { getNoonDateTimeUtc } from 'suntimes'

describe('Dhuhr', () => {
  test('returns the midday date time value', () => {
    iterativeTest<{
      date: Date
      longitude: Readonly<Longitude>
      middayDateTimeUtc: string
    }, void>({
      numberOfExecutions: 500,
      generateInput: () => {
        const { randomDate, midddayDateTimeUtc: middayDateTimeUtc, longitude: geoCoordinates } = getExpectedDateTIme()
        return {
          date: new Date(randomDate.getTime()),
          middayDateTimeUtc,
          longitude: geoCoordinates
        }
      },
      assert: ({ date, longitude, middayDateTimeUtc }) => {
        const getDhuhrDateTimeUtc = dhuhr(date, longitude)
        expect(getDhuhrDateTimeUtc).toEqual(success(middayDateTimeUtc))
      }
    })
  })
})

const getExpectedDateTIme = (): {
  randomDate: Readonly<Date>
  longitude: Readonly<Longitude>
  midddayDateTimeUtc: string
} => {
  let middayDateTimeUtc: string
  let longitude: Longitude
  let randomDate: Readonly<Date>
  do {
    longitude = randomLongitude()
    randomDate = generateRandomDate(2000, 2050)
    middayDateTimeUtc = getNoonDateTimeUtc(randomDate as Date, longitude.value)
  }
  while (isNaN(Date.parse(middayDateTimeUtc)))

  return { randomDate, midddayDateTimeUtc: middayDateTimeUtc, longitude }
}
