import { TimeSpan } from "../../time";
import { Either, left, right, match } from "../../either";

export default (
  timeSpanBetweenSunsetAndSunrise: TimeSpan
): Either<Error, TimeSpan> =>
  timeSpanBetweenSunsetAndSunrise !== (null || undefined)
    ? right<TimeSpan>(
        match<TimeSpan, Error, TimeSpan>(
          timeSpanBetweenSunsetAndSunrise.divide(7),
          (err) => {
            throw err;
          },
          (val) => val
        )
      )
    : left<Error>(
        new Error(
          "timeSpanBetweenSunsetAndSunrise is either null or undefined."
        )
      );