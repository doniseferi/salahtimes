import { geoCoordinate, latitude, longitude, Longitude, Latitude } from '../../location'
import { throwOnError } from '../../either'
import { asr, madhhab } from '../../asr'
import { AsrJursiticMethod } from '../madhhab'

const standard = throwOnError(madhhab('standard'))
const hanafi = throwOnError(madhhab('hanafi'))

describe('Asr Standard Method', () => {
  test('returns the correct time for Asr in UTC', () => {
    expect(
      getAsrDateTimeUtc(
        new Date(2032, 7, 1),
        throwOnError(latitude(21.3890824)),
        throwOnError(longitude(39.8579118)),
        standard))
      .toEqual(
        new Date(
          Date.UTC(2032, 7, 1, 12, 45, 21, 236)))
    expect(
      getAsrDateTimeUtc(
        new Date(2009, 11, 26),
        throwOnError(latitude(51.5073509)),
        throwOnError(longitude(-0.127758)),
        standard))
      .toEqual(
        new Date(
          Date.UTC(2009, 11, 26, 13, 40, 3, 478)))
    expect(
      getAsrDateTimeUtc(
        new Date(2024, 5, 1),
        throwOnError(latitude(56.7266598)),
        throwOnError(longitude(-111.379044)),
        standard))
      .toEqual(
        new Date(
          Date.UTC(2024, 5, 1, 23, 53, 11, 190)))
    expect(
      getAsrDateTimeUtc(
        new Date(2039, 2, 31),
        throwOnError(latitude(42.81842)),
        throwOnError(longitude(93.515149999)),
        standard))
      .toEqual(
        new Date(
          Date.UTC(2039, 2, 31, 9, 22, 56, 998)))
    expect(
      getAsrDateTimeUtc(
        new Date(2046, 2, 21),
        throwOnError(latitude(66.027222)),
        throwOnError(longitude(-169.70222)),
        standard))
      .toEqual(
        new Date(
          Date.UTC(2046, 2, 22, 2, 19, 29, 700)))
    expect(
      getAsrDateTimeUtc(
        new Date(2040, 1, 29),
        throwOnError(latitude(64.7336613)),
        throwOnError(longitude(177.4968265)),
        standard))
      .toEqual(
        new Date(
          Date.UTC(2040, 1, 29, 2, 32, 33, 196)))
    expect(
      getAsrDateTimeUtc(new Date(2027, 11, 25),
        throwOnError(latitude(-51.6230485)),
        throwOnError(longitude(-69.2168291)),
        standard))
      .toEqual(
        new Date(
          Date.UTC(2027, 11, 25, 20, 59, 32, 738)))
    expect(
      getAsrDateTimeUtc(
        new Date(2020, 5, 6),
        throwOnError(latitude(39.0392193)),
        throwOnError(longitude(125.7625241)),
        standard))
      .toEqual(
        new Date(
          Date.UTC(2020, 5, 6, 7, 31, 44, 417)))
  })
})
describe('Asr Hanafi Method', () => {
  test('returns the correct time for Asr in UTC', () => {
    expect(
      getAsrDateTimeUtc(
        new Date(2020, 4, 9),
        throwOnError(latitude(-54.44999999999999)),
        throwOnError(longitude(-66.5)),
        hanafi))
      .toEqual(
        new Date(
          Date.UTC(2020, 4, 9, 18, 54, 31, 45)))
    expect(
      getAsrDateTimeUtc(
        new Date(2025, 5, 30),
        throwOnError(latitude(35.6803997)),
        throwOnError(longitude(139.7690174)),
        hanafi))
      .toEqual(
        new Date(
          Date.UTC(2025, 5, 30, 7, 48, 36, 87)))
    expect(
      getAsrDateTimeUtc(
        new Date(2037, 1, 21),
        throwOnError(latitude(3.139003)),
        throwOnError(longitude(101.686852)),
        hanafi))
      .toEqual(
        new Date(
          Date.UTC(2037, 1, 21, 9, 46, 17, 737)))
    expect(
      getAsrDateTimeUtc(
        new Date(2026, 4, 5),
        throwOnError(latitude(-33.4488897)),
        throwOnError(longitude(-70.6692655)),
        hanafi))
      .toEqual(
        new Date(
          Date.UTC(2026, 4, 5, 20, 22, 1, 116)))
    expect(
      getAsrDateTimeUtc(
        new Date(2010, 7, 1),
        throwOnError(latitude(-29.310591)),
        throwOnError(longitude(27.477820)),
        hanafi))
      .toEqual(
        new Date(
          Date.UTC(2010, 7, 1, 14, 1, 6, 400)))
    expect(
      getAsrDateTimeUtc(
        new Date(2020, 2, 14),
        throwOnError(latitude(34.056301)),
        throwOnError(longitude(-5.261721)),
        hanafi))
      .toEqual(
        new Date(
          Date.UTC(2020, 2, 14, 16, 44, 49, 515)))
    expect(
      getAsrDateTimeUtc(
        new Date(2023, 6, 31),
        throwOnError(latitude(31.3416217)),
        throwOnError(longitude(74.36607839999999)),
        hanafi))
      .toEqual(
        new Date(
          Date.UTC(2023, 6, 31, 11, 58, 45, 493)))
    expect(
      getAsrDateTimeUtc(
        new Date(2027, 0, 27),
        throwOnError(latitude(41.3275)),
        throwOnError(longitude(19.8187)),
        hanafi))
      .toEqual(
        new Date(
          Date.UTC(2027, 0, 27, 14, 7, 38, 731)))
  })
})

const getAsrDateTimeUtc =
  (date: Date,
    lat: Latitude,
    lng: Longitude,
    madhhab: AsrJursiticMethod): Date =>
    new Date(throwOnError(asr(
      date,
      geoCoordinate(lat, lng),
      madhhab)))
