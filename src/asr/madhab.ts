import { asrElevationAngle } from './asrElevationAngle'
import { AngularDegrees } from '../maths/degree'
import { ErrorOr } from '../either'

type AsrAngle = Readonly<AngularDegrees>

const standard = (latitude: Readonly<AngularDegrees>, declinationOfTheSub: Readonly<AngularDegrees>): ErrorOr<AsrAngle> => asrElevationAngle(1, latitude, declinationOfTheSub)
const shafii = (latitude: Readonly<AngularDegrees>, declinationOfTheSub: Readonly<AngularDegrees>): ErrorOr<AsrAngle> => asrElevationAngle(1, latitude, declinationOfTheSub)
const maliki = (latitude: Readonly<AngularDegrees>, declinationOfTheSub: Readonly<AngularDegrees>): ErrorOr<AsrAngle> => asrElevationAngle(1, latitude, declinationOfTheSub)
const hanbali = (latitude: Readonly<AngularDegrees>, declinationOfTheSub: Readonly<AngularDegrees>): ErrorOr<AsrAngle> => asrElevationAngle(1, latitude, declinationOfTheSub)
const hanafi = (latitude: Readonly<AngularDegrees>, declinationOfTheSub: Readonly<AngularDegrees>): ErrorOr<AsrAngle> => asrElevationAngle(2, latitude, declinationOfTheSub)

export {
  AsrAngle,
  standard,
  shafii,
  maliki,
  hanbali,
  hanafi
}
