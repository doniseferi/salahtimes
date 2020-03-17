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
describe('Conventions', () => {
  test('Default (Muslim World League) convention returns the correct fajr date time utc', () => {
    expect(
      fajr(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention()))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 1, 14, 18, 672))))
  })
  test('Muslim World League convention returns the correct fajr date time utc', () => {
    expect(
      fajr(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention()))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 1, 14, 18, 672))))
  })
  test('Egyptian General Authority Of Survey convention returns the correct fajr date time utc', () => {
    expect(
      fajr(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention('EgyptianGeneralAuthorityOfSurvey')))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 1, 6, 33, 422))))
  })
  test('Institute Of Geophysics University Of Tehran Of Survey convention returns the correct ishaa date time utc', () => {
    expect(
      fajr(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention('InstituteOfGeophysicsUniversityOfTehranOfSurvey')))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 1, 15, 51, 54))))
  })
  test('Islamic Society Of North America convention returns the correct ishaa date time utc', () => {
    expect(
      fajr(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention('IslamicSocietyOfNorthAmerica')))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 1, 29, 33, 404))))
  })
  test('Shia Ithna Ashari Leva Research Institute Qum Of Survey convention returns the correct ishaa date time utc', () => {
    expect(
      fajr(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey')))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 1, 24, 30, 659))))
  })
  test('Umm Al Qura University, Mekkah convention returns the correct ishaa date time utc', () => {
    expect(
      fajr(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention('UmmAlQuraUniversityMekkah')))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 1, 11, 44, 218))))
  })
  test('University Of Islamic Sciences, Karachi convention returns the correct ishaa date time utc', () => {
    expect(
      fajr(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention('UniversityOfIslamicSciencesKarachi')))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 1, 14, 18, 672))))
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
