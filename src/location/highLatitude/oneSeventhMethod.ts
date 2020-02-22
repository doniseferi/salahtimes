import { TimeSpan } from "../../time";
import { left, right, match } from "../../either";
import { OneSeventhMethod } from "../index";


export default (): OneSeventhMethod => (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) =>
  Object.freeze((timeSpanBetweenSunsetAndSunrise !== (null || undefined))
    ? right<Readonly<TimeSpan>>(
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
    ));