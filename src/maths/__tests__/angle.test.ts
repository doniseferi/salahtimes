import { angle } from '../index';

interface testSample {
    length?: number,
    minInputValue: number,
    maxInputValue: number
};

interface propertyTest extends testSample {
    assertion: (value: number) => void
}

const generateRandomNumber = (min: number, max: number) =>
    Math.random() * (max - min) + min;

const testProperty = (test: propertyTest) => {
    if (test == null) {
        throw new TypeError()
    }

    return Array
        .from({ length: test.length ?? 500 },
            () => generateRandomNumber(test.minInputValue, test.maxInputValue))
        .forEach(value => test.assertion(value));
};

/* 
    Property-based testing:
    Test contract: Preconditions, post conditions and invariance.
*/
describe('Angles', () => {
    test('never accept a value greater than 360', () => {
        testProperty({
            minInputValue: 360.1,
            maxInputValue: Number.MAX_SAFE_INTEGER,
            assertion: value => expect(() => angle(value)).toThrow(RangeError)
        });
    })
    test('never accept a value less than 0', () => {
        testProperty({
            minInputValue: -0.1,
            maxInputValue: Number.MIN_SAFE_INTEGER,
            assertion: value => expect(() => angle(value)).toThrow(RangeError)
        });
    })
    test('contains a degree measurement value within a range of -360 and 360', () => {
        testProperty({
            minInputValue: -360,
            maxInputValue: 360,
            assertion: value => {
                const degrees = angle(value).degrees;
                expect(degrees).toBeLessThanOrEqual(360)
                expect(degrees).toBeGreaterThanOrEqual(-360)
            }
        });
    })
    test('returns the same degree measurement value passed in', () => {
        testProperty({
            minInputValue: 0,
            maxInputValue: 360,
            assertion: value => expect(angle(value).degrees).toEqual(value)
        });
    })
})