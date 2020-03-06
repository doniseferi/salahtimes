import { arccot, tan, degrees, AngularDegrees } from '../maths'
import { failure, success, throwOnError, ErrorOr } from '../either'
import { getNullProperties } from '../error'

// TODO: try make functional
const asrElevationAngle = (
  shadowLength: 1 | 2,
  latitude: Readonly<AngularDegrees>,
  declinationOfTheSun: Readonly<AngularDegrees>): ErrorOr<Readonly<AngularDegrees>> => {
  if (shadowLength === null || shadowLength === undefined) {
    return failure(new ReferenceError())
  }
    const nullProperties = getNullProperties([latitude, declinationOfTheSun])

  return nullProperties.length > 0
    ? failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
    : success(
      throwOnError(
        arccot(
          shadowLength + tan(throwOnError(degrees(latitude.value - declinationOfTheSun.value))))))
}

export {
  asrElevationAngle
}
