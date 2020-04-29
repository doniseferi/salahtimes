import { angleBasedMethod, AngleBasedMethod } from './angleBasedMethod'
import { middleOfTheNightMethod, MiddleOfTheNightMethod } from './middleOfTheNight'
import { oneSeventhMethod, OneSeventhMethod } from './oneSeventhMethod'

type HighLatitudeMethodName = 'AngleBasedMethod' | 'MiddleOfTheNightMethod' | 'OneSeventhMethod'

type HighLatitudeMethod = OneSeventhMethod | MiddleOfTheNightMethod | AngleBasedMethod

interface HighLatitudeMethodDetails {
  name: HighLatitudeMethodName
  highLatitudeMethod: HighLatitudeMethod
}

const highLatitudeMethods: HighLatitudeMethodDetails[] = [{
  name: 'AngleBasedMethod',
  highLatitudeMethod: angleBasedMethod
}, {
  name: 'MiddleOfTheNightMethod',
  highLatitudeMethod: middleOfTheNightMethod
}, {
  name: 'OneSeventhMethod',
  highLatitudeMethod: oneSeventhMethod
}]

const getHighLatitudeMethod =
  (highLatitudeMethod: HighLatitudeMethodName = 'AngleBasedMethod'):
  HighLatitudeMethod =>
  highLatitudeMethods
    .find(method => method.name.toLowerCase() === highLatitudeMethod.toLowerCase())?.highLatitudeMethod ??
    angleBasedMethod

export {
  HighLatitudeMethod,
  HighLatitudeMethodName,
  getHighLatitudeMethod
}
