import { ErrorOr, failure, success, matchErrorOr, throwOnError } from '../either'
import { AngularDegrees, radiansToAngularDegrees, angularDegreesToRadians } from '.'

const arccot = (value: number): ErrorOr<Readonly<AngularDegrees>> =>
  (value === null)
    ? failure(new Error('The angular degrees is null or empty.'))
    : matchErrorOr(
      radiansToAngularDegrees(Math.atan(1 / value)),
      err => failure(err),
      result => success(result))

const tan = (degrees: Readonly<AngularDegrees>): number => Math.tan(throwOnError(angularDegreesToRadians(degrees)))

export { arccot, tan }
