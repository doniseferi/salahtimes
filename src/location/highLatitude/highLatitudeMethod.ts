import { TimeSpan } from "../../time";
import { Either } from "../../either";
import { Degree } from "../../maths";


interface AngleBasedMethod {
    (angle: Readonly<Degree>, timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>): Either<Error, Readonly<TimeSpan>>
}

interface OneSeventhMethod {
    (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>): Either<Error, Readonly<TimeSpan>>
};

interface MiddleOfTheNight extends AngleBasedMethod {}


export {
    AngleBasedMethod, OneSeventhMethod, MiddleOfTheNight
}