import { Degree, degree } from '.'
import { Either, match, left, right, matchOrThrow } from '../either'

const angularConst = 0.017453292519943295769236907684888
const radiansToDegrees = (radians: number): Either<RangeError, Degree> => degree(radians / angularConst)

const degreesToRadians = (degrees: Readonly<Degree>): Either<Error, number> =>
  (degrees?.value !== null)
    ? right(degrees.value * angularConst)
    : left(new Error('degrees is null or undefined.'))

// LaTeX formula = arccot(t+tan(D-L))
const arccot = (degrees: Readonly<Degree>): Either<Error, Readonly<Degree>> =>
  (degrees?.value === null)
    ? left(new Error('The angular degrees is null or empty.'))
    : right(
      match(
        radiansToDegrees(Math.atan(1 / matchOrThrow(degreesToRadians(degrees)))),
        (err) => { throw err },
        (deg) => deg))

const tan = (degrees: Readonly<Degree>): number =>
  Math.tan(
    match(
      degreesToRadians(degrees),
      (err) => { throw err },
      (rad) => rad))

export { arccot, tan, radiansToDegrees, degreesToRadians }
