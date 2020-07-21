import { ishaa } from '../index'
import { convention, Convention } from '../../convention'
import { throwOnError } from '../../either'
import { geoCoordinates, latitude, longitude } from '../../geoCoordinates'
import { isDatesCloseEnough } from '../../testUtils'
import {
  getSunsetDateTimeUtcAdapter,
  getSunriseDateTimeUtcAdapter
} from '../../astronomy'
import { HighLatitudeMethod } from '../../highLatitudeMethods'

describe('ishaa', () => {
  test('returns the correct ishaa date time UTC', () => {
    expect(isDatesCloseEnough(
      getIshaaDateTimeUtc(
        new Date(2027, 0, 27),
        34.034012,
        -5.010328,
        convention()),
      new Date(Date.UTC(2027, 0, 27, 19, 5, 40, 344))))
      .toEqual(true)
    expect(isDatesCloseEnough(
      getIshaaDateTimeUtc(
        new Date(2020, 5, 30),
        19.4326077,
        -99.133208,
        convention()),
      new Date(Date.UTC(2020, 6, 1, 2, 37, 7, 940))))
      .toEqual(true)
    expect(isDatesCloseEnough(
      getIshaaDateTimeUtc(
        new Date(2023, 7, 1),
        12.904759,
        80.0890842,
        convention()),
      new Date(Date.UTC(2023, 7, 1, 14, 18, 15, 418))))
      .toEqual(true)
    expect(isDatesCloseEnough(
      getIshaaDateTimeUtc(
        new Date(2026, 0, 1),
        -36.8484597,
        174.7633315,
        convention()),
      new Date(Date.UTC(2026, 0, 1, 9, 27, 18, 641))))
      .toEqual(true)
  })
})
describe('Conventions', () => {
  test('Default (Muslim World League) convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      getIshaaDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention()),
      new Date(Date.UTC(2021, 5, 1, 17, 17, 18, 565))))
      .toEqual(true)
  })
  test('Muslim World League convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      getIshaaDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention()),
      new Date(Date.UTC(2021, 5, 1, 17, 17, 18, 565))))
      .toEqual(true)
  })
  test('Egyptian General Authority Of Survey convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      getIshaaDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('EgyptianGeneralAuthorityOfSurvey')),
      new Date(Date.UTC(2021, 5, 1, 17, 19, 51, 835))))
      .toEqual(true)
  })
  test('Institute Of Geophysics University Of Tehran Of Survey convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      getIshaaDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('InstituteOfGeophysicsUniversityOfTehranOfSurvey')),
      new Date(Date.UTC(2021, 5, 1, 17, 2, 10, 202))))
      .toEqual(true)
  })
  test('Islamic Society Of North America convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      getIshaaDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('IslamicSocietyOfNorthAmerica')),
      new Date(Date.UTC(2021, 5, 1, 17, 7, 10, 955))))
      .toEqual(true)
  })
  test('Shia Ithna Ashari Leva Research Institute Qum Of Survey convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      getIshaaDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey')),
      new Date(Date.UTC(2021, 5, 1, 17, 2, 10, 202))))
      .toEqual(true)
  })
  test('Umm Al Qura University, Mekkah convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      getIshaaDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('UmmAlQuraUniversityMekkah')),
      new Date(Date.UTC(2021, 5, 1, 17, 46, 0, 105))))
      .toEqual(true)
  })
  test('University Of Islamic Sciences, Karachi convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      getIshaaDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('UniversityOfIslamicSciencesKarachi')),
      new Date(Date.UTC(2021, 5, 1, 17, 22, 25, 687))))
      .toEqual(true)
  })
})

describe('High Latitude Location', () => {
  const longyearbyen = geoCoordinates(throwOnError(latitude(78.2232)), throwOnError(longitude(15.6267)))
  const date = new Date(2031, 7, 31)
  const sunrise = new Date(
    throwOnError(
      getSunriseDateTimeUtcAdapter(date.addDays(1), longyearbyen)))
  const sunset = new Date(
    throwOnError(
      getSunsetDateTimeUtcAdapter(date, longyearbyen)))
  const ishaaConvention = convention()
  const ishaaAngle = ishaaConvention.ishaa
  const millisecondsBetweenSunriseAndSunset = sunrise.getTime() - sunset.getTime()

  test('Angle based method', () => {
    const percentagesSpanToBeSplit = ((ishaaAngle.value * -1) / 60) * 100
    const spanToBeAdded = (millisecondsBetweenSunriseAndSunset / 100) * percentagesSpanToBeSplit
    const expected = new Date(sunset.getTime() + spanToBeAdded)
    const actual = getIshaaDateTimeUtc(
      date,
      longyearbyen.getValue('latitude'),
      longyearbyen.getValue('longitude'),
      ishaaConvention)
    expect(actual).toEqual(expected)
  })

  test('Middle of the night method', () => {
    const spanToBeAdded = millisecondsBetweenSunriseAndSunset / 4
    const expected = new Date(sunset.getTime() + spanToBeAdded)
    const actual = getIshaaDateTimeUtc(
      date,
      longyearbyen.getValue('latitude'),
      longyearbyen.getValue('longitude'),
      ishaaConvention,
      'MiddleOfTheNightMethod')
    expect(actual).toEqual(expected)
  })

  test('One seventh method', () => {
    const spanToBeAdded = millisecondsBetweenSunriseAndSunset / 7
    const expected = new Date(sunset.getTime() + spanToBeAdded)
    expect(
      isDatesCloseEnough(getIshaaDateTimeUtc(
        date,
        longyearbyen.getValue('latitude'),
        longyearbyen.getValue('longitude'),
        ishaaConvention,
        'OneSeventhMethod'), expected)).toBe(true)
  })
})

const getIshaaDateTimeUtc =
  (date: Date,
    lat: number,
    lng: number,
    ishaaConvention: Convention,
    highLatitudeMethod: HighLatitudeMethod = 'AngleBasedMethod'):
  Date =>
    new Date(throwOnError(
      ishaa(
        date,
        geoCoordinates(
          throwOnError(latitude(lat)),
          throwOnError(longitude(lng))),
        ishaaConvention,
        highLatitudeMethod)))
