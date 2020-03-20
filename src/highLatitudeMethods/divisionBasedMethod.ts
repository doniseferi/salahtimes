import { TimeSpan } from '../time'
import { ErrorOr, failure, matchErrorOr, success } from '../either'
import { getNullMembers } from '../validation'

export default (
  timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>,
  divisor: number
): ErrorOr<Readonly<TimeSpan>> => {
  const nullProperties = getNullMembers([timeSpanBetweenSunsetAndSunrise, divisor])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  return matchErrorOr(
    timeSpanBetweenSunsetAndSunrise.divide(divisor),
    err => failure(err),
    timeSpan => success(timeSpan))
}
