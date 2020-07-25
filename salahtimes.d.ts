// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/* ~ This is the module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/* ~ If this module is a UMD module that exposes a global variable 'salahtimes' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace salahtimes;

export type Madhab = 'Standard' | 'Shafii' | 'Maliki' | 'Hanbali' | 'Hanafi'
export type HighLatitudeMethod = 'AngleBasedMethod' | 'MiddleOfTheNightMethod' | 'OneSeventhMethod'
export type SupportedConventions =
  'MuslimWorldLeague' |
  'IslamicSocietyOfNorthAmerica' |
  'EgyptianGeneralAuthorityOfSurvey' |
  'UmmAlQuraUniversityMekkah' |
  'UniversityOfIslamicSciencesKarachi' |
  'InstituteOfGeophysicsUniversityOfTehranOfSurvey' |
  'ShiaIthnaAshariLevaResearchInstituteQumOfSurvey'

/**
* Gets the date and time for fajr in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getFajrDateTimeUtc</caption>
* // returns '2021-03-01T04:57:11.422Z'
* getFajrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380);
* @example <caption>Example usage of getFajrDateTimeUtc</caption>
* // returns '2021-03-01T04:47:21.866Z'
* getFajrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'EgyptianGeneralAuthorityOfSurvey');
* @example <caption>Example usage of getFajrDateTimeUtc</caption>
* // returns '2021-03-01T04:47:21.866Z'
* getFajrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'EgyptianGeneralAuthorityOfSurvey'. 'MiddleOfTheNightMethod');
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @param {SupportedConventions} [islamicConvention="MuslimWorldLeague"] - The islamic convention that defines the angle to be used for fajr.
* @param {HighLatitudeMethod} [highLatitudeMethod="AngleBasedMethod"] - The method to use when the sun does not fall at the angle required for fajr.
* @returns {string} A string representing date and time for fajr in UTC, expressed in an ISO 8601 format.
* @function
 */
export function getFajrDateTimeUtc(
  date: Date,
  latitude: number,
  longitude: number,
  islamicConvention: SupportedConventions,
  highLatitudeMethod: HighLatitudeMethod): string

/**
* Gets the date and time for dhuhr in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getDhuhrDateTimeUtc</caption>
* // returns "2025-01-18T12:10:20.853Z"
* getDhuhrDateTimeUtc(new Date(2025, 0, 18), -0.010150);
* @param {Date} date - A date instance.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing date and time for dhuhr in UTC, expressed in an ISO 8601 format.
* @function
 */
export function getDhuhrDateTimeUtc(date: Date, latitude: number, longitude: number): string;

/**
* Gets the date and time for asr in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getAsrDateTimeUtc</caption>
* // returns "2021-03-01T15:02:05.884Z"
* getAsrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380);
* // returns "2021-03-01T15:02:05.884Z"
* getAsrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'Shafii');
* @example <caption>Example usage of getAsrDateTimeUtc</caption>
* // returns "2021-03-01T15:45:41.293Z"
* getAsrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'Hanafi');
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @param {Madhab} - The madhab value for determining the asr elevation angle. Hanafi is the only value that produces a different value in comparison to the other values.
* @returns {string} A string representing date and time for asr in UTC, expressed in an ISO 8601 format.
* @function
 */
export function getAsrDateTimeUtc(date: Date, latitude: number, longitude: number, madhab: Madhab): string

/**
* Gets the date and time for maghrib in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getMaghribDateTimeUtc</caption>
* // returns '2037-08-02T17:59:44.502Z'
* getMaghribDateTimeUtc(new Date(2037, 7, 2), 42.637610, 21.092160)
* @example <caption>Example usage of getMaghribDateTimeUtc</caption>
* // returns 'The sun is up all day on 2037-08-01T23:00:00.000Z at latitude: 71.98007 and longitude: 102.47427'
* getMaghribDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270)
* @example <caption>Example usage of getMaghribDateTimeUtc</caption>
* // returns 'The sun is down all day on 2032-01-01T00:00:00.000Z at latitude: 89.525 and longitude: -30.45'
* getMaghribDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500)
* @example <caption>Example usage of getMaghribDateTimeUtc</caption>
* // returns 'The sun is down all day on 2032-01-01T00:00:00.000Z at latitude: 89.525 and longitude: -30.45'
* getMaghribDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500)
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @returns {string} A string representing date and time for maghrib in UTC, expressed in an ISO 8601 format.
* @function
 */
export function getMaghribDateTimeUtc(date: Date, longitude: number): string;

/**
* Gets the date and time for fajr in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.
* @example <caption>Example usage of getIshaaDateTimeUtc</caption>
* // returns '2021-03-01T19:22:33.506Z'
* @example <caption>Example usage of getIshaaDateTimeUtc</caption>
* getIshaaDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380)
* // returns '2021-03-01T19:29:04.467Z'
* @example <caption>Example usage of getIshaaDateTimeUtc</caption>
* getIshaaDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'UniversityOfIslamicSciencesKarachi')
* @example <caption>Example usage of getIshaaDateTimeUtc</caption>
* // returns '2021-03-01T19:29:04.467Z'
* getIshaaDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'UniversityOfIslamicSciencesKarachi', 'MiddleOfTheNightMethod')
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} longitude - A longitude value in the range of -180 to 180.
* @param {SupportedConventions} [islamicConvention="MuslimWorldLeague"]
* @param {HighLatitudeMethod} [highLatitudeMethod="AngleBasedMethod"]
* @returns {string} A string representing date and time for ishaa in UTC, expressed in an ISO 8601 format.
* @function
 */
export function getIshaaDateTimeUtc(
  date: Date,
  latitude: number,
  longitude: number,
  islamicConvention: SupportedConventions,
  highLatitudeMethod: HighLatitudeMethod): string
