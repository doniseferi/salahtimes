
export type Left<T> = { path: "left"; error: Readonly<T> };

export type Right<T> = { path: "right"; result: Readonly<T> };

export type Either<L, R> = Readonly<Left<L>> | Readonly<Right<R>>;

export interface Some<T> extends Option<T> { };

export interface None<T> extends Option<T> { };

export interface Option<T> {
  isSome(): boolean;
  isNone(): boolean;
  ifNone(): T;
  value: T
};

const match = <T, L, R>(
  input: Either<L, R>,
  left: (error: L) => T,
  right: (right: R) => T
) => (input.path === "left" ? left(input.error) : right(input.result));

const matchOrThrow = <T>(input: Either<Error, T>) =>
  match<T, Error, T>(
    input,
    (e) => {
      throw e;
    },
    (result) => result
  );

const left = <T>(err: T): Left<T> => ({ path: "left", error: err })

const right = <T>(res: T): Right<T> => ({ path: "right", result: res });

const some = <T>(value: T): Some<T> => ({ isNone: () => false, isSome: () => true, ifNone: () => value, value });

const none = <T>(onNone?: () => T): None<T> =>
  ({
    isNone: () => true,
    isSome: () => false,
    ifNone: () => (onNone) ? onNone() : (null as unknown as T),
    value: (onNone) ? onNone() : (null as unknown as T)
  });

const matchSomeOrNone = <T>(input: Option<T>, ifNone: () => T | L): Some<T> | None<T> => input.ifNone()
  ? none<T>(ifNone)
  : some<T>(input.value);


export { match, matchOrThrow, left, right };
