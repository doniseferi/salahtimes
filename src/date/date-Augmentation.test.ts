import './date-Augmentation'
import { timeSpan, TimeSpan } from '../time/index'
import {
  iterativeTest,
  generateRandomDate,
  generateRandomWholeNumber
} from '../testUtils/index'

describe('Date', () => {
  test('generates a new date when a time span is added to it', () => {
    iterativeTest<DateTestResult, void>({
      numberOfExecutions: 500,
      generateInput: () => dateTestResult(),
      assert: (result) => {
        const expected = new Date(
          result.initialDate.getTime() + result.timeSpan.value
        )
        const actual = result.initialDate.add(result.timeSpan)
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
        const actual = result.initialDate.subtract(result.timeSpan)
        expect(actual).toEqual(expected)
      }
    })
  })
})

interface DateTestResult {
  initialDate: Readonly<Date>
  timeSpan: Readonly<TimeSpan>
}
const dateTestResult = (): DateTestResult => ({
  initialDate: generateRandomDate(2000, 2050),
  timeSpan: timeSpan(
    generateRandomWholeNumber(0, 1000),
    generateRandomWholeNumber(0, 1000),
    generateRandomWholeNumber(0, 1000),
    generateRandomWholeNumber(0, 1000),
    generateRandomWholeNumber(0, 1000)
  )
})
