import { timeSpan, TimeSpan } from "../index";
import { iterativeTest, generateRandomWholeNumber } from "../../testUtils/index";

interface testSpec {
    milliSecond: number,
    span: TimeSpan
}

const staticMillisecondValues = (val: number): testSpec[] => ([
    {
        milliSecond: 86400000 * val,
        span: timeSpan(val, 0, 0, 0, 0)
    },
    {
        milliSecond: 3600000 * val,
        span: timeSpan(0, val, 0, 0, 0)
    },
    {
        milliSecond: 60000 * val,
        span: timeSpan(0, 0, val, 0, 0)
    },
    {
        milliSecond: 1000 * val,
        span: timeSpan(0, 0, 0, val, 0)
    },
    {
        milliSecond: 1 * val,
        span: timeSpan(0, 0, 0, 0, val)
    }]);

describe('TimeSpan', () => {
    test('returns a value in millisecond', () => {
        iterativeTest<testSpec[], void>({
            numberOfExecutions: 500,
            generateInput: () => staticMillisecondValues(generateRandomWholeNumber(-1_000_000_000_000, 1_000_000_000_000)),
            assert: testSpec => {
                Object
                    .values(testSpec)
                    .forEach(timeSpan => expect(timeSpan.span.value).toEqual(timeSpan.milliSecond))
            }
        })
    })
});