import { getDateTimeUtcOfAngleBeforeNoon, getDateTimeUtcOfAngleAfterNoon } from 'suntimes'
import getDateTimeUtcAtSunDepressionAngle from './getDateTimeUtcAtSunDepressionAngle'
import { Convention, convention as defauttConvention } from '../convention/convention'
import { GeoCoordinates } from '../geoCoordinates'
import { failure, ErrorOr } from '../either'
import { getNullMembers } from '../validation'

interface SalahStrategy {
  salah: 'fajr' | 'ishaa'
  date: Date
  geoCoordinates: GeoCoordinates
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
const getIshaaDateTimeUtc = (convention: Convention, date: Date, geoCoordinates: GeoCoordinates): ErrorOr<string> => (
  getDateTimeUtcAtSunDepressionAngle({ getSalahTimeUtc: getDateTimeUtcOfAngleAfterNoon, salahAngle: convention.ishaa, date, geoCoordinates }))

const getFajrDateTimeUtc = (convention: Convention, date: Date, geoCoordinates: GeoCoordinates): ErrorOr<string> => (
  getDateTimeUtcAtSunDepressionAngle({ getSalahTimeUtc: getDateTimeUtcOfAngleBeforeNoon, salahAngle: convention.fajr, date, geoCoordinates }))
