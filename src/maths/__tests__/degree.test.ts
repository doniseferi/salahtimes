import { iterativeTest, generateRandomNumber } from '../../testUtils'
import { match, matchOrThrow } from '../../either/index'
import { degrees } from '..'

describe('Degrees', () => {
  test('never accept a value greater than 360', () => {
    iterativeTest<number, void>({
      numberOfExecutions: 500,
      generateInput: () => generateRandomNumber(360.1, Number.MAX_SAFE_INTEGER),
      assert: value => expect(() => matchOrThrow(degrees(value))).toThrow(RangeError)
    })
  })
  test('never accept a value less than -360', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomNumber(-360.1, Number.MIN_SAFE_INTEGER),
      assert: value => expect(() => matchOrThrow(degrees(value))).toThrow(RangeError)
    })
  })
  test('contains a degree measurement value within a range of -360 and 360', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomNumber(-360, 360),
      assert: val => {
        const deg = matchOrThrow(degrees(val))
        expect(deg.value).toBeLessThanOrEqual(360)
        expect(deg.value).toBeGreaterThanOrEqual(-360)
      }
    })
  })
  test('returns the same degree measurement value passed in', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomNumber(-360, 360),
      assert:
        value => expect(match(degrees(value), (v) => { throw v }, (v) => v.value)).toEqual(value)
    })
  })
})
