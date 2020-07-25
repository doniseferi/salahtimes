# salahtimes

[![Build Status](https://travis-ci.com/doniseferi/salahtimes.svg?branch=master)](https://travis-ci.com/doniseferi/salahtimes)[![Codacy Badge](https://api.codacy.com/project/badge/Grade/27de579f6fc84188ba0aac2601ec05f0)](https://www.codacy.com/manual/doniseferi/salahtimes?utm_source=github.com&utm_medium=referral&utm_content=doniseferi/salahtimes&utm_campaign=Badge_Grade)![npm](https://img.shields.io/npm/v/salahtimes)
![GitHub](https://img.shields.io/github/license/doniseferi/salahtimes)
![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/salahtimes)![GitHub last commit](https://img.shields.io/github/last-commit/doniseferi/salahtimes)[![Coverage Status](https://coveralls.io/repos/github/doniseferi/salahtimes/badge.svg?branch=master)](https://coveralls.io/github/doniseferi/salahtimes?branch=master)[![GitHub issues](https://img.shields.io/github/issues/doniseferi/salahtimes)](https://github.com/doniseferi/salahtimes/issues)

* * * *
  
A tiny library to get the exact date and time in an [ISO 8601](https://www.wikiwand.com/en/ISO_8601) format for any of the five daily prayers at any location and date.

## Functions
  
<dl>
<dt><a href="#README.md#const-getfajrdatetimeutc">getFajrDateTimeUtc(date, latitude, longitude, islamicConvention, highLatitudeMethod)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the date and time for fajr in UTC expressed in an ISO 8601 format for date instance, latitude, longitude value and optional islamic convention and high laltitude method.</p>
</dd>
<dt><a href="#README.md#const-getishaadatetimeutc">getIshaaDateTimeUtc(date, latitude, longitude, islamicConvention, highLatitudeMethod)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the date and time for ishaa in UTC expressed in an ISO 8601 format for date instance, latitude, longitude value and optional islamic convention and high laltitude method.</p>
</dd>
<dt><a href="#README.md#const-getmaghribdatetimeut">getMaghribDateTimeUtc(date, longitude): string;</a> ⇒ <code>string</code></dt>
<dd><p>Gets the date and time for maghrib in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#README.md#const-getdhuhrdatetimeutc">getDhuhrDateTimeUtc(date, latitude, longitude)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the date and time for dhuhr in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.</p>
</dd>
<dt><a href="#README.md#const-getasrdatetimeutc">getAsrDateTimeUtc(date, latitude, longitude, madhab)</a> ⇒ <code>string</code></dt>
<dd><p>Gets the date and time for asr in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value and optional madhab value.</p>
</dd>
</dl>

* * * *
  
### `Const` getFajrDateTimeUtc

▸ **getFajrDateTimeUtc**(`date`: Date, `latitude`: number, `longitude`: number, `islamicConvention`: [SupportedConventions](README.md#supportedconventions), `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *string*

*Defined in [src/client/adapter.ts:16](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/client/adapter.ts#L16)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`date` | Date | - |
`latitude` | number | - |
`longitude` | number | - |
`islamicConvention` | [SupportedConventions](README.md#supportedconventions) | "MuslimWorldLeague" |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) | "AngleBasedMethod" |

**Returns:** *string*

**Example** *(Example usage of getFajrDateTimeUtc)*

```js
// returns '2021-03-01T04:57:11.422Z'
getFajrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380);
```

**Example** *(Example usage of getFajrDateTimeUtc)*

```js
// returns '2021-03-01T04:47:21.866Z'
getFajrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'EgyptianGeneralAuthorityOfSurvey');
```

**Example** *(Example usage of getFajrDateTimeUtc)*

```js
* // returns '2021-03-01T04:47:21.866Z'
* getFajrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'EgyptianGeneralAuthorityOfSurvey'. 'MiddleOfTheNightMethod');
```

* * * *

### `Const` getDhuhrDateTimeUtc

▸ **getDhuhrDateTimeUtc**(`date`: Date, `longitude`: number): *string*

*Defined in [src/client/adapter.ts:29](https://github.com/doniseferi/salahtimes/blob/8de06c5/src/client/adapter.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`longitude` | number |

**Returns:** *string*

**Example** *(Example usage of getDhuhrDateTimeUtc)*

```js
// returns "2025-01-18T12:10:20.853Z"
getDhuhrDateTimeUtc(new Date(2025, 0, 18), -0.010150);
```

* * * *

### `Const` getAsrDateTimeUtc

▸ **getAsrDateTimeUtc**(`date`: Date, `latitude`: number, `longitude`: number, `madhab`: [Madhab](README.md#madhab)): *string*

*Defined in [src/client/adapter.ts:41](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/client/adapter.ts#L41)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`date` | Date | - |
`latitude` | number | - |
`longitude` | number | - |
`madhab` | [Madhab](README.md#madhab) | "Standard" |

**Returns:** *string*

**Example** (Example usage of getAsrDateTimeUtc)
```js
// returns "2021-03-01T15:02:05.884Z"
getAsrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380);
```

**Example** (Example usage of getAsrDateTimeUtc)

```js
// returns "2021-03-01T15:02:05.884Z"
getAsrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'Shafii');
```

**Example** (Example usage of getAsrDateTimeUtc)

```js
// returns "2021-03-01T15:45:41.293Z"
getAsrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'Hanafi');
```

* * * *

### `Const` getMaghribDateTimeUtc

▸ **getMaghribDateTimeUtc**(`date`: Date, `latitude`: number,`longitude`: number): *string*

*Defined in [src/client/adapter.ts:54](https://github.com/doniseferi/salahtimes/blob/8de06c5/src/client/adapter.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`latitude` | number |
`longitude` | number |

**Returns:** *string*

**Example** *(Example usage of getMaghribDateTimeUtc)*

```js
// returns "2025-01-18T12:10:20.853Z"
getMaghribDateTimeUtc(new Date(2025, 0, 18), -0.010150);
```

**Example** *(Example usage of getMaghribDateTimeUtc)*

```js
// returns '2037-08-02T17:59:44.502Z'
getMaghribDateTimeUtc(new Date(2037, 7, 2), 42.637610, 21.092160);
```

**Example** *(Example usage of getMaghribDateTimeUtc)*

```js
// returns 'The sun is up all day on 2037-08-01T23:00:00.000Z at latitude: 71.98007 and longitude: 102.47427'
getMaghribDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270);
```

**Example** *(Example usage of getMaghribDateTimeUtc)*

```js
// returns 'The sun is down all day on 2032-01-01T00:00:00.000Z at latitude: 89.525 and longitude: -30.45'
getMaghribDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
```

**Example** *(Example usage of getMaghribDateTimeUtc)*

```js
// returns 'The sun is down all day on 2032-01-01T00:00:00.000Z at latitude: 89.525 and longitude: -30.45'
getMaghribDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500);
```

* * * *

### `Const` getIshaaDateTimeUtc

▸ **getIshaaDateTimeUtc**(`date`: Date, `latitude`: number, `longitude`: number, `islamicConvention`: [SupportedConventions](README.md#supportedconventions), `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *string*

*Defined in [src/client/adapter.ts:16](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/client/adapter.ts#L63)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`date` | Date | - |
`latitude` | number | - |
`longitude` | number | - |
`islamicConvention` | [SupportedConventions](README.md#supportedconventions) | "MuslimWorldLeague" |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) | "AngleBasedMethod" |

**Returns:** *string*

**Example** *(Example usage of getIshaaDateTimeUtc)*
```js
// returns '2021-03-01T19:22:33.506Z'
getIshaaDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380);
```
**Example** *(Example usage of getIshaaDateTimeUtc)*
```js
// returns '2021-03-01T19:29:04.467Z'
getIshaaDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'UniversityOfIslamicSciencesKarachi');
```
**Example** *(Example usage of getIshaaDateTimeUtc)*
```js
// returns '2021-03-01T19:29:04.467Z'
getIshaaDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'UniversityOfIslamicSciencesKarachi', 'MiddleOfTheNightMethod');
```

* * * *
  
###  SupportedConventions

Ƭ **SupportedConventions**: *"MuslimWorldLeague" | "IslamicSocietyOfNorthAmerica" | "EgyptianGeneralAuthorityOfSurvey" | "UmmAlQuraUniversityMekkah" | "UniversityOfIslamicSciencesKarachi" | "InstituteOfGeophysicsUniversityOfTehranOfSurvey" | "ShiaIthnaAshariLevaResearchInstituteQumOfSurvey"*

* * * *

###  HighLatitudeMethod

Ƭ **HighLatitudeMethod**: *"AngleBasedMethod" | "MiddleOfTheNightMethod" | "OneSeventhMethod"*

* * * *

###  Madhab

Ƭ **Madhab**: *"Standard" | "Shafii" | "Maliki" | "Hanbali" | "Hanafi"*

* * * *