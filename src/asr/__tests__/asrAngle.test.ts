import { degree, degreesToRadians } from '../../maths'
import { asrAngle } from '../asrAngle';
import { matchOrThrow } from '../../either';
import { iterativeTest, generateRandomWholeNumber, generateRandomNumber } from '../../testUtils';

type AsrAngleInputInRadians = {
  lengthOfShadow: number,
  latitude: number,
  declinationOfTheSun: number
}

type AsrAngleTestSpec = {
  expected: number,
} & AsrAngleInputInRadians

const generateAsrAngleInput = (): AsrAngleTestSpec => {
  const lengthOfShadow = matchOrThrow(
    degreesToRadians(matchOrThrow(
      degree(
        generateRandomWholeNumber(1, 2)))))
  const latitude = generateRandomNumber(-3.14141811, 3.14141811)
  const declinationOfTheSun = generateRandomNumber(-0.40906507463730651386, 0.40906507463730651386)
  const expected = Math.PI / 2 - Math.atan(lengthOfShadow + Math.tan(latitude - declinationOfTheSun))
  return ({
    lengthOfShadow,
    latitude,
    declinationOfTheSun,
    expected
  })
}

describe('Madhab angles for Asr', () => {
  test('returns the inverse cotangent of (1|2) + tangent of any latitude subtracted by any declination of the sun', () => {
    iterativeTest<void, void>({
      assert: () => {
        // const lengthOfShadow = matchOrThrow(radiansToDegrees(testSpec.lengthOfShadow))
        // const latitude = matchOrThrow(radiansToDegrees(testSpec.latitude))
        // const declination = matchOrThrow(radiansToDegrees(testSpec.declinationOfTheSun))
        // const deg = `arccot(${lengthOfShadow.value} degrees + tan(${latitude.value} degrees - ${declination.value} degrees))`
        // const rad = `arccot(${testSpec.lengthOfShadow} radians + tan(${testSpec.latitude} radians - ${testSpec.declinationOfTheSun} radians))`
        // const actual = asrAngle(lengthOfShadow, latitude, declination)
        // console.log({ actual, expected: testSpec.expected, deg, rad });
      },
      numberOfExecutions: 500,
      generateInput: () => generateAsrAngleInput()
    })
  })
  test('returns the correct angle for standard and hanafi methods', () => {
    const latitude = matchOrThrow(degree(51))
    const declinationOfTheSunOn20200226 = matchOrThrow(degree(-9.094927348779462))

    const standard = matchOrThrow(degree(1))
    const actualAngleForStandardMethod = asrAngle(standard, latitude, declinationOfTheSunOn20200226)
    const expectedAngleForStandardCalculation = 20.059015375480953;

    const hanafi = matchOrThrow(degree(2))
    const actualAngleForHanafiMethod = asrAngle(hanafi, latitude, declinationOfTheSunOn20200226)
    const expectedAngleForHanafiCalculation = 14.974533384540926;

    expect(actualAngleForStandardMethod.value).toEqual(expectedAngleForStandardCalculation)
    expect(actualAngleForHanafiMethod.value).toEqual(expectedAngleForHanafiCalculation)
  })
})