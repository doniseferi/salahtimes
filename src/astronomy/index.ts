import { getSunsetDateTimeUtc } from './sunset'
import { SunUpAllDayError, sunUpAllDayError } from './errors/sunUpAllDayError'
import { SunDownAllDayError, sunDownAllDayError } from './errors/sunDownAllDayError'
import { SunDoesntReachAltitudeError, sunDoesntReachAltitudeError } from './errors/sunDoesntReachAltitudeError'
import { getDeclinationOfTheSun } from './declinationOfTheSun'
import { getDateTimeUtcOfAngleBeforeNoon, getDateTimeUtcOfAngleAfterNoon } from './timeAtAngle'
export {
  getSunsetDateTimeUtc,
  SunUpAllDayError,
  sunUpAllDayError,
  SunDownAllDayError,
  sunDownAllDayError,
  getDeclinationOfTheSun,
  SunDoesntReachAltitudeError,
  sunDoesntReachAltitudeError,
  getDateTimeUtcOfAngleBeforeNoon,
  getDateTimeUtcOfAngleAfterNoon
}
