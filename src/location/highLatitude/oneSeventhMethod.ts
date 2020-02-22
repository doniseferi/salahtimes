import { TimeSpan } from "../../time/index";
import { left, right, match } from "../../either/index";
import { OneSeventhMethod } from "../index";


const oneSeventhMethod: OneSeventhMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) =>
  (timeSpanBetweenSunsetAndSunrise?.value === (null || undefined))
    ? left(Error("timeSpanBetweenSunsetAndSunrise is null or undefined."))
    : right(match<TimeSpan, Error, TimeSpan>(
      timeSpanBetweenSunsetAndSunrise.divide(7),
      (err) => {
        throw err;
      },
      (val) => Object.freeze(val)
    ));

export default oneSeventhMethod;