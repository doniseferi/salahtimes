export interface TimeSpan {
  // divide(divisor: TimeSpan): TimeSpan
  divide(divisor: number): TimeSpan,
  value: number;
}

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
  divide: (divisor: number) => timeSpan(0,0,0,0, ~~(calculateMilliseconds(
      days,
      hours,
      minutes,
      seconds,
      milliseconds
    ) / divisor))
});

export { timeSpan };
