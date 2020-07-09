import { TimeSpan } from '../time/index'

export {}

declare global {
  interface Date {
    addTimeSpan(timeSpan: TimeSpan): Date
    subtractTimeSpan(timeSpan: TimeSpan): Date
    addDays(numberOfDaysToAdd: number): Date
    subtractDays(numberOfDaysToSubract: number): Date
  }
}

Date.prototype.addTimeSpan = function (timeSpan: TimeSpan): Date {
  return new Date(this.getTime() + timeSpan.value)
}

Date.prototype.subtractTimeSpan = function (timeSpan: TimeSpan): Date {
  return new Date(this.getTime() - timeSpan.value)
}

Date.prototype.addDays = function (numberOfDaysToAdd: number): Date {
  const laterDate = new Date(this.valueOf())
  laterDate.setDate(this.getDate() + numberOfDaysToAdd)
  return laterDate
}
Date.prototype.subtractDays = function (numberOfDaysToSubract: number): Date {
  const laterDate = new Date(this.valueOf())
  laterDate.setDate(this.getDate() - numberOfDaysToSubract)
  return laterDate
}
