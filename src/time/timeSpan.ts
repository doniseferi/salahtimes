import calculateMilliseconds from './calculateMilliseconds';
import { Either, right, left } from '../either';

export interface TimeSpan {
  divide(divisor: number): TimeSpan;
  divideByTimeSpan(divisor: TimeSpan): TimeSpan;
  value: number;
};

const timeSpan = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number
): TimeSpan => ({
  value: calculateMilliseconds(days, hours, minutes, seconds, milliseconds),
  divide: (divisor: number) =>
    fromMilliseconds(
      ~~(
        calculateMilliseconds(days, hours, minutes, seconds, milliseconds) /
        divisor
      )
    ),
  divideByTimeSpan: (divisor: TimeSpan) =>
    fromMilliseconds(
      ~~(
        calculateMilliseconds(days, hours, minutes, seconds, milliseconds) /
        divisor.value
      )
    )
});

const fromMilliseconds = (value: number): Either<TimeSpan, RangeError> => (value) !== 0
  ? right(timeSpan(0, 0, 0, 0, value))
  : left(new RangeError('Divide by zero error.'));

export { timeSpan };
