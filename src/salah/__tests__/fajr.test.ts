import { fajr } from '../index'
import { convention, Convention } from '../../convention'
import { throwOnError } from '../../either'
import { geoCoordinates, latitude, longitude } from '../../geoCoordinates'
import { isDatesCloseEnough } from '../../testUtils'
import {
  getSunsetDateTimeUtcAdapter,
  getSunriseDateTimeUtcAdapter
} from '../../astronomy'
import { HighLatitudeMethod } from '../../highLatitudeMethods'

describe('Fajr', () => {
  test('returns the correct fajr date time UTC', () => {
    expect(isDatesCloseEnough(
      fajrDateTimeUtc(
        new Date(2027, 0, 27),
        34.0181246,
        -5.0078451,
        convention()),
      new Date(Date.UTC(2027, 0, 27, 5, 54, 36, 569))))
      .toEqual(true)
    expect(isDatesCloseEnough(
      fajrDateTimeUtc(
        new Date(2020, 5, 30),
        19.4326077,
        -99.133208,
        convention()),
      new Date(Date.UTC(2020, 5, 30, 10, 38, 14, 403))))
      .toEqual(true)
    expect(isDatesCloseEnough(
      fajrDateTimeUtc(
        new Date(2023, 7, 1),
        12.904759,
        80.0890842,
        convention()),
      new Date(Date.UTC(2023, 6, 31, 23, 9, 19, 950))))
      .toEqual(true)
    expect(isDatesCloseEnough(
      fajrDateTimeUtc(
        new Date(2026, 0, 1),
        -36.8484597,
        174.7633315,
        convention()),
      new Date(Date.UTC(2025, 11, 31, 15, 13, 38, 499))))
      .toEqual(true)
  })
})

describe('Conventions', () => {
  test('Default (Muslim World League) convention returns the correct fajr date time utc', () => {
    expect(isDatesCloseEnough(
      fajrDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention()),
      new Date(Date.UTC(2021, 5, 1, 1, 14, 18, 672))))
      .toEqual(true)
  })
  test('Muslim World League convention returns the correct fajr date time utc', () => {
    expect(isDatesCloseEnough(
      fajrDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention()),
      new Date(Date.UTC(2021, 5, 1, 1, 14, 18, 672))))
      .toEqual(true)
  })
  test('Egyptian General Authority Of Survey convention returns the correct fajr date time utc', () => {
    expect(isDatesCloseEnough(
      fajrDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('EgyptianGeneralAuthorityOfSurvey')),
      new Date(Date.UTC(2021, 5, 1, 1, 6, 33, 422))))
      .toEqual(true)
  })
  test('Institute Of Geophysics University Of Tehran Of Survey convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      fajrDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('InstituteOfGeophysicsUniversityOfTehranOfSurvey')),
      new Date(Date.UTC(2021, 5, 1, 1, 15, 51, 54))))
      .toEqual(true)
  })
  test('Islamic Society Of North America convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      fajrDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('IslamicSocietyOfNorthAmerica')),
      new Date(Date.UTC(2021, 5, 1, 1, 29, 33, 404))))
      .toEqual(true)
  })
  test('Shia Ithna Ashari Leva Research Institute Qum Of Survey convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      fajrDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('ShiaIthnaAshariLevaResearchInstituteQumOfSurvey')),
      new Date(Date.UTC(2021, 5, 1, 1, 24, 30, 659))))
      .toEqual(true)
  })
  test('Umm Al Qura University, Mekkah convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      fajrDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('UmmAlQuraUniversityMekkah')),
      new Date(Date.UTC(2021, 5, 1, 1, 11, 44, 218))))
      .toEqual(true)
  })
  test('University Of Islamic Sciences, Karachi convention returns the correct ishaa date time utc', () => {
    expect(isDatesCloseEnough(
      fajrDateTimeUtc(
        new Date(2021, 5, 1),
        21.3890824,
        39.8579118,
        convention('UniversityOfIslamicSciencesKarachi')),
      new Date(Date.UTC(2021, 5, 1, 1, 14, 18, 672))))
      .toEqual(true)
  })
})
describe('High Latitude Location', () => {
  const remOneDay = (date: Date): Date => {
    var _date = new Date(date.valueOf())
    _date.setDate(date.getDate() - 1)
    return _date
  }
  const longyearbyen = geoCoordinates(throwOnError(latitude(78.2232)), throwOnError(longitude(15.6267)))
  const date = new Date(2031, 7, 31)
  const sunrise = new Date(
    throwOnError(
      getSunriseDateTimeUtcAdapter(date, longyearbyen)))
  const sunset = new Date(
    throwOnError(
      getSunsetDateTimeUtcAdapter(remOneDay(date), longyearbyen)))
  const fajrConvention = convention()
  const fajrAngle = fajrConvention.fajr

  test('Angle based method', () => {
    const millisecondsBetweenSunsetAndSunrise = sunrise.getTime() - sunset.getTime()
    const percentagesSpanToBeSplit = ((fajrAngle.value * -1) / 60) * 100
    const spanToBeSubtracted = (millisecondsBetweenSunsetAndSunrise / 100) * percentagesSpanToBeSplit
    const expected = new Date(sunrise.getTime() - spanToBeSubtracted)
    const actual = fajrDateTimeUtc(
      date,
      longyearbyen.getValue('latitude'),
      longyearbyen.getValue('longitude'),
      fajrConvention)
    expect(actual).toEqual(expected)
  })

  test('Middle of the night method', () => {
    const millisecondsBetweenSunsetAndSunrise = sunrise.getTime() - sunset.getTime()
    const spanToBeSubtracted = millisecondsBetweenSunsetAndSunrise / 4
    const expected = new Date(sunrise.getTime() - spanToBeSubtracted)
    const actual = fajrDateTimeUtc(
      date,
      longyearbyen.getValue('latitude'),
      longyearbyen.getValue('longitude'),
      fajrConvention,
      'MiddleOfTheNightMethod')
    expect(actual).toEqual(expected)
  })

  test('One seventh method', () => {
    const millisecondsBetweenSunsetAndSunrise = sunrise.getTime() - sunset.getTime()
    const spanToBeSubtracted = millisecondsBetweenSunsetAndSunrise / 7
    const expected = new Date(sunrise.getTime() - spanToBeSubtracted)
    expect(
      isDatesCloseEnough(fajrDateTimeUtc(
        date,
        longyearbyen.getValue('latitude'),
        longyearbyen.getValue('longitude'),
        fajrConvention,
        'OneSeventhMethod'), expected)).toBe(true)
  })
})

const fajrDateTimeUtc =
  (date: Date,
    lat: number,
    lng: number,
    fajrConvention: Convention,
    highLatitudeMethod: HighLatitudeMethod = 'AngleBasedMethod'):
  Date =>
    new Date(throwOnError(
      fajr(
        date,
        geoCoordinates(
          throwOnError(latitude(lat)),
          throwOnError(longitude(lng))),
        fajrConvention,
        highLatitudeMethod)))
