import { timeSpan } from "../index";
import { iterativeTest, generateRandomDate } from "../../testUtils/";

interface TimeSpanTestSubject {
  expect: number;
  actual: number;
}

const createTimeSPanTestSubject = (getDateA: Date, getDateB: Date) => ({
  expect: getDateA.getTime() - getDateB.getTime(),
  actual: timeSpan(getDateA, getDateB).value
});

const generateRandomItem = (): TimeSpanTestSubject =>
  createTimeSPanTestSubject(
    generateRandomDate(2000, 2050),
    generateRandomDate(2000, 2050)
  );
const generatePositiveItem = (): TimeSpanTestSubject =>
  createTimeSPanTestSubject(
    generateRandomDate(2025, 2049),
    generateRandomDate(2000, 2024)
  );
const generateNegativeItem = (): TimeSpanTestSubject =>
  createTimeSPanTestSubject(
    generateRandomDate(2000, 2024),
    generateRandomDate(2025, 2050)
  );
const generateEqualItem = (): TimeSpanTestSubject => {
  const date = generateRandomDate(2025, 2050);
  return createTimeSPanTestSubject(date, date);
};

describe("TimeSpan", () => {
  test("returns the time span in milliseconds between two dates", () => {
    iterativeTest<TimeSpanTestSubject, void>({
      numberOfExecutions: 500,
      generateInput: () => generateRandomItem(),
      assert: input => expect(input.actual).toEqual(input.expect)
    });
  }),
    test("returns a positive value", () => {
      iterativeTest<TimeSpanTestSubject, void>({
        numberOfExecutions: 500,
        generateInput: () => generatePositiveItem(),
        assert: input => expect(input.actual).toBeGreaterThan(0)
      });
    }),
    test("returns a negative value", () => {
      iterativeTest<TimeSpanTestSubject, void>({
        numberOfExecutions: 500,
        generateInput: () => generateNegativeItem(),
        assert: input => expect(input.actual).toBeLessThan(0)
      });
    }),
    test("returns a an equal value", () => {
      iterativeTest<TimeSpanTestSubject, void>({
        numberOfExecutions: 500,
        generateInput: () => generateEqualItem(),
        assert: input => expect(input.actual).toEqual(0)
      });
    }),
    test("returns a positive value when an earlier date is subtracted for a later date", () => {
      const A = new Date(1987, 0, 27, 12, 0, 0, 0);
      const B = new Date(1987, 0, 27, 12, 0, 0, 1);
      const span = timeSpan(B, A);
      const expectedSpanInMilliSeconds = 1;
      expect(span.value).toEqual(expectedSpanInMilliSeconds);
    }),
    test("returns a negative value when a later date is subtracted for am earlier date", () => {
      const A = new Date(1987, 0, 27, 12, 0, 0, 1);
      const B = new Date(1987, 0, 27, 12, 0, 0, 0);
      const span = timeSpan(B, A);
      const expectedSpanInMilliSeconds = -1;
      expect(span.value).toEqual(expectedSpanInMilliSeconds);
    }),
    test("returns a 0 value when a two dates are equal", () => {
      const A = new Date(1987, 0, 27, 12, 0, 0, 0);
      const B = new Date(1987, 0, 27, 12, 0, 0, 0);
      const span = timeSpan(B, A);
      const expectedSpanInMilliSeconds = 0;
      expect(span.value).toEqual(expectedSpanInMilliSeconds);
    });
});
