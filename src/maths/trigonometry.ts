import { Degree, degree } from '.'
import { Either, match } from '../either'

const radiansToDegrees = (radians: number): Either<RangeError, Degree> => degree(radians * (180 / Math.PI))

const arccot = (degree: Readonly<Degree>): number => match(radiansToDegrees(Math.PI / 2 - Math.atan(degree.value)), (err) => { throw err }, (deg) => deg.value)

export { arccot }
