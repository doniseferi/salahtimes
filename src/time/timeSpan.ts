export interface TimeSpan {
    // divide(divisor: TimeSpan): TimeSpan
    // divide(divisor: : number): TimeSpan,
    // duration(): Duration,
    milliseconds: number
}

const totalMilliseconds = (days: number, hours: number, minutes: number, seconds: number, milliseconds: number) => (days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
const timeSpan = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number
) => ({
  milliseconds: totalMilliseconds(days, hours, minutes, seconds, milliseconds)
});
const timeSpan2 = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number
) => timeSpan(days, hours, minutes, seconds, 0);
const timeSpan3 = (hours: number, minutes: number, seconds: number) =>
  timeSpan(0, hours, minutes, seconds, 0);

  export { timeSpan, timeSpan2, timeSpan3 };
