import suntimes from 'suntimes'
import getDateTimeUtcAtSunDepressionAngle from './getDateTimeUtcAtSunDepressionAngle'
import { Convention, convention as defauttConvention } from '../convention/convention'
import { GeoCoordinate } from '../location'
import { failure, ErrorOr } from '../either'
import { getNullMembers } from '../validation'

export interface SalahStrategy {
  salah: 'fajr' | 'ishaa'
  date: Date
  geoCoordinates: GeoCoordinate
  convention: Convention
}

export default ({ salah, date, geoCoordinates, convention = defauttConvention() }: SalahStrategy): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  switch (salah) {
    case 'fajr':
      return getFajrDateTimeUtc(convention, date, geoCoordinates)
    case 'ishaa':
      return getIshaaDateTimeUtc(convention, date, geoCoordinates)
    default:
      return failure(new Error('Please provide a value of \'fajr\' or \'ishaa\'.There are no other methods are supported.'))
  }
}
const getIshaaDateTimeUtc = (convention: Convention, date: Date, geoCoordinates: GeoCoordinate): ErrorOr<string> => (
  getDateTimeUtcAtSunDepressionAngle({ getSalahTimeUtc: suntimes.getDateTimeUtcOfAngleAfterNoon, salahAngle: convention.ishaa, date, geoCoordinates }))

const getFajrDateTimeUtc = (convention: Convention, date: Date, geoCoordinates: GeoCoordinate): ErrorOr<string> => (
  getDateTimeUtcAtSunDepressionAngle({ getSalahTimeUtc: suntimes.getDateTimeUtcOfAngleBeforeNoon, salahAngle: convention.fajr, date, geoCoordinates }))
