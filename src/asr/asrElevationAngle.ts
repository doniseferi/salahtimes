import { arccot, tan, degrees, AngularDegrees, abs } from '../maths'
import { failure, success, throwOnError, ErrorOr } from '../either'
import { getNullMembers } from '../validation'
import { Latitude } from '../location'

const asrElevationAngle = (
  shadowLengthToHeightProportion: 1 | 2,
  latitude: Readonly<Latitude>,
  declinationOfTheSun: Readonly<AngularDegrees>): ErrorOr<Readonly<AngularDegrees>> => {
  const nullProperties = getNullMembers([shadowLengthToHeightProportion, latitude, declinationOfTheSun])

  return (nullProperties.length > 0)
    ? failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
    : success(throwOnError(
      arccot(shadowLengthToHeightProportion + tan(
        throwOnError(
          degrees(abs(latitude.value - declinationOfTheSun.value)))))))
}

export {
  asrElevationAngle
}
