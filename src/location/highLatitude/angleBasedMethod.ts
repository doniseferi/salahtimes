import { Degree } from '../../maths';
import { TimeSpan } from '../../time';

export default (angle: Degree, timeSpanBetweenSunsetAndSunrise: TimeSpan) => {
  if (angle === null || angle.value === null) {
    throw new ReferenceError('Angle is not null or undefined.');
  }

  if (
    timeSpanBetweenSunsetAndSunrise === null ||
    timeSpanBetweenSunsetAndSunrise.value === null
  ) {
    throw new ReferenceError(
      'timeSpanBetweenSunsetAndSunrise is null or undefined.'
    );
  }
  if (angle.value === 0) {
    throw new RangeError('Angle cannot have an angle of 0');
  }

  return Object.freeze(timeSpanBetweenSunsetAndSunrise.divide(angle.value));
};
