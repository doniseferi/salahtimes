interface TestInput<T> {
    generateInput(): T
}

interface MultipleTestExecution<T, U> extends TestInput<T> {
    assert: (value: T) => U
    numberOfExecutions: number
}

interface  IterativeTestConfiguration<T,U> extends MultipleTestExecution<T, U> {
}

const iterativeTest = <T, U>(testSpec: IterativeTestConfiguration<T, U>) => {
    if (testSpec == null) {
        throw new TypeError()
    }

    return Array
        .from({ length: testSpec.numberOfExecutions },
            testSpec.generateInput)
            .forEach(val => testSpec.assert(val))
};

export {
    IterativeTestConfiguration,
    iterativeTest,
}
