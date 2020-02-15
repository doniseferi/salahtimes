export interface TimeSpan {
    // divide(divisor: TimeSpan): TimeSpan
    // divide(divisor: : number): TimeSpan,
    // duration(): Duration,
    milliseconds: number
}

const milliSeconds = (days: number, hours: number, minutes: number, seconds: number, milliseconds: number) => (days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
const timeSpan = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number
): TimeSpan => ({
  milliseconds: milliSeconds(days, hours, minutes, seconds, milliseconds)
});
  export { timeSpan };
