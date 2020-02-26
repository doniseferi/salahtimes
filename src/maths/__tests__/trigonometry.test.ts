import { arccot } from '../trigonometry'
import { degree } from '..'
import { matchOrThrow } from '../../either'

describe('Inverse Cotangent', () => {
  test('arccot 0 equals 90 degrees', () => {
    expect(arccot(matchOrThrow(degree(0)))).toEqual(90)
  })
  test('arccot 1 equals 45 degrees', () => {
    expect(arccot(matchOrThrow(degree(1)))).toEqual(45)
  })
  test('arccot 2 equals 26.565 degrees', () => {
    expect(arccot(matchOrThrow(degree(2)))).toEqual(26.565051177077994)
  })
})
