import calculateMilliseconds from './calculateMilliseconds'
import { ErrorOr, success, failure } from '../either'

export interface TimeSpan {
  divide(divisor: number): ErrorOr<TimeSpan>
  divideByTimeSpan(divisor: TimeSpan): ErrorOr<TimeSpan>
  value: number
}

const timeSpan = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number
): TimeSpan =>
  Object.freeze({
    value: calculateMilliseconds(days, hours, minutes, seconds, milliseconds),
    divide: (divisor: number): ErrorOr<TimeSpan> =>
      (divisor !== 0)
        ? success<TimeSpan>(
          timeSpan(
            0,
            0,
            0,
            0,
            ~~(
              calculateMilliseconds(
                days,
                hours,
                minutes,
                seconds,
                milliseconds
              ) / divisor
            )
          )
        )
        : failure(new RangeError('Divide by zero error.')),
    divideByTimeSpan: (divisor: TimeSpan): ErrorOr<TimeSpan> =>
      (divisor.value !== 0)
        ? success<TimeSpan>(
          timeSpan(
            0,
            0,
            0,
            0,
            ~~(
              calculateMilliseconds(
                days,
                hours,
                minutes,
                seconds,
                milliseconds
              ) / divisor.value
            )
          )
        )
        : failure(new RangeError('Divide by zero error.'))
  })

export { timeSpan }
