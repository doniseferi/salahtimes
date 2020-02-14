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

describe("TimeSpan value", () => {
  test("is in miniseconds", () => {
    iterativeTest<TimeSpanTestSubject, void>({
      numberOfExecutions: 500,
      generateInput: () => generateRandomItem(),
      assert: input => expect(input.actual).toEqual(input.expect)
    });
  }),
    test("returns a positive value when param item 1 is later than param item 2", () => {
      iterativeTest<TimeSpanTestSubject, void>({
        numberOfExecutions: 500,
        generateInput: () => generatePositiveItem(),
        assert: input => expect(input.actual).toBeGreaterThan(0)
      });
    }),
    test("returns a negative value when param item 1 is earlier than param item 2", () => {
      iterativeTest<TimeSpanTestSubject, void>({
        numberOfExecutions: 500,
        generateInput: () => generateNegativeItem(),
        assert: input => expect(input.actual).toBeLessThan(0)
      });
    }),
    test("returns a an equal value when both param items are the same date", () => {
      iterativeTest<TimeSpanTestSubject, void>({
        numberOfExecutions: 500,
        generateInput: () => generateEqualItem(),
        assert: input => expect(input.actual).toEqual(0)
      });
    })
});
describe("Timespan divide", () => {
    test("", () => {

    }),
})