import { Degree, radiansToDegrees } from '.'
import { Either, left, right, matchOrThrow } from '../either'
import {
  degreesToRadians
} from './angularConversions'

const arccot = (value: number): Either<Error, Readonly<Degree>> =>
  (value === null)
    ? left(new Error('The angular degrees is null or empty.'))
    : right(matchOrThrow(
      radiansToDegrees(Math.atan(1 / value))))

const tan = (degrees: Readonly<Degree>): number => Math.tan(matchOrThrow(degreesToRadians(degrees)))

export { arccot, tan }
