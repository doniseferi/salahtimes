import { AngularDegrees, degrees } from '../maths'
import { throwOnError } from '../either'
import { getDeclinationOfTheSun as declination } from 'suntimes'

const getDeclinationOfTheSun = (date: Date): Readonly<AngularDegrees> => throwOnError(degrees(declination(date)))

export { getDeclinationOfTheSun }
