import { Convention, convention as defauttConvention } from '../convention'
import { GeoCoordinates } from '../geoCoordinates'
import { ErrorOr, failure } from '../either'
import { getNullMembers } from '../validation'
import getDateTimeUtcAtSunDepressionAngleFactory from '../sunDepressionAngle'

export default (date: Date, geoCoordinates: GeoCoordinates, convention: Convention = defauttConvention()): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates, convention])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  return getDateTimeUtcAtSunDepressionAngleFactory({
    salah: 'ishaa',
    date,
    geoCoordinates,
    convention
  })
}
