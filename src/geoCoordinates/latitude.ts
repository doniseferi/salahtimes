import { ErrorOr, failure, success } from '../either'

interface Latitude {
  value: number
}

const latitude = (value: number): ErrorOr<Readonly<Latitude>> => (
  value >= -90 && value <= 90)
  ? success({ value })
  : failure(new RangeError(errorMessage))

const errorMessage = 'Latitude can have a value between -90 and 90.' +
'Please provide a value that is equal to or greater than -90 and less than or equal to 90.'

export {
  Latitude,
  latitude
}
