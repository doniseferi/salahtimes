import {
  fajr,
  dhuhr,
  asr,
  maghrib,
  ishaa
} from '../salah'
import {
  SupportedConventions, convention as conventions
} from '../convention'
import { HighLatitudeMethod } from '../highLatitudeMethods'
import { geoCoordinates, latitude as lat, longitude as lon } from '../geoCoordinates'
import { matchErrorOr, throwOnError } from '../either'
import { Madhab, madhab as madhhab } from '../madhab'

const fajrDateTimeUtc = (
  date: Date,
  latitude: number,
  longitude: number,
  islamicConvention: SupportedConventions = 'MuslimWorldLeague',
  highLatitudeMethod: HighLatitudeMethod = 'AngleBasedMethod'): string =>
  matchErrorOr(lat(latitude), err => err.message, parsedLatitude => {
    return matchErrorOr(lon(longitude), err => err.message, parsedLongitude => {
      return matchErrorOr(fajr(date, geoCoordinates(parsedLatitude, parsedLongitude), conventions(islamicConvention), highLatitudeMethod), err => err.message, val => val)
    })
  })

const dhuhrDateTimeUtc = (
  date: Date,
  longitude: number): string =>
  matchErrorOr(lon(longitude), err => err.message, parsedLongitude => {
    return matchErrorOr(dhuhr(date, parsedLongitude), err => err.message, val => val)
  })

const asrDateTimeUtc = (
  date: Date,
  latitude: number,
  longitude: number,
  madhab: Madhab = 'hanafi'): string =>
  throwOnError(
    asr(
      date,
      geoCoordinates(throwOnError(lat(latitude)), throwOnError(lon(longitude))),
      throwOnError(madhhab(madhab))))

const maghribDateTimeUtc = (
  date: Date,
  latitude: number,
  longitude: number): string => throwOnError(
  maghrib(
    date,
    geoCoordinates(throwOnError(lat(latitude)), throwOnError(lon(longitude)))))

const ishaaDateTimeUtc = (
  date: Date,
  latitude: number,
  longitude: number,
  islamicConvention: SupportedConventions = 'MuslimWorldLeague',
  highLatitudeMethod: HighLatitudeMethod = 'AngleBasedMethod'): string => throwOnError(
  ishaa(
    date,
    geoCoordinates(throwOnError(lat(latitude)), throwOnError(lon(longitude))),
    conventions(islamicConvention),
    highLatitudeMethod))

export {
  fajrDateTimeUtc,
  dhuhrDateTimeUtc,
  asrDateTimeUtc,
  maghribDateTimeUtc,
  ishaaDateTimeUtc
}
