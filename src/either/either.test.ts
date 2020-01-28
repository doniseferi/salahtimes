import { result, error } from "./either"

describe('Either', () => {
    test('Result contains result', () => {
        const result = testMethod(false, 10);
        expect(result.error).toEqual(10);
    })
    test('Error contains result', () => {
        const result = testMethod(false);
        expect(result.error).toThrow();
    })
})

const testMethod = (shouldThrow: boolean, value: number = 10) =>
    shouldThrow ?? false
    ? error(() => { throw RangeError() }) 
    : result(value);