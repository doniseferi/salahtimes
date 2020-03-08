import {
  isNullOrUndefined
} from '../index'

describe('Null or undefined validator', () => {
  test('returns true when an object has a null property', () => {
    const a: ExpandoObject = expandoObject()
    const b: ExpandoObject = expandoObject()
    const c: ExpandoObject = expandoObject()
    const d: ExpandoObject = expandoObject()
    const e: ExpandoObject = expandoObject()
    a.g = null
    b.g = null
    c.g = null
    d.g = null
    e.g = null
    const aResult = isNullOrUndefined(a)
    const bResult = isNullOrUndefined(b)
    const cResult = isNullOrUndefined(c)
    const dResult = isNullOrUndefined(d)
    const eResult = isNullOrUndefined(e)
    expect(aResult).toEqual<true>(true)
    expect(bResult).toEqual<true>(true)
    expect(cResult).toEqual<true>(true)
    expect(dResult).toEqual<true>(true)
    expect(eResult).toEqual<true>(true)
  })
  test('returns true when an object has an undefined property', () => {
    const a: ExpandoObject = expandoObject()
    const b: ExpandoObject = expandoObject()
    const c: ExpandoObject = expandoObject()
    const d: ExpandoObject = expandoObject()
    const e: ExpandoObject = expandoObject()
    a.g = undefined
    b.g = undefined
    c.g = undefined
    d.g = undefined
    e.g = undefined
    expect(isNullOrUndefined(a)).toEqual(true)
    expect(isNullOrUndefined(b)).toEqual(true)
    expect(isNullOrUndefined(c)).toEqual(true)
    expect(isNullOrUndefined(d)).toEqual(true)
    expect(isNullOrUndefined(e)).toEqual(true)
  })
  test('returns false when the object doesn\'t any null or undefined properties', () => {
    expect(isNullOrUndefined(expandoObject())).toEqual(false)
  })
  test('returns true when the object in reference in null', () => {
    expect(isNullOrUndefined(null)).toEqual(true)
  })
  test('returns true when the object in reference in undefined', () => {
    expect(isNullOrUndefined(undefined)).toEqual(true)
  })
})

interface ExpandoObject {
  [key: string]: any
}

const expandoObject = (): ExpandoObject => {
  const expando: ExpandoObject = {}
  expando.a = 1
  expando.b = 'c'
  expando.c = () => true
  expando.d = true
  expando.f = false
  expando[1] = () => ':-)'
  expando['2'] = {}
  return expando
}
