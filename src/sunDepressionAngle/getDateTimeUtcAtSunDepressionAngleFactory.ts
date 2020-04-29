import { Convention, convention as defaultConvention } from '../convention/convention'
import { GeoCoordinates } from '../geoCoordinates'
import { failure, ErrorOr } from '../either'
import { getNullMembers } from '../validation'
import { HighLatitudeMethod, getHighLatitudeMethod as defaultHighLatitudeMethod } from '../highLatitudeMethods'
import { getDateTimeUtcOfAngleAfterNoon, getDateTimeUtcOfAngleBeforeNoon } from '../astronomy'

interface SalahStrategy {
  salah: 'fajr' | 'ishaa'
  date: Date
  geoCoordinates: GeoCoordinates
  convention: Convention
  highLatitudeMethod: HighLatitudeMethod
}

const getDateTimeUtcAtSunDepressionAngleFactory = (
  {
    salah,
    date,
    geoCoordinates,
    convention = defaultConvention(),
    highLatitudeMethod = defaultHighLatitudeMethod()
  }: SalahStrategy): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates])
  console.log(highLatitudeMethod)
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

const getIshaaDateTimeUtc = (
  convention: Convention,
  date: Date,
  geoCoordinates: GeoCoordinates): ErrorOr<string> => {
  const nullProperties = getNullMembers([convention, date, geoCoordinates])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  return getDateTimeUtcOfAngleAfterNoon(date, geoCoordinates, convention.ishaa)
}

const getFajrDateTimeUtc = (convention: Convention, date: Date, geoCoordinates: GeoCoordinates): ErrorOr<string> => {
  const nullProperties = getNullMembers([convention, date, geoCoordinates])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  return getDateTimeUtcOfAngleBeforeNoon(date, geoCoordinates, convention.fajr)
}

export {
  getDateTimeUtcAtSunDepressionAngleFactory
}
