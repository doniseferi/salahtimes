import { Convention, convention as defaultConvention } from '../convention'
import { GeoCoordinates } from '../geoCoordinates'
import { HighLatitudeMethod, ishaaHighLatitudeMethodHandler } from '../highLatitudeMethods'
import { ErrorOr, matchErrorOr, failure, success } from '../either'
import { getDateTimeUtcOfAngleAfterNoonAdapter } from '../astronomy'
const ishaa = (
  date: Date,
  geoCoordinates: GeoCoordinates,
  convention: Convention = defaultConvention(),
  highLatitudeMethod: HighLatitudeMethod = 'AngleBasedMethod'
): ErrorOr<string> => matchErrorOr(
  getDateTimeUtcOfAngleAfterNoonAdapter(date, geoCoordinates, convention.ishaa),
  err => err.name === 'SunDoesntReachAltitudeError'
    ? ishaaHighLatitudeMethodHandler(highLatitudeMethod, date, geoCoordinates, convention.ishaa)
    : failure(err),
  val => success(val))

export { ishaa }
