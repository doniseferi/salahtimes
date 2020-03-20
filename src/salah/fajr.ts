import { GeoCoordinates } from '../geoCoordinates'
import { Convention, convention as defauttConvention } from '../convention'
import { ErrorOr, failure } from '../either'
import { getNullMembers } from '../validation'
import getDateTimeUtcAtSunDepressionAngleFactory from '../sunDepressionAngle'

export default (date: Date, geoCoordinates: GeoCoordinates, convention: Convention = defauttConvention()): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates, convention])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  return getDateTimeUtcAtSunDepressionAngleFactory({ salah: 'fajr', date, geoCoordinates, convention })
}
