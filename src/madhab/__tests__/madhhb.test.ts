import { madhab, Madhab } from '../'
import { throwOnError } from '../../either'

describe('Madhab affects A shadows length in proportion to its height ', () => {
  test('Returns an error on null', () => {
    expect(() => throwOnError(madhab(null as unknown as Madhab))).toThrow()
  })
  test('Returns an error on receiving a value thats not a madhab', () => {
    expect(() => throwOnError(madhab('hello' as Madhab))).toThrow()
  })
  test('Standard returns 1', () => {
    expect(throwOnError(madhab('Standard')).value).toEqual(1)
  })
  test('Hanbalis returns 1', () => {
    expect(throwOnError(madhab('Hanbali')).value).toEqual(1)
  })
  test('Maliki returns 1', () => {
    expect(throwOnError(madhab('Maliki')).value).toEqual(1)
  })
  test('Shafi\'i returns 1', () => {
    expect(throwOnError(madhab('Shafii')).value).toEqual(1)
  })
  test('Hanafi returns 1', () => {
    expect(throwOnError(madhab('Hanafi')).value).toEqual(2)
  })
})
