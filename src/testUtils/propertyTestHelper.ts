import generateRandomNumber from "./generateRandomNumber";

interface IterativeTestConfiguration {
    numberOfExecutions: number,
    minInputValue: number,
    maxInputValue: number,
    assertion: (value: number) => void
}

const iterativeTest = (testSpec: IterativeTestConfiguration) => {
    if (testSpec == null) {
        throw new TypeError()
    }

    return Array
        .from({ length: testSpec.numberOfExecutions },
            () => generateRandomNumber(testSpec.minInputValue, testSpec.maxInputValue))
        .forEach(value => testSpec.assertion(value));
};

export {
    IterativeTestConfiguration,
    iterativeTest,
}