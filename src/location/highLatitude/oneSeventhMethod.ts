import { TimeSpan } from '../../time';
import { Either, left, right } from '../../either';

export default (timeSpanBetweenSunsetAndSunrise: TimeSpan): Either<Error, TimeSpan> => (timeSpanBetweenSunsetAndSunrise) !== null
    ? right(timeSpanBetweenSunsetAndSunrise.divide(7))
    : left(new Error());