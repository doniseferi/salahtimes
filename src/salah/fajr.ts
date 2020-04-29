import { GeoCoordinates } from '../geoCoordinates'
import { Convention, convention as defaultConvention } from '../convention'
import { ErrorOr, failure } from '../either'
import { getNullMembers } from '../validation'
import { getDateTimeUtcAtSunDepressionAngleFactory } from '../sunDepressionAngle'
import { HighLatitudeMethod, getHighLatitudeMethod as defaultHighLatitudeMethod } from '../highLatitudeMethods'

const fajr = (
  date: Date,
  geoCoordinates: GeoCoordinates,
  convention: Convention = defaultConvention(),
  highLatitudeMethod: HighLatitudeMethod = defaultHighLatitudeMethod()): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates, convention])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  return getDateTimeUtcAtSunDepressionAngleFactory({
    salah: 'fajr',
    date,
    geoCoordinates,
    convention,
    highLatitudeMethod
  })
}

export { fajr }
