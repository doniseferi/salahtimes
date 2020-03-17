import ishaa from '../'
import { convention } from '../../convention'
import { geoCoordinate, latitude, longitude } from '../../location'
import { throwOnError, success } from '../../either'

describe('Conventions', () => {
  test('Default (Muslim World League) convention returns the correct ishaa date time utc', () => {
    expect(
      ishaa(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention()))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 17, 17, 18, 565))))
  })
  test('Muslim World League convention returns the correct ishaa date time utc', () => {
    expect(
      ishaa(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention()))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 17, 17, 18, 565))))
  })
  test('Egyptian General Authority Of Survey convention returns the correct ishaa date time utc', () => {
    expect(
      ishaa(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention('EgyptianGeneralAuthorityOfSurvey')))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 17, 19, 51, 835))))
  })
  test('Institute Of Geophysics University Of Tehran Of Survey convention returns the correct ishaa date time utc', () => {
    expect(
      ishaa(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention('InstituteOfGeophysicsUniversityOfTehranOfSurvey')))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 17, 2, 10, 202))))
  })
  test('Islamic Society Of North America convention returns the correct ishaa date time utc', () => {
    expect(
      ishaa(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention('IslamicSocietyOfNorthAmerica')))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 17, 7, 10, 955))))
  })
  test('Shia Ithna Ashari Leva Research Institute Qum Of Survey convention returns the correct ishaa date time utc', () => {
    expect(
      ishaa(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey')))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 17, 2, 10, 202))))
  })
  test('Umm Al Qura University, Mekkah convention returns the correct ishaa date time utc', () => {
    expect(
      ishaa(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention('UmmAlQuraUniversityMekkah')))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 17, 46, 0, 105))))
  })
  test('University Of Islamic Sciences, Karachi convention returns the correct ishaa date time utc', () => {
    expect(
      ishaa(
        new Date(2021, 5, 1),
        geoCoordinate(
          throwOnError(latitude(21.3890824)),
          throwOnError(longitude(39.8579118))),
        convention('UniversityOfIslamicSciencesKarachi')))
      .toEqual(success(new Date(Date.UTC(2021, 5, 1, 17, 22, 25, 687))))
  })
})
