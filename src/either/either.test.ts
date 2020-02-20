import { left, right, match, matchOrThrow, Either } from "./either";

describe('Either', () => {
    test('generic left contains error', () => {
        expect(() =>
            match<string, Error, string>(testMethod(true), e => { throw e }, v => v)).toThrowError(Error);

    });
    test('generic right contains result', () => {
        expect(
            match<string, Error, string>(testMethod(false), e => { throw e }, v => v)).toEqual("Tung");
    });
    test('left contains error', () => {
        expect(() =>
            match(testMethod(true), e => { throw e }, v => v)).toThrowError(Error);

    });
    test('right contains result', () => {
        expect(
            match(testMethod(false), e => { throw e }, v => v)).toEqual("Tung");
    });
    test('match or throw unwraps returns an object when no error is thrown from the error.', () => {
        expect(matchOrThrow<string>(testMethod(false))).toEqual("Tung");
    });
    test('match or throw throws an error when the return object has an error.', () => {
        expect(matchOrThrow<string>(testMethod(false))).toEqual("Tung");
    })
});

const testMethod = (shouldError: boolean): Either<Error, string> => shouldError ? left(new Error()) : right("Tung");