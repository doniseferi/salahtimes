[salahtimes](README.md)

# salahtimes

## Index

### Modules

* [__global](modules/__global.md)

### Interfaces

* [AngularDegrees](interfaces/angulardegrees.md)
* [AsrJursiticMethod](interfaces/asrjursiticmethod.md)
* [BelowHorizonParams](interfaces/belowhorizonparams.md)
* [Convention](interfaces/convention.md)
* [Coordinate](interfaces/coordinate.md)
* [Duration](interfaces/duration.md)
* [Failure](interfaces/failure.md)
* [GeoCoordinate](interfaces/geocoordinate.md)
* [Left](interfaces/left.md)
* [Right](interfaces/right.md)
* [SalahStrategy](interfaces/salahstrategy.md)
* [Success](interfaces/success.md)
* [TimeSpan](interfaces/timespan.md)

### Type aliases

* [AngleBasedMethod](README.md#anglebasedmethod)
* [Either](README.md#either)
* [ErrorOr](README.md#erroror)
* [Latitude](README.md#latitude)
* [Longitude](README.md#longitude)
* [Madhab](README.md#madhab)
* [MiddleOfTheNightMethod](README.md#middleofthenightmethod)
* [OneSeventhMethod](README.md#oneseventhmethod)
* [SupportedConventions](README.md#supportedconventions)

### Variables

* [abs](README.md#const-abs)
* [angularConst](README.md#const-angularconst)
* [conventions](README.md#const-conventions)

### Functions

* [adaptAngleForSuntimes](README.md#const-adaptangleforsuntimes)
* [angleBasedMethod](README.md#const-anglebasedmethod)
* [angularDegreesToRadians](README.md#const-angulardegreestoradians)
* [angularDegreesToRadiansNumericConversion](README.md#const-angulardegreestoradiansnumericconversion)
* [arccot](README.md#const-arccot)
* [containsNullMembers](README.md#const-containsnullmembers)
* [convention](README.md#const-convention)
* [createCoordinate](README.md#const-createcoordinate)
* [createFailure](README.md#const-createfailure)
* [degrees](README.md#const-degrees)
* [divisionBasedMethod](README.md#const-divisionbasedmethod)
* [errorMessage](README.md#const-errormessage)
* [failure](README.md#const-failure)
* [geoCoordinate](README.md#const-geocoordinate)
* [getCoordinateValue](README.md#const-getcoordinatevalue)
* [getFajrDateTimeUtc](README.md#const-getfajrdatetimeutc)
* [getIshaaDateTimeUtc](README.md#const-getishaadatetimeutc)
* [getNullMembers](README.md#const-getnullmembers)
* [isValidDate](README.md#const-isvaliddate)
* [latitude](README.md#const-latitude)
* [left](README.md#const-left)
* [longitude](README.md#const-longitude)
* [madhab](README.md#const-madhab)
* [match](README.md#const-match)
* [matchErrorOr](README.md#const-matcherroror)
* [middleOfTheNightMethod](README.md#const-middleofthenightmethod)
* [oneSeventhMethod](README.md#const-oneseventhmethod)
* [radiansToAngularDegrees](README.md#const-radianstoangulardegrees)
* [radiansToAngularDegreesNumericConversion](README.md#const-radianstoangulardegreesnumericconversion)
* [right](README.md#const-right)
* [success](README.md#const-success)
* [tan](README.md#const-tan)
* [throwErrorOnNull](README.md#const-throwerroronnull)
* [throwOnError](README.md#const-throwonerror)
* [timeSpan](README.md#const-timespan)

## Type aliases

###  AngleBasedMethod

Ƭ **AngleBasedMethod**: *function*

*Defined in [location/highLatitude/highLatitudeMethod.ts:5](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/highLatitude/highLatitudeMethod.ts#L5)*

#### Type declaration:

▸ (`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  Either

Ƭ **Either**: *Readonly‹[Left](interfaces/left.md)‹L›› | Readonly‹[Right](interfaces/right.md)‹R››*

*Defined in [either/either.ts:5](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/either/either.ts#L5)*

___

###  ErrorOr

Ƭ **ErrorOr**: *Readonly‹[Failure](interfaces/failure.md)‹Error›› | Readonly‹[Success](interfaces/success.md)‹T››*

*Defined in [either/errorOr.ts:3](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/either/errorOr.ts#L3)*

___

###  Latitude

Ƭ **Latitude**: *[Coordinate](interfaces/coordinate.md)*

*Defined in [location/coordinates/coordinate.ts:8](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/coordinates/coordinate.ts#L8)*

___

###  Longitude

Ƭ **Longitude**: *[Coordinate](interfaces/coordinate.md)*

*Defined in [location/coordinates/coordinate.ts:10](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/coordinates/coordinate.ts#L10)*

___

###  Madhab

Ƭ **Madhab**: *"standard" | "shafii" | "maliki" | "hanbali" | "hanafi"*

*Defined in [madhab/madhab.ts:4](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/madhab/madhab.ts#L4)*

___

###  MiddleOfTheNightMethod

Ƭ **MiddleOfTheNightMethod**: *[OneSeventhMethod](README.md#oneseventhmethod)*

*Defined in [location/highLatitude/highLatitudeMethod.ts:9](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/highLatitude/highLatitudeMethod.ts#L9)*

___

###  OneSeventhMethod

Ƭ **OneSeventhMethod**: *function*

*Defined in [location/highLatitude/highLatitudeMethod.ts:7](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/highLatitude/highLatitudeMethod.ts#L7)*

#### Type declaration:

▸ (`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  SupportedConventions

Ƭ **SupportedConventions**: *"MuslimWorldLeague" | "IslamicSocietyOfNorthAmerica" | "EgyptianGeneralAuthorityOfSurvey" | "UmmAlQuraUniversityMekkah" | "UniversityOfIslamicSciencesKarachi" | "InstituteOfGeophysicsUniversityOfTehranOfSurvey" | "ShiaIthnaAshariLevaResearchInstituteQumOfSurvey"*

*Defined in [convention/convention.ts:4](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/convention/convention.ts#L4)*

## Variables

### `Const` abs

• **abs**: *abs* = Math.abs

*Defined in [maths/index.ts:9](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/maths/index.ts#L9)*

___

### `Const` angularConst

• **angularConst**: *0.017453292519943295* = 0.017453292519943295

*Defined in [maths/angularConversions.ts:4](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/maths/angularConversions.ts#L4)*

___

### `Const` conventions

• **conventions**: *[Convention](interfaces/convention.md)[]* = [{
  name: 'MuslimWorldLeague',
  fajr: throwOnError(degrees(18)),
  ishaa: throwOnError(degrees(17))
},
{
  name: 'IslamicSocietyOfNorthAmerica',
  fajr: throwOnError(degrees(15)),
  ishaa: throwOnError(degrees(15))
}, {
  name: 'EgyptianGeneralAuthorityOfSurvey',
  fajr: throwOnError(degrees(19.5)),
  ishaa: throwOnError(degrees(17.5))
}, {
  name: 'UmmAlQuraUniversityMekkah',
  fajr: throwOnError(degrees(18.5)),
  ishaa: throwOnError(degrees(22.5))
}, {
  name: 'UniversityOfIslamicSciencesKarachi',
  fajr: throwOnError(degrees(18)),
  ishaa: throwOnError(degrees(18))
}, {
  name: 'InstituteOfGeophysicsUniversityOfTehranOfSurvey',
  fajr: throwOnError(degrees(17.7)),
  ishaa: throwOnError(degrees(14))
}, {
  name: 'ShiaIthnaAshariLevaResearchInstituteQumOfSurvey',
  fajr: throwOnError(degrees(16)),
  ishaa: throwOnError(degrees(14))
}]

*Defined in [convention/convention.ts:19](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/convention/convention.ts#L19)*

## Functions

### `Const` adaptAngleForSuntimes

▸ **adaptAngleForSuntimes**(`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *number*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts:29](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *number*

___

### `Const` angleBasedMethod

▸ **angleBasedMethod**(`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [location/highLatitude/angleBasedMethod.ts:6](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/highLatitude/angleBasedMethod.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` angularDegreesToRadians

▸ **angularDegreesToRadians**(`degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹number›*

*Defined in [maths/angularConversions.ts:8](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/maths/angularConversions.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹number›*

___

### `Const` angularDegreesToRadiansNumericConversion

▸ **angularDegreesToRadiansNumericConversion**(`degrees`: number): *number*

*Defined in [maths/angularConversions.ts:15](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/maths/angularConversions.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | number |

**Returns:** *number*

___

### `Const` arccot

▸ **arccot**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [maths/trigonometry.ts:14](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/maths/trigonometry.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` containsNullMembers

▸ **containsNullMembers**<**T**>(`target`: T): *boolean*

*Defined in [validation/validate.ts:1](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/validation/validate.ts#L1)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |

**Returns:** *boolean*

___

### `Const` convention

▸ **convention**(`name`: [SupportedConventions](README.md#supportedconventions)): *[Convention](interfaces/convention.md)*

*Defined in [convention/convention.ts:50](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/convention/convention.ts#L50)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | [SupportedConventions](README.md#supportedconventions) | "MuslimWorldLeague" |

**Returns:** *[Convention](interfaces/convention.md)*

___

### `Const` createCoordinate

▸ **createCoordinate**(`name`: "Latitude" | "Longitude", `value`: Readonly‹number›, `min`: Readonly‹[Coordinate](interfaces/coordinate.md)›, `max`: Readonly‹[Coordinate](interfaces/coordinate.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[Coordinate](interfaces/coordinate.md)››*

*Defined in [location/coordinates/coordinate.ts:30](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/coordinates/coordinate.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | "Latitude" &#124; "Longitude" |
`value` | Readonly‹number› |
`min` | Readonly‹[Coordinate](interfaces/coordinate.md)› |
`max` | Readonly‹[Coordinate](interfaces/coordinate.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[Coordinate](interfaces/coordinate.md)››*

___

### `Const` createFailure

▸ **createFailure**(`geoCoordinates`: [GeoCoordinate](interfaces/geocoordinate.md), `salahAngle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[Failure](interfaces/failure.md)‹Error›*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts:32](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`geoCoordinates` | [GeoCoordinate](interfaces/geocoordinate.md) |
`salahAngle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[Failure](interfaces/failure.md)‹Error›*

___

### `Const` degrees

▸ **degrees**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [maths/degree.ts:9](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/maths/degree.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` divisionBasedMethod

▸ **divisionBasedMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›, `divisor`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [location/highLatitude/divisionBasedMethods.ts:9](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/highLatitude/divisionBasedMethods.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |
`divisor` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` errorMessage

▸ **errorMessage**(`value`: number): *string*

*Defined in [maths/degree.ts:7](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/maths/degree.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

### `Const` failure

▸ **failure**<**T**>(`failure`: T): *[Failure](interfaces/failure.md)‹Error›*

*Defined in [either/errorOr.ts:7](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/either/errorOr.ts#L7)*

**Type parameters:**

▪ **T**: *Error*

**Parameters:**

Name | Type |
------ | ------ |
`failure` | T |

**Returns:** *[Failure](interfaces/failure.md)‹Error›*

___

### `Const` geoCoordinate

▸ **geoCoordinate**(`latitude`: Readonly‹[Latitude](README.md#latitude)›, `longitude`: Readonly‹[Longitude](README.md#longitude)›): *Readonly‹[GeoCoordinate](interfaces/geocoordinate.md)›*

*Defined in [location/coordinates/geoCoordinate.ts:8](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/coordinates/geoCoordinate.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[Latitude](README.md#latitude)› |
`longitude` | Readonly‹[Longitude](README.md#longitude)› |

**Returns:** *Readonly‹[GeoCoordinate](interfaces/geocoordinate.md)›*

___

### `Const` getCoordinateValue

▸ **getCoordinateValue**(`coordinate`: [Coordinate](interfaces/coordinate.md)): *number*

*Defined in [salah/asr.ts:29](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/salah/asr.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`coordinate` | [Coordinate](interfaces/coordinate.md) |

**Returns:** *number*

▸ **getCoordinateValue**(`coordinate`: [Coordinate](interfaces/coordinate.md)): *number*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts:30](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`coordinate` | [Coordinate](interfaces/coordinate.md) |

**Returns:** *number*

___

### `Const` getFajrDateTimeUtc

▸ **getFajrDateTimeUtc**(`convention`: [Convention](interfaces/convention.md), `date`: [Date](interfaces/__global.date.md), `geoCoordinates`: [GeoCoordinate](interfaces/geocoordinate.md)): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngleFactory.ts:34](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngleFactory.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`convention` | [Convention](interfaces/convention.md) |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | [GeoCoordinate](interfaces/geocoordinate.md) |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` getIshaaDateTimeUtc

▸ **getIshaaDateTimeUtc**(`convention`: [Convention](interfaces/convention.md), `date`: [Date](interfaces/__global.date.md), `geoCoordinates`: [GeoCoordinate](interfaces/geocoordinate.md)): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngleFactory.ts:31](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngleFactory.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`convention` | [Convention](interfaces/convention.md) |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | [GeoCoordinate](interfaces/geocoordinate.md) |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` getNullMembers

▸ **getNullMembers**<**T**>(`target`: T): *string[]*

*Defined in [validation/validate.ts:3](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/validation/validate.ts#L3)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |

**Returns:** *string[]*

___

### `Const` isValidDate

▸ **isValidDate**(`value`: [Date](interfaces/__global.date.md)): *boolean*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts:31](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Date](interfaces/__global.date.md) |

**Returns:** *boolean*

___

### `Const` latitude

▸ **latitude**(`value`: Readonly‹number›): *[ErrorOr](README.md#erroror)‹Readonly‹[Latitude](README.md#latitude)››*

*Defined in [location/coordinates/coordinate.ts:12](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/coordinates/coordinate.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Readonly‹number› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[Latitude](README.md#latitude)››*

___

### `Const` left

▸ **left**<**T**>(`result`: T): *[Left](interfaces/left.md)‹T›*

*Defined in [either/either.ts:21](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/either/either.ts#L21)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

**Returns:** *[Left](interfaces/left.md)‹T›*

___

### `Const` longitude

▸ **longitude**(`value`: Readonly‹number›): *[ErrorOr](README.md#erroror)‹Readonly‹[Longitude](README.md#longitude)››*

*Defined in [location/coordinates/coordinate.ts:21](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/coordinates/coordinate.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Readonly‹number› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[Longitude](README.md#longitude)››*

___

### `Const` madhab

▸ **madhab**(`madhab`: [Madhab](README.md#madhab)): *[ErrorOr](README.md#erroror)‹[AsrJursiticMethod](interfaces/asrjursiticmethod.md)›*

*Defined in [madhab/madhab.ts:15](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/madhab/madhab.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`madhab` | [Madhab](README.md#madhab) |

**Returns:** *[ErrorOr](README.md#erroror)‹[AsrJursiticMethod](interfaces/asrjursiticmethod.md)›*

___

### `Const` match

▸ **match**<**L**, **R**>(`input`: [Either](README.md#either)‹L, R›, `left`: function, `right`: function): *L | R*

*Defined in [either/either.ts:7](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/either/either.ts#L7)*

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

▪ **input**: *[Either](README.md#either)‹L, R›*

▪ **left**: *function*

▸ (`result`: L): *L*

**Parameters:**

Name | Type |
------ | ------ |
`result` | L |

▪ **right**: *function*

▸ (`right`: R): *R*

**Parameters:**

Name | Type |
------ | ------ |
`right` | R |

**Returns:** *L | R*

___

### `Const` matchErrorOr

▸ **matchErrorOr**<**S**, **F**>(`input`: [ErrorOr](README.md#erroror)‹S›, `onFailureCallback`: function, `onSuccessCallback`: function): *S | F*

*Defined in [either/errorOr.ts:10](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/either/errorOr.ts#L10)*

**Type parameters:**

▪ **S**

▪ **F**

**Parameters:**

▪ **input**: *[ErrorOr](README.md#erroror)‹S›*

▪ **onFailureCallback**: *function*

▸ (`val`: Error): *F*

**Parameters:**

Name | Type |
------ | ------ |
`val` | Error |

▪ **onSuccessCallback**: *function*

▸ (`val`: S): *S*

**Parameters:**

Name | Type |
------ | ------ |
`val` | S |

**Returns:** *S | F*

___

### `Const` middleOfTheNightMethod

▸ **middleOfTheNightMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [location/highLatitude/divisionBasedMethods.ts:7](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/highLatitude/divisionBasedMethods.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` oneSeventhMethod

▸ **oneSeventhMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [location/highLatitude/divisionBasedMethods.ts:5](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/location/highLatitude/divisionBasedMethods.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` radiansToAngularDegrees

▸ **radiansToAngularDegrees**(`radians`: number): *[ErrorOr](README.md#erroror)‹[AngularDegrees](interfaces/angulardegrees.md)›*

*Defined in [maths/angularConversions.ts:6](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/maths/angularConversions.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹[AngularDegrees](interfaces/angulardegrees.md)›*

___

### `Const` radiansToAngularDegreesNumericConversion

▸ **radiansToAngularDegreesNumericConversion**(`radians`: number): *number*

*Defined in [maths/angularConversions.ts:13](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/maths/angularConversions.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *number*

___

### `Const` right

▸ **right**<**T**>(`res`: T): *[Right](interfaces/right.md)‹T›*

*Defined in [either/either.ts:23](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/either/either.ts#L23)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`res` | T |

**Returns:** *[Right](interfaces/right.md)‹T›*

___

### `Const` success

▸ **success**<**T**>(`value`: T): *[Success](interfaces/success.md)‹T›*

*Defined in [either/errorOr.ts:8](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/either/errorOr.ts#L8)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Success](interfaces/success.md)‹T›*

___

### `Const` tan

▸ **tan**(`degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *number*

*Defined in [maths/trigonometry.ts:19](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/maths/trigonometry.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *number*

___

### `Const` throwErrorOnNull

▸ **throwErrorOnNull**<**T**>(`target`: T): *void*

*Defined in [validation/validate.ts:17](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/validation/validate.ts#L17)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |

**Returns:** *void*

___

### `Const` throwOnError

▸ **throwOnError**<**T**>(`input`: [ErrorOr](README.md#erroror)‹T›): *T*

*Defined in [either/errorOr.ts:24](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/either/errorOr.ts#L24)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`input` | [ErrorOr](README.md#erroror)‹T› |

**Returns:** *T*

___

### `Const` timeSpan

▸ **timeSpan**(`days`: number, `hours`: number, `minutes`: number, `seconds`: number, `milliseconds`: number): *[TimeSpan](interfaces/timespan.md)*

*Defined in [time/timeSpan.ts:10](https://github.com/doniseferi/salahtimes/blob/e419fc1/src/time/timeSpan.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`days` | number |
`hours` | number |
`minutes` | number |
`seconds` | number |
`milliseconds` | number |

**Returns:** *[TimeSpan](interfaces/timespan.md)*
