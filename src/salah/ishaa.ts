import salahStrategy from './salahStrategy'
import { GeoCoordinate } from '../location'
import { Convention, convention as defauttConvention } from '../convention'
import { ErrorOr } from '../either'

export default (date: Date, geoCoordinates: GeoCoordinate, convention: Convention = defauttConvention()): ErrorOr<string> =>
  salahStrategy({ salah: 'ishaa', date, geoCoordinates, convention })
