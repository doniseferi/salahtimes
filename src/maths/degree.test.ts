import { degree } from './index';
import { iterativeTest, generateRandomNumber } from "../testUtils/index";

/* 
    Property-based testing:
    Test contract: Preconditions, post conditions and invariance.
*/
describe('Degrees', () => {
    test('never accept a value greater than 360', () => {
        iterativeTest<number, void>({
            numberOfExecutions: 500,
            generateInput: () => generateRandomNumber(360.1, Number.MAX_SAFE_INTEGER),
            assert: value => expect(() => degree(value)).toThrow(RangeError)
        });
    })
    test('never accept a value less than 0', () => {
        iterativeTest({
            numberOfExecutions: 500,
            generateInput: () => generateRandomNumber(-0.1, Number.MIN_SAFE_INTEGER),
            assert: value => expect(() => degree(value)).toThrow(RangeError)
        });
    })
    test('contains a degree measurement value within a range of 0 and 360', () => {
        iterativeTest({
            numberOfExecutions: 500,
            generateInput: () => generateRandomNumber(-360, 360),
            assert: value => {
                const degrees = degree(value).value;
                expect(degrees).toBeLessThanOrEqual(360)
                expect(degrees).toBeGreaterThanOrEqual(-360)
            }
        });
    })
    test('returns the same degree measurement value passed in', () => {
        iterativeTest({
            numberOfExecutions: 500,
            generateInput: () => generateRandomNumber(-360, 360),
            assert: 
            value => expect(degree(value).value).toEqual(value)
        });
    })
})