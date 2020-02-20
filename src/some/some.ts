export type None<T> = { path: "none", none: Readonly<T> }

export type Some<T> = { path: "some", value: Readonly<T> }

export type Either<T> = Readonly<None<T>> | Readonly<Some<T>>

const match = <T>(
    input: Either<T>,
    none: (none?: T) => None<T>,
    some: (some: T) => T) => input.path === "none"
        ? none()
        : some(input.value);

const none = <T>(none?: T): None<T> => ({ path: "none", none: none ?? {} as T });

const some = <T>(value: T): Some<T> => ({ path: "some", value: value });

export {
    match,
    none,
    some
};