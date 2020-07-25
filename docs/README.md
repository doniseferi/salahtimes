[salahtimes](README.md)

# salahtimes

## Index

### Modules

* [__global](modules/__global.md)

### Interfaces

* [AngularDegrees](interfaces/angulardegrees.md)
* [AsrJursiticMethod](interfaces/asrjursiticmethod.md)
* [Convention](interfaces/convention.md)
* [Duration](interfaces/duration.md)
* [Failure](interfaces/failure.md)
* [GeoCoordinates](interfaces/geocoordinates.md)
* [Latitude](interfaces/latitude.md)
* [Longitude](interfaces/longitude.md)
* [Success](interfaces/success.md)
* [TimeSpan](interfaces/timespan.md)

### Type aliases

* [AngleBasedMethod](README.md#anglebasedmethod)
* [ErrorOr](README.md#erroror)
* [GetDateTimeUtc](README.md#getdatetimeutc)
* [GetDateTimeUtcAtAngle](README.md#getdatetimeutcatangle)
* [GetDateTimeUtcAtAngleStrategy](README.md#getdatetimeutcatanglestrategy)
* [HighLatitudeMethod](README.md#highlatitudemethod)
* [HighLatitudeMethodHandler](README.md#highlatitudemethodhandler)
* [Madhab](README.md#madhab)
* [MiddleOfTheNightMethod](README.md#middleofthenightmethod)
* [OneSeventhMethod](README.md#oneseventhmethod)
* [SunDoesntReachAltitudeError](README.md#sundoesntreachaltitudeerror)
* [SunDownAllDayError](README.md#sundownalldayerror)
* [SunUpAllDayError](README.md#sunupalldayerror)
* [SupportedConventions](README.md#supportedconventions)

### Variables

* [abs](README.md#const-abs)
* [angularConst](README.md#const-angularconst)
* [conventions](README.md#const-conventions)

### Functions

* [add3MinutesToSunsetDateTimeUtc](README.md#const-add3minutestosunsetdatetimeutc)
* [angleBasedMethod](README.md#const-anglebasedmethod)
* [angularDegreesToRadians](README.md#const-angulardegreestoradians)
* [angularDegreesToRadiansNumericConversion](README.md#const-angulardegreestoradiansnumericconversion)
* [arccot](README.md#const-arccot)
* [asrElevationAngle](README.md#const-asrelevationangle)
* [containsNullMembers](README.md#const-containsnullmembers)
* [convention](README.md#const-convention)
* [degrees](README.md#const-degrees)
* [errorMessage](README.md#const-errormessage)
* [failure](README.md#const-failure)
* [fajr](README.md#const-fajr)
* [fajrHighLatitudeMethodHandler](README.md#const-fajrhighlatitudemethodhandler)
* [geoCoordinates](README.md#const-geocoordinates)
* [getAsrDateTimeUtc](README.md#const-getasrdatetimeutc)
* [getDateTimeAtAngleDecorator](README.md#const-getdatetimeatangledecorator)
* [getDateTimeUtcAtAngleStrategy](README.md#const-getdatetimeutcatanglestrategy)
* [getDateTimeUtcOfAngleAfterNoonAdapter](README.md#const-getdatetimeutcofangleafternoonadapter)
* [getDateTimeUtcOfAngleBeforeNoonAdapter](README.md#const-getdatetimeutcofanglebeforenoonadapter)
* [getDeclinationOfTheSun](README.md#const-getdeclinationofthesun)
* [getDhuhrDateTimeUtc](README.md#const-getdhuhrdatetimeutc)
* [getFajrDateTimeUtc](README.md#const-getfajrdatetimeutc)
* [getIshaaDateTimeUtc](README.md#const-getishaadatetimeutc)
* [getMaghribDateTimeUtc](README.md#const-getmaghribdatetimeutc)
* [getNullMembers](README.md#const-getnullmembers)
* [getSunriseDateTimeUtcAdapter](README.md#const-getsunrisedatetimeutcadapter)
* [getSunsetDateTimeUtcAdapter](README.md#const-getsunsetdatetimeutcadapter)
* [getTimeSpanForAngle](README.md#const-gettimespanforangle)
* [handle](README.md#const-handle)
* [highLatitudeMethodHandler](README.md#const-highlatitudemethodhandler)
* [ishaa](README.md#const-ishaa)
* [ishaaHighLatitudeMethodHandler](README.md#const-ishaahighlatitudemethodhandler)
* [latitude](README.md#const-latitude)
* [longitude](README.md#const-longitude)
* [madhab](README.md#const-madhab)
* [maghrib](README.md#const-maghrib)
* [matchErrorOr](README.md#const-matcherroror)
* [middleOfTheNightMethod](README.md#const-middleofthenightmethod)
* [oneSeventhMethod](README.md#const-oneseventhmethod)
* [radiansToAngularDegrees](README.md#const-radianstoangulardegrees)
* [radiansToAngularDegreesNumericConversion](README.md#const-radianstoangulardegreesnumericconversion)
* [success](README.md#const-success)
* [sunDoesntReachAltitudeError](README.md#const-sundoesntreachaltitudeerror)
* [sunDownAllDayError](README.md#const-sundownalldayerror)
* [sunUpAllDayError](README.md#const-sunupalldayerror)
* [tan](README.md#const-tan)
* [throwErrorOnNull](README.md#const-throwerroronnull)
* [throwOnError](README.md#const-throwonerror)
* [timeSpan](README.md#const-timespan)

## Type aliases

###  AngleBasedMethod

Ƭ **AngleBasedMethod**: *function*

*Defined in [src/highLatitudeMethods/angleBasedMethod.ts:6](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/highLatitudeMethods/angleBasedMethod.ts#L6)*

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

*Defined in [src/either/errorOr.ts:3](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/either/errorOr.ts#L3)*

___

###  GetDateTimeUtc

Ƭ **GetDateTimeUtc**: *function*

*Defined in [src/astronomy/index.ts:19](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/index.ts#L19)*

#### Type declaration:

▸ (`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›): *[ErrorOr](README.md#erroror)‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

___

###  GetDateTimeUtcAtAngle

Ƭ **GetDateTimeUtcAtAngle**: *function*

*Defined in [src/astronomy/getDateTimeAtAngleAdapter.ts:20](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/getDateTimeAtAngleAdapter.ts#L20)*

*Defined in [src/astronomy/getDateTimeUtcAtAngleStrategy.ts:7](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/getDateTimeUtcAtAngleStrategy.ts#L7)*

#### Type declaration:

▸ (`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›, `degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

___

###  GetDateTimeUtcAtAngleStrategy

Ƭ **GetDateTimeUtcAtAngleStrategy**: *function*

*Defined in [src/astronomy/getDateTimeUtcAtAngleStrategy.ts:12](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/getDateTimeUtcAtAngleStrategy.ts#L12)*

#### Type declaration:

▸ (`func`: [GetDateTimeUtcAtAngle](README.md#getdatetimeutcatangle), `date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›, `degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *[ErrorOr](README.md#erroror)‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`func` | [GetDateTimeUtcAtAngle](README.md#getdatetimeutcatangle) |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) |

___

###  HighLatitudeMethod

Ƭ **HighLatitudeMethod**: *"AngleBasedMethod" | "MiddleOfTheNightMethod" | "OneSeventhMethod"*

Defined in salahtimes.d.ts:18

*Defined in [src/highLatitudeMethods/highLatitudeMethodHandler.ts:10](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/highLatitudeMethods/highLatitudeMethodHandler.ts#L10)*

___

###  HighLatitudeMethodHandler

Ƭ **HighLatitudeMethodHandler**: *function*

*Defined in [src/highLatitudeMethods/highLatitudeMethodHandler.ts:12](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/highLatitudeMethods/highLatitudeMethodHandler.ts#L12)*

#### Type declaration:

▸ (`sunrise`: [HighLatitudeMethod](README.md#highlatitudemethod), `date`: [Date](interfaces/__global.date.md), `geoCoordinates`: [GeoCoordinates](interfaces/geocoordinates.md), `salahAngle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`sunrise` | [HighLatitudeMethod](README.md#highlatitudemethod) |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | [GeoCoordinates](interfaces/geocoordinates.md) |
`salahAngle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

___

###  Madhab

Ƭ **Madhab**: *"Standard" | "Shafii" | "Maliki" | "Hanbali" | "Hanafi"*

Defined in salahtimes.d.ts:17

*Defined in [src/madhab/madhab.ts:4](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/madhab/madhab.ts#L4)*

___

###  MiddleOfTheNightMethod

Ƭ **MiddleOfTheNightMethod**: *function*

*Defined in [src/highLatitudeMethods/middleOfTheNight.ts:5](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/highLatitudeMethods/middleOfTheNight.ts#L5)*

#### Type declaration:

▸ (`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  OneSeventhMethod

Ƭ **OneSeventhMethod**: *function*

*Defined in [src/highLatitudeMethods/oneSeventhMethod.ts:5](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/highLatitudeMethods/oneSeventhMethod.ts#L5)*

#### Type declaration:

▸ (`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  SunDoesntReachAltitudeError

Ƭ **SunDoesntReachAltitudeError**: *Error*

*Defined in [src/astronomy/errors/sunDoesntReachAltitudeError.ts:3](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/errors/sunDoesntReachAltitudeError.ts#L3)*

___

###  SunDownAllDayError

Ƭ **SunDownAllDayError**: *Error*

*Defined in [src/astronomy/errors/sunDownAllDayError.ts:3](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/errors/sunDownAllDayError.ts#L3)*

___

###  SunUpAllDayError

Ƭ **SunUpAllDayError**: *Error*

*Defined in [src/astronomy/errors/sunUpAllDayError.ts:3](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/errors/sunUpAllDayError.ts#L3)*

___

###  SupportedConventions

Ƭ **SupportedConventions**: *"MuslimWorldLeague" | "IslamicSocietyOfNorthAmerica" | "EgyptianGeneralAuthorityOfSurvey" | "UmmAlQuraUniversityMekkah" | "UniversityOfIslamicSciencesKarachi" | "InstituteOfGeophysicsUniversityOfTehranOfSurvey" | "ShiaIthnaAshariLevaResearchInstituteQumOfSurvey"*

Defined in salahtimes.d.ts:19

*Defined in [src/convention/convention.ts:4](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/convention/convention.ts#L4)*

## Variables

### `Const` abs

• **abs**: *abs* = Math.abs

*Defined in [src/maths/index.ts:9](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/maths/index.ts#L9)*

___

### `Const` angularConst

• **angularConst**: *0.017453292519943295* = 0.017453292519943295

*Defined in [src/maths/angularConversions.ts:4](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/maths/angularConversions.ts#L4)*

___

### `Const` conventions

• **conventions**: *[Convention](interfaces/convention.md)[]* = [{
  name: 'MuslimWorldLeague',
  fajr: throwOnError(degrees(-18)),
  ishaa: throwOnError(degrees(-17))
},
{
  name: 'IslamicSocietyOfNorthAmerica',
  fajr: throwOnError(degrees(-15)),
  ishaa: throwOnError(degrees(-15))
}, {
  name: 'EgyptianGeneralAuthorityOfSurvey',
  fajr: throwOnError(degrees(-19.5)),
  ishaa: throwOnError(degrees(-17.5))
}, {
  name: 'UmmAlQuraUniversityMekkah',
  fajr: throwOnError(degrees(-18.5)),
  ishaa: throwOnError(degrees(-22.5))
}, {
  name: 'UniversityOfIslamicSciencesKarachi',
  fajr: throwOnError(degrees(-18)),
  ishaa: throwOnError(degrees(-18))
}, {
  name: 'InstituteOfGeophysicsUniversityOfTehranOfSurvey',
  fajr: throwOnError(degrees(-17.7)),
  ishaa: throwOnError(degrees(-14))
}, {
  name: 'ShiaIthnaAshariLevaResearchInstituteQumOfSurvey',
  fajr: throwOnError(degrees(-16)),
  ishaa: throwOnError(degrees(-14))
}]

*Defined in [src/convention/convention.ts:19](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/convention/convention.ts#L19)*

## Functions

### `Const` add3MinutesToSunsetDateTimeUtc

▸ **add3MinutesToSunsetDateTimeUtc**(`sunsetDateTimeUtc`: string): *string*

*Defined in [src/salah/maghrib.ts:20](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/salah/maghrib.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`sunsetDateTimeUtc` | string |

**Returns:** *string*

___

### `Const` angleBasedMethod

▸ **angleBasedMethod**(`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `span`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [src/highLatitudeMethods/angleBasedMethod.ts:10](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/highLatitudeMethods/angleBasedMethod.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`span` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` angularDegreesToRadians

▸ **angularDegreesToRadians**(`degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹number›*

*Defined in [src/maths/angularConversions.ts:8](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/maths/angularConversions.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹number›*

___

### `Const` angularDegreesToRadiansNumericConversion

▸ **angularDegreesToRadiansNumericConversion**(`degrees`: number): *number*

*Defined in [src/maths/angularConversions.ts:15](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/maths/angularConversions.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | number |

**Returns:** *number*

___

### `Const` arccot

▸ **arccot**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [src/maths/trigonometry.ts:4](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/maths/trigonometry.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` asrElevationAngle

▸ **asrElevationAngle**(`shadowLengthToHeightProportion`: 1 | 2, `latitude`: Readonly‹[Latitude](interfaces/latitude.md)›, `declinationOfTheSun`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [src/asrElevationAngle/asrElevationAngle.ts:6](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/asrElevationAngle/asrElevationAngle.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`shadowLengthToHeightProportion` | 1 &#124; 2 |
`latitude` | Readonly‹[Latitude](interfaces/latitude.md)› |
`declinationOfTheSun` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` containsNullMembers

▸ **containsNullMembers**<**T**>(`target`: T): *boolean*

*Defined in [src/validation/validate.ts:1](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/validation/validate.ts#L1)*

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

*Defined in [src/convention/convention.ts:50](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/convention/convention.ts#L50)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | [SupportedConventions](README.md#supportedconventions) | "MuslimWorldLeague" |

**Returns:** *[Convention](interfaces/convention.md)*

___

### `Const` degrees

▸ **degrees**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [src/maths/degree.ts:9](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/maths/degree.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` errorMessage

▸ **errorMessage**(`value`: number): *string*

*Defined in [src/maths/degree.ts:7](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/maths/degree.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

### `Const` failure

▸ **failure**<**T**>(`failure`: T): *[Failure](interfaces/failure.md)‹Error›*

*Defined in [src/either/errorOr.ts:21](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/either/errorOr.ts#L21)*

**Type parameters:**

▪ **T**: *Error*

**Parameters:**

Name | Type |
------ | ------ |
`failure` | T |

**Returns:** *[Failure](interfaces/failure.md)‹Error›*

___

### `Const` fajr

▸ **fajr**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: [GeoCoordinates](interfaces/geocoordinates.md), `convention`: [Convention](interfaces/convention.md), `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [src/salah/fajr.ts:8](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/salah/fajr.ts#L8)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`date` | [Date](interfaces/__global.date.md) | - |
`geoCoordinates` | [GeoCoordinates](interfaces/geocoordinates.md) | - |
`convention` | [Convention](interfaces/convention.md) | defaultConvention() |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) | "AngleBasedMethod" |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` fajrHighLatitudeMethodHandler

▸ **fajrHighLatitudeMethodHandler**(`highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod), `date`: [Date](interfaces/__global.date.md), `geoCoordinates`: [GeoCoordinates](interfaces/geocoordinates.md), `salahAngle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [src/highLatitudeMethods/highLatitudeMethodHandler.ts:36](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/highLatitudeMethods/highLatitudeMethodHandler.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | [GeoCoordinates](interfaces/geocoordinates.md) |
`salahAngle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` geoCoordinates

▸ **geoCoordinates**(`latitude`: Readonly‹[Latitude](interfaces/latitude.md)›, `longitude`: Readonly‹[Longitude](interfaces/longitude.md)›): *Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›*

*Defined in [src/geoCoordinates/geoCoordinates.ts:9](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/geoCoordinates/geoCoordinates.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[Latitude](interfaces/latitude.md)› |
`longitude` | Readonly‹[Longitude](interfaces/longitude.md)› |

**Returns:** *Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›*

___

### `Const` getAsrDateTimeUtc

▸ **getAsrDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `latitude`: number, `longitude`: number, `madhab`: [Madhab](README.md#madhab)): *string*

Defined in salahtimes.d.ts:83

Gets the date and time for asr in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**`example`** <caption>Example usage of getAsrDateTimeUtc</caption>
// returns "2021-03-01T15:02:05.884Z"
getAsrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380);
// returns "2021-03-01T15:02:05.884Z"
getAsrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'Shafii');

**`example`** <caption>Example usage of getAsrDateTimeUtc</caption>
// returns "2021-03-01T15:45:41.293Z"
getAsrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'Hanafi');

**`function`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | [Date](interfaces/__global.date.md) | A date instance. |
`latitude` | number | A latitude value in the range of -90 to 90. |
`longitude` | number | A longitude value in the range of -180 to 180. |
`madhab` | [Madhab](README.md#madhab) | - |

**Returns:** *string*

A string representing date and time for asr in UTC, expressed in an ISO 8601 format.

▸ **getAsrDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `latitude`: number, `longitude`: number, `madhab`: [Madhab](README.md#madhab)): *string*

*Defined in [src/client/adapter.ts:41](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/client/adapter.ts#L41)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`date` | [Date](interfaces/__global.date.md) | - |
`latitude` | number | - |
`longitude` | number | - |
`madhab` | [Madhab](README.md#madhab) | "Standard" |

**Returns:** *string*

___

### `Const` getDateTimeAtAngleDecorator

▸ **getDateTimeAtAngleDecorator**(`getDateTimeUtcAtAngle`: [GetDateTimeUtcAtAngle](README.md#getdatetimeutcatangle), `date`: [Date](interfaces/__global.date.md), `geoCoordinates`: [GeoCoordinates](interfaces/geocoordinates.md), `degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [src/astronomy/getDateTimeAtAngleAdapter.ts:22](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/getDateTimeAtAngleAdapter.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`getDateTimeUtcAtAngle` | [GetDateTimeUtcAtAngle](README.md#getdatetimeutcatangle) |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | [GeoCoordinates](interfaces/geocoordinates.md) |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` getDateTimeUtcAtAngleStrategy

▸ **getDateTimeUtcAtAngleStrategy**(`getDateTimeAtAngle`: [GetDateTimeUtcAtAngle](README.md#getdatetimeutcatangle), `date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›, `degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [src/astronomy/getDateTimeUtcAtAngleStrategy.ts:19](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/getDateTimeUtcAtAngleStrategy.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`getDateTimeAtAngle` | [GetDateTimeUtcAtAngle](README.md#getdatetimeutcatangle) |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` getDateTimeUtcOfAngleAfterNoonAdapter

▸ **getDateTimeUtcOfAngleAfterNoonAdapter**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: [GeoCoordinates](interfaces/geocoordinates.md), `degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [src/astronomy/getDateTimeAtAngleAdapter.ts:14](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/getDateTimeAtAngleAdapter.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | [GeoCoordinates](interfaces/geocoordinates.md) |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` getDateTimeUtcOfAngleBeforeNoonAdapter

▸ **getDateTimeUtcOfAngleBeforeNoonAdapter**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: [GeoCoordinates](interfaces/geocoordinates.md), `degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [src/astronomy/getDateTimeAtAngleAdapter.ts:8](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/getDateTimeAtAngleAdapter.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | [GeoCoordinates](interfaces/geocoordinates.md) |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` getDeclinationOfTheSun

▸ **getDeclinationOfTheSun**(`date`: [Date](interfaces/__global.date.md)): *Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›*

*Defined in [src/astronomy/declinationOfTheSun.ts:5](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/declinationOfTheSun.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |

**Returns:** *Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›*

___

### `Const` getDhuhrDateTimeUtc

▸ **getDhuhrDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `latitude`: number, `longitude`: number): *string*

Defined in salahtimes.d.ts:64

Gets the date and time for dhuhr in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**`example`** <caption>Example usage of getDhuhrDateTimeUtc</caption>
// returns "2025-01-18T12:10:20.853Z"
getDhuhrDateTimeUtc(new Date(2025, 0, 18), -0.010150);

**`function`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | [Date](interfaces/__global.date.md) | A date instance. |
`latitude` | number | - |
`longitude` | number | A longitude value in the range of -180 to 180. |

**Returns:** *string*

A string representing date and time for dhuhr in UTC, expressed in an ISO 8601 format.

▸ **getDhuhrDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `longitude`: number): *string*

*Defined in [src/client/adapter.ts:29](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/client/adapter.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`longitude` | number |

**Returns:** *string*

___

### `Const` getFajrDateTimeUtc

▸ **getFajrDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `latitude`: number, `longitude`: number, `islamicConvention`: [SupportedConventions](README.md#supportedconventions), `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *string*

Defined in salahtimes.d.ts:47

Gets the date and time for fajr in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**`example`** <caption>Example usage of getFajrDateTimeUtc</caption>
// returns '2021-03-01T04:57:11.422Z'
getFajrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380);

**`example`** <caption>Example usage of getFajrDateTimeUtc</caption>
// returns '2021-03-01T04:47:21.866Z'
getFajrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'EgyptianGeneralAuthorityOfSurvey');

**`example`** <caption>Example usage of getFajrDateTimeUtc</caption>
// returns '2021-03-01T04:47:21.866Z'
getFajrDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'EgyptianGeneralAuthorityOfSurvey'. 'MiddleOfTheNightMethod');

**`function`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | [Date](interfaces/__global.date.md) | A date instance. |
`latitude` | number | A latitude value in the range of -90 to 90. |
`longitude` | number | A longitude value in the range of -180 to 180. |
`islamicConvention` | [SupportedConventions](README.md#supportedconventions) | - |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) | - |

**Returns:** *string*

A string representing date and time for fajr in UTC, expressed in an ISO 8601 format.

▸ **getFajrDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `latitude`: number, `longitude`: number, `islamicConvention`: [SupportedConventions](README.md#supportedconventions), `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *string*

*Defined in [src/client/adapter.ts:16](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/client/adapter.ts#L16)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`date` | [Date](interfaces/__global.date.md) | - |
`latitude` | number | - |
`longitude` | number | - |
`islamicConvention` | [SupportedConventions](README.md#supportedconventions) | "MuslimWorldLeague" |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) | "AngleBasedMethod" |

**Returns:** *string*

___

### `Const` getIshaaDateTimeUtc

▸ **getIshaaDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `latitude`: number, `longitude`: number, `islamicConvention`: [SupportedConventions](README.md#supportedconventions), `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *string*

Defined in salahtimes.d.ts:127

Gets the date and time for fajr in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**`example`** <caption>Example usage of getIshaaDateTimeUtc</caption>
// returns '2021-03-01T19:22:33.506Z'

**`example`** <caption>Example usage of getIshaaDateTimeUtc</caption>
getIshaaDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380)
// returns '2021-03-01T19:29:04.467Z'

**`example`** <caption>Example usage of getIshaaDateTimeUtc</caption>
getIshaaDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'UniversityOfIslamicSciencesKarachi')

**`example`** <caption>Example usage of getIshaaDateTimeUtc</caption>
// returns '2021-03-01T19:29:04.467Z'
getIshaaDateTimeUtc(new Date(2021, 2, 1), 51.522079, -0.191380, 'UniversityOfIslamicSciencesKarachi', 'MiddleOfTheNightMethod')

**`function`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | [Date](interfaces/__global.date.md) | A date instance. |
`latitude` | number | A latitude value in the range of -90 to 90. |
`longitude` | number | A longitude value in the range of -180 to 180. |
`islamicConvention` | [SupportedConventions](README.md#supportedconventions) | - |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) | - |

**Returns:** *string*

A string representing date and time for ishaa in UTC, expressed in an ISO 8601 format.

▸ **getIshaaDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `latitude`: number, `longitude`: number, `islamicConvention`: [SupportedConventions](README.md#supportedconventions), `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *string*

*Defined in [src/client/adapter.ts:63](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/client/adapter.ts#L63)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`date` | [Date](interfaces/__global.date.md) | - |
`latitude` | number | - |
`longitude` | number | - |
`islamicConvention` | [SupportedConventions](README.md#supportedconventions) | "MuslimWorldLeague" |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) | "AngleBasedMethod" |

**Returns:** *string*

___

### `Const` getMaghribDateTimeUtc

▸ **getMaghribDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `longitude`: number): *string*

Defined in salahtimes.d.ts:105

Gets the date and time for maghrib in UTC expressed in an ISO 8601 format for date instance, latitude and longitude value.

**`example`** <caption>Example usage of getMaghribDateTimeUtc</caption>
// returns '2037-08-02T17:59:44.502Z'
getMaghribDateTimeUtc(new Date(2037, 7, 2), 42.637610, 21.092160)

**`example`** <caption>Example usage of getMaghribDateTimeUtc</caption>
// returns 'The sun is up all day on 2037-08-01T23:00:00.000Z at latitude: 71.98007 and longitude: 102.47427'
getMaghribDateTimeUtc(new Date(2037, 7, 2), 71.980070, 102.474270)

**`example`** <caption>Example usage of getMaghribDateTimeUtc</caption>
// returns 'The sun is down all day on 2032-01-01T00:00:00.000Z at latitude: 89.525 and longitude: -30.45'
getMaghribDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500)

**`example`** <caption>Example usage of getMaghribDateTimeUtc</caption>
// returns 'The sun is down all day on 2032-01-01T00:00:00.000Z at latitude: 89.525 and longitude: -30.45'
getMaghribDateTimeUtc(new Date(2032, 0, 1), 89.5250, -30.4500)

**`function`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | [Date](interfaces/__global.date.md) | A date instance. |
`longitude` | number | A longitude value in the range of -180 to 180. |

**Returns:** *string*

A string representing date and time for maghrib in UTC, expressed in an ISO 8601 format.

▸ **getMaghribDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `latitude`: number, `longitude`: number): *string*

*Defined in [src/client/adapter.ts:54](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/client/adapter.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`latitude` | number |
`longitude` | number |

**Returns:** *string*

___

### `Const` getNullMembers

▸ **getNullMembers**<**T**>(`target`: T): *string[]*

*Defined in [src/validation/validate.ts:3](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/validation/validate.ts#L3)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |

**Returns:** *string[]*

___

### `Const` getSunriseDateTimeUtcAdapter

▸ **getSunriseDateTimeUtcAdapter**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [src/astronomy/getSunriseDateTimeUtcAdapter.ts:7](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/getSunriseDateTimeUtcAdapter.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` getSunsetDateTimeUtcAdapter

▸ **getSunsetDateTimeUtcAdapter**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [src/astronomy/getSunsetDateTimeUtcAdapter.ts:7](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/getSunsetDateTimeUtcAdapter.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` getTimeSpanForAngle

▸ **getTimeSpanForAngle**(`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `span`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[TimeSpan](interfaces/timespan.md)*

*Defined in [src/highLatitudeMethods/angleBasedMethod.ts:30](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/highLatitudeMethods/angleBasedMethod.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`span` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[TimeSpan](interfaces/timespan.md)*

___

### `Const` handle

▸ **handle**(`err`: Error): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [src/salah/maghrib.ts:26](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/salah/maghrib.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` highLatitudeMethodHandler

▸ **highLatitudeMethodHandler**(`highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod), `spanBetweenSunsetAndSunrise`: [TimeSpan](interfaces/timespan.md), `salahAngle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹[TimeSpan](interfaces/timespan.md)›*

*Defined in [src/highLatitudeMethods/highLatitudeMethodHandler.ts:18](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/highLatitudeMethods/highLatitudeMethodHandler.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) |
`spanBetweenSunsetAndSunrise` | [TimeSpan](interfaces/timespan.md) |
`salahAngle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹[TimeSpan](interfaces/timespan.md)›*

___

### `Const` ishaa

▸ **ishaa**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: [GeoCoordinates](interfaces/geocoordinates.md), `convention`: [Convention](interfaces/convention.md), `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [src/salah/ishaa.ts:6](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/salah/ishaa.ts#L6)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`date` | [Date](interfaces/__global.date.md) | - |
`geoCoordinates` | [GeoCoordinates](interfaces/geocoordinates.md) | - |
`convention` | [Convention](interfaces/convention.md) | defaultConvention() |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) | "AngleBasedMethod" |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` ishaaHighLatitudeMethodHandler

▸ **ishaaHighLatitudeMethodHandler**(`highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod), `date`: [Date](interfaces/__global.date.md), `geoCoordinates`: [GeoCoordinates](interfaces/geocoordinates.md), `salahAngle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [src/highLatitudeMethods/highLatitudeMethodHandler.ts:65](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/highLatitudeMethods/highLatitudeMethodHandler.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`highLatitudeMethod` | [HighLatitudeMethod](README.md#highlatitudemethod) |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | [GeoCoordinates](interfaces/geocoordinates.md) |
`salahAngle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` latitude

▸ **latitude**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[Latitude](interfaces/latitude.md)››*

*Defined in [src/geoCoordinates/latitude.ts:7](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/geoCoordinates/latitude.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[Latitude](interfaces/latitude.md)››*

___

### `Const` longitude

▸ **longitude**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[Longitude](interfaces/longitude.md)››*

*Defined in [src/geoCoordinates/longitude.ts:7](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/geoCoordinates/longitude.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[Longitude](interfaces/longitude.md)››*

___

### `Const` madhab

▸ **madhab**(`madhab`: [Madhab](README.md#madhab)): *[ErrorOr](README.md#erroror)‹[AsrJursiticMethod](interfaces/asrjursiticmethod.md)›*

*Defined in [src/madhab/madhab.ts:10](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/madhab/madhab.ts#L10)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`madhab` | [Madhab](README.md#madhab) | "Standard" |

**Returns:** *[ErrorOr](README.md#erroror)‹[AsrJursiticMethod](interfaces/asrjursiticmethod.md)›*

___

### `Const` maghrib

▸ **maghrib**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [src/salah/maghrib.ts:6](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/salah/maghrib.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` matchErrorOr

▸ **matchErrorOr**<**T**, **F**, **S**>(`input`: [ErrorOr](README.md#erroror)‹S›, `onFailureCallback`: function, `onSuccessCallback`: function): *T | F*

*Defined in [src/either/errorOr.ts:7](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/either/errorOr.ts#L7)*

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

*Defined in [src/highLatitudeMethods/middleOfTheNight.ts:7](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/highLatitudeMethods/middleOfTheNight.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` oneSeventhMethod

▸ **oneSeventhMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [src/highLatitudeMethods/oneSeventhMethod.ts:7](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/highLatitudeMethods/oneSeventhMethod.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` radiansToAngularDegrees

▸ **radiansToAngularDegrees**(`radians`: number): *[ErrorOr](README.md#erroror)‹[AngularDegrees](interfaces/angulardegrees.md)›*

*Defined in [src/maths/angularConversions.ts:6](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/maths/angularConversions.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹[AngularDegrees](interfaces/angulardegrees.md)›*

___

### `Const` radiansToAngularDegreesNumericConversion

▸ **radiansToAngularDegreesNumericConversion**(`radians`: number): *number*

*Defined in [src/maths/angularConversions.ts:13](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/maths/angularConversions.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *number*

___

### `Const` success

▸ **success**<**T**>(`value`: T): *[Success](interfaces/success.md)‹T›*

*Defined in [src/either/errorOr.ts:23](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/either/errorOr.ts#L23)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Success](interfaces/success.md)‹T›*

___

### `Const` sunDoesntReachAltitudeError

▸ **sunDoesntReachAltitudeError**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›): *[SunDoesntReachAltitudeError](README.md#sundoesntreachaltitudeerror)*

*Defined in [src/astronomy/errors/sunDoesntReachAltitudeError.ts:5](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/errors/sunDoesntReachAltitudeError.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

**Returns:** *[SunDoesntReachAltitudeError](README.md#sundoesntreachaltitudeerror)*

___

### `Const` sunDownAllDayError

▸ **sunDownAllDayError**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›): *[SunDownAllDayError](README.md#sundownalldayerror)*

*Defined in [src/astronomy/errors/sunDownAllDayError.ts:5](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/errors/sunDownAllDayError.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

**Returns:** *[SunDownAllDayError](README.md#sundownalldayerror)*

___

### `Const` sunUpAllDayError

▸ **sunUpAllDayError**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›): *[SunUpAllDayError](README.md#sunupalldayerror)*

*Defined in [src/astronomy/errors/sunUpAllDayError.ts:5](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/astronomy/errors/sunUpAllDayError.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

**Returns:** *[SunUpAllDayError](README.md#sunupalldayerror)*

___

### `Const` tan

▸ **tan**(`degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *number*

*Defined in [src/maths/trigonometry.ts:12](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/maths/trigonometry.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *number*

___

### `Const` throwErrorOnNull

▸ **throwErrorOnNull**<**T**>(`target`: T): *void*

*Defined in [src/validation/validate.ts:17](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/validation/validate.ts#L17)*

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

*Defined in [src/either/errorOr.ts:25](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/either/errorOr.ts#L25)*

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

*Defined in [src/time/timeSpan.ts:10](https://github.com/doniseferi/salahtimes/blob/ceee6ba/src/time/timeSpan.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`days` | number |
`hours` | number |
`minutes` | number |
`seconds` | number |
`milliseconds` | number |

**Returns:** *[TimeSpan](interfaces/timespan.md)*
