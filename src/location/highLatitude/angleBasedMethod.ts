import { Degree } from '../../maths/index';
import { TimeSpan } from '../../time/index';
import { left, right, Either, match } from '../../either/index';
import { AngleBasedMethod } from '../index';

export default (): AngleBasedMethod => (
  angle: Readonly<Degree>,
  timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>): Either<Error, Readonly<TimeSpan>> =>
  (angle === null || angle.value === null)
    ? left(new ReferenceError('Angle is not null or undefined.'))
    : (
      timeSpanBetweenSunsetAndSunrise === null ||
      timeSpanBetweenSunsetAndSunrise.value === null
    ) ? left(new ReferenceError(
      'timeSpanBetweenSunsetAndSunrise is null or undefined.'
    )) : (angle.value === 0)
        ? left(new RangeError('Angle cannot have an angle of 0'))
        : right(match(timeSpanBetweenSunsetAndSunrise.divide(angle.value), (err) => {
          throw err;
        }, (res) => res));