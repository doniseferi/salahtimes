import { timeSpan, TimeSpan } from '../index';
import { iterativeTest, generateRandomDate } from '../../testUtils/';

interface TimeSpanTestInput {
    A: Date,
    B: Date,
}

describe('TimeSpan', () => {
    test('returns the time span in milliseconds between two dates', () => {
        const A = new Date(2017, 0, 17, 13, 15, 23, 333);
        const B = new Date(2019, 9, 13, 19, 48, 23, 333);
        const span = timeSpan(B, A);
        const expectedSpanInMilliSeconds = 86333580000;
        expect(span.value).toEqual(expectedSpanInMilliSeconds);

        iterativeTest<TimeSpanTestInput, void>({
            numberOfExecutions: 500,
            generateInput: () => { A: generateRandomDate(), B: generateRandomDate()},
            assert: input => expect(
                () => {
                    expect(timeSpan(input.A, input.B)).toEqual(input.A - input.B);
                }
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