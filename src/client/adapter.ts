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
import { matchErrorOr } from '../either'
import { Madhab, madhab as madhhab } from '../madhab'

const fajrDateTimeUtc = (
  date: Date,
  latitude: number,
  longitude: number,
  islamicConvention: SupportedConventions = 'MuslimWorldLeague',
  highLatitudeMethod: HighLatitudeMethod = 'AngleBasedMethod'): string =>
  matchErrorOr(lat(latitude), err => err.message, parsedLatitude =>
    matchErrorOr(lon(longitude), err => err.message, parsedLongitude =>
      matchErrorOr(
        fajr(date, geoCoordinates(parsedLatitude, parsedLongitude), conventions(islamicConvention), highLatitudeMethod),
        err => err.message,
        fajrDateTimeUtc => fajrDateTimeUtc)))

const dhuhrDateTimeUtc = (
  date: Date,
  longitude: number): string =>
  matchErrorOr(
    lon(longitude),
    err => err.message,
    parsedLongitude =>
      matchErrorOr(
        dhuhr(date, parsedLongitude),
        err => err.message,
        dhuhrDateTimeUtc => dhuhrDateTimeUtc))

const asrDateTimeUtc = (
  date: Date,
  latitude: number,
  longitude: number,
  madhab?: Madhab): string =>
  matchErrorOr(lat(latitude), err => err.message, parsedLatitude =>
    matchErrorOr(lon(longitude), err => err.message, parsedLongitude =>
      matchErrorOr(madhhab(madhab), err => err.message, asrJuristicMethod =>
        matchErrorOr(
          asr(date, geoCoordinates(parsedLatitude, parsedLongitude), asrJuristicMethod),
          err => err.message,
          asrDateTimeUtc => asrDateTimeUtc))))

const maghribDateTimeUtc = (
  date: Date,
  latitude: number,
  longitude: number): string =>
  matchErrorOr(lat(latitude), err => err.message, parsedLatitude =>
    matchErrorOr(lon(longitude), err => err.message, parsedLongitude =>
      matchErrorOr(maghrib(date, geoCoordinates(parsedLatitude, parsedLongitude)), err => err.message,
        maghribDateTimeUtc => maghribDateTimeUtc)))

const ishaaDateTimeUtc = (
  date: Date,
  latitude: number,
  longitude: number,
  islamicConvention: SupportedConventions = 'MuslimWorldLeague',
  highLatitudeMethod: HighLatitudeMethod = 'AngleBasedMethod'): string =>
  matchErrorOr(lat(latitude), err => err.message, parsedLatitude =>
    matchErrorOr(lon(longitude), err => err.message, parsedLongitude =>
      matchErrorOr(
        ishaa(date, geoCoordinates(parsedLatitude, parsedLongitude), conventions(islamicConvention), highLatitudeMethod),
        err => err.message,
        ishaaDateTimeUtc => ishaaDateTimeUtc)))

export {
  fajrDateTimeUtc,
  dhuhrDateTimeUtc,
  asrDateTimeUtc,
  maghribDateTimeUtc,
  ishaaDateTimeUtc
}
