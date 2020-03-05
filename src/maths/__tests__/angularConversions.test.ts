import {
  degrees,
  angularDegreesToRadians,
  angularDegreesToRadiansNumericConversion,
  radiansToAngularDegrees,
  radiansToAngularDegreesNumericConversion
} from '../'
import { matchOrThrow } from '../../either'

describe('Angular Conversions', () => {
  test('Degrees converts to radians', () => {
    new Set([{
      angularDegreesValue: matchOrThrow(degrees(-360)), radiansValue: -6.283185307179586
    }, {
      angularDegreesValue: matchOrThrow(degrees(-359.45)), radiansValue: -6.273585996293617
    }, {
      angularDegreesValue: matchOrThrow(degrees(-333)), radiansValue: -5.811946409141117
    }, {
      angularDegreesValue: matchOrThrow(degrees(-222)), radiansValue: -3.8746309394274117
    }, {
      angularDegreesValue: matchOrThrow(degrees(-90)), radiansValue: -1.5707963267948966
    }, {
      angularDegreesValue: matchOrThrow(degrees(-45)), radiansValue: -0.7853981633974483
    }, {
      angularDegreesValue: matchOrThrow(degrees(0)), radiansValue: 0
    }, {
      angularDegreesValue: matchOrThrow(degrees(0)), radiansValue: 0
    }, {
      angularDegreesValue: matchOrThrow(degrees(45)), radiansValue: 0.7853981633974483
    }, {
      angularDegreesValue: matchOrThrow(degrees(90)), radiansValue: 1.5707963267948966
    }, {
      angularDegreesValue: matchOrThrow(degrees(222)), radiansValue: 3.8746309394274117
    }, {
      angularDegreesValue: matchOrThrow(degrees(333)), radiansValue: 5.811946409141117
    }, {
      angularDegreesValue: matchOrThrow(degrees(359.45)), radiansValue: 6.273585996293617
    }]).forEach(set => {
      expect(matchOrThrow(angularDegreesToRadians(set.angularDegreesValue))).toEqual(set.radiansValue)
      expect(angularDegreesToRadiansNumericConversion(set.angularDegreesValue.value)).toEqual(set.radiansValue)
      expect(matchOrThrow(radiansToAngularDegrees(set.radiansValue)).value).toEqual(set.angularDegreesValue.value)
      expect(radiansToAngularDegreesNumericConversion(set.radiansValue)).toEqual(set.angularDegreesValue.value)
    })
  })
})
