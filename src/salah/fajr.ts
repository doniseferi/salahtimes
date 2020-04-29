import { Convention, convention as defaultConvention } from '../convention'
import { GeoCoordinates } from '../geoCoordinates'
import { ErrorOr, failure } from '../either'
import { getNullMembers } from '../validation'
import { HighLatitudeMethod, getHighLatitudeMethod as defaultHighLatitudeMethod } from '../highLatitudeMethods'
import { getDateTimeUtcOfAngleBeforeNoon } from '../astronomy'

const fajr = (
  date: Date,
  geoCoordinates: GeoCoordinates,
  convention: Convention = defaultConvention(),
  highLatitudeMethod: HighLatitudeMethod = defaultHighLatitudeMethod()): ErrorOr<string> => {
  console.log(highLatitudeMethod)
  const nullProperties = getNullMembers([convention, date, geoCoordinates])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  return getDateTimeUtcOfAngleBeforeNoon(date, geoCoordinates, convention.fajr)
}

export { fajr }
