import { getNullMembers } from '../validation'
import { AngularDegrees } from '../maths'
import { TimeSpan, timeSpan } from '../time'
import { ErrorOr, failure, success } from '../either'

type AngleBasedMethod = (
  angle: Readonly<AngularDegrees>,
  timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>) => ErrorOr<Readonly<TimeSpan>>

const angleBasedMethod: AngleBasedMethod = (
  angle: Readonly<AngularDegrees>,
  span: Readonly<TimeSpan>): ErrorOr<Readonly<TimeSpan>> => {
  const nullProperties = getNullMembers([angle, span])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  const timeSpanForAngle = getTimeSpanForAngle(angle, span)

  return (angle.value === 0)
    ? failure(new RangeError('Angle cannot have an angle of 0'))
    : success(timeSpanForAngle)
}
export {
  AngleBasedMethod,
  angleBasedMethod
}

const getTimeSpanForAngle = (angle: Readonly<AngularDegrees>, span: Readonly<TimeSpan>): TimeSpan => {
  const percentage = (angle.value / 60) * 100
  const percentageOfTimeSpanInMilliseconds = (span.value / 100) * percentage
  return timeSpan(0, 0, 0, 0, percentageOfTimeSpanInMilliseconds)
}
