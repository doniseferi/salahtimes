import { timeSpan, TimeSpan } from '../index';
import { iterativeTest, generateRandomDate } from '../../testUtils/';

interface TimeSpanTestSubject {
    expect: number,
    actual: number
}

type TupleSplit<T extends any[], L extends number, F = (...a: T) => void> = [
    { init: [], rest: T },
    F extends ((a: infer A, ...z: infer Z) => void) ?
    { init: [A], rest: Z } : never,
    F extends ((a: infer A, b: infer B, ...z: infer Z) => void) ?
    { init: [A, B], rest: Z } : never,
    F extends ((a: infer A, b: infer B, c: infer C, ...z: infer Z) => void) ?
    { init: [A, B, C], rest: Z } : never,
    ...{ init: T, rest: [] }[]
][L];

type Curried<A extends any[], R> =
    <L extends TupleSplit<A, number>['init']>(...args: L) =>
        0 extends L['length'] ? never :
        0 extends TupleSplit<A, L['length']>['rest']['length'] ? R :
        Curried<TupleSplit<A, L['length']>['rest'], R>;

declare function curry<A extends any[], R>(f: (...args: A) => R): Curried<A, R>;

const curriedRandomDate = curry(generateRandomDate);

const generateRandomItem = (minYear: number, maxYear: number): TimeSpanTestSubject => {
    const setMinForDateA = curriedRandomDate(minYear);
    const getDateA = setMinForDateA(maxYear);
    const setMinForDateB = curriedRandomDate(minYear);
    const getDateB = setMinForDateB(maxYear);
    return createTimeSPanTestSubject(getDateA, getDateB);
}

const generatePositiveItem = (earlierYear: number, greaterYear: number): TimeSpanTestSubject => {
    const setMinForDateA = curriedRandomDate(earlierYear);
    const getDateA = setMinForDateA(greaterYear-1);
    const setMinForDateB = curriedRandomDate(greaterYear);
    const getDateB = setMinForDateB(2050);
    return createTimeSPanTestSubject(getDateA, getDateB);
}

const generateNegativeItem = (greaterYear: number, earlierYear: number): TimeSpanTestSubject => {
    const setMinForDateA = curriedRandomDate(greaterYear);
    const getDateA = setMinForDateA(2050);
    const setMinForDateB = curriedRandomDate(earlierYear);
    const getDateB = setMinForDateB(greaterYear-1);
    return createTimeSPanTestSubject(getDateA, getDateB);
}

describe('TimeSpan', () => {
    test('returns the time span in milliseconds between two dates', () => {
        iterativeTest<TimeSpanTestSubject, void>({
            numberOfExecutions: 500,
            generateInput: () => generateRandomItem(2000, 2050),
            assert: input => expect(input.actual).toEqual(input.expect)
        });
    }), test('returns a positive value', () => {
        iterativeTest<TimeSpanTestSubject, void>({
            numberOfExecutions: 500,
            generateInput: () => generatePositiveItem(2000, 2050),
            assert: input => expect(input.actual).toBeGreaterThan(0)
        });
    }), test('returns a negative value', () => {
        iterativeTest<TimeSpanTestSubject, void>({
            numberOfExecutions: 500,
            generateInput: () => generateNegativeItem(2050, 2000),
            assert: input => expect(input.actual).toBeLessThan(0)
        });
    }),
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

const createTimeSPanTestSubject = (getDateA: Date, getDateB: Date) => ({
        expect: getDateA.getTime() - getDateB.getTime(),
        actual: timeSpan(getDateA, getDateB).value
});