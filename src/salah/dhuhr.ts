
import { Longitude } from '../geoCoordinates'
import { getNullMembers } from '../validation'
import { failure, success, ErrorOr } from '../either'
import { getNoonDateTimeUtc } from 'suntimes'

export default (date: Date, longitude: Readonly<Longitude>): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, longitude])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`${nullProperties.join(',')} is null or undefined`))
  }

  return success(getNoonDateTimeUtc(date, longitude.value))
}
