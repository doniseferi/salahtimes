import { throwErrorOnNull } from '../validation'

type ErrorOr<T> = Readonly<Failure<Error>> | Readonly<Success<T>>
interface Failure<T extends Error> { path: 'error', error: Readonly<T> }
interface Success<T> { path: 'success', result: Readonly<T> }

const matchErrorOr = <T, F, S>(
  input: ErrorOr<S>,
  onFailureCallback: (val: Error) => F,
  onSuccessCallback: (val: S) => T
): T | F => {
  throwErrorOnNull(input)
  throwErrorOnNull(onFailureCallback)
  throwErrorOnNull(onSuccessCallback)

  return (input.path === 'error')
    ? onFailureCallback(input.error)
    : onSuccessCallback(input.result)
}

const failure = <T extends Error>(failure: T): Failure<Error> => ({ path: 'error', error: failure })

const success = <T>(value: T): Success<T> => ({ path: 'success', result: value })

const throwOnError = <T>(input: ErrorOr<T>): T => (
  matchErrorOr(
    input,
    err => {
      throw err
    },
    val => val))

export {
  ErrorOr,
  Failure,
  Success,
  failure,
  success,
  matchErrorOr,
  throwOnError
}
