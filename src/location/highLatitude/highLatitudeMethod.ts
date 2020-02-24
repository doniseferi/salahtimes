import { TimeSpan } from '../../time'
import { Either } from '../../either'
import { Degree } from '../../maths'

type AngleBasedMethod = (angle: Readonly<Degree>, timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => Either<Error, Readonly<TimeSpan>>

type OneSeventhMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => Either<Error, Readonly<TimeSpan>>;

type MiddleOfTheNightMethod = OneSeventhMethod

export {
  AngleBasedMethod, OneSeventhMethod, MiddleOfTheNightMethod
}
