import { angleBasedMethod } from '../../index';
import { iterativeTest, generateRandomWholeNumber, randomTimeSpan, randomDegree } from '../../../testUtils/index';
import { TimeSpan, timeSpan } from '../../../time/index';
import { degree, Degree } from '../../../maths/index';

describe('High latitude calculation pre conditions', () => {
    test('Angle based method throws an error when the degree angle is null', () => {
        iterativeTest<Degree, void>({
            numberOfExecutions: 500,
            generateInput: () => null as unknown as Degree,
            assert: (val) => {
                expect(() => angleBasedMethod(val, randomTimeSpan())).toThrowError();
            }
        });
    });
    test('Angle based method throws an error when no time span is provided', () => {
        iterativeTest<TimeSpan, void>({
            numberOfExecutions: 500,
            generateInput: () => null as unknown as TimeSpan,
            assert: (val) => {
                expect(() => angleBasedMethod(randomDegree(), val)).toThrowError();
            }
        });
    });
    test('Angle based throws an error when the degree angle is 0.', () => {
        iterativeTest<Degree, void>({
            numberOfExecutions: 500,
            generateInput: () => degree(0),
            assert: (val) => {
                expect(() => angleBasedMethod(val, randomTimeSpan())).toThrowError();
            }
        });
    });
});
describe('High latitude calculation invariance', () => {
    test('doesn\'t modify the degree object', () => {
        iterativeTest<Degree, void>({
            numberOfExecutions: 500,
            generateInput: () => randomDegree(1),
            assert: (val) => {
                const deepClone = degree(val.value);
                angleBasedMethod(val, timeSpan(0, 0, 0, 0, 0));
                expect(deepClone).toEqual(val);
            }
        });
    });
    test('doesn\'t modify the time span object', () => {
        iterativeTest<TimeSpan, void>({
            numberOfExecutions: 500,
            generateInput: () => randomTimeSpan(),
            assert: (val) => {
                const deepClone = val;
                angleBasedMethod(randomDegree(1), val);
                expect(deepClone).toEqual(val);
            }
        });
    });
});
describe('High latitude calculation post conditions', () => {
    test('The result will always equal the time span divided by the angle', () => {
        iterativeTest<HighLatitudeTestSpec, void>({
            numberOfExecutions: 500,
            generateInput: () => highLatitudeTestSpec(degree(generateRandomWholeNumber(0, 90)), timeSpan(0, generateRandomWholeNumber(0, 23), 0, 0, 0)),
            assert: (val) => {
                const expectedMilliseconds = (val.timeSpanBetweenSunsetAndSunrise.value / val.angle.value) >> 0;
                const expectedTimeSpan = timeSpan(0, 0, 0, 0, expectedMilliseconds);
                expect(val.actual.value).toEqual(expectedTimeSpan.value);
            }
        });
    });
    test('The result will always return a time span', () => {
        iterativeTest<HighLatitudeTestSpec, void>({
            numberOfExecutions: 500,
            generateInput: () => highLatitudeTestSpec(degree(generateRandomWholeNumber(0, 90)), timeSpan(0, generateRandomWholeNumber(0, 23), 0, 0, 0)),
            assert: (val) => {
                expect(val.actual).toMatchObject<TimeSpan>(val.actual);
            }
        });
    });
});

interface HighLatitudeTestSpec {
    timeSpanBetweenSunsetAndSunrise: TimeSpan,
    angle: Degree,
    actual: TimeSpan
};

const highLatitudeTestSpec = (degree: Degree, timeSpanBetweenSunsetAndSunrise: TimeSpan): HighLatitudeTestSpec => ({
    timeSpanBetweenSunsetAndSunrise,
    angle: degree,
    actual: angleBasedMethod(degree, timeSpanBetweenSunsetAndSunrise)
});