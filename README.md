# salahtimes

[![Build Status](https://travis-ci.com/doniseferi/salahtimes.svg?branch=master)](https://travis-ci.com/doniseferi/salahtimes)[![Codacy Badge](https://api.codacy.com/project/badge/Grade/27de579f6fc84188ba0aac2601ec05f0)](https://www.codacy.com/manual/doniseferi/salahtimes?utm_source=github.com&utm_medium=referral&utm_content=doniseferi/salahtimes&utm_campaign=Badge_Grade)![npm](https://img.shields.io/npm/v/salahtimes)
![GitHub](https://img.shields.io/github/license/doniseferi/salahtimes)
![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/salahtimes)![GitHub last commit](https://img.shields.io/github/last-commit/doniseferi/salahtimes)[![Coverage Status](https://coveralls.io/repos/github/doniseferi/salahtimes/badge.svg?branch=master)](https://coveralls.io/github/doniseferi/salahtimes?branch=master)[![GitHub issues](https://img.shields.io/github/issues/doniseferi/salahtimes)](https://github.com/doniseferi/salahtimes/issues)

* * * *
  
A tiny library to get the exact date and time in an [ISO 8601](https://www.wikiwand.com/en/ISO_8601) format for any of the five daily prayers at any location and date.

# Functions

### `Const` getDhuhrDateTimeUtc

▸ **getDhuhrDateTimeUtc**(`date`: [Date](docs/interfaces/__global.date.md), `longitude`: number): *string*

*Defined in [client/adapter.ts:29](https://github.com/doniseferi/salahtimes/blob/209c27c/src/client/adapter.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](docs/interfaces/__global.date.md) |
`longitude` | number |

**Returns:** *string*

___

### `Const` getFajrDateTimeUtc

▸ **getFajrDateTimeUtc**(`date`: [Date](docs/interfaces/__global.date.md), `latitude`: number, `longitude`: number, `islamicConvention`: [SupportedConventions](README.md#supportedconventions), `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *string*

*Defined in [client/adapter.ts:16](https://github.com/doniseferi/salahtimes/blob/209c27c/src/client/adapter.ts#L16)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`date` | [Date](docs/interfaces/__global.date.md) | - |
`latitude` | number | - |
`longitude` | number | - |
`islamicConvention` | [SupportedConventions](README.md#supportedconventions) | "MuslimWorldLeague" |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) | "AngleBasedMethod" |

**Returns:** *string*

___

### `Const` getIshaaDateTimeUtc

▸ **getIshaaDateTimeUtc**(`date`: [Date](docs/interfaces/__global.date.md), `latitude`: number, `longitude`: number, `islamicConvention`: [SupportedConventions](README.md#supportedconventions), `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *string*

*Defined in [client/adapter.ts:63](https://github.com/doniseferi/salahtimes/blob/209c27c/src/client/adapter.ts#L63)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`date` | [Date](docs/interfaces/__global.date.md) | - |
`latitude` | number | - |
`longitude` | number | - |
`islamicConvention` | [SupportedConventions](README.md#supportedconventions) | "MuslimWorldLeague" |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) | "AngleBasedMethod" |

**Returns:** *string*

___

### `Const` getMaghribDateTimeUtc

▸ **getMaghribDateTimeUtc**(`date`: [Date](docs/interfaces/__global.date.md), `latitude`: number, `longitude`: number): *string*

*Defined in [client/adapter.ts:54](https://github.com/doniseferi/salahtimes/blob/209c27c/src/client/adapter.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](docs/interfaces/__global.date.md) |
`latitude` | number |
`longitude` | number |

**Returns:** *string*

___