import { asrElevationAngle } from './asrElevationAngle'
import { AngularDegrees } from '../maths/degree'
import { ErrorOr } from '../either'
import { Latitude } from '../location'

type AsrAngle = Readonly<AngularDegrees>

const standard = (latitude: Readonly<Latitude>, declinationOfTheSub: Readonly<AngularDegrees>): ErrorOr<AsrAngle> => asrElevationAngle(1, latitude, declinationOfTheSub)
const shafii = (latitude: Readonly<Latitude>, declinationOfTheSub: Readonly<AngularDegrees>): ErrorOr<AsrAngle> => asrElevationAngle(1, latitude, declinationOfTheSub)
const maliki = (latitude: Readonly<Latitude>, declinationOfTheSub: Readonly<AngularDegrees>): ErrorOr<AsrAngle> => asrElevationAngle(1, latitude, declinationOfTheSub)
const hanbali = (latitude: Readonly<Latitude>, declinationOfTheSub: Readonly<AngularDegrees>): ErrorOr<AsrAngle> => asrElevationAngle(1, latitude, declinationOfTheSub)
const hanafi = (latitude: Readonly<Latitude>, declinationOfTheSub: Readonly<AngularDegrees>): ErrorOr<AsrAngle> => asrElevationAngle(2, latitude, declinationOfTheSub)

export {
  AsrAngle,
  standard,
  shafii,
  maliki,
  hanbali,
  hanafi
}
