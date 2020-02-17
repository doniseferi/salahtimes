import { timeSpan, TimeSpan } from "../index";
import {
  iterativeTest,
  generateRandomWholeNumber
} from "../../testUtils/index";

interface testSpec {
  expected: number;
  actual: TimeSpan;
}

describe("TimeSpan", () => {
  test("returns a value in millisecond", () => {
    iterativeTest<testSpec[], void>({
      numberOfExecutions: 500,
      generateInput: () =>
        timespanValueResult(
          generateRandomWholeNumber(-1000000000000, 1000000000000)
        ),
      assert: testSpec => {
        Object.values(testSpec).forEach(timeSpan =>
          expect(timeSpan.actual.value).toEqual(timeSpan.expected)
        );
      }
    });
  });
  test("is divisible by a number", () => {
    iterativeTest<testSpec[], void>({
      numberOfExecutions: 500,
      generateInput: () =>
        timespanDivisionResult(
          generateRandomWholeNumber(-1_000_000_000_000, 1_000_000_000_000),
          generateRandomWholeNumber(-1_000_000_000_000, 1_000_000_000_000)
        ),
      assert: testSpec => {
        Object.values(testSpec).forEach(timeSpan =>
          expect(timeSpan.actual.value).toEqual(timeSpan.expected)
        );
      }
    });
  });
  test("is divisible by a timeSpan", () => {
    iterativeTest<testSpec[], void>({
      numberOfExecutions: 500,
      generateInput: () =>
        timespanDivisionByTimeSpanResult(
          generateRandomWholeNumber(-1_000_000_000_000, 1_000_000_000_000),
          timeSpan(
            0,
            0,
            0,
            0,
            generateRandomWholeNumber(-1_000_000_000_000, 1_000_000_000_000)
          )
        ),
      assert: testSpec => {
        Object.values(testSpec).forEach(timeSpan =>
          expect(timeSpan.actual.value).toEqual(timeSpan.expected)
        );
      }
    });
  });
});

const timeSpanUnits = {
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  second: 1000,
  millisecond: 1
};

const timespanValueResult = (value: number): testSpec[] => [
  {
    expected: timeSpanUnits.day * value,
    actual: timeSpan(value, 0, 0, 0, 0)
  },
  {
    expected: timeSpanUnits.hour * value,
    actual: timeSpan(0, value, 0, 0, 0)
  },
  {
    expected: timeSpanUnits.minute * value,
    actual: timeSpan(0, 0, value, 0, 0)
  },
  {
    expected: timeSpanUnits.second * value,
    actual: timeSpan(0, 0, 0, value, 0)
  },
  {
    expected: timeSpanUnits.millisecond * value,
    actual: timeSpan(0, 0, 0, 0, value)
  }
];

const timespanDivisionResult = (
  initalValue: number,
  divisor: number
): testSpec[] => [
  {
    expected: ((timeSpanUnits.day * initalValue) / divisor) >> 0,
    actual: timeSpan(initalValue, 0, 0, 0, 0).divide(divisor)
  },
  {
    expected: ((timeSpanUnits.hour * initalValue) / divisor) >> 0,
    actual: timeSpan(0, initalValue, 0, 0, 0).divide(divisor)
  },
  {
    expected: ((timeSpanUnits.minute * initalValue) / divisor) >> 0,
    actual: timeSpan(0, 0, initalValue, 0, 0).divide(divisor)
  },
  {
    expected: ((timeSpanUnits.second * initalValue) / divisor) >> 0,
    actual: timeSpan(0, 0, 0, initalValue, 0).divide(divisor)
  },
  {
    expected: ((timeSpanUnits.millisecond * initalValue) / divisor) >> 0,
    actual: timeSpan(0, 0, 0, 0, initalValue).divide(divisor)
  }
];

const timespanDivisionByTimeSpanResult = (
  initalValue: number,
  divisor: TimeSpan
): testSpec[] => [
  {
    expected: ((timeSpanUnits.day * initalValue) / divisor.value) >> 0,
    actual: timeSpan(initalValue, 0, 0, 0, 0).divideByTimeSpan(divisor)
  },
  {
    expected: ((timeSpanUnits.hour * initalValue) / divisor.value) >> 0,
    actual: timeSpan(0, initalValue, 0, 0, 0).divideByTimeSpan(divisor)
  },
  {
    expected: ((timeSpanUnits.minute * initalValue) / divisor.value) >> 0,
    actual: timeSpan(0, 0, initalValue, 0, 0).divideByTimeSpan(divisor)
  },
  {
    expected: ((timeSpanUnits.second * initalValue) / divisor.value) >> 0,
    actual: timeSpan(0, 0, 0, initalValue, 0).divideByTimeSpan(divisor)
  },
  {
    expected: ((timeSpanUnits.millisecond * initalValue) / divisor.value) >> 0,
    actual: timeSpan(0, 0, 0, 0, initalValue).divideByTimeSpan(divisor)
  }
];
