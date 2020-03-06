interface Left<T> { path: 'left', result: Readonly<T> }
interface Right<T> { path: 'right', result: Readonly<T> }
type Either<L, R> = Readonly<Left<L>> | Readonly<Right<R>>;

const match = <L, R>(
  input: Either<L, R>,
  left: (result: L) => L,
  right: (right: R) => R
): L | R => {
  if (input === null) {
    throw new Error(errorMessage('input'))
  }
  if (left === null) {
    throw new Error(errorMessage('left'))
  }
  if (right === null) {
    throw new Error(errorMessage('right'))
  }

  return (input.path === 'left')
    ? left(input.result)
    : right(input.result);
}

const left = <T>(result: T): Left<T> => ({ path: 'left', result: result })

const right = <T>(res: T): Right<T> => ({ path: 'right', result: res })

const errorMessage = (parameter: string) => `${parameter} is null or undefined. Please provide a value for ${parameter}`

export {
  Either,
  Left,
  Right,
  match,
  left,
  right
}
