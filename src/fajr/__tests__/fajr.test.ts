import fajr from '../'
import { convention, Convention } from '../../convention'
import { geoCoordinate, latitude, longitude } from '../../location'
import { throwOnError, success } from '../../either'
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
        Date.UTC(2020, 5, 30, 10, 38, 14, 403)))
      .toEqual(true)
    expect(
      isFajrDateTimeUtcCloseEnough(
        new Date(2023, 7, 1),
        12.904759,
        80.0890842,
        convention(),
        Date.UTC(2023, 6, 31, 23, 9, 19, 950)))
      .toEqual(true)
    expect(
      isFajrDateTimeUtcCloseEnough(
        new Date(2026, 0, 1),
        -36.8484597,
        174.7633315,
        convention(),
        Date.UTC(2025, 11, 31, 15, 13, 38, 499)))
      .toEqual(true)
    expect(
      fajr(
        new Date(2026, 0, 1),
        geoCoordinate(
          throwOnError(latitude(-36.8484597)),
          throwOnError(longitude(174.7633315))),
        convention()))
      .toEqual(success(new Date(Date.UTC(2025, 11, 31, 15, 13, 38, 499))))
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
