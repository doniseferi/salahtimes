import { TimeSpan } from '../../time'
import { Either } from '../../either'
import { AngularDegrees } from '../../maths'

type AngleBasedMethod = (angle: Readonly<AngularDegrees>, timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => Either<Error, Readonly<TimeSpan>>

type OneSeventhMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => Either<Error, Readonly<TimeSpan>>;

type MiddleOfTheNightMethod = OneSeventhMethod

export {
  AngleBasedMethod, OneSeventhMethod, MiddleOfTheNightMethod
}
