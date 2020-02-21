import { angleBasedMethod } from '../../index';
import { iterativeTest, generateRandomWholeNumber, randomTimeSpan, randomDegree } from '../../../testUtils/index';
import { TimeSpan, timeSpan } from '../../../time/index';
import { degree, Degree } from '../../../maths/index';
import { Either, matchOrThrow } from "../../../either/index";
import oneSeventhMethod from '../oneSeventhMethod';

describe('High latitude:  Angle based method  pre conditions', () => {
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
                expect(() => angleBasedMethod((randomDegree()), val)).toThrowError();
            }
        });
    });
    test('Angle based method Angle based throws an error when the degree angle is 0.', () => {
        iterativeTest<Degree, void>({
            numberOfExecutions: 500,
            generateInput: () => matchOrThrow(degree(0)),
            assert: (val) => {
                expect(() => angleBasedMethod(val, randomTimeSpan())).toThrowError();
            }
        });
    });
});
describe('High latitude:  Angle based method  invariance', () => {
    test('Angle based method doesn\'t modify the degree object', () => {
        iterativeTest<Degree, void>({
            numberOfExecutions: 500,
            generateInput: () => randomDegree(1),
            assert: (val) => {
                const deepClone = matchOrThrow(degree(val.value));
                angleBasedMethod(val, timeSpan(0, 0, 0, 0, 0));
                expect(deepClone).toEqual(val);
            }
        });
    });
    test('Angle based method doesn\'t modify the time span object', () => {
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
    test('Angle based method The result will always equal the time span divided by the angle', () => {
        iterativeTest<HighLatitudeTestSpec, void>({
            numberOfExecutions: 500,
            generateInput: () => highLatitudeTestSpec(matchOrThrow(degree(generateRandomWholeNumber(1, 90))), timeSpan(0, generateRandomWholeNumber(0, 23), 0, 0, 0)),
            assert: (val) => {
                const expectedMilliseconds = (val.timeSpanBetweenSunsetAndSunrise.value / val.angle.value) >> 0;
                const expectedTimeSpan = timeSpan(0, 0, 0, 0, expectedMilliseconds);
                expect(matchOrThrow(val.actual).value).toEqual(expectedTimeSpan.value);
            }
        });
    });
    test('Angle based method The result will always return a time span', () => {
        iterativeTest<HighLatitudeTestSpec, void>({
          numberOfExecutions: 500,
          generateInput: () =>
            highLatitudeTestSpec(
              matchOrThrow(degree(generateRandomWholeNumber(1, 90))),
              timeSpan(0, generateRandomWholeNumber(0, 23), 0, 0, 0)
            ),
          assert: val => {
            expect(matchOrThrow(val.actual)).toMatchObject<TimeSpan>(matchOrThrow(val.actual));
          }
        });
    });
});

describe("High latitude: One seventh method pre conditions", () => {
  test("throws an error when no time span is null", () => {
    iterativeTest<TimeSpan, void>({
      numberOfExecutions: 500,
      generateInput: () => (null as unknown) as TimeSpan,
      assert: val => {
        expect(() => oneSeventhMethod(val)).toThrowError();
      }
    });
  });
    test("throws an error when no time span is undefined", () => {
      iterativeTest<TimeSpan, void>({
        numberOfExecutions: 500,
        generateInput: () => undefined as unknown as TimeSpan,
        assert: val => {
          expect(() => matchOrThrow(oneSeventhMethod(val))).toThrowError();
        }
      });
    });
});

describe('High latitude: One seventh based method invariance', () => {
    test('doesn\'t modify the passed in time span object', () => {
        iterativeTest<TimeSpan, void>({
            numberOfExecutions: 500,
            generateInput: () => randomTimeSpan(),
            assert: (val) => {
                const deepClone = val;
                oneSeventhMethod(val);
                expect(deepClone).toEqual(val);
            }
        });
    });
});
describe("High latitude: One seventh based method  post conditions", () => {
  test("The result will always equal the time span divided by the 7", () => {
    iterativeTest<TimeSpan, void>({
      numberOfExecutions: 500,
      generateInput: () => randomTimeSpan(),
      assert: val => {
        const expectedMilliseconds = (val.value / 7) >> 0;
        const expectedTimeSpan = timeSpan(0, 0, 0, 0, expectedMilliseconds);
        expect(matchOrThrow(oneSeventhMethod(val)).value).toEqual(expectedTimeSpan.value);
      }
    });
  });
  test("Angle based method The result will always return a time span", () => {
    iterativeTest<TimeSpan, void>({
      numberOfExecutions: 500,
      generateInput: () =>randomTimeSpan(),
      assert: val => {
        expect(val).toMatchObject<TimeSpan>(val);
      }
    });
  });
});

interface HighLatitudeTestSpec {
    timeSpanBetweenSunsetAndSunrise: TimeSpan,
    angle: Degree,
    actual: Either<Error, TimeSpan>
};

const highLatitudeTestSpec = (degree: Degree, timeSpanBetweenSunsetAndSunrise: TimeSpan): HighLatitudeTestSpec => ({
    timeSpanBetweenSunsetAndSunrise,
    angle: degree,
    actual: angleBasedMethod(degree, timeSpanBetweenSunsetAndSunrise)
});