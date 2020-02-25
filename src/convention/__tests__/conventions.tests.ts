import { degree } from '../../maths'
import { convention } from '..'

describe('Conventions', () => {
  test('returns a default convention when no value is passed in', () => {
    expect(convention().fajr()).toEqual(degree(18))
    expect(convention().isha()).toEqual(degree(17))
  })
  test('Muslim World League returns 18 degrees for Fajr', () => {
    expect(convention('MuslimWorldLeague').fajr()).toEqual(degree(18))
  })
  test('Muslim World League returns 17 degrees for Isha', () => {
    expect(convention('MuslimWorldLeague').isha()).toEqual(degree(17))
  })
  test('Islamic Society of North America (ISNA) returns 15 degrees for Fajr', () => {
    expect(convention('IslamicSocietyOfNorthAmerica').fajr()).toEqual(degree(15))
  })
  test('Islamic Society of North America (ISNA) returns 15 degrees for Isha', () => {
    expect(convention('IslamicSocietyOfNorthAmerica').isha()).toEqual(degree(15))
  })
  test('Egyptian General Authority of Survey returns 19.5 degrees for Fajr', () => {
    expect(convention('EgyptianGeneralAuthorityOfSurvey').fajr()).toEqual(degree(19.5))
  })
  test('Egyptian General Authority of Survey returns 17.5 degrees for Isha', () => {
    expect(convention('EgyptianGeneralAuthorityOfSurvey').isha()).toEqual(degree(17.5))
  })
  test('Umm al-Qura University, Makkah returns 18.5 degrees for Fajr', () => {
    expect(convention('UmmAlQuraUniversityMekkah').fajr()).toEqual(degree(18.5))
  })
  test('Umm al-Qura University, Makkah returns 90 minutes (22.5 degrees) after maghrib 120 minutes after maghrib (during Ramadan) (30 degrees) for Isha', () => {
    expect(convention('UmmAlQuraUniversityMekkah').isha()).toEqual(degree(22.5))
  })
  test('University of Islamic Sciences, Karachi returns 18 degrees for Fajr', () => {
    expect(convention('UniversityOfIslamicSciencesKarachi').fajr()).toEqual(degree(18))
  })
  test('University of Islamic Sciences, Karachi returns 18 degrees for Isha', () => {
    expect(convention('UniversityOfIslamicSciencesKarachi').isha()).toEqual(degree(18))
  })
  test('Institute of Geophysics, University of Tehran of Survey returns 17.7 degrees for Fajr', () => {
    expect(convention('InstituteOfGeophysicsUniversityOfTehranOfSurvey').fajr()).toEqual(degree(17.7))
  })
  test('Institute of Geophysics, University of Tehran of Survey returns 14 degrees for Isha', () => {
    expect(convention('InstituteOfGeophysicsUniversityOfTehranOfSurvey').isha()).toEqual(degree(14))
  })
  test('Shia Ithna Ashari, Leva Research Institute, Qum of Survey returns 16 degrees for Fajr', () => {
    expect(convention('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey').fajr()).toEqual(degree(16))
  })
  test('Shia Ithna Ashari, Leva Research Institute, Qum of Survey returns 14 degrees for Isha', () => {
    expect(convention('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey').isha()).toEqual(degree(14))
  })
})
