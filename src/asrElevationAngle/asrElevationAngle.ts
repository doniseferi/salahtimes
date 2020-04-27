import { arccot, tan, degrees, AngularDegrees, abs } from '../maths'
import { ErrorOr, failure, matchErrorOr } from '../either'
import { getNullMembers } from '../validation'
import { Latitude } from '../geoCoordinates'

const asrElevationAngle = (
  shadowLengthToHeightProportion: 1 | 2,
  latitude: Readonly<Latitude>,
  declinationOfTheSun: Readonly<AngularDegrees>): ErrorOr<Readonly<AngularDegrees>> => {
  const nullProperties = getNullMembers([shadowLengthToHeightProportion, latitude, declinationOfTheSun])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  return matchErrorOr(
    degrees(abs(latitude.value - declinationOfTheSun.value)),
    err => failure(err),
    latsubdeg => arccot(
      shadowLengthToHeightProportion + tan(latsubdeg))
  )
}

export { asrElevationAngle }
