import { degree } from './index';
import { iterativeTest } from '../testUtils/propertyTestHelper';

/* 
    Property-based testing:
    Test contract: Preconditions, post conditions and invariance.
*/
describe('Degrees', () => {
    test('never accept a value greater than 360', () => {
        iterativeTest({
            length: 500,
            minInputValue: 360.1,
            maxInputValue: Number.MAX_SAFE_INTEGER,
            assertion: value => expect(() => degree(value)).toThrow(RangeError)
        });
    })
    test('never accept a value less than 0', () => {
        iterativeTest({
            length: 500,
            minInputValue: -0.1,
            maxInputValue: Number.MIN_SAFE_INTEGER,
            assertion: value => expect(() => degree(value)).toThrow(RangeError)
        });
    })
    test('contains a degree measurement value within a range of -360 and 360', () => {
        iterativeTest({
            length: 500,
            minInputValue: -360,
            maxInputValue: 360,
            assertion: value => {
                const degrees = degree(value).value;
                expect(degrees).toBeLessThanOrEqual(360)
                expect(degrees).toBeGreaterThanOrEqual(-360)
            }
        });
    })
    test('returns the same degree measurement value passed in', () => {
        iterativeTest({
            length: 500,
            minInputValue: -360,
            maxInputValue: 360,
            assertion: value => expect(degree(value).value).toEqual(value)
        });
    })
})