import { degreesToRadians, arccot, tan, Degree } from '..'
import { matchOrThrow } from '../../either'
import { iterativeTest, randomDegree } from '../../testUtils'
import { radiansToDegrees } from '../trigonometry'

describe('Tangent', () => {
  test('throws an error when the angular degrees object is null', () => {
    expect(() => tan(null as unknown as Degree)).toThrow()
  })
  test('returns the tangent for angular degrees', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => randomDegree(-360, 360),
      assert: (degrees) => {
        const angleInRadians = matchOrThrow(degreesToRadians(degrees))
        const expected = Math.tan(angleInRadians)
        const actual = tan(degrees)
        const EPSILON = 0.0001
        const diff = Math.abs(actual - expected)
        const max = Math.max(actual, expected)
        const maxDiff = Math.abs(max * EPSILON)
        const inAcceptableRange = diff <= maxDiff
        console.log({ diff, max, maxDiff })
        expect(inAcceptableRange).toEqual(true)
      }
    })
  })
})

describe('Inverse Cotangent', () => {
  test('throws an error when the angular degrees object is null', () => {
    expect(() => arccot(null as unknown as Degree)).toThrow()
  })
  test('returns the inverse cotangent for angular degrees', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => randomDegree(-360, 360),
      assert: (degrees) => {
        const angleInRadians = matchOrThrow(degreesToRadians(degrees))
        const expected = Math.atan(1 / angleInRadians)
        const expectedInDegrees = radiansToDegrees(expected)
        const actual = arccot(degrees)
        expect(actual).toEqual(expectedInDegrees)
      }
    })
  })
})
