import { iterativeTest, generateRandomWholeNumber } from '../../testUtils'
import { degrees } from '../../maths'
import { throwOnError } from '../../either'
import { geoCoordinates, latitude, longitude } from '..'

describe('geoCoordinates', () => {
  test('rejects a latitude value less than -90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-90.01, Number.MIN_SAFE_INTEGER),
      assert: (value) => expect(() => geoCoordinates(throwOnError(degrees(value)), throwOnError(degrees(10)))).toThrow(RangeError)
    })
  })
  test('rejects a latitude value greater than 90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(90.01, Number.MAX_SAFE_INTEGER),
      assert: (value) => expect(() => geoCoordinates(throwOnError(degrees(value)), throwOnError(degrees(10)))).toThrow(RangeError)
    })
  })
  test('rejects a longitude value less than -180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-180.01, Number.MIN_SAFE_INTEGER),
      assert: (value) => expect(() => geoCoordinates(throwOnError(degrees(10)), throwOnError(degrees(value)))).toThrow(RangeError)
    })
  })
  test('rejects a longitude value greater than 180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(180.01, Number.MAX_SAFE_INTEGER),
      assert: (value) => expect(() => geoCoordinates(throwOnError(degrees(10)), throwOnError(degrees(value)))).toThrow(RangeError)
    })
  })
  test('accept any latitude within the range of -90 to 90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-90, 90),
      assert: (value) => expect(() => geoCoordinates(throwOnError(degrees(value)), throwOnError(degrees(10)))).not.toThrow()
    })
  })
  test('accept any longitude within the range of -180 to 180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-180, 180),
      assert: (value) => expect(() => geoCoordinates(throwOnError(degrees(10)), throwOnError(degrees(value)))).not.toThrow()
    })
  })
})

describe('Create latitude', () => {
  test('accepts any latitude value between -90 and 90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-90, 90),
      assert: (value) => expect(() => latitude(value)).not.toThrowError()
    })
  })
  test('returns the coordinate value passed in that is between -90 and 90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-90, 90),
      assert: (value) => expect(throwOnError(latitude(value)).value).toEqual(value)
    })
  })
  test('rejects a latitude value less than -90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(Number.MIN_SAFE_INTEGER, -90.01),
      assert: (value) => expect(() => throwOnError(latitude(value))).toThrow(RangeError)
    })
  })
  test('rejects a latitude value greater than 90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(90.01, Number.MAX_SAFE_INTEGER),
      assert: (value) => expect(() => throwOnError(latitude(value))).toThrow(RangeError)
    })
  })
})

describe('Create longitude', () => {
  test('accepts any longitude value between -180 and 180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-180, 180),
      assert: (value) => expect(() => longitude(value)).not.toThrowError()
    })
  })
  test('returns the coordinate value passed in that is between -180 and 180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-180, 180),
      assert: (value) => expect(throwOnError(longitude(value)).value).toEqual(value)
    })
  })
  test('rejects a latitude value less than -180 and 180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(Number.MIN_SAFE_INTEGER, -180.01),
      assert: (value) => expect(() => throwOnError(longitude(value))).toThrow(RangeError)
    })
  })
  test('rejects a latitude value greater than 180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(Number.MAX_SAFE_INTEGER, 180.01),
      assert: (value) => expect(() => throwOnError(longitude(value))).toThrow(RangeError)
    })
  })
})
