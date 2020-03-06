import { TimeSpan } from '../../time'
import { ErrorOr } from '../../either'
import { AngularDegrees } from '../../maths'

type AngleBasedMethod = (angle: Readonly<AngularDegrees>, timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => ErrorOr<Readonly<TimeSpan>>

type OneSeventhMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => ErrorOr<Readonly<TimeSpan>>;

type MiddleOfTheNightMethod = OneSeventhMethod

export {
  AngleBasedMethod, OneSeventhMethod, MiddleOfTheNightMethod
}
