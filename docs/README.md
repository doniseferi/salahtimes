[salahtimes](README.md)

# salahtimes

## Index

### Modules

* [__global](modules/__global.md)

### Interfaces

* [Degree](interfaces/degree.md)
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

### Functions

* [angleBasedMethod](README.md#const-anglebasedmethod)
* [createCoordinate](README.md#const-createcoordinate)
* [createLatitude](README.md#const-createlatitude)
* [createLongitude](README.md#const-createlongitude)
* [degree](README.md#const-degree)
* [divisionBasedMethod](README.md#const-divisionbasedmethod)
* [errorMessage](README.md#const-errormessage)
* [geoCoordinate](README.md#const-geocoordinate)
* [left](README.md#const-left)
* [match](README.md#const-match)
* [matchOrThrow](README.md#const-matchorthrow)
* [middleOfTheNightMethod](README.md#const-middleofthenightmethod)
* [oneSeventhMethod](README.md#const-oneseventhmethod)
* [right](README.md#const-right)
* [timeSpan](README.md#const-timespan)

## Type aliases

###  AngleBasedMethod

Ƭ **AngleBasedMethod**: *function*

*Defined in [location/highLatitude/highLatitudeMethod.ts:5](https://github.com/doniseferi/salahtimes/blob/0c54339/src/location/highLatitude/highLatitudeMethod.ts#L5)*

#### Type declaration:

▸ (`angle`: Readonly‹[Degree](interfaces/degree.md)›, `timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[Degree](interfaces/degree.md)› |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

___

###  Either

Ƭ **Either**: *Readonly‹[Left](interfaces/left.md)‹L›› | Readonly‹[Right](interfaces/right.md)‹R››*

*Defined in [either/either.ts:6](https://github.com/doniseferi/salahtimes/blob/0c54339/src/either/either.ts#L6)*

___

###  MiddleOfTheNightMethod

Ƭ **MiddleOfTheNightMethod**: *[OneSeventhMethod](README.md#oneseventhmethod)*

*Defined in [location/highLatitude/highLatitudeMethod.ts:9](https://github.com/doniseferi/salahtimes/blob/0c54339/src/location/highLatitude/highLatitudeMethod.ts#L9)*

___

###  OneSeventhMethod

Ƭ **OneSeventhMethod**: *function*

*Defined in [location/highLatitude/highLatitudeMethod.ts:7](https://github.com/doniseferi/salahtimes/blob/0c54339/src/location/highLatitude/highLatitudeMethod.ts#L7)*

#### Type declaration:

▸ (`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

## Functions

### `Const` angleBasedMethod

▸ **angleBasedMethod**(`angle`: Readonly‹[Degree](interfaces/degree.md)›, `timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[Left](interfaces/left.md)‹ReferenceError› | [Right](interfaces/right.md)‹object›*

*Defined in [location/highLatitude/angleBasedMethod.ts:6](https://github.com/doniseferi/salahtimes/blob/0c54339/src/location/highLatitude/angleBasedMethod.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | Readonly‹[Degree](interfaces/degree.md)› |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[Left](interfaces/left.md)‹ReferenceError› | [Right](interfaces/right.md)‹object›*

___

### `Const` createCoordinate

▸ **createCoordinate**(`name`: "Latitude" | "Longitude", `value`: Readonly‹number›, `min`: Readonly‹[Degree](interfaces/degree.md)›, `max`: Readonly‹[Degree](interfaces/degree.md)›): *[Either](README.md#either)‹RangeError, Readonly‹[Degree](interfaces/degree.md)››*

*Defined in [location/geoCoordinate/geoCoordinate.ts:69](https://github.com/doniseferi/salahtimes/blob/0c54339/src/location/geoCoordinate/geoCoordinate.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | "Latitude" &#124; "Longitude" |
`value` | Readonly‹number› |
`min` | Readonly‹[Degree](interfaces/degree.md)› |
`max` | Readonly‹[Degree](interfaces/degree.md)› |

**Returns:** *[Either](README.md#either)‹RangeError, Readonly‹[Degree](interfaces/degree.md)››*

___

### `Const` createLatitude

▸ **createLatitude**(`value`: Readonly‹number›): *[Either](README.md#either)‹RangeError, Readonly‹[Degree](interfaces/degree.md)››*

*Defined in [location/geoCoordinate/geoCoordinate.ts:29](https://github.com/doniseferi/salahtimes/blob/0c54339/src/location/geoCoordinate/geoCoordinate.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Readonly‹number› |

**Returns:** *[Either](README.md#either)‹RangeError, Readonly‹[Degree](interfaces/degree.md)››*

___

### `Const` createLongitude

▸ **createLongitude**(`value`: Readonly‹number›): *[Either](README.md#either)‹RangeError, Readonly‹[Degree](interfaces/degree.md)››*

*Defined in [location/geoCoordinate/geoCoordinate.ts:49](https://github.com/doniseferi/salahtimes/blob/0c54339/src/location/geoCoordinate/geoCoordinate.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Readonly‹number› |

**Returns:** *[Either](README.md#either)‹RangeError, Readonly‹[Degree](interfaces/degree.md)››*

___

### `Const` degree

▸ **degree**(`value`: number): *[Either](README.md#either)‹RangeError, Readonly‹[Degree](interfaces/degree.md)››*

*Defined in [maths/degree.ts:9](https://github.com/doniseferi/salahtimes/blob/0c54339/src/maths/degree.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Either](README.md#either)‹RangeError, Readonly‹[Degree](interfaces/degree.md)››*

___

### `Const` divisionBasedMethod

▸ **divisionBasedMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›, `divisor`: number): *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [location/highLatitude/divisionBasedMethods.ts:9](https://github.com/doniseferi/salahtimes/blob/0c54339/src/location/highLatitude/divisionBasedMethods.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |
`divisor` | number |

**Returns:** *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` errorMessage

▸ **errorMessage**(`value`: number): *string*

*Defined in [maths/degree.ts:7](https://github.com/doniseferi/salahtimes/blob/0c54339/src/maths/degree.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

### `Const` geoCoordinate

▸ **geoCoordinate**(`latitude`: Readonly‹[Degree](interfaces/degree.md)›, `longitude`: Readonly‹[Degree](interfaces/degree.md)›): *Readonly‹[GeoCoordinate](interfaces/geocoordinate.md)›*

*Defined in [location/geoCoordinate/geoCoordinate.ts:22](https://github.com/doniseferi/salahtimes/blob/0c54339/src/location/geoCoordinate/geoCoordinate.ts#L22)*

Returns the GeoCoordinate point represented by a latitude and longitude angle.

Code sample:
```ts
  const myHouse = geoCoordinate(degree(51.5034), degree(0.1276));
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`latitude` | Readonly‹[Degree](interfaces/degree.md)› | The latitude coordinate in degrees. |
`longitude` | Readonly‹[Degree](interfaces/degree.md)› | The longitude coordinate in degrees. |

**Returns:** *Readonly‹[GeoCoordinate](interfaces/geocoordinate.md)›*

THe GeoCoordinate value of coordinate latitude and longitude.

___

### `Const` left

▸ **left**<**T**>(`err`: T): *[Left](interfaces/left.md)‹T›*

*Defined in [either/either.ts:23](https://github.com/doniseferi/salahtimes/blob/0c54339/src/either/either.ts#L23)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`err` | T |

**Returns:** *[Left](interfaces/left.md)‹T›*

___

### `Const` match

▸ **match**<**T**, **L**, **R**>(`input`: [Either](README.md#either)‹L, R›, `left`: function, `right`: function): *T*

*Defined in [either/either.ts:8](https://github.com/doniseferi/salahtimes/blob/0c54339/src/either/either.ts#L8)*

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

### `Const` matchOrThrow

▸ **matchOrThrow**<**T**>(`input`: [Either](README.md#either)‹Error, T›): *T*

*Defined in [either/either.ts:14](https://github.com/doniseferi/salahtimes/blob/0c54339/src/either/either.ts#L14)*

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

*Defined in [location/highLatitude/divisionBasedMethods.ts:7](https://github.com/doniseferi/salahtimes/blob/0c54339/src/location/highLatitude/divisionBasedMethods.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` oneSeventhMethod

▸ **oneSeventhMethod**(`timeSpanBetweenSunsetAndSunrise`: Readonly‹[TimeSpan](interfaces/timespan.md)›): *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

*Defined in [location/highLatitude/divisionBasedMethods.ts:5](https://github.com/doniseferi/salahtimes/blob/0c54339/src/location/highLatitude/divisionBasedMethods.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`timeSpanBetweenSunsetAndSunrise` | Readonly‹[TimeSpan](interfaces/timespan.md)› |

**Returns:** *[Either](README.md#either)‹Error, Readonly‹[TimeSpan](interfaces/timespan.md)››*

___

### `Const` right

▸ **right**<**T**>(`res`: T): *[Right](interfaces/right.md)‹T›*

*Defined in [either/either.ts:25](https://github.com/doniseferi/salahtimes/blob/0c54339/src/either/either.ts#L25)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`res` | T |

**Returns:** *[Right](interfaces/right.md)‹T›*

___

### `Const` timeSpan

▸ **timeSpan**(`days`: number, `hours`: number, `minutes`: number, `seconds`: number, `milliseconds`: number): *[TimeSpan](interfaces/timespan.md)*

*Defined in [time/timeSpan.ts:10](https://github.com/doniseferi/salahtimes/blob/0c54339/src/time/timeSpan.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`days` | number |
`hours` | number |
`minutes` | number |
`seconds` | number |
`milliseconds` | number |

**Returns:** *[TimeSpan](interfaces/timespan.md)*
