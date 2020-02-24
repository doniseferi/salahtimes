import { TimeSpan } from '../../time/index'
import { left, right, match, Either } from '../../either/index'
import { OneSeventhMethod, MiddleOfTheNightMethod } from '../index'

const oneSeventhMethod: OneSeventhMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>): Either<Error, Readonly<TimeSpan>> => divisionBasedMethod(timeSpanBetweenSunsetAndSunrise, 7)

const middleOfTheNightMethod: MiddleOfTheNightMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>): Either<Error, Readonly<TimeSpan>> => divisionBasedMethod(timeSpanBetweenSunsetAndSunrise, 4)

const divisionBasedMethod = (timeSpanBetweenSunsetAndSunrise: Readonly<TimeSpan>, divisor: number): Either<Error, Readonly<TimeSpan>> =>
  (timeSpanBetweenSunsetAndSunrise?.value === (null ?? undefined))
    ? left(Error('timeSpanBetweenSunsetAndSunrise is null or undefined.'))
    : right(match<TimeSpan, Error, TimeSpan>(
      timeSpanBetweenSunsetAndSunrise.divide(divisor),
      (err) => {
        throw err
      },
      (val) => Object.freeze(val)
    ))

export { oneSeventhMethod, middleOfTheNightMethod }
