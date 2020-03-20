import { ErrorOr, failure, success } from '../either'

interface Longitude {
  value: number
}

const longitude = (value: number): ErrorOr<Readonly<Longitude>> => (
  value >= -180 && value <= 180)
  ? success({ value })
  : failure(new RangeError(errorMessage))

const errorMessage = 'Longitude can have a value between -90 and 90.' +
'Please provide a value that is equal to or greater than -90 and less than or equal to 90.'

export {
  Longitude,
  longitude
}
