import calculateMilliseconds from "./calculateMilliseconds";
import { Either, right, left } from "../either";

export interface TimeSpan {
  divide(divisor: number): Either<Error, TimeSpan>;
  divideByTimeSpan(divisor: TimeSpan): Either<Error, TimeSpan>;
  value: number;
}

const timeSpan = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number
) =>
  Object.freeze({
    value: calculateMilliseconds(days, hours, minutes, seconds, milliseconds),
    divide: (divisor: number): Either<RangeError, TimeSpan> =>
      (divisor !== 0)
        ? right<TimeSpan>(
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
        : left(new RangeError("Divide by zero error.")),
    divideByTimeSpan: (divisor: TimeSpan): Either<RangeError, TimeSpan> =>
      (divisor.value !== 0)
        ? right<TimeSpan>(
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
        : left(new RangeError("Divide by zero error."))
  });

export { timeSpan };
