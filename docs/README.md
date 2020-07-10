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
* [Duration](interfaces/duration.md)
* [Failure](interfaces/failure.md)
* [GeoCoordinates](interfaces/geocoordinates.md)
* [Latitude](interfaces/latitude.md)
* [Longitude](interfaces/longitude.md)
* [SalahStrategy](interfaces/salahstrategy.md)
* [Success](interfaces/success.md)
* [TimeSpan](interfaces/timespan.md)

### Type aliases

* [AngleBasedMethod](README.md#anglebasedmethod)
* [ErrorOr](README.md#erroror)
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
* [add3MinutesToSunsetDateTimeUtc](README.md#const-add3minutestosunsetdatetimeutc)
* [angleBasedMethod](README.md#const-anglebasedmethod)
* [angularDegreesToRadians](README.md#const-angulardegreestoradians)
* [angularDegreesToRadiansNumericConversion](README.md#const-angulardegreestoradiansnumericconversion)
* [arccot](README.md#const-arccot)
* [containsNullMembers](README.md#const-containsnullmembers)
* [convention](README.md#const-convention)
* [createFailure](README.md#const-createfailure)
* [degrees](README.md#const-degrees)
* [errorMessage](README.md#const-errormessage)
* [failure](README.md#const-failure)
* [geoCoordinates](README.md#const-geocoordinates)
* [getCoordinateValue](README.md#const-getcoordinatevalue)
* [getFajrDateTimeUtc](README.md#const-getfajrdatetimeutc)
* [getIshaaDateTimeUtc](README.md#const-getishaadatetimeutc)
* [getNullMembers](README.md#const-getnullmembers)
* [isValidDate](README.md#const-isvaliddate)
* [latitude](README.md#const-latitude)
* [longitude](README.md#const-longitude)
* [madhab](README.md#const-madhab)
* [matchErrorOr](README.md#const-matcherroror)
* [middleOfTheNightMethod](README.md#const-middleofthenightmethod)
* [oneSeventhMethod](README.md#const-oneseventhmethod)
* [radiansToAngularDegrees](README.md#const-radianstoangulardegrees)
* [radiansToAngularDegreesNumericConversion](README.md#const-radianstoangulardegreesnumericconversion)
* [success](README.md#const-success)
* [tan](README.md#const-tan)
* [throwErrorOnNull](README.md#const-throwerroronnull)
* [throwOnError](README.md#const-throwonerror)
* [timeSpan](README.md#const-timespan)

## Type aliases

###  AngleBasedMethod

Ƭ **AngleBasedMethod**: *function*

*Defined in [highLatitudeMethods/angleBasedMethod.ts:6](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/highLatitudeMethods/angleBasedMethod.ts#L6)*

#### Type declaration:

▸ (`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  ErrorOr

Ƭ **ErrorOr**: *Readonly‹[Failure](interfaces/failure.md)‹Error›› | Readonly‹[Success](interfaces/success.md)‹T››*

*Defined in [either/errorOr.ts:3](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/either/errorOr.ts#L3)*

___

###  Madhab

Ƭ **Madhab**: *"standard" | "shafii" | "maliki" | "hanbali" | "hanafi"*

*Defined in [madhab/madhab.ts:4](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/madhab/madhab.ts#L4)*

___

###  MiddleOfTheNightMethod

Ƭ **MiddleOfTheNightMethod**: *function*

*Defined in [highLatitudeMethods/middleOfTheNight.ts:5](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/highLatitudeMethods/middleOfTheNight.ts#L5)*

#### Type declaration:

▸ (`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  OneSeventhMethod

Ƭ **OneSeventhMethod**: *function*

*Defined in [highLatitudeMethods/oneSeventhMethod.ts:5](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/highLatitudeMethods/oneSeventhMethod.ts#L5)*

#### Type declaration:

▸ (`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  SupportedConventions

Ƭ **SupportedConventions**: *"MuslimWorldLeague" | "IslamicSocietyOfNorthAmerica" | "EgyptianGeneralAuthorityOfSurvey" | "UmmAlQuraUniversityMekkah" | "UniversityOfIslamicSciencesKarachi" | "InstituteOfGeophysicsUniversityOfTehranOfSurvey" | "ShiaIthnaAshariLevaResearchInstituteQumOfSurvey"*

*Defined in [convention/convention.ts:4](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/convention/convention.ts#L4)*

## Variables

### `Const` abs

• **abs**: *abs* = Math.abs

*Defined in [maths/index.ts:9](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/maths/index.ts#L9)*

___

### `Const` angularConst

• **angularConst**: *0.017453292519943295* = 0.017453292519943295

*Defined in [maths/angularConversions.ts:4](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/maths/angularConversions.ts#L4)*

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

*Defined in [convention/convention.ts:19](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/convention/convention.ts#L19)*

## Functions

### `Const` adaptAngleForSuntimes

▸ **adaptAngleForSuntimes**(`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *number*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts:29](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *number*

___

### `Const` add3MinutesToSunsetDateTimeUtc

▸ **add3MinutesToSunsetDateTimeUtc**(`sunsetDateTimeUtc`: [Date](interfaces/__global.date.md)): *string*

*Defined in [salah/maghrib.ts:23](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/salah/maghrib.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`sunsetDateTimeUtc` | [Date](interfaces/__global.date.md) |

**Returns:** *string*

___

### `Const` angleBasedMethod

▸ **angleBasedMethod**(`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [highLatitudeMethods/angleBasedMethod.ts:10](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/highLatitudeMethods/angleBasedMethod.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` angularDegreesToRadians

▸ **angularDegreesToRadians**(`degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹number›*

*Defined in [maths/angularConversions.ts:8](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/maths/angularConversions.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹number›*

___

### `Const` angularDegreesToRadiansNumericConversion

▸ **angularDegreesToRadiansNumericConversion**(`degrees`: number): *number*

*Defined in [maths/angularConversions.ts:15](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/maths/angularConversions.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | number |

**Returns:** *number*

___

### `Const` arccot

▸ **arccot**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [maths/trigonometry.ts:4](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/maths/trigonometry.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` containsNullMembers

▸ **containsNullMembers**<**T**>(`target`: T): *boolean*

*Defined in [validation/validate.ts:1](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/validation/validate.ts#L1)*

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

*Defined in [convention/convention.ts:50](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/convention/convention.ts#L50)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | [SupportedConventions](README.md#supportedconventions) | "MuslimWorldLeague" |

**Returns:** *[Convention](interfaces/convention.md)*

___

### `Const` createFailure

▸ **createFailure**(`geoCoordinates`: [GeoCoordinates](interfaces/geocoordinates.md), `salahAngle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[Failure](interfaces/failure.md)‹Error›*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts:32](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`geoCoordinates` | [GeoCoordinates](interfaces/geocoordinates.md) |
`salahAngle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[Failure](interfaces/failure.md)‹Error›*

___

### `Const` degrees

▸ **degrees**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [maths/degree.ts:9](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/maths/degree.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` errorMessage

▸ **errorMessage**(`value`: number): *string*

*Defined in [maths/degree.ts:7](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/maths/degree.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

### `Const` failure

▸ **failure**<**T**>(`failure`: T): *[Failure](interfaces/failure.md)‹Error›*

*Defined in [either/errorOr.ts:21](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/either/errorOr.ts#L21)*

**Type parameters:**

▪ **T**: *Error*

**Parameters:**

Name | Type |
------ | ------ |
`failure` | T |

**Returns:** *[Failure](interfaces/failure.md)‹Error›*

___

### `Const` geoCoordinates

▸ **geoCoordinates**(`latitude`: Readonly‹[Latitude](interfaces/latitude.md)›, `longitude`: Readonly‹[Longitude](interfaces/longitude.md)›): *Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›*

*Defined in [geoCoordinates/geoCoordinates.ts:8](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/geoCoordinates/geoCoordinates.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[Latitude](interfaces/latitude.md)› |
`longitude` | Readonly‹[Longitude](interfaces/longitude.md)› |

**Returns:** *Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›*

___

### `Const` getCoordinateValue

▸ **getCoordinateValue**(`coordinate`: [Latitude](interfaces/latitude.md) | [Longitude](interfaces/longitude.md)): *number*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts:30](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`coordinate` | [Latitude](interfaces/latitude.md) &#124; [Longitude](interfaces/longitude.md) |

**Returns:** *number*

▸ **getCoordinateValue**(`coordinate`: [Latitude](interfaces/latitude.md) | [Longitude](interfaces/longitude.md)): *number*

*Defined in [salah/asr.ts:43](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/salah/asr.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`coordinate` | [Latitude](interfaces/latitude.md) &#124; [Longitude](interfaces/longitude.md) |

**Returns:** *number*

▸ **getCoordinateValue**(`coordinate`: [Latitude](interfaces/latitude.md) | [Longitude](interfaces/longitude.md)): *number*

*Defined in [salah/maghrib.ts:21](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/salah/maghrib.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`coordinate` | [Latitude](interfaces/latitude.md) &#124; [Longitude](interfaces/longitude.md) |

**Returns:** *number*

___

### `Const` getFajrDateTimeUtc

▸ **getFajrDateTimeUtc**(`convention`: [Convention](interfaces/convention.md), `date`: [Date](interfaces/__global.date.md), `geoCoordinates`: [GeoCoordinates](interfaces/geocoordinates.md)): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngleFactory.ts:34](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngleFactory.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`convention` | [Convention](interfaces/convention.md) |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | [GeoCoordinates](interfaces/geocoordinates.md) |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` getIshaaDateTimeUtc

▸ **getIshaaDateTimeUtc**(`convention`: [Convention](interfaces/convention.md), `date`: [Date](interfaces/__global.date.md), `geoCoordinates`: [GeoCoordinates](interfaces/geocoordinates.md)): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngleFactory.ts:31](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngleFactory.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`convention` | [Convention](interfaces/convention.md) |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | [GeoCoordinates](interfaces/geocoordinates.md) |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` getNullMembers

▸ **getNullMembers**<**T**>(`target`: T): *string[]*

*Defined in [validation/validate.ts:3](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/validation/validate.ts#L3)*

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

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts:31](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Date](interfaces/__global.date.md) |

**Returns:** *boolean*

___

### `Const` latitude

▸ **latitude**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[Latitude](interfaces/latitude.md)››*

*Defined in [geoCoordinates/latitude.ts:7](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/geoCoordinates/latitude.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[Latitude](interfaces/latitude.md)››*

___

### `Const` longitude

▸ **longitude**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[Longitude](interfaces/longitude.md)››*

*Defined in [geoCoordinates/longitude.ts:7](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/geoCoordinates/longitude.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[Longitude](interfaces/longitude.md)››*

___

### `Const` madhab

▸ **madhab**(`madhab`: [Madhab](README.md#madhab)): *[ErrorOr](README.md#erroror)‹[AsrJursiticMethod](interfaces/asrjursiticmethod.md)›*

*Defined in [madhab/madhab.ts:15](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/madhab/madhab.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`madhab` | [Madhab](README.md#madhab) |

**Returns:** *[ErrorOr](README.md#erroror)‹[AsrJursiticMethod](interfaces/asrjursiticmethod.md)›*

___

### `Const` matchErrorOr

▸ **matchErrorOr**<**T**, **F**, **S**>(`input`: [ErrorOr](README.md#erroror)‹S›, `onFailureCallback`: function, `onSuccessCallback`: function): *T | F*

*Defined in [either/errorOr.ts:7](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/either/errorOr.ts#L7)*

**Type parameters:**

▪ **T**

▪ **F**

▪ **S**

**Parameters:**

▪ **input**: *[ErrorOr](README.md#erroror)‹S›*

▪ **onFailureCallback**: *function*

▸ (`val`: Error): *F*

**Parameters:**

Name | Type |
------ | ------ |
`val` | Error |

▪ **onSuccessCallback**: *function*

▸ (`val`: S): *T*

**Parameters:**

Name | Type |
------ | ------ |
`val` | S |

**Returns:** *T | F*

___

### `Const` middleOfTheNightMethod

▸ **middleOfTheNightMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [highLatitudeMethods/middleOfTheNight.ts:7](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/highLatitudeMethods/middleOfTheNight.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` oneSeventhMethod

▸ **oneSeventhMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [highLatitudeMethods/oneSeventhMethod.ts:7](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/highLatitudeMethods/oneSeventhMethod.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` radiansToAngularDegrees

▸ **radiansToAngularDegrees**(`radians`: number): *[ErrorOr](README.md#erroror)‹[AngularDegrees](interfaces/angulardegrees.md)›*

*Defined in [maths/angularConversions.ts:6](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/maths/angularConversions.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹[AngularDegrees](interfaces/angulardegrees.md)›*

___

### `Const` radiansToAngularDegreesNumericConversion

▸ **radiansToAngularDegreesNumericConversion**(`radians`: number): *number*

*Defined in [maths/angularConversions.ts:13](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/maths/angularConversions.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *number*

___

### `Const` success

▸ **success**<**T**>(`value`: T): *[Success](interfaces/success.md)‹T›*

*Defined in [either/errorOr.ts:23](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/either/errorOr.ts#L23)*

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

*Defined in [maths/trigonometry.ts:12](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/maths/trigonometry.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *number*

___

### `Const` throwErrorOnNull

▸ **throwErrorOnNull**<**T**>(`target`: T): *void*

*Defined in [validation/validate.ts:17](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/validation/validate.ts#L17)*

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

*Defined in [either/errorOr.ts:25](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/either/errorOr.ts#L25)*

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

*Defined in [time/timeSpan.ts:10](https://github.com/doniseferi/salahtimes/blob/c5863fe/src/time/timeSpan.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`days` | number |
`hours` | number |
`minutes` | number |
`seconds` | number |
`milliseconds` | number |

**Returns:** *[TimeSpan](interfaces/timespan.md)*
