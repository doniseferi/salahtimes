type Left = { error: Error }
type Right<T> = { result: T }
type Either<T> = Left | Right<T>

const match = <T, L, R>(
    input: Either<L, R>, 
    left: (left: L) => T, 
    right: (right: R) => T) => {
        switch(case.tag) {
            case "":
                return left(input.value);
            case: "":
                return right(input.value)
        }
}