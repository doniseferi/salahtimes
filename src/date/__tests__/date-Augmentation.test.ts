import '../date-Augmentation'
import { timeSpan, TimeSpan } from '../../time'
import {
  iterativeTest,
  generateRandomDate,
  generateRandomWholeNumber
} from '../../testUtils/index'

describe('Date', () => {
  test('generates a new date when a time span is added to it', () => {
    iterativeTest<DateTestResult, void>({
      numberOfExecutions: 500,
      generateInput: () => dateTestResult(),
      assert: (result) => {
        const expected = new Date(
          result.initialDate.getTime() + result.timeSpan.value
        )
        const actual = result.initialDate.addTimeSpan(result.timeSpan)
        expect(actual).toEqual(expected)
      }
    })
  })
  test('generates a new date when a time span is subtracted from it', () => {
    iterativeTest<DateTestResult, void>({
      numberOfExecutions: 500,
      generateInput: () => dateTestResult(),
      assert: (result) => {
        const expected = new Date(
          result.initialDate.getTime() - result.timeSpan.value
        )
        const actual = result.initialDate.subtractTimeSpan(result.timeSpan)
        expect(actual).toEqual(expected)
      }
    })
  })
  test('adds the number of days specified to a date', () => {
    iterativeTest<DateTestResult, void>({
      numberOfExecutions: 500,
      generateInput: () => dateTestResult(),
      assert: (result) => {
        const expected = new Date(result.initialDate.getTime())
        expected.setDate(expected.getDate() + result.randomNumber)
        const actual = result.initialDate.addDays(result.randomNumber)
        expect(actual).toEqual(expected)
      }
    })
  })
  test('subtracts the number of days specified to a date', () => {
    iterativeTest<DateTestResult, void>({
      numberOfExecutions: 500,
      generateInput: () => dateTestResult(),
      assert: (result) => {
        const expected = new Date(result.initialDate.getTime())
        expected.setDate(expected.getDate() - result.randomNumber)
        const actual = result.initialDate.subtractDays(result.randomNumber)
        expect(actual).toEqual(expected)
      }
    })
  })
})

interface DateTestResult {
  initialDate: Readonly<Date>
  randomNumber: number
  timeSpan: Readonly<TimeSpan>
}
const dateTestResult = (): DateTestResult => ({
  initialDate: generateRandomDate(2000, 2050),
  randomNumber: generateRandomWholeNumber(0, 1000),
  timeSpan: timeSpan(
    generateRandomWholeNumber(0, 1000),
    generateRandomWholeNumber(0, 1000),
    generateRandomWholeNumber(0, 1000),
    generateRandomWholeNumber(0, 1000),
    generateRandomWholeNumber(0, 1000)
  )
})
