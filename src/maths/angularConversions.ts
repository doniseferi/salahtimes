import { Either, right, left } from '../either'
import { AngularDegrees, degrees } from '.'

const angularConst = 0.017453292519943295769236907684888

const radiansToAngularDegrees = (radians: number): Either<RangeError, AngularDegrees> => degrees(radians / angularConst)

const angularDegreesToRadians = (degrees: Readonly<AngularDegrees>): Either<Error, number> =>
  (degrees?.value === null)
    ? left(new Error('degrees is null or undefined.'))
    : right(degrees.value * angularConst)

const radiansToAngularDegreesNumericConversion = (radians: number): number => radians / angularConst

const angularDegreesToRadiansNumericConversion = (degrees: number): number => degrees * angularConst

export {
  angularConst,
  radiansToAngularDegrees,
  angularDegreesToRadians,
  radiansToAngularDegreesNumericConversion,
  angularDegreesToRadiansNumericConversion
}
