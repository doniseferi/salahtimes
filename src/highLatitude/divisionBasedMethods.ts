import { TimeSpan } from '../time'
import { failure, success, matchErrorOr, ErrorOr } from '../either'
import { OneSeventhMethod, MiddleOfTheNightMethod } from '../location'

const oneSeventhMethod: OneSeventhMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>): ErrorOr<Readonly<TimeSpan>> => divisionBasedMethod(timeSpanBetweenSunsetAndSunrise, 7)

const middleOfTheNightMethod: MiddleOfTheNightMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>): ErrorOr<Readonly<TimeSpan>> => divisionBasedMethod(timeSpanBetweenSunsetAndSunrise, 4)

const divisionBasedMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>, divisor: number): ErrorOr<Readonly<TimeSpan>> =>
  (timeSpanBetweenSunsetAndSunrise?.value === (null ?? undefined))
    ? failure(Error('timeSpanBetweenSunsetAndSunrise is null or undefined.'))
    : success(matchErrorOr(
      timeSpanBetweenSunsetAndSunrise.divide(divisor),
      (err) => {
        throw err
      },
      (val) => Object.freeze(val)
    ))

export { oneSeventhMethod, middleOfTheNightMethod }
