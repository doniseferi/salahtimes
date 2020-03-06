import { left, right, match, Either } from '../index'

describe('Either', () => {
  test('left contains a number', () => {
    expect(match(
      isNumber(true),
      (e) => e,
      (v) => v
    )
    ).toEqual(1)
  })
  test('generic right contains result', () => {
    expect(
      match(
        isNumber(false),
        (e) => e,
        (v) => v
      )
    ).toEqual('One')
  })
})

const isNumber = (shouldReturnNumber: boolean): Either<number, string> =>
  shouldReturnNumber ? left(1) : right('One')
