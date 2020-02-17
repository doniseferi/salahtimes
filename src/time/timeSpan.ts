import calculateMilliseconds from './calculateMilliseconds';

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

const fromMilliseconds = (value: number) => timeSpan(0, 0, 0, 0, value)

export { timeSpan };
