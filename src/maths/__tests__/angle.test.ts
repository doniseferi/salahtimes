import { angle } from '../index';

interface testSample {
    length: number,
    minInputValue: number,
    maxInputValue: number
};

interface propertyTest extends testSample {
    assertion: (value: number) => void
}

const generateRandomNumber = (min: number, max: number) =>
    Math.random() * (max - min) + min;

const testProperty = (test: propertyTest) =>
    Array
        .from({ length: 200 }, () => generateRandomNumber(test.minInputValue, test.maxInputValue))
        .forEach(value => test.assertion(value));

/* 
    Property-based testing:
    Test contract: Preconditions, post conditions and invariance.
*/
describe('Angles', () => {
    test('never accept a value greater than 360', () => {
        testProperty({
            length: 200,
            minInputValue: 360.1,
            maxInputValue: Number.MAX_SAFE_INTEGER,
            assertion: value => expect(() => angle(value)).toThrow(RangeError)
        });
    })
    test('never accept a value less than 0', () => {
        testProperty({
            length: 200,
            minInputValue: -0.1,
            maxInputValue: Number.MIN_SAFE_INTEGER,
            assertion: value => expect(() => angle(value)).toThrow(RangeError)
        });
    })
    test('contains a degree measurement value within a range of 0 and 360', () => {
        testProperty({
            length: 200,
            minInputValue: 0,
            maxInputValue: 360,
            assertion: value => {
                const degrees = angle(value).degrees;
                expect(degrees).toBeLessThanOrEqual(360)
                expect(degrees).toBeGreaterThanOrEqual(0)
            }
        });
    })
    test('returns the same degree measurement value passed in', () => {
        testProperty({
            length: 200,
            minInputValue: 0,
            maxInputValue: 360,
            assertion: value => expect(angle(value).degrees).toEqual(value)
        });
    })
})