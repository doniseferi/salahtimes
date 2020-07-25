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

const getFajrDateTimeUtc = (
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
        getFajrDateTimeUtc => getFajrDateTimeUtc)))

const getDhuhrDateTimeUtc = (
  date: Date,
  longitude: number): string =>
  matchErrorOr(
    lon(longitude),
    err => err.message,
    parsedLongitude =>
      matchErrorOr(
        dhuhr(date, parsedLongitude),
        err => err.message,
        getDhuhrDateTimeUtc => getDhuhrDateTimeUtc))

const getAsrDateTimeUtc = (
  date: Date,
  latitude: number,
  longitude: number,
  madhab: Madhab = 'Standard'): string =>
  matchErrorOr(lat(latitude), err => err.message, parsedLatitude =>
    matchErrorOr(lon(longitude), err => err.message, parsedLongitude =>
      matchErrorOr(madhhab(madhab), err => err.message, asrJuristicMethod =>
        matchErrorOr(
          asr(date, geoCoordinates(parsedLatitude, parsedLongitude), asrJuristicMethod),
          err => err.message,
          getAsrDateTimeUtc => getAsrDateTimeUtc))))

const getMaghribDateTimeUtc = (
  date: Date,
  latitude: number,
  longitude: number): string =>
  matchErrorOr(lat(latitude), err => err.message, parsedLatitude =>
    matchErrorOr(lon(longitude), err => err.message, parsedLongitude =>
      matchErrorOr(maghrib(date, geoCoordinates(parsedLatitude, parsedLongitude)), err => err.message,
        getMaghribDateTimeUtc => getMaghribDateTimeUtc)))

const getIshaaDateTimeUtc = (
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
        getIshaaDateTimeUtc => getIshaaDateTimeUtc)))

export {
  getFajrDateTimeUtc,
  getDhuhrDateTimeUtc,
  getAsrDateTimeUtc,
  getMaghribDateTimeUtc,
  getIshaaDateTimeUtc
}
