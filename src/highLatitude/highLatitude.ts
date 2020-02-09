interface TimeSpan {
    add(timespan: TimeSpan): TimeSpan
    subtract(timespan: TimeSpan): TimeSpan
    multiply(factor: number): TimeSpan
    multiply(factor: TimeSpan): TimeSpan
    divide(divisor: TimeSpan): TimeSpan
    divide(divisor: number): TimeSpan,
    duration(): Duration,
    value: number
}

interface Duration {
    milliseconds: number,
    minutes: number,
    seconds: number,
    hours: number
}
