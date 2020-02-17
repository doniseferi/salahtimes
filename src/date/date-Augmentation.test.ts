import "./date-Augmentation";
import { timeSpan, TimeSpan } from "../time/index";
import {
  iterativeTest,
  generateRandomDate,
  generateRandomWholeNumber
} from "../testUtils/index";

describe("Date", () => {
  test("generates a new date when a timespan is added to it", () => {
    iterativeTest<DateTestResult, void>({
      numberOfExecutions: 500,
      generateInput: () => dateTestResult(),
      assert: result => {
        const expected = new Date(
          result.initalDate.getTime() + result.timeSpan.value
        );
        const actual = result.initalDate.add(result.timeSpan);
        expect(actual).toEqual(expected);
      }
    });
  });
    test("generates a new date when a timespan is subtracted from it", () => {
      iterativeTest<DateTestResult, void>({
        numberOfExecutions: 500,
        generateInput: () => dateTestResult(),
        assert: result => {
          const expected = new Date(
            result.initalDate.getTime() - result.timeSpan.value
          );
          const actual = result.initalDate.subtract(result.timeSpan);
          expect(actual).toEqual(expected);
        }
      });
    });
});

interface DateTestResult {
  initalDate: Date;
  timeSpan: TimeSpan;
}
const dateTestResult = (): DateTestResult => ({
  initalDate: generateRandomDate(2000, 2050),
  timeSpan: timeSpan(
    generateRandomWholeNumber(0, 1000),
    generateRandomWholeNumber(0, 1000),
    generateRandomWholeNumber(0, 1000),
    generateRandomWholeNumber(0, 1000),
    generateRandomWholeNumber(0, 1000)
  )
});
