import { ishaa } from '../index'
import { convention, Convention } from '../../convention'
import { throwOnError } from '../../either'
import { closeEnough } from '../../testUtils'
import { geoCoordinates, latitude, longitude } from '../../geoCoordinates'
describe('Fajr', () => {
  test('returns the correct fajr date time UTC', () => {
    expect(
      isIshaaDateTimeUtcCloseEnough(
        new Date(2027, 0, 27),
        34.034012,
        -5.010328,
        convention(),
        Date.UTC(2027, 0, 27, 19, 5, 40, 344)))
      .toEqual(true)
    expect(
      isIshaaDateTimeUtcCloseEnough(
        new Date(2020, 5, 30),
        19.4326077,
        -99.133208,
        convention(),
        Date.UTC(2020, 6, 1, 2, 37, 7, 940)))
      .toEqual(true)
    expect(
      isIshaaDateTimeUtcCloseEnough(
        new Date(2023, 7, 1),
        12.904759,
        80.0890842,
        convention(),
        Date.UTC(2023, 7, 1, 14, 18, 15, 418)))
      .toEqual(true)
    expect(
      isIshaaDateTimeUtcCloseEnough(
        new Date(2026, 0, 1),
        -36.8484597,
        174.7633315,
        convention(),
        Date.UTC(2026, 0, 1, 9, 27, 18, 641)))
      .toEqual(true)
  })
})
describe('Conventions', () => {
  test('Default (Muslim World League) convention returns the correct ishaa date time utc', () => {
    expect(
      isIshaaDateTimeUtcCloseEnough(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention(),
        Date.UTC(2021, 5, 1, 17, 17, 18, 565))).toEqual(true)
  })
  test('Muslim World League convention returns the correct ishaa date time utc', () => {
    expect(
      isIshaaDateTimeUtcCloseEnough(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention(),
        Date.UTC(2021, 5, 1, 17, 17, 18, 565))).toEqual(true)
  })
  test('Egyptian General Authority Of Survey convention returns the correct ishaa date time utc', () => {
    expect(
      isIshaaDateTimeUtcCloseEnough(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('EgyptianGeneralAuthorityOfSurvey'),
        Date.UTC(2021, 5, 1, 17, 19, 51, 835))).toEqual(true)
  })
  test('Institute Of Geophysics University Of Tehran Of Survey convention returns the correct ishaa date time utc', () => {
    expect(
      isIshaaDateTimeUtcCloseEnough(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('InstituteOfGeophysicsUniversityOfTehranOfSurvey'),
        Date.UTC(2021, 5, 1, 17, 2, 10, 202))).toEqual(true)
  })
  test('Islamic Society Of North America convention returns the correct ishaa date time utc', () => {
    expect(
      isIshaaDateTimeUtcCloseEnough(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('IslamicSocietyOfNorthAmerica'),
        Date.UTC(2021, 5, 1, 17, 7, 10, 955))).toEqual(true)
  })
  test('Shia Ithna Ashari Leva Research Institute Qum Of Survey convention returns the correct ishaa date time utc', () => {
    expect(
      isIshaaDateTimeUtcCloseEnough(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey'),
        Date.UTC(2021, 5, 1, 17, 2, 10, 202))).toEqual(true)
  })
  test('Umm Al Qura University, Mekkah convention returns the correct ishaa date time utc', () => {
    expect(
      isIshaaDateTimeUtcCloseEnough(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('UmmAlQuraUniversityMekkah'),
        Date.UTC(2021, 5, 1, 17, 46, 0, 105))).toEqual(true)
  })
  test('University Of Islamic Sciences, Karachi convention returns the correct ishaa date time utc', () => {
    expect(
      isIshaaDateTimeUtcCloseEnough(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('UniversityOfIslamicSciencesKarachi'),
        Date.UTC(2021, 5, 1, 17, 22, 25, 687))).toEqual(true)
  })
})

const isIshaaDateTimeUtcCloseEnough =
  (date: Date,
    lat: number,
    lng: number,
    ishaaConvention: Convention,
    expectedDateUtc: number): boolean =>
    closeEnough(
      new Date(throwOnError(
        ishaa(
          date,
          geoCoordinates(
            throwOnError(latitude(lat)),
            throwOnError(longitude(lng))),
          ishaaConvention)))
        .getTime(),
      expectedDateUtc)
