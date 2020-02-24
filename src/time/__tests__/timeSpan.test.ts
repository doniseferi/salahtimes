import { timeSpan, TimeSpan } from '../index'
import {
  iterativeTest,
  generateRandomWholeNumber
} from '../../testUtils/index'
import { matchOrThrow } from '../../either/index'

interface testSpec {
  expected: number
  actual: TimeSpan
}

describe('TimeSpan', () => {
  test('returns a value in millisecond', () => {
    iterativeTest<testSpec[], void>({
      numberOfExecutions: 500,
      generateInput: () =>
        timeSpanValueTestSpec(
          generateRandomWholeNumber(-1000000000000, 1000000000000)
        ),
      assert: (testSpec) => testSpec.forEach((spec) => expect(spec.actual.value).toEqual(spec.expected))
    })
  })
  test('is divisible by a number', () => {
    iterativeTest<testSpec[], void>({
      numberOfExecutions: 500,
      generateInput: () =>
        timeSpanDivideTestSpec(
          generateRandomWholeNumber(-1_000_000_000_000, 1_000_000_000_000),
          generateRandomWholeNumber(-1_000_000_000_000, 1_000_000_000_000)
        ),
      assert: (testSpec) => testSpec.forEach((spec) => expect(spec.actual.value).toEqual(spec.expected))
    })
  })
  test('is divisible by a timeSpan', () => {
    iterativeTest<testSpec[], void>({
      numberOfExecutions: 500,
      generateInput: () =>
        timeSpamDivideByTimeSpanTestSpec(
          generateRandomWholeNumber(-1_000_000_000_000, 1_000_000_000_000),
          timeSpan(
            0,
            0,
            0,
            0,
            generateRandomWholeNumber(-1_000_000_000_000, 1_000_000_000_000)
          )
        ),
      assert: (testSpec) => testSpec.forEach((spec) => expect(spec.actual.value).toEqual(spec.expected))
    })
  })
})

const timeSpanUnits = {
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  second: 1000,
  millisecond: 1
}

const timeSpanValueTestSpec = (value: number): testSpec[] => [
  {
    expected: timeSpanUnits.day * value,
    actual: timeSpan(value, 0, 0, 0, 0)
  },
  {
    expected: timeSpanUnits.hour * value,
    actual: timeSpan(0, value, 0, 0, 0)
  },
  {
    expected: timeSpanUnits.minute * value,
    actual: timeSpan(0, 0, value, 0, 0)
  },
  {
    expected: timeSpanUnits.second * value,
    actual: timeSpan(0, 0, 0, value, 0)
  },
  {
    expected: timeSpanUnits.millisecond * value,
    actual: timeSpan(0, 0, 0, 0, value)
  }
]

const timeSpanDivideTestSpec = (
  initialValue: number,
  divisor: number
): testSpec[] => [
  {
    expected: ((timeSpanUnits.day * initialValue) / divisor) >> 0,
    actual: matchOrThrow(timeSpan(initialValue, 0, 0, 0, 0).divide(divisor))
  },
  {
    expected: ((timeSpanUnits.hour * initialValue) / divisor) >> 0,
    actual: matchOrThrow(timeSpan(0, initialValue, 0, 0, 0).divide(divisor))
  },
  {
    expected: ((timeSpanUnits.minute * initialValue) / divisor) >> 0,
    actual: matchOrThrow(timeSpan(0, 0, initialValue, 0, 0).divide(divisor))
  },
  {
    expected: ((timeSpanUnits.second * initialValue) / divisor) >> 0,
    actual: matchOrThrow(timeSpan(0, 0, 0, initialValue, 0).divide(divisor))
  },
  {
    expected: ((timeSpanUnits.millisecond * initialValue) / divisor) >> 0,
    actual: matchOrThrow(timeSpan(0, 0, 0, 0, initialValue).divide(divisor))
  }
]

const timeSpamDivideByTimeSpanTestSpec = (
  initialValue: number,
  divisor: TimeSpan
): testSpec[] => [
  {
    expected: ((timeSpanUnits.day * initialValue) / divisor.value) >> 0,
    actual: matchOrThrow(timeSpan(initialValue, 0, 0, 0, 0).divideByTimeSpan(divisor))
  },
  {
    expected: ((timeSpanUnits.hour * initialValue) / divisor.value) >> 0,
    actual: matchOrThrow(timeSpan(0, initialValue, 0, 0, 0).divideByTimeSpan(divisor))
  },
  {
    expected: ((timeSpanUnits.minute * initialValue) / divisor.value) >> 0,
    actual: matchOrThrow(timeSpan(0, 0, initialValue, 0, 0).divideByTimeSpan(divisor))
  },
  {
    expected: ((timeSpanUnits.second * initialValue) / divisor.value) >> 0,
    actual: matchOrThrow(timeSpan(0, 0, 0, initialValue, 0).divideByTimeSpan(divisor))
  },
  {
    expected: ((timeSpanUnits.millisecond * initialValue) / divisor.value) >> 0,
    actual: matchOrThrow(timeSpan(0, 0, 0, 0, initialValue).divideByTimeSpan(divisor))
  }
]
