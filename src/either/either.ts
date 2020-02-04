export type Left<T> = { path: "left", error: T }

export type Right<T> = { path: "right", result: T }

export type Either<L, R> = Left<L> | Right<R>

const match = <T, L, R>(
    input: Either<L, R>,
    left: (left: L) => T,
    right: (right: R) => T) => input.path === "left"
        ? left(input.error)
        : right(input.result);

const left = <T>(err: T): Left<T> => ({ path: "left", error: err });

const right = <T>(res: T): Right<T> => ({ path: "right", result: res });

export {
    match,
    left,
    right
};