import { Degree, radiansToDegrees } from '.'
import { Either, left, right, matchOrThrow } from '../either'
import {
  degreesToRadians,
  degreesToRadiansNumericConversion
} from './angularConversions'

const arccot = (degrees: number): Either<Error, Readonly<Degree>> =>
  (degrees === null)
    ? left(new Error('The angular degrees is null or empty.'))
    : right(matchOrThrow(
      radiansToDegrees(Math.atan(1 / degreesToRadiansNumericConversion(degrees)))))

const tan = (degrees: Readonly<Degree>): number => Math.tan(matchOrThrow(degreesToRadians(degrees)))

export { arccot, tan }
