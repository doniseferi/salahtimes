import { geoCoordinate } from './index';
import { iterativeTest } from '../testUtils/propertyTestHelper';
import { degree } from '../maths';

describe('geoCoordinates', () => {
    test('rejects a latitude value less than -90', () => {
        iterativeTest({
            numberOfExecutions: 500,
            minInputValue: -90.01,
            maxInputValue: Number.MIN_SAFE_INTEGER,
            assertion: value => expect(() => geoCoordinate(degree(value), degree(10))).toThrow(RangeError)
        });
    }),
    test('rejects a latitude value greater than 90', () => {
        iterativeTest({
            numberOfExecutions: 500,
            minInputValue: 90.01,
            maxInputValue: Number.MAX_SAFE_INTEGER,
            assertion: value => expect(() => geoCoordinate(degree(value), degree(10))).toThrow(RangeError)
        });
    }),
    test('rejects a longitude value less than -180', () => {
        iterativeTest({
            numberOfExecutions: 500,
            minInputValue: -180.01,
            maxInputValue: Number.MIN_SAFE_INTEGER,
            assertion: value => expect(() => geoCoordinate(degree(10), degree(value))).toThrow(RangeError)
        });
    }),
    test('rejects a longitude value greater than 180', () => {
        iterativeTest({
            numberOfExecutions: 500,
            minInputValue: 180.01,
            maxInputValue: Number.MAX_SAFE_INTEGER,
            assertion: value => expect(() => geoCoordinate(degree(10), degree(value))).toThrow(RangeError)
        });
    }),
    test('accept any latitude within the range of -90 to 90', () => {
        iterativeTest({
            numberOfExecutions: 500,
            minInputValue: -90,
            maxInputValue: 90,
            assertion: value => expect(() => geoCoordinate(degree(value), degree(10))).not.toThrow()
        });
    }),
    test('accept any longitude within the range of -180 to 180', () => {
        iterativeTest({
            numberOfExecutions: 500,
            minInputValue: -180,
            maxInputValue: 180,
            assertion: value => expect(() => geoCoordinate(degree(10), degree(value))).not.toThrow()
        });
    })
});