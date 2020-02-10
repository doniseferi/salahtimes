export interface TimeSpan {
    // divide(divisor: TimeSpan): TimeSpan
    // divide(divisor: number): TimeSpan,
    // duration(): Duration,
    value: number
}

const timeSpan = (dateA: Date, dateB: Date): TimeSpan => {
    const value = dateA.getTime() - dateB.getTime();
    return {
        value
    }
}

export { timeSpan };