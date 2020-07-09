import { GeoCoordinates } from '../geoCoordinates'
import { AngularDegrees, degrees } from '../maths'
import { ErrorOr, throwOnError, success, failure, matchErrorOr } from '../either'
import { getSunriseDateTimeUtcAdapter, getSunsetDateTimeUtcAdapter } from '../astronomy'
import { timeSpan, TimeSpan } from '../time'
import { angleBasedMethod, middleOfTheNightMethod, oneSeventhMethod } from '.'
import { getNullMembers } from '../validation'
import '../date/date-Augmentation'

type HighLatitudeMethod = 'AngleBasedMethod' | 'MiddleOfTheNightMethod' | 'OneSeventhMethod'

type HighLatitudeMethodHandler = (
  sunrise: HighLatitudeMethod,
  date: Date,
  geoCoordinates: GeoCoordinates,
  salahAngle: Readonly<AngularDegrees>) => ErrorOr<string>

const highLatitudeMethodHandler = (
  highLatitudeMethod: HighLatitudeMethod,
  spanBetweenSunsetAndSunrise: TimeSpan,
  salahAngle: Readonly<AngularDegrees>): ErrorOr<TimeSpan> => {
  switch (highLatitudeMethod) {
    case 'AngleBasedMethod':
      return angleBasedMethod(throwOnError(degrees(salahAngle.value * -1)), spanBetweenSunsetAndSunrise)
    case 'MiddleOfTheNightMethod':
      return middleOfTheNightMethod(spanBetweenSunsetAndSunrise)
    case 'OneSeventhMethod':
      return oneSeventhMethod(spanBetweenSunsetAndSunrise)
    default:
      return failure(
        new Error(
          'Please provide one of the following values AngleBasedMethod, MiddleOfTheNightMethod or OneSeventhMethod'))
  }
}

const fajrHighLatitudeMethodHandler: HighLatitudeMethodHandler = (
  highLatitudeMethod: HighLatitudeMethod,
  date: Date,
  geoCoordinates: GeoCoordinates,
  salahAngle: Readonly<AngularDegrees>): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates, salahAngle, highLatitudeMethod])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  const sunset = new Date(throwOnError(getSunsetDateTimeUtcAdapter(date.subtractDays(1), geoCoordinates)))
  const sunrise = new Date(throwOnError(getSunriseDateTimeUtcAdapter(date, geoCoordinates)))
  const span = timeSpan(0, 0, 0, 0, sunrise.getTime() - sunset.getTime())
  const fajrSpan = highLatitudeMethodHandler(highLatitudeMethod, span, salahAngle)

  return matchErrorOr(
    fajrSpan,
    err => failure(err),
    val => success(sunrise.subtractTimeSpan(val).toISOString())
  )
}

const ishaaHighLatitudeMethodHandler: HighLatitudeMethodHandler = (
  highLatitudeMethod: HighLatitudeMethod,
  date: Date,
  geoCoordinates: GeoCoordinates,
  salahAngle: Readonly<AngularDegrees>): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates, salahAngle, highLatitudeMethod])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  const sunset = new Date(throwOnError(getSunsetDateTimeUtcAdapter(date, geoCoordinates)))
  const sunrise = new Date(throwOnError(getSunriseDateTimeUtcAdapter(date.addDays(1), geoCoordinates)))
  const spanBetweenSunriseAndSunset = timeSpan(0, 0, 0, 0, sunrise.getTime() - sunset.getTime())
  const ishaaSpan = highLatitudeMethodHandler(highLatitudeMethod, spanBetweenSunriseAndSunset, salahAngle)

  return matchErrorOr(
    ishaaSpan,
    err => failure(err),
    val => success(sunset.addTimeSpan(val).toISOString())
  )
}

export {
  fajrHighLatitudeMethodHandler,
  ishaaHighLatitudeMethodHandler,
  HighLatitudeMethodHandler,
  HighLatitudeMethod
}
