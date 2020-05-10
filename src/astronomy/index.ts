import { SunUpAllDayError, sunUpAllDayError } from './errors/sunUpAllDayError'
import { SunDownAllDayError, sunDownAllDayError } from './errors/sunDownAllDayError'
import { SunDoesntReachAltitudeError, sunDoesntReachAltitudeError } from './errors/sunDoesntReachAltitudeError'
import { getDeclinationOfTheSun } from './declinationOfTheSun'
import { GeoCoordinates } from '../geoCoordinates'
import { ErrorOr } from '../either'
import { getSunsetDateTimeUtcAdapter } from './getSunsetDateTimeUtcAdapter'
import { getSunriseDateTimeUtcAdapter } from './getSunriseDateTimeUtcAdapter'
import {
  getDateTimeUtcOfAngleBeforeNoonAdapter,
  getDateTimeUtcOfAngleAfterNoonAdapter
} from './getDateTimeAtAngleAdapter'
import {
  GetDateTimeUtcAtAngle,
  GetDateTimeUtcAtAngleStrategy,
  getDateTimeUtcAtAngleStrategy
} from './getDateTimeUtcAtAngleStrategy'

type GetDateTimeUtc = (
  date: Date,
  geoCoordinates: Readonly<GeoCoordinates>) => ErrorOr<string>

export {
  GetDateTimeUtc,
  getSunsetDateTimeUtcAdapter,
  getSunriseDateTimeUtcAdapter,
  SunUpAllDayError,
  sunUpAllDayError,
  SunDownAllDayError,
  sunDownAllDayError,
  getDeclinationOfTheSun,
  SunDoesntReachAltitudeError,
  sunDoesntReachAltitudeError,
  getDateTimeUtcOfAngleBeforeNoonAdapter,
  getDateTimeUtcOfAngleAfterNoonAdapter,
  GetDateTimeUtcAtAngle,
  GetDateTimeUtcAtAngleStrategy,
  getDateTimeUtcAtAngleStrategy
}
