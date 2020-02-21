import { timeSpan } from "../time";
import { degree } from "../maths";
import { matchOrThrow } from "../either/either";

const generateRandomNumber = (
    min: number = Number.MIN_SAFE_INTEGER,
    max: number = Number.MAX_SAFE_INTEGER): number =>
    Math.random() * (max - min) + min;

const generateRandomWholeNumber = (min: number = Number.MIN_SAFE_INTEGER,
    max: number = Number.MAX_SAFE_INTEGER): number => Math.round(generateRandomNumber(min, max));

const generateRandomDate = (minYear: number, maxYear: number): Date => {
    const startDate = new Date(minYear, 0, 1, 0, 0, 0, 0);
    const endDate = new Date(maxYear, 11, 31, 23, 59, 59, 999);
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
};

const randomTimeSpan = (milliseconds = Number.MAX_SAFE_INTEGER) => timeSpan(0, 0, 0, 0, milliseconds);

const randomDegree = (minValue: number = 0, maxValue: number = 360) => matchOrThrow(degree(generateRandomNumber(minValue, maxValue)));

export {
    generateRandomNumber,
    generateRandomWholeNumber,
    generateRandomDate,
    randomTimeSpan,
    randomDegree
};