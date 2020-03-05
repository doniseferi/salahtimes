import { arccot, tan, degrees, AngularDegrees } from '../maths'
import { left, right, Either, matchOrThrow } from '../either'

const asrElevationAngle = (
  shadowLength: 1 | 2,
  latitude: Readonly<AngularDegrees>,
  declinationOfTheSun: Readonly<AngularDegrees>): Either<Error, Readonly<AngularDegrees>> => {
  if (shadowLength == null) {
    return left(ErrorFor('Shadow Length'))
  }
  if (latitude?.value == null) {
    return left(ErrorFor('Latitude'))
  }
  if (declinationOfTheSun?.value == null) {
    return left(ErrorFor('Declination of the sun'))
  }
  return right(
    matchOrThrow(
      arccot(
        shadowLength + tan(matchOrThrow(degrees(latitude.value - declinationOfTheSun.value))))))
}

const ErrorFor = (componentName: string): Error => (
  new Error(`${componentName} is either null or undefined. To calculate the Asr elevation Angle please provide ${componentName}`))

export {
  asrElevationAngle
}
