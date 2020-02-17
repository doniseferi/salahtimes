import { TimeSpan } from "../../time";

export interface HighLatitudeMethod {
    value: (timeSpanBetweenSunsetAndSunrise: TimeSpan) => TimeSpan 
}