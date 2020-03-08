import { AngularDegrees } from '../maths'
import { TimeSpan } from '../time'
import { failure, success, matchErrorOr, ErrorOr } from '../either'
import { AngleBasedMethod } from '../location'

const angleBasedMethod: AngleBasedMethod = (
  angle: Readonly<AngularDegrees>,
  timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>): ErrorOr<Readonly<TimeSpan>> =>
  (angle === null || angle.value === null)
    ? failure(new ReferenceError('Angle is not null or undefined.'))
    : (timeSpanBetweenSunsetAndSunrise === null ||
      timeSpanBetweenSunsetAndSunrise.value === null)
      ? failure(new ReferenceError(
        'timeSpanBetweenSunsetAndSunrise is null or undefined.'))
      : (angle.value === 0)
        ? failure(new RangeError('Angle cannot have an angle of 0'))
        : success(
          matchErrorOr(
            timeSpanBetweenSunsetAndSunrise.divide(angle.value),
            (err) => {
              throw err
            }, (res) => Object.freeze(res)))

export default angleBasedMethod
