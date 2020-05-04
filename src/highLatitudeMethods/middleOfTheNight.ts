import { TimeSpan } from '../time'
import { ErrorOr } from '../either'
import divisionBasedMethod from './divisionBasedMethod'

type MiddleOfTheNightMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => ErrorOr<Readonly<TimeSpan>>

const middleOfTheNightMethod: MiddleOfTheNightMethod = (
  timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>): ErrorOr<Readonly<TimeSpan>> => (
  divisionBasedMethod(timeSpanBetweenSunsetAndSunrise, 4))

export {
  MiddleOfTheNightMethod,
  middleOfTheNightMethod
}
