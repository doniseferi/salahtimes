export type Left<T> = { path: "left", result: Readonly<T> }

export type Right<T> = { path: "right", result: Readonly<T> }

export type Either<L, R> = Readonly<Left<L>> | Readonly<Right<R>>

const match = <T, L, R>(
    input: Either<L, R>,
    left: (left: L) => T,
    right: (right: R) => T) => input.path === "left"
        ? left(input.result)
        : right(input.result);


const matchOrThrow = <T>(input: Either<Error, T>) =>
  match<T, Error, T>(
    input,
    e => {
      throw e;
    },
    result => result
  );

const left = <T>(err: T): Left<T> => ({ path: "left", result: err });

const right = <T>(res: T): Right<T> => ({ path: "right", result: res });

export {
    match,
    matchOrThrow,
    left,
    right
};