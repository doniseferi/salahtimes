import { left, right, match } from "./either";

describe('Either', () => {
    test('left contains error', () => {
        expect(() => match(testMethod(true), e => { throw e }, v => v)).toThrowError();
    });
    test('right contains result', () => {
        expect(match(testMethod(false), e => { throw e }, v => v)).toEqual("Tung");
    });
});

const testMethod = (val: boolean) => val ? left(new Error()) : right("Tung");