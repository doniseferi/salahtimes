export interface TimeSpan {
  divide(divisor: number): TimeSpan;
  divideByTimeSpan(divisor: TimeSpan): TimeSpan;
  value: number;
}

const millisecond = (value: number) => timeSpan(0, 0, 0, 0, value);

const calculateMilliseconds = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number
) =>
  (days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds) * 1000 +
  milliseconds;
const timeSpan = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number
): TimeSpan => ({
  value: calculateMilliseconds(days, hours, minutes, seconds, milliseconds),
  divide: (divisor: number) =>
    millisecond(
      ~~(
        calculateMilliseconds(days, hours, minutes, seconds, milliseconds) /
        divisor
      )
    ),
  divideByTimeSpan: (divisor: TimeSpan) =>
    millisecond(
      ~~(
        calculateMilliseconds(days, hours, minutes, seconds, milliseconds) /
        divisor.value
      )
    )
});

export { timeSpan };
