import fajr from '../'
import { convention, Convention } from '../../convention'
import { geoCoordinate, latitude, longitude } from '../../location'
import { throwOnError } from '../../either'
import { closeEnough } from '../../testUtils'

describe('Fajr', () => {
  test('returns the correct fajr date time UTC', () => {
    expect(
      isFajrDateTimeUtcCloseEnough(
        new Date(2027, 0, 27),
        34.0181246,
        -5.0078451,
        convention(),
        Date.UTC(2027, 0, 27, 5, 54, 36, 569)))
      .toEqual(true)
    expect(
      isFajrDateTimeUtcCloseEnough(
        new Date(2020, 5, 30),
        19.4326077,
        -99.133208,
        convention(),
        Date.UTC(2020, 5, 30, 5, 30, 36, 569)))
      .toEqual(true)
  })
})

const isFajrDateTimeUtcCloseEnough =
  (date: Date,
    lat: number,
    lng: number,
    fajrConvention: Convention,
    expectedDateUtc: number):
  boolean =>
    closeEnough(
      new Date(throwOnError(
        fajr(
          date,
          geoCoordinate(
            throwOnError(latitude(lat)),
            throwOnError(longitude(lng))),
          fajrConvention)))
        .getTime(),
      expectedDateUtc)
