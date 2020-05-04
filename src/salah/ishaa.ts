import { Convention, convention as defaultConvention } from '../convention'
import { GeoCoordinates } from '../geoCoordinates'
import { HighLatitudeMethod } from '../highLatitudeMethods'
import { ErrorOr } from '../either'
import { getDateTimeUtcOfAngleAfterNoon, getDateTimeUtcAtAngleStrategy } from '../astronomy'

const ishaa = (
  date: Date,
  geoCoordinates: GeoCoordinates,
  convention: Convention = defaultConvention(),
  highLatitudeMethod: HighLatitudeMethod = 'AngleBasedMethod'
): ErrorOr<string> =>
  getDateTimeUtcAtAngleStrategy(
    getDateTimeUtcOfAngleAfterNoon, date, geoCoordinates, convention.ishaa, highLatitudeMethod)

export { ishaa }
