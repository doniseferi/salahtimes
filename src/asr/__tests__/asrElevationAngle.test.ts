import { AngularDegrees, angularDegreesToRadiansNumericConversion } from '../../maths'
import { asrElevationAngle } from '../asrElevationAngle'
import { throwOnError } from '../../either'
import {
  randomDegree,
  generateRandomWholeNumber,
  iterativeTest,
  closeEnough
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
      latitudeInRadians: Readonly<AngularDegrees>
      declinationOfTheSun: Readonly<AngularDegrees>
    }, void>({
      numberOfExecutions: 500,
      generateInput: () => {
        return {
          shadowLength: generateRandomWholeNumber(1, 2) as 1 | 2,
          latitudeInRadians: randomDegree(-180, 180),
          declinationOfTheSun: randomDegree(23.439942762529427, 23.439942762529427)
        }
      },
      assert: (input) => {
        const value = input.shadowLength + Math.tan(
          (Math.abs(angularDegreesToRadiansNumericConversion(input.latitudeInRadians.value) - angularDegreesToRadiansNumericConversion(input.declinationOfTheSun.value))))
        const expected = Math.atan(1 / value)
        const actual = angularDegreesToRadiansNumericConversion(throwOnError(asrElevationAngle(input.shadowLength, input.latitudeInRadians, input.declinationOfTheSun)).value)
        expect(closeEnough(actual, expected)).toEqual(true)
      }
    })
  })
})
