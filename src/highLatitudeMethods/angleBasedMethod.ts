import { getNullMembers } from '../validation'
import { AngularDegrees } from '../maths'
import { TimeSpan } from '../time'
import { ErrorOr, failure } from '../either'

type AngleBasedMethod = (
  angle: Readonly<AngularDegrees>,
  timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => ErrorOr<Readonly<TimeSpan>>

const angleBasedMethod: AngleBasedMethod = (
  angle: Readonly<AngularDegrees>,
  timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>): ErrorOr<Readonly<TimeSpan>> => {
  const nullProperties = getNullMembers([angle, timeSpanBetweenSunsetAndSunrise])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  return (angle.value === 0)
    ? failure(new RangeError('Angle cannot have an angle of 0'))
    : timeSpanBetweenSunsetAndSunrise.divide(angle.value)
}
export {
  AngleBasedMethod,
  angleBasedMethod
}
