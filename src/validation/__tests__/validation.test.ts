import {
  containsNullMembers
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
    const aResult = containsNullMembers(a)
    const bResult = containsNullMembers(b)
    const cResult = containsNullMembers(c)
    const dResult = containsNullMembers(d)
    const eResult = containsNullMembers(e)
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
    expect(containsNullMembers(a)).toEqual(true)
    expect(containsNullMembers(b)).toEqual(true)
    expect(containsNullMembers(c)).toEqual(true)
    expect(containsNullMembers(d)).toEqual(true)
    expect(containsNullMembers(e)).toEqual(true)
  })
  test('returns false when the object doesn\'t any null or undefined properties', () => {
    expect(containsNullMembers(expandoObject())).toEqual(false)
  })
  test('returns true when the object in reference in null', () => {
    expect(containsNullMembers(null)).toEqual(true)
  })
  test('returns true when the object in reference in undefined', () => {
    expect(containsNullMembers(undefined)).toEqual(true)
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
