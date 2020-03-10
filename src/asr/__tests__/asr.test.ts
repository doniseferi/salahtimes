import { geoCoordinate, latitude, longitude } from '../../location'
import { throwOnError } from '../../either'
import { asr } from '../asr'

describe('Asr Standard Method', () => {
  test('returns the correct time for Asr in UTC', () => {
    expect(asr(
      new Date(2032, 7, 1),
      geoCoordinate(throwOnError(latitude(21.3890824)),
        throwOnError(longitude(39.8579118))))).toEqual(new Date(Date.UTC(2032, 7, 1, 12, 45, 21, 236)))
    expect(asr(
      new Date(2009, 11, 26),
      geoCoordinate(throwOnError(latitude(51.5073509)),
        throwOnError(longitude(-0.1277583))))).toEqual(new Date(Date.UTC(2009, 11, 26, 13, 40, 3, 478)))
    expect(asr(
      new Date(2024, 5, 1),
      geoCoordinate(throwOnError(latitude(56.7266598)),
        throwOnError(longitude(-111.3790441))))).toEqual(new Date(Date.UTC(2024, 5, 1, 23, 53, 11, 190))) // fort mcmurray 6 hrs +
  })
})
