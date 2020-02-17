import { geoCoordinate } from './index';
import { iterativeTest, generateRandomWholeNumber } from '../testUtils/index';
import { degree } from '../maths/index';

describe('geoCoordinates', () => {
    test('rejects a latitude value less than -90', () => {
        iterativeTest({
            numberOfExecutions: 500,
            generateInput: () => generateRandomWholeNumber(-90.01, Number.MIN_SAFE_INTEGER),
            assert: value => expect(() => geoCoordinate(degree(value), degree(10))).toThrow(RangeError)
        });
    }),
    test('rejects a latitude value greater than 90', () => {
        iterativeTest({
            numberOfExecutions: 500,
            generateInput: () => generateRandomWholeNumber(90.01, Number.MAX_SAFE_INTEGER),
            assert: value => expect(() => geoCoordinate(degree(value), degree(10))).toThrow(RangeError)
        });
    }),
    test('rejects a longitude value less than -180', () => {
        iterativeTest({
            numberOfExecutions: 500,
            generateInput: () => generateRandomWholeNumber(-180.01, Number.MIN_SAFE_INTEGER),
            assert: value => expect(() => geoCoordinate(degree(10), degree(value))).toThrow(RangeError)
        });
    }),
    test('rejects a longitude value greater than 180', () => {
        iterativeTest({
            numberOfExecutions: 500,
            generateInput: () => generateRandomWholeNumber(180.01, Number.MAX_SAFE_INTEGER),
            assert: value => expect(() => geoCoordinate(degree(10), degree(value))).toThrow(RangeError)
        });
    }),
    test('accept any latitude within the range of -90 to 90', () => {
        iterativeTest({
            numberOfExecutions: 500,
            generateInput: () => generateRandomWholeNumber(-90, 90),
            assert: value => expect(() => geoCoordinate(degree(value), degree(10))).not.toThrow()
        });
    }),
    test('accept any longitude within the range of -180 to 180', () => {
        iterativeTest({
            numberOfExecutions: 500,
            generateInput: () => generateRandomWholeNumber(-180, 180),
            assert: value => expect(() => geoCoordinate(degree(10), degree(value))).not.toThrow()
        });
    })
});