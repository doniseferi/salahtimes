import { AngularDegrees, angularDegreesToRadiansNumericConversion, radiansToAngularDegrees } from '../../maths'
import asrElevationAngle from '../index'
import { throwOnError } from '../../either'
import {
  randomDegree,
  generateRandomWholeNumber,
  iterativeTest,
  closeEnough,
  generateRandomNumber
} from '../../testUtils'

describe('Asr Elevation Angles preconditions', () => {
  test('Accepts only value of 1 or 2 for shadow length ', () => {
    expect(() =>
      throwOnError(asrElevationAngle(
        null as unknown as 1 | 2,
        randomDegree(-180, 180),
        randomDegree(-23.5, 23.5))))
      .toThrow()
  })
  test('returns an error when the angular degrees for latitude is null', () => {
    expect(() =>
      throwOnError(
        asrElevationAngle(
          generateRandomWholeNumber(1, 2) as 1 | 2,
          null as unknown as AngularDegrees,
          randomDegree(-23.49, 23.49))))
      .toThrow()
  })
  test('returns an error when the angular degrees for the declination of the sun is null', () => {
    expect(() =>
      throwOnError(
        asrElevationAngle(
          generateRandomWholeNumber(1, 2) as 1 | 2,
          randomDegree(-180, 180),
          null as unknown as AngularDegrees)))
      .toThrow()
  })
  test('returns the inverse cotangent for angular degrees', () => {
    iterativeTest<{
      shadowLength: 1 | 2
      latitude: Readonly<AngularDegrees>
      declinationOfTheSun: Readonly<AngularDegrees>
      declinationOfTheSunInRadians: number
      latitudeInRadians: number
    }, void>({
      numberOfExecutions: 500,
      generateInput: () => {
        const latitudeInRadians = angularDegreesToRadiansNumericConversion(generateRandomNumber(-180, 180))
        const declinationOfTheSunInRadians = angularDegreesToRadiansNumericConversion(generateRandomNumber(23.439942762529427, 23.439942762529427))
        const shadowLength = generateRandomWholeNumber(1, 2) as 1 | 2
        return {
          latitudeInRadians,
          latitude: throwOnError(radiansToAngularDegrees(latitudeInRadians)),
          declinationOfTheSunInRadians,
          declinationOfTheSun: throwOnError(radiansToAngularDegrees(declinationOfTheSunInRadians)),
          shadowLength
        }
      },
      assert: ({ shadowLength, latitude, latitudeInRadians, declinationOfTheSunInRadians, declinationOfTheSun }) => {
        const asrElevationAlgorithm = Math.atan(1 / (shadowLength + Math.tan(Math.abs(latitudeInRadians - declinationOfTheSunInRadians))))
        const actual = angularDegreesToRadiansNumericConversion(throwOnError(asrElevationAngle(shadowLength, latitude, declinationOfTheSun)).value)
        expect(
          closeEnough(actual, asrElevationAlgorithm))
          .toEqual(true)
      }
    })
  })
})
