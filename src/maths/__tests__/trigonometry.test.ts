import { arccot, tan, degree } from '..'
import { matchOrThrow } from '../../either'

describe('Inverse Cotangent', () => {
  test('arccot 0 equals 90 degrees', () => {
    const actual = arccot(matchOrThrow(degree(0)))
    const expected = matchOrThrow(degree(90))
    expect(actual).toEqual(expected)
  })
  test('arccot 1 equals 45 degrees', () => {
    expect(arccot(matchOrThrow(degree(1)))).toEqual(matchOrThrow(degree(45)))
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


