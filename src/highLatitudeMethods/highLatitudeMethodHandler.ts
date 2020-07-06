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

const fajrHighLatitudeMethodHandler: HighLatitudeMethodHandler = (
  highLatitudeMethod: HighLatitudeMethod,
  date: Date,
  geoCoordinates: GeoCoordinates,
  salahAngle: Readonly<AngularDegrees>): ErrorOr<string> => {
  const nullProperties = getNullMembers([date, geoCoordinates, salahAngle, highLatitudeMethod])

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Please provide a value for ${nullProperties.join(',')}`))
  }

  const sunset = new Date(throwOnError(getSunsetDateTimeUtcAdapter(remOneDay(date), geoCoordinates)))
  const sunrise = new Date(throwOnError(getSunriseDateTimeUtcAdapter(date, geoCoordinates)))
  const spanBetweenSunriseAndSunset = (sunrise.getTime() - sunset.getTime())
  const span = timeSpan(0, 0, 0, 0, spanBetweenSunriseAndSunset)
  const fajrSpan = highLatitudeMethodHandler(highLatitudeMethod, span, salahAngle)

  return matchErrorOr(
    fajrSpan,
    err => failure(err),
    val => success(sunrise.subtract(val).toISOString())
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
  const sunrise = new Date(throwOnError(getSunriseDateTimeUtcAdapter(addOneDay(date), geoCoordinates)))
  const spanny = sunrise.getTime() - sunset.getTime()
  const spanBetweenSunriseAndSunset = timeSpan(0, 0, 0, 0, spanny)
  const ishaaSpan = highLatitudeMethodHandler(highLatitudeMethod, spanBetweenSunriseAndSunset, salahAngle)

  return matchErrorOr(
    ishaaSpan,
    err => failure(err),
    val => success(sunset.add(val).toISOString())
  )
}

const addOneDay = (date: Date): Date => {
  var _date = new Date(date.valueOf())
  _date.setDate(date.getDate() + 1)
  return _date
}

const remOneDay = (date: Date): Date => {
  var _date = new Date(date.valueOf())
  _date.setDate(date.getDate() - 1)
  return _date
}

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
export {
  fajrHighLatitudeMethodHandler,
  ishaaHighLatitudeMethodHandler,
  HighLatitudeMethodHandler,
  HighLatitudeMethod
}
