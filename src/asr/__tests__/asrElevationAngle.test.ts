import { degree, Degree } from '../../maths'
import { asrElevationAngle } from '../asrElevationAngle'
import { matchOrThrow } from '../../either'
import { randomDegree, generateRandomWholeNumber, iterativeTest } from '../../testUtils'
import { degreesToRadiansValue } from '../../maths/trigonometry'

describe('Asr Elevation Angles', () => {
  test('throws an error when the angular degrees for shadow length is null', () => {
    expect(() => asrElevationAngle(
      null as unknown as Degree,
      randomDegree(-180, 180),
      randomDegree(-23.5, 23.5))).toThrow()
  })
  test('throws an error when the angular degrees for latitude is null', () => {
    expect(() => asrElevationAngle(
      matchOrThrow(degree(1)),
      null as unknown as Degree,
      randomDegree(-23.49, 23.49))).toThrow()
  })
  test('throws an error when the angular degrees for the declination of the sun is null', () => {
    expect(() => asrElevationAngle(
      matchOrThrow(degree(1)),
      randomDegree(-180, 180),
      null as unknown as Degree)).toThrow()
  })
  test('returns the inverse cotangent for angular degrees', () => {
    iterativeTest<{
      shadowLength: Readonly<Degree>,
      latitude: Readonly<Degree>,
      declinationOfTheSun: Readonly<Degree>
    }, void>({
      numberOfExecutions: 500,
      generateInput: () => {
        return {
          shadowLength: matchOrThrow(degree(generateRandomWholeNumber(1, 2))),
          latitude: randomDegree(-180, 180),
          declinationOfTheSun: randomDegree(-23.49, 23.49)
        }
      },
      assert: (input) => {
        const value = degreesToRadiansValue(input.shadowLength.value + Math.tan(
            degreesToRadiansValue(input.latitude.value - input.declinationOfTheSun.value)))
        const expected = Math.atan(1 / value)
        const actual = degreesToRadiansValue(matchOrThrow(asrElevationAngle(input.shadowLength, input.latitude, input.declinationOfTheSun)).value)
        expect(actual).toEqual(expected)
      }
    })
  })
})