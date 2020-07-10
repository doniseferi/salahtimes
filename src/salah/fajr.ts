import { Convention, convention as defaultConvention } from '../convention'
import { GeoCoordinates } from '../geoCoordinates'
import { ErrorOr, failure, matchErrorOr, success } from '../either'
import { getDateTimeUtcOfAngleBeforeNoonAdapter } from '../astronomy'
import { HighLatitudeMethod, fajrHighLatitudeMethodHandler } from '../highLatitudeMethods'
import '../date/date-Augmentation'

const fajr = (
  date: Date,
  geoCoordinates: GeoCoordinates,
  convention: Convention = defaultConvention(),
  highLatitudeMethod: HighLatitudeMethod = 'AngleBasedMethod'
): ErrorOr<string> => matchErrorOr(
  getDateTimeUtcOfAngleBeforeNoonAdapter(date, geoCoordinates, convention.fajr),
  err => err.name === 'SunDoesntReachAltitudeError'
    ? fajrHighLatitudeMethodHandler(highLatitudeMethod, date, geoCoordinates, convention.fajr)
    : failure(err),
  val => success(val))

export { fajr }
