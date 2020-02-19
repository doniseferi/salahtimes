import { left, right, match, matchOrThrow, Either } from "./either";

describe('Either', () => {
    test('left contains error', () => {
    });
    test('right contains result', () => {
        expect(match<(val: boolean) => <string, Error, Either<Error, string>>(testMethod(false), e => { throw e }, v => v)).toEqual("Tung");
    });
    test('match or throw unwraps returns an object when no error is thrown from the error.', () => {
        expect(matchOrThrow<string>(testMethod(false))).toEqual("Tung");
    })
});

const testMethod = (val: boolean): Either<Error, string> => val ? left(new Error()) : right("Tung");