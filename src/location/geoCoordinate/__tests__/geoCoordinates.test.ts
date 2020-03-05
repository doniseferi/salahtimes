import { geoCoordinate, createLatitude, createLongitude } from '../../index'
import { iterativeTest, generateRandomWholeNumber } from '../../../testUtils'
import { degrees } from '../../../maths'
import { matchOrThrow } from '../../../either'

describe('geoCoordinates', () => {
  test('rejects a latitude value less than -90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-90.01, Number.MIN_SAFE_INTEGER),
      assert: (value) => expect(() => geoCoordinate(matchOrThrow(degrees(value)), matchOrThrow(degrees(10)))).toThrow(RangeError)
    })
  })
  test('rejects a latitude value greater than 90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(90.01, Number.MAX_SAFE_INTEGER),
      assert: (value) => expect(() => geoCoordinate(matchOrThrow(degrees(value)), matchOrThrow(degrees(10)))).toThrow(RangeError)
    })
  })
  test('rejects a longitude value less than -180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-180.01, Number.MIN_SAFE_INTEGER),
      assert: (value) => expect(() => geoCoordinate(matchOrThrow(degrees(10)), matchOrThrow(degrees(value)))).toThrow(RangeError)
    })
  })
  test('rejects a longitude value greater than 180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(180.01, Number.MAX_SAFE_INTEGER),
      assert: (value) => expect(() => geoCoordinate(matchOrThrow(degrees(10)), matchOrThrow(degrees(value)))).toThrow(RangeError)
    })
  })
  test('accept any latitude within the range of -90 to 90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-90, 90),
      assert: (value) => expect(() => geoCoordinate(matchOrThrow(degrees(value)), matchOrThrow(degrees(10)))).not.toThrow()
    })
  })
  test('accept any longitude within the range of -180 to 180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-180, 180),
      assert: (value) => expect(() => geoCoordinate(matchOrThrow(degrees(10)), matchOrThrow(degrees(value)))).not.toThrow()
    })
  })
})

describe('Create latitude', () => {
  test('accepts any latitude value between -90 and 90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-90, 90),
      assert: (value) => expect(() => createLatitude(value)).not.toThrowError()
    })
  })
  test('returns the coordinate value passed in that is between -90 and 90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-90, 90),
      assert: (value) => expect(matchOrThrow(createLatitude(value)).value).toEqual(value)
    })
  })
  test('rejects a latitude value less than -90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(Number.MIN_SAFE_INTEGER, -90.01),
      assert: (value) => expect(() => matchOrThrow(createLatitude(value))).toThrow(RangeError)
    })
  })
  test('rejects a latitude value greater than 90', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(90.01, Number.MAX_SAFE_INTEGER),
      assert: (value) => expect(() => matchOrThrow(createLatitude(value))).toThrow(RangeError)
    })
  })
})

describe('Create longitude', () => {
  test('accepts any longitude value between -180 and 180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-180, 180),
      assert: (value) => expect(() => createLongitude(value)).not.toThrowError()
    })
  })
  test('returns the coordinate value passed in that is between -180 and 180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(-180, 180),
      assert: (value) => expect(matchOrThrow(createLongitude(value)).value).toEqual(value)
    })
  })
  test('rejects a latitude value less than -180 and 180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(Number.MIN_SAFE_INTEGER, -180.01),
      assert: (value) => expect(() => matchOrThrow(createLongitude(value))).toThrow(RangeError)
    })
  })
  test('rejects a latitude value greater than 180', () => {
    iterativeTest({
      numberOfExecutions: 500,
      generateInput: () => generateRandomWholeNumber(Number.MAX_SAFE_INTEGER, 180.01),
      assert: (value) => expect(() => matchOrThrow(createLongitude(value))).toThrow(RangeError)
    })
  })
})
