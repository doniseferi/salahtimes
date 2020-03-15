import { degrees } from '../../maths'
import { convention } from '..'

describe('Conventions', () => {
  test('returns a default convention when no value is passed in', () => {
    expect(convention().fajr).toEqual(degrees(18))
    expect(convention().isha).toEqual(degrees(17))
  })
  test('Muslim World League returns 18 degrees for Fajr', () => {
    expect(
      convention('MuslimWorldLeague')
        .fajr)
      .toEqual(degrees(18))
    expect(
      convention('MuslimWorldLeague')
        .name)
      .toEqual('MuslimWorldLeague')
  })
  test('Muslim World League returns 17 degrees for Isha', () => {
    expect(
      convention('MuslimWorldLeague')
        .isha)
      .toEqual(degrees(17))
    expect(
      convention('MuslimWorldLeague')
        .name)
      .toEqual('MuslimWorldLeague')
  })
  test('Islamic Society of North America (ISNA) returns 15 degrees for Fajr', () => {
    expect(
      convention('IslamicSocietyOfNorthAmerica')
        .fajr)
      .toEqual(degrees(15))
    expect(
      convention('IslamicSocietyOfNorthAmerica')
        .name)
      .toEqual('IslamicSocietyOfNorthAmerica')
  })
  test('Islamic Society of North America (ISNA) returns 15 degrees for Isha', () => {
    expect(
      convention('IslamicSocietyOfNorthAmerica')
        .isha)
      .toEqual(degrees(15))
    expect(
      convention('IslamicSocietyOfNorthAmerica')
        .name)
      .toEqual('IslamicSocietyOfNorthAmerica')
  })
  test('Egyptian General Authority of Survey returns 19.5 degrees for Fajr', () => {
    expect(
      convention('EgyptianGeneralAuthorityOfSurvey')
        .fajr)
      .toEqual(degrees(19.5))
    expect(
      convention('EgyptianGeneralAuthorityOfSurvey')
        .name)
      .toEqual('EgyptianGeneralAuthorityOfSurvey')
  })
  test('Egyptian General Authority of Survey returns 17.5 degrees for Isha', () => {
    expect(
      convention('EgyptianGeneralAuthorityOfSurvey')
        .isha)
      .toEqual(degrees(17.5))
    expect(
      convention('EgyptianGeneralAuthorityOfSurvey')
        .name)
      .toEqual('EgyptianGeneralAuthorityOfSurvey')
  })
  test('Umm al-Qura University, Makkah returns 18.5 degrees for Fajr', () => {
    expect(
      convention('UmmAlQuraUniversityMekkah')
        .fajr)
      .toEqual(degrees(18.5))
    expect(
      convention('UmmAlQuraUniversityMekkah')
        .name)
      .toEqual('UmmAlQuraUniversityMekkah')
  })
  test('Umm al-Qura University, Makkah returns 90 minutes (22.5 degrees) after maghrib 120 minutes after maghrib (during Ramadan) (30 degrees) for Isha', () => {
    expect(
      convention('UmmAlQuraUniversityMekkah')
        .isha)
      .toEqual(degrees(22.5))
    expect(
      convention('UmmAlQuraUniversityMekkah')
        .name)
      .toEqual('UmmAlQuraUniversityMekkah')
  })
  test('University of Islamic Sciences, Karachi returns 18 degrees for Fajr', () => {
    expect(
      convention('UniversityOfIslamicSciencesKarachi')
        .fajr)
      .toEqual(degrees(18))
    expect(
      convention('UniversityOfIslamicSciencesKarachi')
        .name)
      .toEqual('UniversityOfIslamicSciencesKarachi')
  })
  test('University of Islamic Sciences, Karachi returns 18 degrees for Isha', () => {
    expect(
      convention('UniversityOfIslamicSciencesKarachi')
        .isha)
      .toEqual(degrees(18))
    expect(
      convention('UniversityOfIslamicSciencesKarachi')
        .name)
      .toEqual('UniversityOfIslamicSciencesKarachi')
  })
  test('Institute of Geophysics, University of Tehran of Survey returns 17.7 degrees for Fajr', () => {
    expect(
      convention('InstituteOfGeophysicsUniversityOfTehranOfSurvey')
        .fajr)
      .toEqual(degrees(17.7))
    expect(
      convention('InstituteOfGeophysicsUniversityOfTehranOfSurvey')
        .name)
      .toEqual('InstituteOfGeophysicsUniversityOfTehranOfSurvey')
  })
  test('Institute of Geophysics, University of Tehran of Survey returns 14 degrees for Isha', () => {
    expect(
      convention('InstituteOfGeophysicsUniversityOfTehranOfSurvey')
        .isha)
      .toEqual(degrees(14))
    expect(
      convention('InstituteOfGeophysicsUniversityOfTehranOfSurvey')
        .name)
      .toEqual('InstituteOfGeophysicsUniversityOfTehranOfSurvey')
  })
  test('Shia Ithna Ashari, Leva Research Institute, Qum of Survey returns 16 degrees for Fajr', () => {
    expect(
      convention('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey')
        .fajr)
      .toEqual(degrees(16))
    expect(
      convention('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey')
        .name)
      .toEqual('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey')
  })
  test('Shia Ithna Ashari, Leva Research Institute, Qum of Survey returns 14 degrees for Isha', () => {
    expect(convention('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey').isha).toEqual(degrees(14))
    expect(
      convention('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey')
        .name)
      .toEqual('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey')
  })
})
