import { angleBasedMethod, oneSeventhMethod, middleOfTheNightMethod } from '../../index';
import { TimeSpan, timeSpan } from '../../../time/index';
import { degree, Degree } from '../../../maths/index';
import { Either, matchOrThrow } from "../../../either/index";
import { iterativeTest, randomTimeSpan, randomDegree, generateRandomWholeNumber } from '../../../testUtils/index'

describe('High latitude: Angle based method  pre conditions', () => {
  test('throws an error when the degree angle is null', () => {
    iterativeTest<Degree, void>({
      numberOfExecutions: 500,
      generateInput: () => null as unknown as Degree,
      assert: (val) => {
        expect(() => matchOrThrow(angleBasedMethod(val, randomTimeSpan()))).toThrowError();
      }
    });
  });
  test('throws an error when no time span is provided', () => {
    iterativeTest<TimeSpan, void>({
      numberOfExecutions: 500,
      generateInput: () => null as unknown as TimeSpan,
      assert: (val) => {
        expect(() => matchOrThrow(angleBasedMethod((randomDegree()), val))).toThrowError(ReferenceError);
      }
    });
  });
  test('throws an error when the degree angle is 0.', () => {
    iterativeTest<Degree, void>({
      numberOfExecutions: 500,
      generateInput: () => matchOrThrow(degree(0)),
      assert: (val) => {
        expect(() => matchOrThrow(angleBasedMethod(val, randomTimeSpan()))).toThrowError();
      }
    });
  });
});
describe('High latitude: Angle based method  invariance', () => {
  test('doesn\'t modify the degree object', () => {
    iterativeTest<Degree, void>({
      numberOfExecutions: 500,
      generateInput: () => randomDegree(1),
      assert: (val) => {
        const deepClone = matchOrThrow(degree(val.value));
        angleBasedMethod(val, randomTimeSpan());
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
  test('Angle based method The result will always equal the time span divided by the angle', () => {
    iterativeTest<HighLatitudeTestSpec, void>({
      numberOfExecutions: 500,
      generateInput: () => highLatitudeTestSpec(matchOrThrow(degree(generateRandomWholeNumber(1, 90))), timeSpan(0, generateRandomWholeNumber(0, 23), 0, 0, 0)),
      assert: (val) => {
        const expected = (val.timeSpanBetweenSunsetAndSunrise.value / val.angle.value) >> 0;
        const actual = matchOrThrow(val.actual).value;
        expect(actual).toEqual(expected);
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
        expect(() => matchOrThrow(oneSeventhMethod(val))).toThrowError();
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
  test("The result will always equal the time span divided by 7", () => {
    iterativeTest<TimeSpan, void>({
      numberOfExecutions: 500,
      generateInput: () => randomTimeSpan(),
      assert: val => {
        const expected = (val.value / 7) >> 0;
        const actual = matchOrThrow(oneSeventhMethod(val)).value;
        expect(actual).toEqual(expected);
      }
    });
  });
  test("the result will always return a time span", () => {
    iterativeTest<TimeSpan, void>({
      numberOfExecutions: 500,
      generateInput: () => randomTimeSpan(),
      assert: (val) => {
        const expectedMilliseconds = ((val.value / 7) >> 0);
        const expected = timeSpan(0, 0, 0, 0, expectedMilliseconds);
        const result = matchOrThrow(oneSeventhMethod(val));
        expect(result).toEqual(expected);
      }
    });
  });
});

describe("High latitude: Middle of the night method pre conditions", () => {
  test("throws an error when no time span is null", () => {
    iterativeTest<TimeSpan, void>({
      numberOfExecutions: 500,
      generateInput: () => (null as unknown) as TimeSpan,
      assert: val => {
        expect(() => matchOrThrow(middleOfTheNightMethod(val))).toThrowError();
      }
    });
  });
  test("throws an error when no time span is undefined", () => {
    iterativeTest<TimeSpan, void>({
      numberOfExecutions: 500,
      generateInput: () => undefined as unknown as TimeSpan,
      assert: val => {
        expect(() => matchOrThrow(middleOfTheNightMethod(val))).toThrowError();
      }
    });
  });
});

describe('High latitude: Middle of the night based method invariance', () => {
  test('doesn\'t modify the passed in time span object', () => {
    iterativeTest<TimeSpan, void>({
      numberOfExecutions: 500,
      generateInput: () => randomTimeSpan(),
      assert: (val) => {
        const deepClone = val;
        middleOfTheNightMethod(val);
        expect(deepClone).toEqual(val);
      }
    });
  });
});
describe("High latitude: Middle of the night based method  post conditions", () => {
  test("The result will always equal the time span divided by 4", () => {
    iterativeTest<TimeSpan, void>({
      numberOfExecutions: 500,
      generateInput: () => randomTimeSpan(),
      assert: val => {
        const expectedMilliseconds = (val.value / 4) >> 0;
        const actual = matchOrThrow(middleOfTheNightMethod(val)).value;
        expect(actual).toEqual(expectedMilliseconds);
      }
    });
  });
  test("the result will always return a time span", () => {
    iterativeTest<TimeSpan, void>({
      numberOfExecutions: 500,
      generateInput: () => randomTimeSpan(),
      assert: (val) => {
        const actual = matchOrThrow(middleOfTheNightMethod(val));
        const expected = timeSpan(0, 0, 0, 0, (val.value / 4 >> 0));
        expect(actual).toEqual(expected);
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