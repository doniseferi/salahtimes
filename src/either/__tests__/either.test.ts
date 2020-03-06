import { left, right, match, Either } from '../index'

describe('Either', () => {
  test('left contains a number', () => {
    expect(
      match(
        isNumber(true),
        (e) => e,
        (v) => v))
      .toEqual(1)
  })
  test('generic right contains result', () => {
    expect(
      match(
        isNumber(false),
        (e) => e,
        (v) => v))
      .toEqual('One')
  })
  test('an error is thrown when input isn\'t provided', () => {
    expect(() =>
      match(
        null as unknown as Either<void, void>,
        () => { },
        () => { }))
      .toThrow()
  })
  test('an error is thrown when the left call back isn\'t provided', () => {
    expect(() =>
      match(
        isNumber(false),
        null as unknown as (val: number) => number,
        (val) => val))
      .toThrow()
  })
  test('an error is thrown when the right call back isn\'t provided', () => {
    expect(() =>
      match(
        isNumber(true),
        (val) => val,
        null as unknown as (val: string) => string))
      .toThrow()
  })
})

const isNumber = (shouldReturnNumber: boolean): Either<number, string> =>
  shouldReturnNumber ? left(1) : right('One')
