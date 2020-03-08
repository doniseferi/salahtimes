[salahtimes](README.md)

# salahtimes

## Index

### Modules

* [__global](modules/__global.md)

### Interfaces

* [AngularDegrees](interfaces/angulardegrees.md)
* [Convention](interfaces/convention.md)
* [Duration](interfaces/duration.md)
* [Failure](interfaces/failure.md)
* [GeoCoordinate](interfaces/geocoordinate.md)
* [Left](interfaces/left.md)
* [Right](interfaces/right.md)
* [Success](interfaces/success.md)
* [TimeSpan](interfaces/timespan.md)

### Type aliases

* [AngleBasedMethod](README.md#anglebasedmethod)
* [AsrAngle](README.md#asrangle)
* [Either](README.md#either)
* [ErrorOr](README.md#erroror)
* [MiddleOfTheNightMethod](README.md#middleofthenightmethod)
* [OneSeventhMethod](README.md#oneseventhmethod)
* [SupportedConventions](README.md#supportedconventions)

### Variables

* [angularConst](README.md#const-angularconst)
* [conventions](README.md#const-conventions)

### Functions

* [angleBasedMethod](README.md#const-anglebasedmethod)
* [angularDegreesToRadians](README.md#const-angulardegreestoradians)
* [angularDegreesToRadiansNumericConversion](README.md#const-angulardegreestoradiansnumericconversion)
* [arccot](README.md#const-arccot)
* [asrElevationAngle](README.md#const-asrelevationangle)
* [containsNullMembers](README.md#const-containsnullmembers)
* [convention](README.md#const-convention)
* [createCoordinate](README.md#const-createcoordinate)
* [createLatitude](README.md#const-createlatitude)
* [createLongitude](README.md#const-createlongitude)
* [degrees](README.md#const-degrees)
* [divisionBasedMethod](README.md#const-divisionbasedmethod)
* [errorMessage](README.md#const-errormessage)
* [failure](README.md#const-failure)
* [geoCoordinate](README.md#const-geocoordinate)
* [getNullMembers](README.md#const-getnullmembers)
* [hanafi](README.md#const-hanafi)
* [hanbali](README.md#const-hanbali)
* [left](README.md#const-left)
* [maliki](README.md#const-maliki)
* [match](README.md#const-match)
* [matchErrorOr](README.md#const-matcherroror)
* [middleOfTheNightMethod](README.md#const-middleofthenightmethod)
* [oneSeventhMethod](README.md#const-oneseventhmethod)
* [radiansToAngularDegrees](README.md#const-radianstoangulardegrees)
* [radiansToAngularDegreesNumericConversion](README.md#const-radianstoangulardegreesnumericconversion)
* [right](README.md#const-right)
* [shafii](README.md#const-shafii)
* [standard](README.md#const-standard)
* [success](README.md#const-success)
* [tan](README.md#const-tan)
* [throwErrorOnNull](README.md#const-throwerroronnull)
* [throwOnError](README.md#const-throwonerror)
* [timeSpan](README.md#const-timespan)

## Type aliases

###  AngleBasedMethod

Ƭ **AngleBasedMethod**: *function*

*Defined in [location/highLatitude/highLatitudeMethod.ts:5](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/location/highLatitude/highLatitudeMethod.ts#L5)*

#### Type declaration:

▸ (`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  AsrAngle

Ƭ **AsrAngle**: *Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›*

*Defined in [asr/madhab.ts:5](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/asr/madhab.ts#L5)*

___

###  Either

Ƭ **Either**: *Readonly‹[Left](interfaces/left.md)‹L›› | Readonly‹[Right](interfaces/right.md)‹R››*

*Defined in [either/either.ts:5](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/either/either.ts#L5)*

___

###  ErrorOr

Ƭ **ErrorOr**: *Readonly‹[Failure](interfaces/failure.md)‹Error›› | Readonly‹[Success](interfaces/success.md)‹T››*

*Defined in [either/errorOr.ts:3](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/either/errorOr.ts#L3)*

___

###  MiddleOfTheNightMethod

Ƭ **MiddleOfTheNightMethod**: *[OneSeventhMethod](README.md#oneseventhmethod)*

*Defined in [location/highLatitude/highLatitudeMethod.ts:9](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/location/highLatitude/highLatitudeMethod.ts#L9)*

___

###  OneSeventhMethod

Ƭ **OneSeventhMethod**: *function*

*Defined in [location/highLatitude/highLatitudeMethod.ts:7](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/location/highLatitude/highLatitudeMethod.ts#L7)*

#### Type declaration:

▸ (`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  SupportedConventions

Ƭ **SupportedConventions**: *"MuslimWorldLeague" | "IslamicSocietyOfNorthAmerica" | "EgyptianGeneralAuthorityOfSurvey" | "UmmAlQuraUniversityMekkah" | "UniversityOfIslamicSciencesKarachi" | "InstituteOfGeophysicsUniversityOfTehranOfSurvey" | "ShiaIthnaAshariLevaResearchInstituteQumOfSurvey"*

*Defined in [convention/convention.ts:4](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/convention/convention.ts#L4)*

## Variables

### `Const` angularConst

• **angularConst**: *0.017453292519943295* = 0.017453292519943295

*Defined in [maths/angularConversions.ts:4](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/maths/angularConversions.ts#L4)*

___

### `Const` conventions

• **conventions**: *Array‹object›* = [{
  name: 'muslimWorldLeague',
  value: {
    fajr: () => degrees(18),
    isha: () => degrees(17)
  }
},
{
  name: 'islamicSocietyOfNorthAmerica',
  value: {
    fajr: () => degrees(15),
    isha: () => degrees(15)
  }
}, {
  name: 'egyptianGeneralAuthorityOfSurvey',
  value: {
    fajr: () => degrees(19.5),
    isha: () => degrees(17.5)
  }
}, {
  name: 'ummAlQuraUniversityMekkah',
  value: {
    fajr: () => degrees(18.5),
    isha: () => degrees(22.5)
  }
}, {
  name: 'universityOfIslamicSciencesKarachi',
  value: {
    fajr: () => degrees(18),
    isha: () => degrees(18)
  }
}, {
  name: 'instituteOfGeophysicsUniversityOfTehranOfSurvey',
  value: {
    fajr: () => degrees(17.7),
    isha: () => degrees(14)
  }
}, {
  name: 'shiaIthnaAshariLevaResearchInstituteQumOfSurvey',
  value: {
    fajr: () => degrees(16),
    isha: () => degrees(14)
  }
}]

*Defined in [convention/convention.ts:18](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/convention/convention.ts#L18)*

## Functions

### `Const` angleBasedMethod

▸ **angleBasedMethod**(`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [location/highLatitude/angleBasedMethod.ts:6](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/location/highLatitude/angleBasedMethod.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` angularDegreesToRadians

▸ **angularDegreesToRadians**(`degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹number›*

*Defined in [maths/angularConversions.ts:8](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/maths/angularConversions.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹number›*

___

### `Const` angularDegreesToRadiansNumericConversion

▸ **angularDegreesToRadiansNumericConversion**(`degrees`: number): *number*

*Defined in [maths/angularConversions.ts:15](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/maths/angularConversions.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | number |

**Returns:** *number*

___

### `Const` arccot

▸ **arccot**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [maths/trigonometry.ts:14](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/maths/trigonometry.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` asrElevationAngle

▸ **asrElevationAngle**(`shadowLength`: 1 | 2, `latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `declinationOfTheSun`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [asr/asrElevationAngle.ts:6](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/asr/asrElevationAngle.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`shadowLength` | 1 &#124; 2 |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`declinationOfTheSun` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` containsNullMembers

▸ **containsNullMembers**<**T**>(`target`: T): *boolean*

Defined in validation/validate.ts:1

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

*Defined in [convention/convention.ts:63](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/convention/convention.ts#L63)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | [SupportedConventions](README.md#supportedconventions) | "MuslimWorldLeague" |

**Returns:** *[Convention](interfaces/convention.md)*

___

### `Const` createCoordinate

▸ **createCoordinate**(`name`: "Latitude" | "Longitude", `value`: Readonly‹number›, `min`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `max`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [location/geoCoordinate/geoCoordinate.ts:56](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/location/geoCoordinate/geoCoordinate.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | "Latitude" &#124; "Longitude" |
`value` | Readonly‹number› |
`min` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`max` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` createLatitude

▸ **createLatitude**(`value`: Readonly‹number›): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [location/geoCoordinate/geoCoordinate.ts:16](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/location/geoCoordinate/geoCoordinate.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Readonly‹number› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` createLongitude

▸ **createLongitude**(`value`: Readonly‹number›): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [location/geoCoordinate/geoCoordinate.ts:36](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/location/geoCoordinate/geoCoordinate.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Readonly‹number› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` degrees

▸ **degrees**(`value`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [maths/degree.ts:9](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/maths/degree.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` divisionBasedMethod

▸ **divisionBasedMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›, `divisor`: number): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [location/highLatitude/divisionBasedMethods.ts:9](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/location/highLatitude/divisionBasedMethods.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |
`divisor` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` errorMessage

▸ **errorMessage**(`value`: number): *string*

*Defined in [maths/degree.ts:7](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/maths/degree.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

### `Const` failure

▸ **failure**<**T**>(`failure`: T): *[Failure](interfaces/failure.md)‹Error›*

*Defined in [either/errorOr.ts:7](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/either/errorOr.ts#L7)*

**Type parameters:**

▪ **T**: *Error*

**Parameters:**

Name | Type |
------ | ------ |
`failure` | T |

**Returns:** *[Failure](interfaces/failure.md)‹Error›*

___

### `Const` geoCoordinate

▸ **geoCoordinate**(`latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `longitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *Readonly‹[GeoCoordinate](interfaces/geocoordinate.md)›*

*Defined in [location/geoCoordinate/geoCoordinate.ts:9](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/location/geoCoordinate/geoCoordinate.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`longitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *Readonly‹[GeoCoordinate](interfaces/geocoordinate.md)›*

___

### `Const` getNullMembers

▸ **getNullMembers**<**T**>(`target`: T): *string[]*

Defined in validation/validate.ts:3

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | T |

**Returns:** *string[]*

___

### `Const` hanafi

▸ **hanafi**(`latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `declinationOfTheSub`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹[AsrAngle](README.md#asrangle)›*

*Defined in [asr/madhab.ts:11](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/asr/madhab.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`declinationOfTheSub` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹[AsrAngle](README.md#asrangle)›*

___

### `Const` hanbali

▸ **hanbali**(`latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `declinationOfTheSub`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹[AsrAngle](README.md#asrangle)›*

*Defined in [asr/madhab.ts:10](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/asr/madhab.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`declinationOfTheSub` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹[AsrAngle](README.md#asrangle)›*

___

### `Const` left

▸ **left**<**T**>(`result`: T): *[Left](interfaces/left.md)‹T›*

*Defined in [either/either.ts:21](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/either/either.ts#L21)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

**Returns:** *[Left](interfaces/left.md)‹T›*

___

### `Const` maliki

▸ **maliki**(`latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `declinationOfTheSub`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹[AsrAngle](README.md#asrangle)›*

*Defined in [asr/madhab.ts:9](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/asr/madhab.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`declinationOfTheSub` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹[AsrAngle](README.md#asrangle)›*

___

### `Const` match

▸ **match**<**L**, **R**>(`input`: [Either](README.md#either)‹L, R›, `left`: function, `right`: function): *L | R*

*Defined in [either/either.ts:7](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/either/either.ts#L7)*

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

*Defined in [either/errorOr.ts:10](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/either/errorOr.ts#L10)*

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

*Defined in [location/highLatitude/divisionBasedMethods.ts:7](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/location/highLatitude/divisionBasedMethods.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` oneSeventhMethod

▸ **oneSeventhMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [location/highLatitude/divisionBasedMethods.ts:5](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/location/highLatitude/divisionBasedMethods.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` radiansToAngularDegrees

▸ **radiansToAngularDegrees**(`radians`: number): *[ErrorOr](README.md#erroror)‹[AngularDegrees](interfaces/angulardegrees.md)›*

*Defined in [maths/angularConversions.ts:6](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/maths/angularConversions.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *[ErrorOr](README.md#erroror)‹[AngularDegrees](interfaces/angulardegrees.md)›*

___

### `Const` radiansToAngularDegreesNumericConversion

▸ **radiansToAngularDegreesNumericConversion**(`radians`: number): *number*

*Defined in [maths/angularConversions.ts:13](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/maths/angularConversions.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *number*

___

### `Const` right

▸ **right**<**T**>(`res`: T): *[Right](interfaces/right.md)‹T›*

*Defined in [either/either.ts:23](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/either/either.ts#L23)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`res` | T |

**Returns:** *[Right](interfaces/right.md)‹T›*

___

### `Const` shafii

▸ **shafii**(`latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `declinationOfTheSub`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹[AsrAngle](README.md#asrangle)›*

*Defined in [asr/madhab.ts:8](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/asr/madhab.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`declinationOfTheSub` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹[AsrAngle](README.md#asrangle)›*

___

### `Const` standard

▸ **standard**(`latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `declinationOfTheSub`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[ErrorOr](README.md#erroror)‹[AsrAngle](README.md#asrangle)›*

*Defined in [asr/madhab.ts:7](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/asr/madhab.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`declinationOfTheSub` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[ErrorOr](README.md#erroror)‹[AsrAngle](README.md#asrangle)›*

___

### `Const` success

▸ **success**<**T**>(`value`: T): *[Success](interfaces/success.md)‹T›*

*Defined in [either/errorOr.ts:8](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/either/errorOr.ts#L8)*

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

*Defined in [maths/trigonometry.ts:19](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/maths/trigonometry.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *number*

___

### `Const` throwErrorOnNull

▸ **throwErrorOnNull**<**T**>(`target`: T): *void*

Defined in validation/validate.ts:17

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

*Defined in [either/errorOr.ts:24](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/either/errorOr.ts#L24)*

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

*Defined in [time/timeSpan.ts:10](https://github.com/doniseferi/salahtimes/blob/8d68cf5/src/time/timeSpan.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`days` | number |
`hours` | number |
`minutes` | number |
`seconds` | number |
`milliseconds` | number |

**Returns:** *[TimeSpan](interfaces/timespan.md)*
