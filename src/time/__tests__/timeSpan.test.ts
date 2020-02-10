import { timeSpan } from '../index';

/* 
    Property-based testing:
    Test contract: Preconditions, post conditions and invariance.
*/
describe('TimeSpan', () => {
    test('returns the time span between two dates', () => {
        const A = new Date(2017, 0, 17, 13, 15, 23, 333);
        const B = new Date(2019, 9, 13, 19, 48, 23, 333);
        const span = timeSpan(B, A);
        const expectedSpanInMilliSeconds = 86333580000;
        expect(span.value).toEqual(expectedSpanInMilliSeconds);
    })
})


    // divide(divisor: TimeSpan): TimeSpan
    // divide(divisor: number): TimeSpan,
    // duration(): Duration,
    // value: number