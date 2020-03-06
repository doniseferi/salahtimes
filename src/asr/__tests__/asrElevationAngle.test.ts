import { AngularDegrees, angularDegreesToRadiansNumericConversion } from '../../maths'
import { asrElevationAngle } from '../asrElevationAngle'
import { throwOnError, failure } from '../../either'
import {
  randomDegree,
  generateRandomWholeNumber,
  iterativeTest,
  closeEnough
} from '../../testUtils'

const errorMessage = (param: string): string => `${param} is either null or undefined. To calculate the Asr elevation Angle please provide ${param}`

describe('Asr Elevation Angles preconditions', () => {
  test('Accepts only value of 1 or 2 for shadow length ', () => {
    expect(asrElevationAngle(
      null as unknown as 1 | 2,
      randomDegree(-180, 180),
      randomDegree(-23.5, 23.5)))
      .toEqual(failure(new Error(errorMessage('Shadow Length'))))
  })
  test('returns an error when the angular degrees for latitude is null', () => {
    expect(asrElevationAngle(
      generateRandomWholeNumber(1, 2) as 1 | 2,
      null as unknown as AngularDegrees,
      randomDegree(-23.49, 23.49)))
      .toEqual(failure(new Error(errorMessage('Latitude'))))
  })
  test('returns an error when the angular degrees for the declination of the sun is null', () => {
    expect(asrElevationAngle(
      generateRandomWholeNumber(1, 2) as 1 | 2,
      randomDegree(-180, 180),
      null as unknown as AngularDegrees))
      .toEqual(failure(new Error(errorMessage('Declination of the sun'))))
  })
  test('returns the inverse cotangent for angular degrees', () => {
    iterativeTest<{
      shadowLength: 1 | 2
      latitude: Readonly<AngularDegrees>
      declinationOfTheSun: Readonly<AngularDegrees>
    }, void>({
      numberOfExecutions: 500,
      generateInput: () => {
        return {
          shadowLength: generateRandomWholeNumber(1, 2) as 1 | 2,
          latitude: randomDegree(-180, 180),
          declinationOfTheSun: randomDegree(23.439942762529427, 23.439942762529427)
        }
      },
      assert: (input) => {
        const value = input.shadowLength + Math.tan(
          angularDegreesToRadiansNumericConversion(input.latitude.value - input.declinationOfTheSun.value))
        const expected = Math.atan(1 / value)
        const actual = angularDegreesToRadiansNumericConversion(throwOnError(asrElevationAngle(input.shadowLength, input.latitude, input.declinationOfTheSun)).value)
        expect(closeEnough(actual, expected)).toEqual(true)
      }
    })
  })
})
