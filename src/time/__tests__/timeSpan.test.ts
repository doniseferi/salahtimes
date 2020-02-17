import { timeSpan, TimeSpan } from "../index";
import {
  iterativeTest,
  generateRandomWholeNumber
} from "../../testUtils/index";

interface testSpec {
  expected: number;
  actual: TimeSpan;
}

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

const timespanDivisioNResult = (
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
  test("is divisible", () => {
    iterativeTest<testSpec[], void>({
      numberOfExecutions: 500,
      generateInput: () =>
        timespanDivisioNResult(
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
});
