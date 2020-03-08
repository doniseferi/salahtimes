import {
  degrees,
  angularDegreesToRadians,
  angularDegreesToRadiansNumericConversion,
  radiansToAngularDegrees,
  radiansToAngularDegreesNumericConversion
} from '../'
import { throwOnError } from '../../either'

describe('Angular Conversions', () => {
  test('Degrees converts to radians', () => {
    new Set([{
      angularDegreesValue: throwOnError(degrees(-360)), radiansValue: -6.283185307179586
    }, {
      angularDegreesValue: throwOnError(degrees(-359.45)), radiansValue: -6.273585996293617
    }, {
      angularDegreesValue: throwOnError(degrees(-333)), radiansValue: -5.811946409141117
    }, {
      angularDegreesValue: throwOnError(degrees(-222)), radiansValue: -3.8746309394274117
    }, {
      angularDegreesValue: throwOnError(degrees(-90)), radiansValue: -1.5707963267948966
    }, {
      angularDegreesValue: throwOnError(degrees(-45)), radiansValue: -0.7853981633974483
    }, {
      angularDegreesValue: throwOnError(degrees(0)), radiansValue: 0
    }, {
      angularDegreesValue: throwOnError(degrees(0)), radiansValue: 0
    }, {
      angularDegreesValue: throwOnError(degrees(45)), radiansValue: 0.7853981633974483
    }, {
      angularDegreesValue: throwOnError(degrees(90)), radiansValue: 1.5707963267948966
    }, {
      angularDegreesValue: throwOnError(degrees(222)), radiansValue: 3.8746309394274117
    }, {
      angularDegreesValue: throwOnError(degrees(333)), radiansValue: 5.811946409141117
    }, {
      angularDegreesValue: throwOnError(degrees(359.45)), radiansValue: 6.273585996293617
    }]).forEach(set => {
      expect(throwOnError(angularDegreesToRadians(set.angularDegreesValue))).toEqual(set.radiansValue)
      expect(angularDegreesToRadiansNumericConversion(set.angularDegreesValue.value)).toEqual(set.radiansValue)
      expect(throwOnError(radiansToAngularDegrees(set.radiansValue)).value).toEqual(set.angularDegreesValue.value)
      expect(radiansToAngularDegreesNumericConversion(set.radiansValue)).toEqual(set.angularDegreesValue.value)
    })
  })
})
