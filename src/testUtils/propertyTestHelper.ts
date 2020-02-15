/**
 * An input specification for providing a method with a generic return type.
 * @interface TestInput - An interface for specifying how to generate test input.
 * @template T - The return of the specified  method.
 */
interface TestInput<T> {
    generateInput(): T
}

/**
 *
 * @interface MultipleTestExecution - Defines a test that will execute based on the configuration.
 * This is more ideal for property based testing as opposed to unit testing
 * where you ensure the pre-conditions, invariance and post conditions of
 * an object or function.
 * @extends {TestInput<T>}
 * @template T
 * @template U
 */
interface MultipleTestExecution<T, U> extends TestInput<T> {
    assert: (value: T) => U
    numberOfExecutions: number
}

interface  IterativeTestSpecification<T,U> extends MultipleTestExecution<T, U> {
}


const iterativeTest = <T, U>(testSpec: IterativeTestSpecification<T, U>) => {
    if (testSpec == null) {
        throw new TypeError()
    }

    return Array
        .from({ length: testSpec.numberOfExecutions },
            testSpec.generateInput)
            .forEach(val => testSpec.assert(val))
};

export {
    IterativeTestSpecification,
    iterativeTest,
}
