import generateRandomNumber from "./generateRandomNumber";

interface IterativeTestConfiguration {
    length: number,
    minInputValue: number,
    maxInputValue: number,
    assertion: (value: number) => void
}

const iterativeTest = (testSpec: IterativeTestConfiguration) => {
    if (testSpec == null) {
        throw new TypeError()
    }

    return Array
        .from({ length: testSpec.length },
            () => generateRandomNumber(testSpec.minInputValue, testSpec.maxInputValue))
        .forEach(value => testSpec.assertion(value));
};

export {
    IterativeTestConfiguration,
    iterativeTest,
}