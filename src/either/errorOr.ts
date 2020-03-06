

type ErrorOr<T> = Readonly<Failure<Error>> | Readonly<Success<T>>
interface Failure<T extends Error> { path: 'error', error: Readonly<T> }
interface Success<T> { path: 'success', result: Readonly<T> }

const failure = <T extends Error>(failure: T): Failure<Error> => ({ path: 'error', error: failure })
const success = <T>(value: T): Success<T> => ({ path: 'success', result: value })

const matchErrorOr = <S, F>(
    input: ErrorOr<S>,
    onFailureCallback: (val: Error) => F,
    onSuccessCallback: (val: S) => S
): S | F =>
    (input.path === 'error')
        ? onFailureCallback(input.error)
        : onSuccessCallback(input.result)

export {
    ErrorOr,
    Failure,
    Success,
    failure,
    success,
    matchErrorOr
}