import { arccot, tan, degree, Degree } from '../maths'
import { left, right, Either, matchOrThrow } from '../either'

// angle = inverse cotangent(lengthOfShadow + tangent(declinationOfTheSun - latitude))
// t Hanafi school says that Asr begins when the length of any object's shadow is twice the length of the object plus the length of that object's shadow at noon.
const asrElevationAngle = (
  shadowLength: Readonly<Degree>,
  latitude: Readonly<Degree>,
  declinationOfTheSun: Readonly<Degree>): Either<Error, Readonly<Degree>> =>
  shadowLength?.value == null
    ? left(ErrorFor('ShadowLength'))
    : latitude?.value == null
      ? left(ErrorFor('Latitude'))
      : declinationOfTheSun?.value == null
        ? left(ErrorFor('Declination of the sun'))
        : right(
          matchOrThrow(
            arccot(
              matchOrThrow(
                degree(
                  shadowLength.value + tan(
                    matchOrThrow(
                      degree(
                        latitude.value - declinationOfTheSun.value))))))))

const ErrorFor = (componentName: string) => (
  new Error(`${componentName} is either null or undefined. 
  To calculate the Asr elevation Angle please provide ${componentName}`))


export {
  asrElevationAngle
}
