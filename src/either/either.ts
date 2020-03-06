interface Left<T> { path: 'left', result: Readonly<T> }
interface Right<T> { path: 'right', result: Readonly<T> }
type Either<L, R> = Readonly<Left<L>> | Readonly<Right<R>>;

const matchErrorOr = <L, R>(
  input: Either<L, R>,
  left: (result: L) => L,
  right: (right: R) => R
): L | R =>
  (input.path === 'left'
    ? left(input.result)
    : right(input.result))

const failure = <T>(result: T): Left<T> => ({ path: 'left', result: result })

const success = <T>(res: T): Right<T> => ({ path: 'right', result: res })

export {
  Either,
  Left,
  Right,
  matchErrorOr as match,
  failure as left,
  success as right
}
