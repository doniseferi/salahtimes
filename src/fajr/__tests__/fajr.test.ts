import fajr from '../'
import { convention } from '../../convention'
import { geoCoordinate, latitude, longitude } from '../../location'
import { throwOnError } from '../../either'

describe('Fajr', () => {
  test('returns the correct fajr date time', () => {
    const result = fajr(
      new Date(2029, 6, 1),
      geoCoordinate(throwOnError(latitude(51.5073509)), throwOnError(longitude(-0.1277583))), convention())
    expect(result).toEqual(new Date(
      Date.UTC(2029, 6, 1, 2, 50, 0)
    ))
  })
})
