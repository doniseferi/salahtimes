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

*Defined in [highLatitudeMethods/angleBasedMethod.ts:6](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/highLatitudeMethods/angleBasedMethod.ts#L6)*

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

*Defined in [either/errorOr.ts:3](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/either/errorOr.ts#L3)*

___

###  GetDateTimeUtc

Ƭ **GetDateTimeUtc**: *function*

*Defined in [astronomy/index.ts:19](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/index.ts#L19)*

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

*Defined in [astronomy/getDateTimeAtAngleAdapter.ts:20](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/getDateTimeAtAngleAdapter.ts#L20)*

*Defined in [astronomy/getDateTimeUtcAtAngleStrategy.ts:7](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/getDateTimeUtcAtAngleStrategy.ts#L7)*

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

*Defined in [astronomy/getDateTimeUtcAtAngleStrategy.ts:12](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/getDateTimeUtcAtAngleStrategy.ts#L12)*

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

*Defined in [highLatitudeMethods/highLatitudeMethodHandler.ts:10](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/highLatitudeMethods/highLatitudeMethodHandler.ts#L10)*

___

###  HighLatitudeMethodHandler

Ƭ **HighLatitudeMethodHandler**: *function*

*Defined in [highLatitudeMethods/highLatitudeMethodHandler.ts:12](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/highLatitudeMethods/highLatitudeMethodHandler.ts#L12)*

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

*Defined in [madhab/madhab.ts:4](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/madhab/madhab.ts#L4)*

___

###  MiddleOfTheNightMethod

Ƭ **MiddleOfTheNightMethod**: *function*

*Defined in [highLatitudeMethods/middleOfTheNight.ts:5](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/highLatitudeMethods/middleOfTheNight.ts#L5)*

#### Type declaration:

▸ (`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  OneSeventhMethod

Ƭ **OneSeventhMethod**: *function*

*Defined in [highLatitudeMethods/oneSeventhMethod.ts:5](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/highLatitudeMethods/oneSeventhMethod.ts#L5)*

#### Type declaration:

▸ (`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  SunDoesntReachAltitudeError

Ƭ **SunDoesntReachAltitudeError**: *Error*

*Defined in [astronomy/errors/sunDoesntReachAltitudeError.ts:3](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/errors/sunDoesntReachAltitudeError.ts#L3)*

___

###  SunDownAllDayError

Ƭ **SunDownAllDayError**: *Error*

*Defined in [astronomy/errors/sunDownAllDayError.ts:3](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/errors/sunDownAllDayError.ts#L3)*

___

###  SunUpAllDayError

Ƭ **SunUpAllDayError**: *Error*

*Defined in [astronomy/errors/sunUpAllDayError.ts:3](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/errors/sunUpAllDayError.ts#L3)*

___

###  SupportedConventions

Ƭ **SupportedConventions**: *"MuslimWorldLeague" | "IslamicSocietyOfNorthAmerica" | "EgyptianGeneralAuthorityOfSurvey" | "UmmAlQuraUniversityMekkah" | "UniversityOfIslamicSciencesKarachi" | "InstituteOfGeophysicsUniversityOfTehranOfSurvey" | "ShiaIthnaAshariLevaResearchInstituteQumOfSurvey"*

*Defined in [convention/convention.ts:4](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/convention/convention.ts#L4)*

## Variables

### `Const` abs

• **abs**: *abs* = Math.abs

*Defined in [maths/index.ts:9](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/maths/index.ts#L9)*

___

### `Const` angularConst

• **angularConst**: *0.017453292519943295* = 0.017453292519943295

*Defined in [maths/angularConversions.ts:4](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/maths/angularConversions.ts#L4)*

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

*Defined in [convention/convention.ts:19](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/convention/convention.ts#L19)*

## Functions

### `Const` add3MinutesToSunsetDateTimeUtc

▸ **add3MinutesToSunsetDateTimeUtc**(`sunsetDateTimeUtc`: string): *string*

*Defined in [salah/maghrib.ts:20](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/salah/maghrib.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`sunsetDateTimeUtc` | string |

**Returns:** *string*

___

### `Const` angleBasedMethod

▸ **angleBasedMethod**(`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `span`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [highLatitudeMethods/angleBasedMethod.ts:10](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/highLatitudeMethods/angleBasedMethod.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`span` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` angularDegreesToRadians

▸ **angularDegreesToRadians**(`degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹number›*

*Defined in [maths/angularConversions.ts:8](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/maths/angularConversions.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹number›*

___

### `Const` angularDegreesToRadiansNumericConversion

▸ **angularDegreesToRadiansNumericConversion**(`degrees`: number): *number*

*Defined in [maths/angularConversions.ts:15](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/maths/angularConversions.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | number |

**Returns:** *number*

___

### `Const` arccot

▸ **arccot**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [maths/trigonometry.ts:4](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/maths/trigonometry.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` asrElevationAngle

▸ **asrElevationAngle**(`shadowLengthToHeightProportion`: 1 | 2, `latitude`: Readonly‹[Latitude](interfaces/latitude.md)›, `declinationOfTheSun`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [asrElevationAngle/asrElevationAngle.ts:6](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/asrElevationAngle/asrElevationAngle.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`shadowLengthToHeightProportion` | 1 &#124; 2 |
`latitude` | Readonly‹[Latitude](interfaces/latitude.md)› |
`declinationOfTheSun` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` containsNullMembers

▸ **containsNullMembers**‹**T**›(`target`: T): *boolean*

*Defined in [validation/validate.ts:1](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/validation/validate.ts#L1)*

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

*Defined in [convention/convention.ts:50](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/convention/convention.ts#L50)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | [SupportedConventions](README.md#supportedconventions) | "MuslimWorldLeague" |

**Returns:** *[Convention](interfaces/convention.md)*

___

### `Const` degrees

▸ **degrees**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [maths/degree.ts:9](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/maths/degree.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` errorMessage

▸ **errorMessage**(`value`: number): *string*

*Defined in [maths/degree.ts:7](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/maths/degree.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

### `Const` failure

▸ **failure**‹**T**›(`failure`: T): *[Failure](interfaces/failure.md)‹Error›*

*Defined in [either/errorOr.ts:21](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/either/errorOr.ts#L21)*

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

*Defined in [salah/fajr.ts:8](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/salah/fajr.ts#L8)*

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

*Defined in [highLatitudeMethods/highLatitudeMethodHandler.ts:36](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/highLatitudeMethods/highLatitudeMethodHandler.ts#L36)*

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

*Defined in [geoCoordinates/geoCoordinates.ts:9](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/geoCoordinates/geoCoordinates.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[Latitude](interfaces/latitude.md)› |
`longitude` | Readonly‹[Longitude](interfaces/longitude.md)› |

**Returns:** *Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›*

___

### `Const` getAsrDateTimeUtc

▸ **getAsrDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `latitude`: number, `longitude`: number, `madhab`: [Madhab](README.md#madhab)): *string*

*Defined in [client/adapter.ts:41](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/client/adapter.ts#L41)*

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

*Defined in [astronomy/getDateTimeAtAngleAdapter.ts:22](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/getDateTimeAtAngleAdapter.ts#L22)*

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

*Defined in [astronomy/getDateTimeUtcAtAngleStrategy.ts:19](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/getDateTimeUtcAtAngleStrategy.ts#L19)*

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

*Defined in [astronomy/getDateTimeAtAngleAdapter.ts:14](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/getDateTimeAtAngleAdapter.ts#L14)*

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

*Defined in [astronomy/getDateTimeAtAngleAdapter.ts:8](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/getDateTimeAtAngleAdapter.ts#L8)*

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

*Defined in [astronomy/declinationOfTheSun.ts:5](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/declinationOfTheSun.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |

**Returns:** *Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›*

___

### `Const` getDhuhrDateTimeUtc

▸ **getDhuhrDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `longitude`: number): *string*

*Defined in [client/adapter.ts:29](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/client/adapter.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`longitude` | number |

**Returns:** *string*

___

### `Const` getFajrDateTimeUtc

▸ **getFajrDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `latitude`: number, `longitude`: number, `islamicConvention`: [SupportedConventions](README.md#supportedconventions), `highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod)): *string*

*Defined in [client/adapter.ts:16](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/client/adapter.ts#L16)*

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

*Defined in [client/adapter.ts:63](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/client/adapter.ts#L63)*

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

▸ **getMaghribDateTimeUtc**(`date`: [Date](interfaces/__global.date.md), `latitude`: number, `longitude`: number): *string*

*Defined in [client/adapter.ts:54](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/client/adapter.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`latitude` | number |
`longitude` | number |

**Returns:** *string*

___

### `Const` getNullMembers

▸ **getNullMembers**‹**T**›(`target`: T): *string[]*

*Defined in [validation/validate.ts:3](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/validation/validate.ts#L3)*

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

*Defined in [astronomy/getSunriseDateTimeUtcAdapter.ts:7](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/getSunriseDateTimeUtcAdapter.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` getSunsetDateTimeUtcAdapter

▸ **getSunsetDateTimeUtcAdapter**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [astronomy/getSunsetDateTimeUtcAdapter.ts:7](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/getSunsetDateTimeUtcAdapter.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` getTimeSpanForAngle

▸ **getTimeSpanForAngle**(`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `span`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[TimeSpan](interfaces/timespan.md)*

*Defined in [highLatitudeMethods/angleBasedMethod.ts:30](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/highLatitudeMethods/angleBasedMethod.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`span` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[TimeSpan](interfaces/timespan.md)*

___

### `Const` handle

▸ **handle**(`err`: Error): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [salah/maghrib.ts:26](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/salah/maghrib.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` highLatitudeMethodHandler

▸ **highLatitudeMethodHandler**(`highLatitudeMethod`: [HighLatitudeMethod](README.md#highlatitudemethod), `spanBetweenSunsetAndSunrise`: [TimeSpan](interfaces/timespan.md), `salahAngle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹[TimeSpan](interfaces/timespan.md)›*

*Defined in [highLatitudeMethods/highLatitudeMethodHandler.ts:18](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/highLatitudeMethods/highLatitudeMethodHandler.ts#L18)*

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

*Defined in [salah/ishaa.ts:6](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/salah/ishaa.ts#L6)*

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

*Defined in [highLatitudeMethods/highLatitudeMethodHandler.ts:65](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/highLatitudeMethods/highLatitudeMethodHandler.ts#L65)*

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

*Defined in [geoCoordinates/latitude.ts:7](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/geoCoordinates/latitude.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[Latitude](interfaces/latitude.md)››*

___

### `Const` longitude

▸ **longitude**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[Longitude](interfaces/longitude.md)››*

*Defined in [geoCoordinates/longitude.ts:7](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/geoCoordinates/longitude.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[Longitude](interfaces/longitude.md)››*

___

### `Const` madhab

▸ **madhab**(`madhab`: [Madhab](README.md#madhab)): *[ErrorOr](README.md#erroror)‹[AsrJursiticMethod](interfaces/asrjursiticmethod.md)›*

*Defined in [madhab/madhab.ts:10](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/madhab/madhab.ts#L10)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`madhab` | [Madhab](README.md#madhab) | "Standard" |

**Returns:** *[ErrorOr](README.md#erroror)‹[AsrJursiticMethod](interfaces/asrjursiticmethod.md)›*

___

### `Const` maghrib

▸ **maghrib**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›): *[ErrorOr](README.md#erroror)‹string›*

*Defined in [salah/maghrib.ts:6](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/salah/maghrib.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹string›*

___

### `Const` matchErrorOr

▸ **matchErrorOr**‹**T**, **F**, **S**›(`input`: [ErrorOr](README.md#erroror)‹S›, `onFailureCallback`: function, `onSuccessCallback`: function): *T | F*

*Defined in [either/errorOr.ts:7](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/either/errorOr.ts#L7)*

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

*Defined in [highLatitudeMethods/middleOfTheNight.ts:7](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/highLatitudeMethods/middleOfTheNight.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` oneSeventhMethod

▸ **oneSeventhMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [highLatitudeMethods/oneSeventhMethod.ts:7](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/highLatitudeMethods/oneSeventhMethod.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` radiansToAngularDegrees

▸ **radiansToAngularDegrees**(`radians`: number): *[ErrorOr](README.md#erroror)‹[AngularDegrees](interfaces/angulardegrees.md)›*

*Defined in [maths/angularConversions.ts:6](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/maths/angularConversions.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹[AngularDegrees](interfaces/angulardegrees.md)›*

___

### `Const` radiansToAngularDegreesNumericConversion

▸ **radiansToAngularDegreesNumericConversion**(`radians`: number): *number*

*Defined in [maths/angularConversions.ts:13](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/maths/angularConversions.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *number*

___

### `Const` success

▸ **success**‹**T**›(`value`: T): *[Success](interfaces/success.md)‹T›*

*Defined in [either/errorOr.ts:23](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/either/errorOr.ts#L23)*

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

*Defined in [astronomy/errors/sunDoesntReachAltitudeError.ts:5](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/errors/sunDoesntReachAltitudeError.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

**Returns:** *[SunDoesntReachAltitudeError](README.md#sundoesntreachaltitudeerror)*

___

### `Const` sunDownAllDayError

▸ **sunDownAllDayError**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›): *[SunDownAllDayError](README.md#sundownalldayerror)*

*Defined in [astronomy/errors/sunDownAllDayError.ts:5](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/errors/sunDownAllDayError.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

**Returns:** *[SunDownAllDayError](README.md#sundownalldayerror)*

___

### `Const` sunUpAllDayError

▸ **sunUpAllDayError**(`date`: [Date](interfaces/__global.date.md), `geoCoordinates`: Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)›): *[SunUpAllDayError](README.md#sunupalldayerror)*

*Defined in [astronomy/errors/sunUpAllDayError.ts:5](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/astronomy/errors/sunUpAllDayError.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | [Date](interfaces/__global.date.md) |
`geoCoordinates` | Readonly‹[GeoCoordinates](interfaces/geocoordinates.md)› |

**Returns:** *[SunUpAllDayError](README.md#sunupalldayerror)*

___

### `Const` tan

▸ **tan**(`degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *number*

*Defined in [maths/trigonometry.ts:12](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/maths/trigonometry.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *number*

___

### `Const` throwErrorOnNull

▸ **throwErrorOnNull**‹**T**›(`target`: T): *void*

*Defined in [validation/validate.ts:17](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/validation/validate.ts#L17)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |

**Returns:** *void*

___

### `Const` throwOnError

▸ **throwOnError**‹**T**›(`input`: [ErrorOr](README.md#erroror)‹T›): *T*

*Defined in [either/errorOr.ts:25](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/either/errorOr.ts#L25)*

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

*Defined in [time/timeSpan.ts:10](https://github.com/doniseferi/salahtimes/blob/e4094d6/src/time/timeSpan.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`days` | number |
`hours` | number |
`minutes` | number |
`seconds` | number |
`milliseconds` | number |

**Returns:** *[TimeSpan](interfaces/timespan.md)*
