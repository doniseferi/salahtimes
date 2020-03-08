import {
  AngularDegrees,
  radiansToAngularDegrees
} from '.'
import {
  angularDegreesToRadians
} from './angularConversions'
import {
  throwOnError,
  ErrorOr,
  failure,
  success
} from '../either'
const arccot = (value: number): ErrorOr<Readonly<AngularDegrees>> =>
  (value === null)
    ? failure(new Error('The angular degrees is null or empty.'))
    : success(throwOnError(radiansToAngularDegrees(Math.atan(1 / value))))

const tan = (degrees: Readonly<AngularDegrees>): number => Math.tan(throwOnError(angularDegreesToRadians(degrees)))

export { arccot, tan }
