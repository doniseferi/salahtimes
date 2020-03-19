import getDateTimeUtcAtSunDepressionAngleFactory from '../sunDepressionAngle'
import { Convention, convention as defauttConvention } from '../convention'
import { GeoCoordinate } from '../location'
import { ErrorOr, failure } from '../either'
import { getNullMembers } from '../validation'

export default (date: Date, geoCoordinates: GeoCoordinate, convention: Convention = defauttConvention()): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates, convention])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  return getDateTimeUtcAtSunDepressionAngleFactory({ salah: 'ishaa', date, geoCoordinates, convention })
}
