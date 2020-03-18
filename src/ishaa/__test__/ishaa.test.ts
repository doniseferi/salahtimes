import ishaa from '../'
import { convention, Convention } from '../../convention'
import { geoCoordinate, latitude, longitude } from '../../location'
import { throwOnError } from '../../either'
import { closeEnough } from '../../testUtils'

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
    expectedDateUtc: number):
  boolean =>
    closeEnough(
      new Date(throwOnError(
        ishaa(
          date,
          geoCoordinate(
            throwOnError(latitude(lat)),
            throwOnError(longitude(lng))),
          ishaaConvention)))
        .getTime(),
      expectedDateUtc)
