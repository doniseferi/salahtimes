import { right, left, Either } from '../either'

interface AngularDegrees {
  readonly value: number
}

const errorMessage = (value: number): string => `Out of range error. Attempted value: ${value}. Please provide a value within the range of -360 to 360.`

const degrees = (value: number): Either<RangeError, Readonly<AngularDegrees>> => (value < -360 || value > 360)
  ? left(new RangeError(errorMessage(value)))
  : right({ value })

export {
  AngularDegrees,
  degrees
}
