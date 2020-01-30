import { geoCoordinate } from './index';
import { iterativeTest } from '../testUtils/propertyTestHelper';

describe('geoCoordinate', () => {

})

describe('geoCoordinates', () => {
    test('return the passed in latitude value', () => {
        iterativeTest({
            length: 500,
            minInputValue: -180,
            maxInputValue: 180,
            assertion: value => expect(() => geoCoordinate(value, 0)).toThrow(RangeError)
        });
    })
    test('never accept a value less than 0', () => {
        iterativeTest({
            length: 500,
            minInputValue: -0.1,
            maxInputValue: Number.MIN_SAFE_INTEGER,
            assertion: value => expect(() => geoCoordinate(value)).toThrow(RangeError)
        });
    })
    test('contains a geoCoordinate measurement value within a range of -360 and 360', () => {
        iterativeTest({
            length: 500,
            minInputValue: -360,
            maxInputValue: 360,
            assertion: value => {
                const geoCoordinate= geoCoordinate(value).value;
                expect(geoCoordinates).toBeLessThanOrEqual(360)
                expect(geoCoordinates).toBeGreaterThanOrEqual(-360)
            }
        });
    })
    test('returns the same geoCoordinate measurement value passed in', () => {
        iterativeTest({
            length: 500,
            minInputValue: -360,
            maxInputValue: 360,
            assertion: value => expect(geoCoordinate(value).value).toEqual(value)
        });
    })
})