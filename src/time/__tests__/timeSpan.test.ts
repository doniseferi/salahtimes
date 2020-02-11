import { timeSpan, TimeSpan } from '../index';
import { iterativeTest, generateRandomDate } from '../../testUtils/';

interface TimeSpanTestSubject {
    A: Date,
    B: Date,
    expect: number,
    actual: TimeSpan
}

const generateTestSubject = (): TimeSpanTestSubject => {
    const a = generateRandomDate();
    const b = generateRandomDate();
    const expect = a.getTime() - b.getTime();
    const actual = timeSpan(a, b)

    return {
        A: a,
        B: b,
        expect,
        actual
    }
};

describe('TimeSpan', () => {
    test('returns the time span in milliseconds between two dates', () => {
        iterativeTest<TimeSpanTestSubject, void>({
            numberOfExecutions: 500,
            generateInput: () => generateTestSubject(),
            assert: input => expect(input.actual.value).toEqual(input.expect);
        });
    })
    test('returns a positive value when an earlier date is subtracted for a later date', () => {
        const A = new Date(1987, 0, 27, 12, 0, 0, 0);
        const B = new Date(1987, 0, 27, 12, 0, 0, 1);
        const span = timeSpan(B, A);
        const expectedSpanInMilliSeconds = 1;
        expect(span.value).toEqual(expectedSpanInMilliSeconds);
    }),
        test('returns a negative value when a later date is subtracted for am earlier date', () => {
            const A = new Date(1987, 0, 27, 12, 0, 0, 1);
            const B = new Date(1987, 0, 27, 12, 0, 0, 0);
            const span = timeSpan(B, A);
            const expectedSpanInMilliSeconds = -1;
            expect(span.value).toEqual(expectedSpanInMilliSeconds);
        }),
        test('returns a 0 value when a two dates are equal', () => {
            const A = new Date(1987, 0, 27, 12, 0, 0, 0);
            const B = new Date(1987, 0, 27, 12, 0, 0, 0);
            const span = timeSpan(B, A);
            const expectedSpanInMilliSeconds = 0;
            expect(span.value).toEqual(expectedSpanInMilliSeconds);
        })

})
    // divide(divisor: TimeSpan): TimeSpan
    // divide(divisor: number): TimeSpan,
    // duration(): Duration,
    // value: number