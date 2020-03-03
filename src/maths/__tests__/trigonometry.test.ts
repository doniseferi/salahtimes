import { tan } from '..'
import { matchOrThrow } from '../../either'
import { iterativeTest, randomDegree } from '../../testUtils'
import { degreesToRadians } from '../trigonometry'

describe('Tangent', () => {
  test('returns the tangent for angular degrees', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => randomDegree(-360, 360),
      assert: (degrees) => {
        const angleInRadians = matchOrThrow(degreesToRadians(degrees))
        const expected = Math.tan(angleInRadians)
        const actual = tan(degrees)
        expect(actual).toEqual(expected)
      }
    })
  })
})
