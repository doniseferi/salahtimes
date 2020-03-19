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
    expect(throwOnError(madhab('standard')).value).toEqual(1)
  })
  test('Hanbalis returns 1', () => {
    expect(throwOnError(madhab('hanbali')).value).toEqual(1)
  })
  test('Maliki returns 1', () => {
    expect(throwOnError(madhab('maliki')).value).toEqual(1)
  })
  test('Shafi\'i returns 1', () => {
    expect(throwOnError(madhab('shafii')).value).toEqual(1)
  })
  test('Hanafi returns 1', () => {
    expect(throwOnError(madhab('hanafi')).value).toEqual(2)
  })
})
