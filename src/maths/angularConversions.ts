import { Either, right, left } from '../either'
import { Degree, degree } from '.'

const angularConst = 0.017453292519943295769236907684888

const radiansToDegrees = (radians: number): Either<RangeError, Degree> => degree(radians / angularConst)

const degreesToRadians = (degrees: Readonly<Degree>): Either<Error, number> =>
  (degrees?.value === null)
    ? left(new Error('degrees is null or undefined.'))
    : right(degrees.value * angularConst)

const radiansToDegreesNumericConversion = (radians: number): number => radians / angularConst

const degreesToRadiansNumericConversion = (degrees: number): number => degrees * angularConst

export {
  angularConst,
  radiansToDegrees,
  degreesToRadians,
  radiansToDegreesNumericConversion,
  degreesToRadiansNumericConversion
}
