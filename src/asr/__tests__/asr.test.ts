import { geoCoordinate, latitude, longitude, Longitude, Latitude } from '../../location'
import { throwOnError } from '../../either'
import { asr } from '../asr'

const standard = 1;
const hanafi = 1;

describe('Asr Standard Method', () => {
  test('returns the correct time for Asr in UTC', () => {
    asrReturnsCorrectDateTimeInUtc(
      new Date(2032, 7, 1),
      throwOnError(latitude(21.3890824)),
      throwOnError(longitude(39.8579118)),
      new Date(Date.UTC(2032, 7, 1, 12, 45, 21, 236)),
      standard)
    asrReturnsCorrectDateTimeInUtc(
      new Date(2009, 11, 26),
      throwOnError(latitude(51.5073509)),
      throwOnError(longitude(-0.127758)),
      new Date(Date.UTC(2009, 11, 26, 13, 40, 3, 478)),
      standard)
    asrReturnsCorrectDateTimeInUtc(
      new Date(2024, 5, 1),
      throwOnError(latitude(56.7266598)),
      throwOnError(longitude(-111.379044)),
      new Date(Date.UTC(2024, 5, 1, 23, 53, 11, 190)),
      standard)
    asrReturnsCorrectDateTimeInUtc(
      new Date(2039, 2, 31),
      throwOnError(latitude(42.81842)),
      throwOnError(longitude(93.515149999)),
      new Date(Date.UTC(2039, 2, 31, 9, 22, 56, 998)),
      standard)
    asrReturnsCorrectDateTimeInUtc(
      new Date(2046, 2, 21),
      throwOnError(latitude(66.027222)),
      throwOnError(longitude(-169.70222)),
      new Date(Date.UTC(2046, 2, 22, 2, 19, 29, 700)),
      standard)
    asrReturnsCorrectDateTimeInUtc(
      new Date(2040, 1, 29),
      throwOnError(latitude(64.7336613)),
      throwOnError(longitude(177.4968265)),
      new Date(Date.UTC(2040, 1, 29, 2, 32, 33, 196)),
      standard)
    asrReturnsCorrectDateTimeInUtc(new Date(2027, 11, 25),
      throwOnError(latitude(-51.6230485)),
      throwOnError(longitude(-69.2168291)),
      new Date(Date.UTC(2027, 11, 25, 20, 59, 32, 738)), 1)
    asrReturnsCorrectDateTimeInUtc(
      new Date(2020, 5, 6),
      throwOnError(latitude(39.0392193)),
      throwOnError(longitude(125.7625241)),
      new Date(Date.UTC(2020, 5, 6, 7, 31, 44, 417)),
      standard)
  })
})

// describe('Asr Hanafi Method', () => {
//   test('returns the correct time for Asr in UTC', () => {
//   })
// })

const asrReturnsCorrectDateTimeInUtc = (date: Date, lat: Latitude, lng: Longitude, expectedDateTimeUtc: Date, shadowLength: 1 | 2) => {
  expect(asr(
    date,
    geoCoordinate(lat, lng),
    shadowLength))
    .toEqual(expectedDateTimeUtc)
}