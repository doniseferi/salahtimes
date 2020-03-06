import { arccot, tan, degrees, AngularDegrees } from '../maths'
import { failure, success, throwOnError, ErrorOr } from '../either'

// TODO: try make functional
const asrElevationAngle = (
  shadowLength: 1 | 2,
  latitude: Readonly<AngularDegrees>,
  declinationOfTheSun: Readonly<AngularDegrees>): ErrorOr<Readonly<AngularDegrees>> => {
  if (shadowLength == null) {
    return failure(ErrorFor('Shadow Length'))
  }
  if (latitude?.value == null) {
    return failure(ErrorFor('Latitude'))
  }
  if (declinationOfTheSun?.value == null) {
    return failure(ErrorFor('Declination of the sun'))
  }
  return success(
    throwOnError(
      arccot(
        shadowLength + tan(throwOnError(degrees(latitude.value - declinationOfTheSun.value))))))
}

const ErrorFor = (componentName: string): Error => (
  new Error(`${componentName} is either null or undefined. To calculate the Asr elevation Angle please provide ${componentName}`))

export {
  asrElevationAngle
}
