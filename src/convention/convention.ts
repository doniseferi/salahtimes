import { Degree, degree } from '../maths'
import { Either } from '../either'

interface Convention {
  name: string
  fajr(): Either<RangeError, Readonly<Degree>>
  isha(): Either<RangeError, Readonly<Degree>>
}

const convention = (name: string): Convention => ({ fajr: () => Object.freeze(degree(0)), isha: () => Object.freeze(degree(0)), name })

export default convention
