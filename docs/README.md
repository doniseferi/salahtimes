[salahtimes](README.md)

# salahtimes

## Index

### Modules

* [__global](modules/__global.md)

### Interfaces

* [AngularDegrees](interfaces/angulardegrees.md)
* [AsrAngle](interfaces/asrangle.md)
* [Convention](interfaces/convention.md)
* [Duration](interfaces/duration.md)
* [GeoCoordinate](interfaces/geocoordinate.md)
* [Left](interfaces/left.md)
* [Right](interfaces/right.md)
* [TimeSpan](interfaces/timespan.md)

### Type aliases

* [AngleBasedMethod](README.md#anglebasedmethod)
* [Either](README.md#either)
* [MiddleOfTheNightMethod](README.md#middleofthenightmethod)
* [OneSeventhMethod](README.md#oneseventhmethod)
* [SupportedConventions](README.md#supportedconventions)

### Variables

* [angularConst](README.md#const-angularconst)
* [conventions](README.md#const-conventions)

### Functions

* [ErrorFor](README.md#const-errorfor)
* [angleBasedMethod](README.md#const-anglebasedmethod)
* [angularDegreesToRadians](README.md#const-angulardegreestoradians)
* [angularDegreesToRadiansNumericConversion](README.md#const-angulardegreestoradiansnumericconversion)
* [arccot](README.md#const-arccot)
* [asrElevationAngle](README.md#const-asrelevationangle)
* [convention](README.md#const-convention)
* [createCoordinate](README.md#const-createcoordinate)
* [createLatitude](README.md#const-createlatitude)
* [createLongitude](README.md#const-createlongitude)
* [degrees](README.md#const-degrees)
* [divisionBasedMethod](README.md#const-divisionbasedmethod)
* [errorMessage](README.md#const-errormessage)
* [geoCoordinate](README.md#const-geocoordinate)
* [hanafi](README.md#const-hanafi)
* [hanbali](README.md#const-hanbali)
* [left](README.md#const-left)
* [maliki](README.md#const-maliki)
* [match](README.md#const-match)
* [throwOnError](README.md#const-matchorthrow)
* [middleOfTheNightMethod](README.md#const-middleofthenightmethod)
* [oneSeventhMethod](README.md#const-oneseventhmethod)
* [radiansToAngularDegrees](README.md#const-radianstoangulardegrees)
* [radiansToAngularDegreesNumericConversion](README.md#const-radianstoangulardegreesnumericconversion)
* [right](README.md#const-right)
* [shafii](README.md#const-shafii)
* [standard](README.md#const-standard)
* [tan](README.md#const-tan)
* [timeSpan](README.md#const-timespan)

## Type aliases

###  AngleBasedMethod

Ƭ **AngleBasedMethod**: *function*

*Defined in [location/highLatitude/highLatitudeMethod.ts:5](https://github.com/doniseferi/salahtimes/blob/5c01234/src/location/highLatitude/highLatitudeMethod.ts#L5)*

#### Type declaration:

▸ (`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  Either

Ƭ **Either**: *Readonly‹[Left](interfaces/left.md)‹L›› | Readonly‹[Right](interfaces/right.md)‹R››*

*Defined in [either/either.ts:6](https://github.com/doniseferi/salahtimes/blob/5c01234/src/either/either.ts#L6)*

___

###  MiddleOfTheNightMethod

Ƭ **MiddleOfTheNightMethod**: *[OneSeventhMethod](README.md#oneseventhmethod)*

*Defined in [location/highLatitude/highLatitudeMethod.ts:9](https://github.com/doniseferi/salahtimes/blob/5c01234/src/location/highLatitude/highLatitudeMethod.ts#L9)*

___

###  OneSeventhMethod

Ƭ **OneSeventhMethod**: *function*

*Defined in [location/highLatitude/highLatitudeMethod.ts:7](https://github.com/doniseferi/salahtimes/blob/5c01234/src/location/highLatitude/highLatitudeMethod.ts#L7)*

#### Type declaration:

▸ (`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  SupportedConventions

Ƭ **SupportedConventions**: *"MuslimWorldLeague" | "IslamicSocietyOfNorthAmerica" | "EgyptianGeneralAuthorityOfSurvey" | "UmmAlQuraUniversityMekkah" | "UniversityOfIslamicSciencesKarachi" | "InstituteOfGeophysicsUniversityOfTehranOfSurvey" | "ShiaIthnaAshariLevaResearchInstituteQumOfSurvey"*

*Defined in [convention/convention.ts:4](https://github.com/doniseferi/salahtimes/blob/5c01234/src/convention/convention.ts#L4)*

## Variables

### `Const` angularConst

• **angularConst**: *0.017453292519943295* = 0.017453292519943295

*Defined in [maths/angularConversions.ts:4](https://github.com/doniseferi/salahtimes/blob/5c01234/src/maths/angularConversions.ts#L4)*

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

*Defined in [convention/convention.ts:11](https://github.com/doniseferi/salahtimes/blob/5c01234/src/convention/convention.ts#L11)*

## Functions

### `Const` ErrorFor

▸ **ErrorFor**(`componentName`: string): *Error*

*Defined in [asr/asrElevationAngle.ts:23](https://github.com/doniseferi/salahtimes/blob/5c01234/src/asr/asrElevationAngle.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`componentName` | string |

**Returns:** *Error*

___

### `Const` angleBasedMethod

▸ **angleBasedMethod**(`angle`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[Left](interfaces/left.md)‹ReferenceError› | [Right](interfaces/right.md)‹object›*

*Defined in [location/highLatitude/angleBasedMethod.ts:6](https://github.com/doniseferi/salahtimes/blob/5c01234/src/location/highLatitude/angleBasedMethod.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[Left](interfaces/left.md)‹ReferenceError› | [Right](interfaces/right.md)‹object›*

___

### `Const` angularDegreesToRadians

▸ **angularDegreesToRadians**(`degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[Either](README.md#either)‹Error, number›*

*Defined in [maths/angularConversions.ts:8](https://github.com/doniseferi/salahtimes/blob/5c01234/src/maths/angularConversions.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[Either](README.md#either)‹Error, number›*

___

### `Const` angularDegreesToRadiansNumericConversion

▸ **angularDegreesToRadiansNumericConversion**(`degrees`: number): *number*

*Defined in [maths/angularConversions.ts:15](https://github.com/doniseferi/salahtimes/blob/5c01234/src/maths/angularConversions.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | number |

**Returns:** *number*

___

### `Const` arccot

▸ **arccot**(`value`: number): *[Either](README.md#either)‹Error, Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [maths/trigonometry.ts:7](https://github.com/doniseferi/salahtimes/blob/5c01234/src/maths/trigonometry.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Either](README.md#either)‹Error, Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` asrElevationAngle

▸ **asrElevationAngle**(`shadowLength`: 1 | 2, `latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `declinationOfTheSun`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[Either](README.md#either)‹Error, Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [asr/asrElevationAngle.ts:4](https://github.com/doniseferi/salahtimes/blob/5c01234/src/asr/asrElevationAngle.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`shadowLength` | 1 &#124; 2 |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`declinationOfTheSun` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[Either](README.md#either)‹Error, Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` convention

▸ **convention**(`name`: [SupportedConventions](README.md#supportedconventions)): *[Convention](interfaces/convention.md)*

*Defined in [convention/convention.ts:56](https://github.com/doniseferi/salahtimes/blob/5c01234/src/convention/convention.ts#L56)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | [SupportedConventions](README.md#supportedconventions) | "MuslimWorldLeague" |

**Returns:** *[Convention](interfaces/convention.md)*

___

### `Const` createCoordinate

▸ **createCoordinate**(`name`: "Latitude" | "Longitude", `value`: Readonly‹number›, `min`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `max`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[Either](README.md#either)‹RangeError, Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [location/geoCoordinate/geoCoordinate.ts:69](https://github.com/doniseferi/salahtimes/blob/5c01234/src/location/geoCoordinate/geoCoordinate.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | "Latitude" &#124; "Longitude" |
`value` | Readonly‹number› |
`min` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`max` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[Either](README.md#either)‹RangeError, Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` createLatitude

▸ **createLatitude**(`value`: Readonly‹number›): *[Either](README.md#either)‹RangeError, Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [location/geoCoordinate/geoCoordinate.ts:29](https://github.com/doniseferi/salahtimes/blob/5c01234/src/location/geoCoordinate/geoCoordinate.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Readonly‹number› |

**Returns:** *[Either](README.md#either)‹RangeError, Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` createLongitude

▸ **createLongitude**(`value`: Readonly‹number›): *[Either](README.md#either)‹RangeError, Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [location/geoCoordinate/geoCoordinate.ts:49](https://github.com/doniseferi/salahtimes/blob/5c01234/src/location/geoCoordinate/geoCoordinate.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Readonly‹number› |

**Returns:** *[Either](README.md#either)‹RangeError, Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` degrees

▸ **degrees**(`value`: number): *[Either](README.md#either)‹RangeError, Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

*Defined in [maths/degree.ts:9](https://github.com/doniseferi/salahtimes/blob/5c01234/src/maths/degree.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Either](README.md#either)‹RangeError, Readonly‹[AngularDegrees](interfaces/angulardegrees.md)››*

___

### `Const` divisionBasedMethod

▸ **divisionBasedMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›, `divisor`: number): *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [location/highLatitude/divisionBasedMethods.ts:9](https://github.com/doniseferi/salahtimes/blob/5c01234/src/location/highLatitude/divisionBasedMethods.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |
`divisor` | number |

**Returns:** *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` errorMessage

▸ **errorMessage**(`value`: number): *string*

*Defined in [maths/degree.ts:7](https://github.com/doniseferi/salahtimes/blob/5c01234/src/maths/degree.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

### `Const` geoCoordinate

▸ **geoCoordinate**(`latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `longitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *Readonly‹[GeoCoordinate](interfaces/geocoordinate.md)›*

*Defined in [location/geoCoordinate/geoCoordinate.ts:22](https://github.com/doniseferi/salahtimes/blob/5c01234/src/location/geoCoordinate/geoCoordinate.ts#L22)*

Returns the GeoCoordinate point represented by a latitude and longitude angle.

Code sample:
```ts
  const myHouse = geoCoordinate(degrees(51.5034), degrees(0.1276));
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› | The latitude coordinate in degrees. |
`longitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› | The longitude coordinate in degrees. |

**Returns:** *Readonly‹[GeoCoordinate](interfaces/geocoordinate.md)›*

The GeoCoordinate value of coordinate latitude and longitude.

___

### `Const` hanafi

▸ **hanafi**(`latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `declinationOfTheSub`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[Either](README.md#either)‹Error, [AsrAngle](interfaces/asrangle.md)›*

Defined in asr/madhab.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`declinationOfTheSub` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[Either](README.md#either)‹Error, [AsrAngle](interfaces/asrangle.md)›*

___

### `Const` hanbali

▸ **hanbali**(`latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `declinationOfTheSub`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[Either](README.md#either)‹Error, [AsrAngle](interfaces/asrangle.md)›*

Defined in asr/madhab.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`declinationOfTheSub` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[Either](README.md#either)‹Error, [AsrAngle](interfaces/asrangle.md)›*

___

### `Const` left

▸ **left**<**T**>(`err`: T): *[Left](interfaces/left.md)‹T›*

*Defined in [either/either.ts:23](https://github.com/doniseferi/salahtimes/blob/5c01234/src/either/either.ts#L23)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`err` | T |

**Returns:** *[Left](interfaces/left.md)‹T›*

___

### `Const` maliki

▸ **maliki**(`latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `declinationOfTheSub`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[Either](README.md#either)‹Error, [AsrAngle](interfaces/asrangle.md)›*

Defined in asr/madhab.ts:9

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`declinationOfTheSub` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[Either](README.md#either)‹Error, [AsrAngle](interfaces/asrangle.md)›*

___

### `Const` match

▸ **match**<**T**, **L**, **R**>(`input`: [Either](README.md#either)‹L, R›, `left`: function, `right`: function): *T*

*Defined in [either/either.ts:8](https://github.com/doniseferi/salahtimes/blob/5c01234/src/either/either.ts#L8)*

**Type parameters:**

▪ **T**

▪ **L**

▪ **R**

**Parameters:**

▪ **input**: *[Either](README.md#either)‹L, R›*

▪ **left**: *function*

▸ (`error`: L): *T*

**Parameters:**

Name | Type |
------ | ------ |
`error` | L |

▪ **right**: *function*

▸ (`right`: R): *T*

**Parameters:**

Name | Type |
------ | ------ |
`right` | R |

**Returns:** *T*

___

### `Const` throwOnError

▸ **throwOnError**<**T**>(`input`: [Either](README.md#either)‹Error, T›): *T*

*Defined in [either/either.ts:14](https://github.com/doniseferi/salahtimes/blob/5c01234/src/either/either.ts#L14)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Either](README.md#either)‹Error, T› |

**Returns:** *T*

___

### `Const` middleOfTheNightMethod

▸ **middleOfTheNightMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [location/highLatitude/divisionBasedMethods.ts:7](https://github.com/doniseferi/salahtimes/blob/5c01234/src/location/highLatitude/divisionBasedMethods.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` oneSeventhMethod

▸ **oneSeventhMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [location/highLatitude/divisionBasedMethods.ts:5](https://github.com/doniseferi/salahtimes/blob/5c01234/src/location/highLatitude/divisionBasedMethods.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` radiansToAngularDegrees

▸ **radiansToAngularDegrees**(`radians`: number): *[Either](README.md#either)‹RangeError, [AngularDegrees](interfaces/angulardegrees.md)›*

*Defined in [maths/angularConversions.ts:6](https://github.com/doniseferi/salahtimes/blob/5c01234/src/maths/angularConversions.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *[Either](README.md#either)‹RangeError, [AngularDegrees](interfaces/angulardegrees.md)›*

___

### `Const` radiansToAngularDegreesNumericConversion

▸ **radiansToAngularDegreesNumericConversion**(`radians`: number): *number*

*Defined in [maths/angularConversions.ts:13](https://github.com/doniseferi/salahtimes/blob/5c01234/src/maths/angularConversions.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *number*

___

### `Const` right

▸ **right**<**T**>(`res`: T): *[Right](interfaces/right.md)‹T›*

*Defined in [either/either.ts:25](https://github.com/doniseferi/salahtimes/blob/5c01234/src/either/either.ts#L25)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`res` | T |

**Returns:** *[Right](interfaces/right.md)‹T›*

___

### `Const` shafii

▸ **shafii**(`latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `declinationOfTheSub`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[Either](README.md#either)‹Error, [AsrAngle](interfaces/asrangle.md)›*

Defined in asr/madhab.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`declinationOfTheSub` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[Either](README.md#either)‹Error, [AsrAngle](interfaces/asrangle.md)›*

___

### `Const` standard

▸ **standard**(`latitude`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›, `declinationOfTheSub`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *[Either](README.md#either)‹Error, [AsrAngle](interfaces/asrangle.md)›*

Defined in asr/madhab.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`latitude` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |
`declinationOfTheSub` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *[Either](README.md#either)‹Error, [AsrAngle](interfaces/asrangle.md)›*

___

### `Const` tan

▸ **tan**(`degrees`: Readonly‹[AngularDegrees](interfaces/angulardegrees.md)›): *number*

*Defined in [maths/trigonometry.ts:13](https://github.com/doniseferi/salahtimes/blob/5c01234/src/maths/trigonometry.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | Readonly‹[AngularDegrees](interfaces/angulardegrees.md)› |

**Returns:** *number*

___

### `Const` timeSpan

▸ **timeSpan**(`days`: number, `hours`: number, `minutes`: number, `seconds`: number, `milliseconds`: number): *[TimeSpan](interfaces/timespan.md)*

*Defined in [time/timeSpan.ts:10](https://github.com/doniseferi/salahtimes/blob/5c01234/src/time/timeSpan.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`days` | number |
`hours` | number |
`minutes` | number |
`seconds` | number |
`milliseconds` | number |

**Returns:** *[TimeSpan](interfaces/timespan.md)*
