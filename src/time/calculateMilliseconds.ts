export default (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number
): number => (days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds
