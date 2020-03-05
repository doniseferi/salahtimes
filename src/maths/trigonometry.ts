import { AngularDegrees, radiansToAngularDegrees } from '.'
import { Either, left, right, matchOrThrow } from '../either'
import {
  angularDegreesToRadians
} from './angularConversions'

const arccot = (value: number): Either<Error, Readonly<AngularDegrees>> =>
  (value === null)
    ? left(new Error('The angular degrees is null or empty.'))
    : right(matchOrThrow(
      radiansToAngularDegrees(Math.atan(1 / value))))

const tan = (degrees: Readonly<AngularDegrees>): number => Math.tan(matchOrThrow(angularDegreesToRadians(degrees)))

export { arccot, tan }
