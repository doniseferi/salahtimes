import { arccot, tan, degree, Degree } from '..'
import { matchOrThrow } from '../../either'
import { iterativeTest, generateRandomNumber } from '../../testUtils'

describe('Inverse Cotangent', () => {
  test('arccot 0 equals 90 degrees', () => {
    iterativeTest<Degree, void>({
      generateInput: () => matchOrThrow(degree(generateRandomNumber(-360, 360))),
      numberOfExecutions: 500,
      assert: (degrees) => {
        const resultInRadians = Math.PI / 2 - Math.atan(degrees.value)
        const expectedInDegrees = resultInRadians * (180 / Math.PI)
        expect(matchOrThrow(arccot(degrees)).value).toEqual(expectedInDegrees)
      }
    })
  })
  test('arccot 1 degrees equals 89 degrees', () => {
    expect(arccot(matchOrThrow(degree(1)))).toEqual(matchOrThrow(degree(89)))
  })
  test('arccot 2 equals 26.565 degrees', () => {
    expect(
      arccot(
        matchOrThrow(
          degree(2))))
      .toEqual(
        matchOrThrow(
          degree(26.565051177077994)))
  })
  test('tan 0 returns 0 degrees', () => {
    expect(
      tan(
        matchOrThrow(
          degree(0))))
      .toEqual(0);
  })
  test('tan 0 returns 0 degrees', () => {
    expect(tan(matchOrThrow(degree(0)))).toEqual(0);
  })
  test('tan 1 returns 0.017455', () => {
    expect(tan(matchOrThrow(degree(1)))).toEqual(0.017455064928217585);
  })
})


