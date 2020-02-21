import { degree } from './index';
import { iterativeTest, generateRandomNumber } from "../testUtils/index";
import { match, matchOrThrow } from '../either/index';

describe('Degrees', () => {
    test('never accept a value greater than 360', () => {
        iterativeTest<number, void>({
            numberOfExecutions: 500,
            generateInput: () => generateRandomNumber(360.1, Number.MAX_SAFE_INTEGER),
            assert: value => expect(() => matchOrThrow(degree(value))).toThrow(RangeError)
        });
    })
    test('never accept a value less than -360', () => {
        iterativeTest({
            numberOfExecutions: 500,
            generateInput: () => generateRandomNumber(-360.1, Number.MIN_SAFE_INTEGER),
            assert: value => expect(() => matchOrThrow(degree(value))).toThrow(RangeError)
        });
    })
    test('contains a degree measurement value within a range of -360 and 360', () => {
        iterativeTest({
            numberOfExecutions: 500,
            generateInput: () => generateRandomNumber(-360, 360),
            assert: value => {
                const degrees = matchOrThrow(degree(value));
                expect(degrees.value).toBeLessThanOrEqual(360)
                expect(degrees.value).toBeGreaterThanOrEqual(-360);
            }
        });
    })
    test('returns the same degree measurement value passed in', () => {
        iterativeTest({
            numberOfExecutions: 500,
            generateInput: () => generateRandomNumber(-360, 360),
            assert: 
            value => expect(match(degree(value), (v) => {throw v}, (v) => v.value)).toEqual(value)
        });
    })
})