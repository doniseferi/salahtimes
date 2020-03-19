import getDateTimeUtcAtSunDepressionAngleFactory from '../sunDepressionAngle'
import { Convention, convention as defauttConvention } from '../convention'
import { GeoCoordinate } from '../location'
import { ErrorOr } from '../either'

export default (date: Date, geoCoordinates: GeoCoordinate, convention: Convention = defauttConvention()): ErrorOr<string> =>
  getDateTimeUtcAtSunDepressionAngleFactory({ salah: 'ishaa', date, geoCoordinates, convention })
