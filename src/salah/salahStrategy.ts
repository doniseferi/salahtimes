import suntimes from 'suntimes'
import belowHorizonMethod from './belowHorizonMethod'
import { Convention, convention as defauttConvention } from '../convention/convention'
import { GeoCoordinate } from '../location'
import { failure, ErrorOr } from '../either'
import { getNullMembers } from '../validation'

interface SalahStrategy {
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
      return belowHorizonMethod({ getSalahTimeUtc: suntimes.getDateTimeUtcOfAngleBeforeNoon, salahAngle: convention.fajr, date, geoCoordinates })
    case 'ishaa':
      return belowHorizonMethod({ getSalahTimeUtc: suntimes.getDateTimeUtcOfAngleAfterNoon, salahAngle: convention.ishaa, date, geoCoordinates })
    default:
      return failure(new Error('Please provide \'fajr\' or \'ishaa\' as no other methods are supported.'))
  }
}
