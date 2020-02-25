import { TimeSpan } from '../time/index'

export {}

declare global {
  interface Date {
    add(timeSpan: TimeSpan): Date
    subtract(timeSpan: TimeSpan): Date
  }
}

Date.prototype.add = function (timeSpan: TimeSpan): Date {
  return new Date(this.getTime() + timeSpan.value)
}

Date.prototype.subtract = function (timeSpan: TimeSpan): Date {
  return new Date(this.getTime() - timeSpan.value)
}
