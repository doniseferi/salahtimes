import { GeoCoordinates } from '../geoCoordinates'
import { AngularDegrees, degrees } from '../maths'
import { ErrorOr, throwOnError, success, failure } from '../either'
import { getSunriseDateTimeUtc } from '../astronomy'
import { timeSpan } from '../time'
import { maghrib } from '..'
import { angleBasedMethod, middleOfTheNightMethod, oneSeventhMethod } from '.'
import { getNullMembers } from '../validation'

type HighLatitudeMethod = 'AngleBasedMethod' | 'MiddleOfTheNightMethod' | 'OneSeventhMethod'

const highLatitudeMethodHandler = (
  highLatitudeMethod: HighLatitudeMethod,
  date: Date,
  geoCoordinates: GeoCoordinates,
  salahAngle: Readonly<AngularDegrees>): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates, salahAngle, highLatitudeMethod])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  const sunrise = new Date(throwOnError(getSunriseDateTimeUtc(date, geoCoordinates)))
  const sunset = new Date(throwOnError(maghrib(date, geoCoordinates)))
  const span = timeSpan(0, 0, 0, 0, sunrise.getTime() - sunset.getTime())

  switch (highLatitudeMethod) {
    case 'AngleBasedMethod':
      return success(
        sunset.add(
          throwOnError(angleBasedMethod(throwOnError(degrees(salahAngle.value * -1)), span))).toISOString())
    case 'MiddleOfTheNightMethod':
      return success(
        sunset.add(
          throwOnError(middleOfTheNightMethod(span))).toISOString())
    case 'OneSeventhMethod':
      return success(
        sunset.add(
          throwOnError(oneSeventhMethod(span))).toISOString())
    default:
      return failure(
        new Error(
          'Please provide one of the following values AngleBasedMethod, MiddleOfTheNightMethod or OneSeventhMethod'))
  }
}

export {
  highLatitudeMethodHandler,
  HighLatitudeMethod
}
