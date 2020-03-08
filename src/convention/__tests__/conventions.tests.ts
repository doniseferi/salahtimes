import { degrees } from '../../maths'
import { convention, SupportedConventions } from '..'

describe('Conventions', () => {
  test('returns a default convention when no value is passed in', () => {
    expect(convention().fajr()).toEqual(degrees(18))
    expect(convention().isha()).toEqual(degrees(17))
  })
  test('Muslim World League returns 18 degrees for Fajr', () => {
    expect(convention(SupportedConventions.MuslimWorldLeague).fajr()).toEqual(degrees(18))
  })
  test('Muslim World League returns 17 degrees for Isha', () => {
    expect(convention(SupportedConventions.MuslimWorldLeague).isha()).toEqual(degrees(17))
  })
  test('Islamic Society of North America (ISNA) returns 15 degrees for Fajr', () => {
    expect(convention(SupportedConventions.IslamicSocietyOfNorthAmerica).fajr()).toEqual(degrees(15))
  })
  test('Islamic Society of North America (ISNA) returns 15 degrees for Isha', () => {
    expect(convention(SupportedConventions.IslamicSocietyOfNorthAmerica).isha()).toEqual(degrees(15))
  })
  test('Egyptian General Authority of Survey returns 19.5 degrees for Fajr', () => {
    expect(convention(SupportedConventions.EgyptianGeneralAuthorityOfSurvey).fajr()).toEqual(degrees(19.5))
  })
  test('Egyptian General Authority of Survey returns 17.5 degrees for Isha', () => {
    expect(convention(SupportedConventions.EgyptianGeneralAuthorityOfSurvey).isha()).toEqual(degrees(17.5))
  })
  test('Umm al-Qura University, Makkah returns 18.5 degrees for Fajr', () => {
    expect(convention(SupportedConventions.UmmAlQuraUniversity).fajr()).toEqual(degrees(18.5))
  })
  test('Umm al-Qura University, Makkah returns 90 minutes (22.5 degrees) after maghrib 120 minutes after maghrib (during Ramadan) (30 degrees) for Isha', () => {
    expect(convention(SupportedConventions.UmmAlQuraUniversity).isha()).toEqual(degrees(22.5))
  })
  test('University of Islamic Sciences, Karachi returns 18 degrees for Fajr', () => {
    expect(convention(SupportedConventions.UniversityOfIslamicSciences).fajr()).toEqual(degrees(18))
  })
  test('University of Islamic Sciences, Karachi returns 18 degrees for Isha', () => {
    expect(convention(SupportedConventions.UniversityOfIslamicSciences).isha()).toEqual(degrees(18))
  })
  test('Institute of Geophysics, University of Tehran of Survey returns 17.7 degrees for Fajr', () => {
    expect(convention(SupportedConventions.InstituteOfGeophysics).fajr()).toEqual(degrees(17.7))
  })
  test('Institute of Geophysics, University of Tehran of Survey returns 14 degrees for Isha', () => {
    expect(convention(SupportedConventions.InstituteOfGeophysics).isha()).toEqual(degrees(14))
  })
  test('Shia Ithna Ashari, Leva Research Institute, Qum of Survey returns 16 degrees for Fajr', () => {
    expect(convention(SupportedConventions.ShiaIthnaAshari).fajr()).toEqual(degrees(16))
  })
  test('Shia Ithna Ashari, Leva Research Institute, Qum of Survey returns 14 degrees for Isha', () => {
    expect(convention(SupportedConventions.ShiaIthnaAshari).isha()).toEqual(degrees(14))
  })
})
