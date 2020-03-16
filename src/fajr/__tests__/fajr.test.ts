import fajr from '../'
import { convention } from '../../convention'
import { geoCoordinate, latitude, longitude } from '../../location'
import { throwOnError, success } from '../../either'

describe('Fajr', () => {
  test('returns the correct fajr date time', () => {
    const result = fajr(
      new Date(2027, 0, 27),
      geoCoordinate(throwOnError(
        latitude(34.0181246)),
      throwOnError(
        longitude(-5.0078451))),
      convention('UniversityOfIslamicSciencesKarachi'))
    expect(result).toEqual(
      success(new Date(
        Date.UTC(2027, 0, 27, 5, 54, 36, 569)
      )))
  })
})
