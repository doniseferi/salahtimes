import { Convention, convention as defaultConvention } from '../convention'
import { GeoCoordinates } from '../geoCoordinates'
import { ErrorOr } from '../either'
import { getDateTimeUtcAtAngleStrategy, getDateTimeUtcOfAngleBeforeNoonAdapter } from '../astronomy'
import { HighLatitudeMethod } from '../highLatitudeMethods'

const fajr = (
  date: Date,
  geoCoordinates: GeoCoordinates,
  convention: Convention = defaultConvention(),
  highLatitudeMethod: HighLatitudeMethod = 'AngleBasedMethod'
): ErrorOr<string> => getDateTimeUtcAtAngleStrategy(
  getDateTimeUtcOfAngleBeforeNoonAdapter, date, geoCoordinates, convention.fajr, highLatitudeMethod)

export { fajr }
