import { Degree } from "../../maths";
import { TimeSpan } from "../../time";

export default (angle: Degree, timeSpanBetweenSunsetAndSunrise: TimeSpan) => {
  if (angle === null || angle.value === null) {
    throw new ReferenceError("Angle is not null or undefined.");
  }

  if (
    timeSpanBetweenSunsetAndSunrise === null ||
    timeSpanBetweenSunsetAndSunrise.value === null
  ) {
    throw new ReferenceError(
      "timeSpanBetweenSunsetAndSunrise is null or undefined."
    );
  }

  return timeSpanBetweenSunsetAndSunrise.divide(angle.value);
};
