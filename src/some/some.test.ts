import {
    match,
    none,
    some
} from './index';

describe('Some or None', () => {
    test('Some returns the value', () => {
        expect(someNumber).toEqual(10);
    });
    test('', () => {
        expect(noNumber).toEqual({});
    });
    test('', () => {
        expect(defaultNumber).toEqual(5);
    });
    test('', () => {
        expect(someOrNone(true)).toEqual(10);
    });
    test('', () => {
        expect(someOrNone(false)).toEqual(10);
    });
    test('', () => {
        expect(match<number>(someOrNone(true), none, (value) => {return value * 2})).toEqual(20);
    });
    test('', () => {
        expect(match<number>(someOrNone(false), none, (value) => value)).toEqual(5);
    });
    test('', () => {
        expect(match<number>(someOrNone(false), none, (value) => value)).toEqual(5);
    });
    test('', () => {
        expect(match<number>(someOrNone(false), () => none(20), (value) => value)).toEqual(20);
    });
});

const someNumber = some(10);
const noNumber = none<number>();
const defaultNumber = none<number>(5);
const someOrNone = (hasSome: boolean) => (hasSome) ? some(10) : none(5);
