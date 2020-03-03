import { degree } from '../../maths'
import { asrElevationAngle } from '../asrElevationAngle'
import { matchOrThrow } from '../../either'

describe('Asr Elevation Angles', () => {
  test('returns the correct angle for standard (shafi, maliki and hanbali) method', () => {
    const latitude = matchOrThrow(degree(51))
    const declinationOfTheSunOn20200226 = matchOrThrow(degree(-9.094927348779462))

    const standard = matchOrThrow(degree(1))
    const actualAngleForStandardMethod = asrElevationAngle(standard, latitude, declinationOfTheSunOn20200226)
    const expectedAngleForStandardCalculation = 20.059015375480953

    expect(actualAngleForStandardMethod.value).toEqual(expectedAngleForStandardCalculation)
  })
  test('returns the correct angle for hanafi method', () => {
    const latitude = matchOrThrow(degree(51))
    const declinationOfTheSunOn20200226 = matchOrThrow(degree(-9.094927348779462))

    const hanafi = matchOrThrow(degree(2))
    const actualAngleForHanafiMethod = asrElevationAngle(hanafi, latitude, declinationOfTheSunOn20200226)
    const expectedAngleForHanafiCalculation = 14.974533384540926

    expect(actualAngleForHanafiMethod.value).toEqual(expectedAngleForHanafiCalculation)
  })
})
