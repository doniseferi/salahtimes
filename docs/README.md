[salahtimes](README.md)

# salahtimes

## Index

### Interfaces

* [Degree](interfaces/degree.md)
* [GeoCoordinate](interfaces/geocoordinate.md)
* [Salah](interfaces/salah.md)

### Type aliases

* [Either](README.md#either)
* [Left](README.md#left)
* [Right](README.md#right)

### Functions

* [createCoordinate](README.md#const-createcoordinate)
* [createLatitude](README.md#const-createlatitude)
* [createLongitude](README.md#const-createlongitude)
* [degree](README.md#const-degree)
* [errorMessage](README.md#const-errormessage)
* [geoCoordinate](README.md#const-geocoordinate)
* [left](README.md#const-left)
* [match](README.md#const-match)
* [right](README.md#const-right)

## Type aliases

###  Either

Ƭ **Either**: *[Left](README.md#left)‹L› | [Right](README.md#right)‹R›*

*Defined in [either/either.ts:5](https://github.com/doniseferi/salahtimes/blob/94386ba/src/either/either.ts#L5)*

___

###  Left

Ƭ **Left**: *object*

*Defined in [either/either.ts:1](https://github.com/doniseferi/salahtimes/blob/94386ba/src/either/either.ts#L1)*

#### Type declaration:

* **error**: *T*

* **path**: *"left"*

___

###  Right

Ƭ **Right**: *object*

*Defined in [either/either.ts:3](https://github.com/doniseferi/salahtimes/blob/94386ba/src/either/either.ts#L3)*

#### Type declaration:

* **path**: *"right"*

* **result**: *T*

## Functions

### `Const` createCoordinate

▸ **createCoordinate**(`name`: "Latitude" | "Longitude", `value`: number, `min`: [Degree](interfaces/degree.md), `max`: [Degree](interfaces/degree.md)): *object | object*

*Defined in [location/geoCoordinate.ts:33](https://github.com/doniseferi/salahtimes/blob/94386ba/src/location/geoCoordinate.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | "Latitude" &#124; "Longitude" |
`value` | number |
`min` | [Degree](interfaces/degree.md) |
`max` | [Degree](interfaces/degree.md) |

**Returns:** *object | object*

___

### `Const` createLatitude

▸ **createLatitude**(`value`: number): *object | object*

*Defined in [location/geoCoordinate.ts:29](https://github.com/doniseferi/salahtimes/blob/94386ba/src/location/geoCoordinate.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *object | object*

___

### `Const` createLongitude

▸ **createLongitude**(`value`: number): *object | object*

*Defined in [location/geoCoordinate.ts:31](https://github.com/doniseferi/salahtimes/blob/94386ba/src/location/geoCoordinate.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *object | object*

___

### `Const` degree

▸ **degree**(`value`: number): *[Degree](interfaces/degree.md)*

*Defined in [maths/degree.ts:10](https://github.com/doniseferi/salahtimes/blob/94386ba/src/maths/degree.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Degree](interfaces/degree.md)*

___

### `Const` errorMessage

▸ **errorMessage**(`value`: number): *string*

*Defined in [maths/degree.ts:5](https://github.com/doniseferi/salahtimes/blob/94386ba/src/maths/degree.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

### `Const` geoCoordinate

▸ **geoCoordinate**(`latitude`: Readonly‹[Degree](interfaces/degree.md)›, `longitude`: Readonly‹[Degree](interfaces/degree.md)›): *[GeoCoordinate](interfaces/geocoordinate.md)*

*Defined in [location/geoCoordinate.ts:22](https://github.com/doniseferi/salahtimes/blob/94386ba/src/location/geoCoordinate.ts#L22)*

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

**Returns:** *[GeoCoordinate](interfaces/geocoordinate.md)*

THe GeoCoordinate value of coordinate latitude and longitude.

___

### `Const` left

▸ **left**<**T**>(`err`: T): *[Left](README.md#left)‹T›*

*Defined in [either/either.ts:14](https://github.com/doniseferi/salahtimes/blob/94386ba/src/either/either.ts#L14)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`err` | T |

**Returns:** *[Left](README.md#left)‹T›*

___

### `Const` match

▸ **match**<**T**, **L**, **R**>(`input`: [Either](README.md#either)‹L, R›, `left`: function, `right`: function): *T*

*Defined in [either/either.ts:7](https://github.com/doniseferi/salahtimes/blob/94386ba/src/either/either.ts#L7)*

**Type parameters:**

▪ **T**

▪ **L**

▪ **R**

**Parameters:**

▪ **input**: *[Either](README.md#either)‹L, R›*

▪ **left**: *function*

▸ (`left`: L): *T*

**Parameters:**

Name | Type |
------ | ------ |
`left` | L |

▪ **right**: *function*

▸ (`right`: R): *T*

**Parameters:**

Name | Type |
------ | ------ |
`right` | R |

**Returns:** *T*

___

### `Const` right

▸ **right**<**T**>(`res`: T): *[Right](README.md#right)‹T›*

*Defined in [either/either.ts:16](https://github.com/doniseferi/salahtimes/blob/94386ba/src/either/either.ts#L16)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`res` | T |

**Returns:** *[Right](README.md#right)‹T›*
