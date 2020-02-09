export interface TimeSpan {
    add(timeSpan: TimeSpan): TimeSpan
    subtract(timeSpan: TimeSpan): TimeSpan
    subtract(timeSpan: TimeSpan): Date
    multiply(factor: number): TimeSpan
    multiply(factor: TimeSpan): TimeSpan
    divide(divisor: TimeSpan): TimeSpan
    divide(divisor: number): TimeSpan,
    duration(): Duration,
    value: number
}

export interface Date {
    add(timeSpan: TimeSpan): Date
    subtract(timeSpan: TimeSpan): Date
    subtract(timeSpan: TimeSpan): Date
    multiply(factor: number): TimeSpan
    multiply(factor: TimeSpan): TimeSpan
    divide(divisor: TimeSpan): TimeSpan
    divide(divisor: number): TimeSpan,
}