import { Degree, degree } from '.'
import { Either, match, left, right } from '../either'

const radiansToDegrees = (radians: number): Either<RangeError, Degree> => degree(radians * (180 / Math.PI))
const degreesToRadians = (degrees: Readonly<Degree>): Either<Error, number> =>
  (degrees?.value !== null)
    ? right(degrees.value * (Math.PI / 180))
    : left(new Error('degrees is null or undefined.'))

// LaTeX formula = arccot(t+tan(D-L))
const arccot = (degrees: Readonly<Degree>): Either<Error, Readonly<Degree>> =>
  (degrees?.value === null)
    ? left(new Error('The angular degrees is null or empty.'))
    : right(
      match(
        degree(Math.PI / 2 - Math.atan(degrees.value)),
        (err) => { throw err },
        (deg) => deg))

const tan = (degrees: Readonly<Degree>): number =>
  Math.tan(
    match(
      degreesToRadians(degrees),
      (err) => { throw err },
      (rad) => rad))

export { arccot, tan, radiansToDegrees, degreesToRadians }
