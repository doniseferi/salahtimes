import {
  matchErrorOr,
  failure,
  success,
  ErrorOr
} from '../'

describe('Error Or', () => {
  test('success callback on T', () => {
    const input = 1
    expect(matchErrorOr(createSuccess(input),
      (err) => err, (val) => val)).toEqual(input)
    expect(matchErrorOr(createSuccess(input),
      (err) => err, (val) => val + val)).toEqual(input + input)
  })
  test('failure callback on error', () => {
    expect(matchErrorOr(createFailure(),
      (err) => err, (val) => val)).toEqual(new Error())
    expect(() => matchErrorOr(createFailure(),
      (err) => { throw err }, (val) => val + val)).toThrow()
    expect(matchErrorOr(createFailure(),
      () => -1, (val) => val)).toEqual(-1)
  })
  test('throws an error when input isn\'t provided', () => {
    expect(() =>
      matchErrorOr(
        null as unknown as ErrorOr<number>,
        (left) => left,
        (right) => right))
      .toThrow()
  })
  test('an error is thrown when the left call back isn\'t provided', () => {
    expect(() =>
      matchErrorOr(
        createSuccess(1),
        null as unknown as (val: Error) => unknown,
        (val) => val))
      .toThrow()
  })
  test('an error is thrown when the right call back isn\'t provided', () => {
    expect(() =>
      matchErrorOr(
        createSuccess(1),
        (val) => val,
        null as unknown as (val: number) => number))
      .toThrow()
  })
})

const createFailure = (): ErrorOr<number> => createError(true, 1)
const createSuccess = (val: number): ErrorOr<number> => createError(false, val)

const createError = (shouldError: boolean, val: number): ErrorOr<number> =>
  shouldError ? failure(new Error()) : success(val)
