import { TimeSpan } from '../time'
import { ErrorOr } from '../either'
import divisionBasedMethod from './divisionBasedMethod'

type OneSeventhMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => ErrorOr<Readonly<TimeSpan>>;

const oneSeventhMethod: OneSeventhMethod = (
  timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>): ErrorOr<Readonly<TimeSpan>> => (
  divisionBasedMethod(timeSpanBetweenSunsetAndSunrise, 7))

export {
  OneSeventhMethod,
  oneSeventhMethod
}
