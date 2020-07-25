import { failure, success, ErrorOr } from '../either'
import { getNullMembers } from '../validation'

type Madhab = 'Standard' | 'Shafii' | 'Maliki' | 'Hanbali' | 'Hanafi'

interface AsrJursiticMethod {
  value: 1 | 2
}

const madhab = (madhab: Madhab = 'Standard'): ErrorOr<AsrJursiticMethod> => {
  const nullProperties = getNullMembers(madhab)

  if (nullProperties.length > 0) {
    return failure(new ReferenceError(`Madhab is null or undefined. ${errorMessage}`))
  }

  switch (madhab) {
    case 'Standard':
    case 'Shafii':
    case 'Maliki':
    case 'Hanbali':
      return success({ value: 1 })
    case 'Hanafi':
      return success({ value: 2 })
    default:
      return failure(new Error(errorMessage))
  }
}

const errorMessage = 'Please provide one of the following values: standard, shafii, maliki, hanbali or hanafi'

export {
  Madhab,
  AsrJursiticMethod,
  madhab
}
