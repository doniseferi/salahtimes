import { madhhab, Madhhab } from '../index'
import { throwOnError } from '../../either'

describe('Madhhab affects A shadows length in proportion to its height ', () => {
  test('Returns an error on null', () => {
    expect(() => throwOnError(madhhab(null as unknown as Madhhab))).toThrow()
  })
  test('Returns an error on receiving a value thats not a madhhab', () => {
    expect(() => throwOnError(madhhab('hello' as Madhhab))).toThrow()
  })
  test('Standard returns 1', () => {
    expect(throwOnError(madhhab('standard')).value).toEqual(1)
  })
  test('Hanbalis returns 1', () => {
    expect(throwOnError(madhhab('hanbali')).value).toEqual(1)
  })
  test('Maliki returns 1', () => {
    expect(throwOnError(madhhab('maliki')).value).toEqual(1)
  })
  test('Shafi\'i returns 1', () => {
    expect(throwOnError(madhhab('shafii')).value).toEqual(1)
  })
  test('Hanafi returns 1', () => {
    expect(throwOnError(madhhab('hanafi')).value).toEqual(2)
  })
})
