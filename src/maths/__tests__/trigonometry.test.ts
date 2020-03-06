import { angularDegreesToRadians, arccot, tan, AngularDegrees, radiansToAngularDegrees } from '..'
import { throwOnError, failure } from '../../either'
import { iterativeTest, randomDegree } from '../../testUtils'

describe('Inverse Cotangent', () => {
  test('throws an error when the angular degrees is null', () => {
    expect(
      arccot(null as unknown as number))
      .toEqual(failure(new Error('The angular degrees is null or empty.')))
  })
  test('returns the inverse cotangent for angular degrees', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => randomDegree(-360, 360),
      assert: (degrees) => {
        const expected = Math.atan(1 / degrees.value)
        const expectedInDegrees = radiansToAngularDegrees(expected)
        const actual = arccot(degrees.value)
        expect(actual).toEqual(expectedInDegrees)
      }
    })
  })
})

describe('Tangent', () => {
  test('throws an error when the angular degrees object is null', () => {
    expect(() => tan(null as unknown as AngularDegrees)).toThrow()
  })
  test('returns the tangent for angular degrees', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => randomDegree(-360, 360),
      assert: (degrees) => {
        expect(tan(degrees))
          .toEqual(
            Math.tan(
              throwOnError(angularDegreesToRadians(degrees))))
      }
    })
  })
})
