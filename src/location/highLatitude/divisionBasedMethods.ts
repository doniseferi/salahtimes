import { TimeSpan } from "../../time/index";
import { left, right, match } from "../../either/index";
import { OneSeventhMethod, MiddleOfTheNightMethod } from "../index";

const oneSeventhMethod: OneSeventhMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => divisionBasedMethod(timeSpanBetweenSunsetAndSunrise, 7);

const middleOfTheNightMethod: MiddleOfTheNightMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => divisionBasedMethod(timeSpanBetweenSunsetAndSunrise, 4);

const divisionBasedMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>, divisor: number) =>
  (timeSpanBetweenSunsetAndSunrise?.value === (null || undefined))
    ? left(Error("timeSpanBetweenSunsetAndSunrise is null or undefined."))
    : right(match<TimeSpan, Error, TimeSpan>(
      timeSpanBetweenSunsetAndSunrise.divide(divisor),
      (err) => {
        throw err;
      },
      (val) => Object.freeze(val)
    ));

export { oneSeventhMethod, middleOfTheNightMethod }