import { throwErrorOnNull } from '../validation'

interface Left<T> { path: 'left', result: Readonly<T> }
interface Right<T> { path: 'right', result: Readonly<T> }
type Either<L, R> = Readonly<Left<L>> | Readonly<Right<R>>;

const match = <L, R>(
  input: Either<L, R>,
  left: (result: L) => L,
  right: (right: R) => R
): L | R => {
  throwErrorOnNull(input)
  throwErrorOnNull(left)
  throwErrorOnNull(right)

  return (input.path === 'left')
    ? left(input.result)
    : right(input.result)
}

const left = <T>(result: T): Left<T> => ({ path: 'left', result: result })

const right = <T>(res: T): Right<T> => ({ path: 'right', result: res })

export {
  Either,
  Left,
  Right,
  match,
  left,
  right
}
