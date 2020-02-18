import { TimeSpan } from "../../time";

export interface HighLatitudeMethod {
    readonly value: (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => Readonly<TimeSpan>
}