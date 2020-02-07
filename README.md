<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [salahtimes](#salahtimes)
  - [Index](#index)
    - [Interfaces](#interfaces)
    - [Type aliases](#type-aliases)
    - [Functions](#functions)
  - [Type aliases](#type-aliases-1)
    - [Either](#either)
    - [Left](#left)
    - [Right](#right)
  - [Functions](#functions-1)
    - [`Const` createCoordinate](#const-createcoordinate)
    - [`Const` createLatitude](#const-createlatitude)
    - [`Const` createLongitude](#const-createlongitude)
    - [`Const` degree](#const-degree)
    - [`Const` errorMessage](#const-errormessage)
    - [`Const` geoCoordinate](#const-geocoordinate)
    - [`Const` left](#const-left)
    - [`Const` match](#const-match)
    - [`Const` right](#const-right)
- [salahtimes](#salahtimes-1)
- [Globals](#globals)
  - [salahtimes](#salahtimes-2)
    - [Index](#index-1)
    - [Type aliases](#type-aliases-2)
    - [Functions](#functions-2)
- [README](#readme)
  - [salahtimes](#salahtimes-3)
  - [salahtimes](#salahtimes-4)
- [Interfaces](#interfaces-1)
  - [Degree](#degree)
    - [Interface: Degree](#interface-degree)
  - [Geocoordinate](#geocoordinate)
    - [Interface: GeoCoordinate](#interface-geocoordinate)
  - [Salah](#salah)
    - [Interface: Salah](#interface-salah)
- [Interface: Degree](#interface-degree-1)
  - [Hierarchy](#hierarchy)
  - [Index](#index-2)
    - [Properties](#properties)
  - [Properties](#properties-1)
    - [value](#value)
- [Interface: GeoCoordinate](#interface-geocoordinate-1)
  - [Hierarchy](#hierarchy-1)
  - [Index](#index-3)
    - [Properties](#properties-2)
  - [Properties](#properties-3)
    - [latitude](#latitude)
    - [longitude](#longitude)
- [Interface: Salah](#interface-salah-1)
  - [Hierarchy](#hierarchy-2)
  - [Index](#index-4)
    - [Properties](#properties-4)
  - [Properties](#properties-5)
    - [name](#name)
    - [time](#time)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="globalsmd"></a>

[salahtimes](#readmemd) › [Globals](#globalsmd)

# salahtimes

## Index

### Interfaces

* [Degree](#interfacesdegreemd)
* [GeoCoordinate](#interfacesgeocoordinatemd)
* [Salah](#interfacessalahmd)

### Type aliases

* [Either](#either)
* [Left](#left)
* [Right](#right)

### Functions

* [createCoordinate](#const-createcoordinate)
* [createLatitude](#const-createlatitude)
* [createLongitude](#const-createlongitude)
* [degree](#const-degree)
* [errorMessage](#const-errormessage)
* [geoCoordinate](#const-geocoordinate)
* [left](#const-left)
* [match](#const-match)
* [right](#const-right)

## Type aliases

###  Either

Ƭ **Either**: *[Left](#left)‹L› | [Right](#right)‹R›*

*Defined in [either/either.ts:5](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/either/either.ts#L5)*

___

###  Left

Ƭ **Left**: *object*

*Defined in [either/either.ts:1](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/either/either.ts#L1)*

#### Type declaration:

* **error**: *T*

* **path**: *"left"*

___

###  Right

Ƭ **Right**: *object*

*Defined in [either/either.ts:3](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/either/either.ts#L3)*

#### Type declaration:

* **path**: *"right"*

* **result**: *T*

## Functions

### `Const` createCoordinate

▸ **createCoordinate**(`name`: "Latitude" | "Longitude", `value`: number, `min`: [Degree](#interfacesdegreemd), `max`: [Degree](#interfacesdegreemd)): *object | object*

*Defined in [location/geoCoordinate.ts:33](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/location/geoCoordinate.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | "Latitude" &#124; "Longitude" |
`value` | number |
`min` | [Degree](#interfacesdegreemd) |
`max` | [Degree](#interfacesdegreemd) |

**Returns:** *object | object*

___

### `Const` createLatitude

▸ **createLatitude**(`value`: number): *object | object*

*Defined in [location/geoCoordinate.ts:29](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/location/geoCoordinate.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *object | object*

___

### `Const` createLongitude

▸ **createLongitude**(`value`: number): *object | object*

*Defined in [location/geoCoordinate.ts:31](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/location/geoCoordinate.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *object | object*

___

### `Const` degree

▸ **degree**(`value`: number): *[Degree](#interfacesdegreemd)*

*Defined in [maths/degree.ts:10](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/maths/degree.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Degree](#interfacesdegreemd)*

___

### `Const` errorMessage

▸ **errorMessage**(`value`: number): *string*

*Defined in [maths/degree.ts:5](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/maths/degree.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

### `Const` geoCoordinate

▸ **geoCoordinate**(`latitude`: Readonly‹[Degree](#interfacesdegreemd)›, `longitude`: Readonly‹[Degree](#interfacesdegreemd)›): *[GeoCoordinate](#interfacesgeocoordinatemd)*

*Defined in [location/geoCoordinate.ts:22](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/location/geoCoordinate.ts#L22)*

Returns the GeoCoordinate point represented by a latitude and longitude angle.

Code sample:
```ts
  const myHouse = geoCoordinate(degree(51.5034), degree(0.1276));
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`latitude` | Readonly‹[Degree](#interfacesdegreemd)› | The latitude coordinate in degrees. |
`longitude` | Readonly‹[Degree](#interfacesdegreemd)› | The longitude coordinate in degrees. |

**Returns:** *[GeoCoordinate](#interfacesgeocoordinatemd)*

THe GeoCoordinate value of coordinate latitude and longitude.

___

### `Const` left

▸ **left**<**T**>(`err`: T): *[Left](#left)‹T›*

*Defined in [either/either.ts:14](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/either/either.ts#L14)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`err` | T |

**Returns:** *[Left](#left)‹T›*

___

### `Const` match

▸ **match**<**T**, **L**, **R**>(`input`: [Either](#either)‹L, R›, `left`: function, `right`: function): *T*

*Defined in [either/either.ts:7](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/either/either.ts#L7)*

**Type parameters:**

▪ **T**

▪ **L**

▪ **R**

**Parameters:**

▪ **input**: *[Either](#either)‹L, R›*

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

▸ **right**<**T**>(`res`: T): *[Right](#right)‹T›*

*Defined in [either/either.ts:16](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/either/either.ts#L16)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`res` | T |

**Returns:** *[Right](#right)‹T›*


<a name="readmemd"></a>

[salahtimes](#readmemd) › [Globals](#globalsmd)

# salahtimes

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Globals](#globals)
  - [salahtimes](#salahtimes)
    - [Index](#index)
    - [Type aliases](#type-aliases)
    - [Functions](#functions)
- [README](#readme)
  - [salahtimes](#salahtimes-1)
  - [salahtimes](#salahtimes-2)
- [Interfaces](#interfaces)
  - [Degree](#degree)
    - [Interface: Degree](#interface-degree)
  - [Geocoordinate](#geocoordinate)
    - [Interface: GeoCoordinate](#interface-geocoordinate)
  - [Salah](#salah)
    - [Interface: Salah](#interface-salah)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Globals

[salahtimes](#readme) › [Globals](#globals)

## salahtimes

### Index

#### Interfaces

* [Degree](#degree)
* [GeoCoordinate](#geocoordinate)
* [Salah](#salah)

#### Type aliases

* [Either](#either)
* [Left](#left)
* [Right](#right)

#### Functions

* [createCoordinate](#const-createcoordinate)
* [createLatitude](#const-createlatitude)
* [createLongitude](#const-createlongitude)
* [degree](#const-degree)
* [errorMessage](#const-errormessage)
* [geoCoordinate](#const-geocoordinate)
* [left](#const-left)
* [match](#const-match)
* [right](#const-right)

### Type aliases

####  Either

Ƭ **Either**: *[Left](#left)‹L› | [Right](#right)‹R›*

*Defined in [either/either.ts:5](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/either/either.ts#L5)*

___

####  Left

Ƭ **Left**: *object*

*Defined in [either/either.ts:1](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/either/either.ts#L1)*

##### Type declaration:

* **error**: *T*

* **path**: *"left"*

___

####  Right

Ƭ **Right**: *object*

*Defined in [either/either.ts:3](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/either/either.ts#L3)*

##### Type declaration:

* **path**: *"right"*

* **result**: *T*

### Functions

#### `Const` createCoordinate

▸ **createCoordinate**(`name`: "Latitude" | "Longitude", `value`: number, `min`: [Degree](#degree), `max`: [Degree](#degree)): *object | object*

*Defined in [location/geoCoordinate.ts:33](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/location/geoCoordinate.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | "Latitude" &#124; "Longitude" |
`value` | number |
`min` | [Degree](#degree) |
`max` | [Degree](#degree) |

**Returns:** *object | object*

___

#### `Const` createLatitude

▸ **createLatitude**(`value`: number): *object | object*

*Defined in [location/geoCoordinate.ts:29](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/location/geoCoordinate.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *object | object*

___

#### `Const` createLongitude

▸ **createLongitude**(`value`: number): *object | object*

*Defined in [location/geoCoordinate.ts:31](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/location/geoCoordinate.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *object | object*

___

#### `Const` degree

▸ **degree**(`value`: number): *[Degree](#degree)*

*Defined in [maths/degree.ts:10](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/maths/degree.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Degree](#degree)*

___

#### `Const` errorMessage

▸ **errorMessage**(`value`: number): *string*

*Defined in [maths/degree.ts:5](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/maths/degree.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

#### `Const` geoCoordinate

▸ **geoCoordinate**(`latitude`: Readonly‹[Degree](#degree)›, `longitude`: Readonly‹[Degree](#degree)›): *[GeoCoordinate](#geocoordinate)*

*Defined in [location/geoCoordinate.ts:22](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/location/geoCoordinate.ts#L22)*

Returns the GeoCoordinate point represented by a latitude and longitude angle.

Code sample:
```ts
  const myHouse = geoCoordinate(degree(51.5034), degree(0.1276));
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`latitude` | Readonly‹[Degree](#degree)› | The latitude coordinate in degrees. |
`longitude` | Readonly‹[Degree](#degree)› | The longitude coordinate in degrees. |

**Returns:** *[GeoCoordinate](#geocoordinate)*

THe GeoCoordinate value of coordinate latitude and longitude.

___

#### `Const` left

▸ **left**<**T**>(`err`: T): *[Left](#left)‹T›*

*Defined in [either/either.ts:14](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/either/either.ts#L14)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`err` | T |

**Returns:** *[Left](#left)‹T›*

___

#### `Const` match

▸ **match**<**T**, **L**, **R**>(`input`: [Either](#either)‹L, R›, `left`: function, `right`: function): *T*

*Defined in [either/either.ts:7](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/either/either.ts#L7)*

**Type parameters:**

▪ **T**

▪ **L**

▪ **R**

**Parameters:**

▪ **input**: *[Either](#either)‹L, R›*

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

#### `Const` right

▸ **right**<**T**>(`res`: T): *[Right](#right)‹T›*

*Defined in [either/either.ts:16](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/either/either.ts#L16)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`res` | T |

**Returns:** *[Right](#right)‹T›*

# README

[salahtimes](#readme) › [Globals](#globals)

## salahtimes

## salahtimes

[![Build Status](https://travis-ci.com/doniseferi/salahtimes.svg?branch=master)](https://travis-ci.com/doniseferi/salahtimes)[![Codacy Badge](https://api.codacy.com/project/badge/Grade/27de579f6fc84188ba0aac2601ec05f0)](https://www.codacy.com/manual/doniseferi/salahtimes?utm_source=github.com&utm_medium=referral&utm_content=doniseferi/salahtimes&utm_campaign=Badge_Grade)![npm](https://img.shields.io/npm/v/salahtimes)
![GitHub](https://img.shields.io/github/license/doniseferi/salahtimes)
![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/salahtimes)![GitHub last commit](https://img.shields.io/github/last-commit/doniseferi/salahtimes)[![Coverage Status](https://coveralls.io/repos/github/doniseferi/salahtimes/badge.svg?branch=master)](https://coveralls.io/github/doniseferi/salahtimes?branch=master)[![GitHub issues](https://img.shields.io/github/issues/doniseferi/salahtimes)](https://github.com/doniseferi/salahtimes/issues)

# Interfaces

## Degree

[salahtimes](#readme) › [Globals](#globals) › [Degree](#degree)

### Interface: Degree

#### Hierarchy

* **Degree**

#### Index

##### Properties

* [value](#value)

#### Properties

#####  value

• **value**: *Number*

*Defined in [maths/degree.ts:2](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/maths/degree.ts#L2)*

## Geocoordinate

[salahtimes](#readme) › [Globals](#globals) › [GeoCoordinate](#geocoordinate)

### Interface: GeoCoordinate

#### Hierarchy

* **GeoCoordinate**

#### Index

##### Properties

* [latitude](#latitude)
* [longitude](#longitude)

#### Properties

#####  latitude

• **latitude**: *Readonly‹[Degree](#degree)›*

*Defined in [location/geoCoordinate.ts:5](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/location/geoCoordinate.ts#L5)*

___

#####  longitude

• **longitude**: *Readonly‹[Degree](#degree)›*

*Defined in [location/geoCoordinate.ts:6](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/location/geoCoordinate.ts#L6)*

## Salah

[salahtimes](#readme) › [Globals](#globals) › [Salah](#salah)

### Interface: Salah

#### Hierarchy

* **Salah**

#### Index

##### Properties

* [name](#name)
* [time](#time)

#### Properties

#####  name

• **name**: *Readonly‹"fajr"› | Readonly‹"dhuhr"› | Readonly‹"asr"› | Readonly‹"maghrib"› | Readonly‹"isha"›*

*Defined in [salah/salah.ts:2](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/salah/salah.ts#L2)*

___

#####  time

• **time**: *Readonly‹Date›*

*Defined in [salah/salah.ts:8](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/salah/salah.ts#L8)*


<a name="interfacesdegreemd"></a>

[salahtimes](#readmemd) › [Globals](#globalsmd) › [Degree](#interfacesdegreemd)

# Interface: Degree

## Hierarchy

* **Degree**

## Index

### Properties

* [value](#value)

## Properties

###  value

• **value**: *Number*

*Defined in [maths/degree.ts:2](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/maths/degree.ts#L2)*


<a name="interfacesgeocoordinatemd"></a>

[salahtimes](#readmemd) › [Globals](#globalsmd) › [GeoCoordinate](#interfacesgeocoordinatemd)

# Interface: GeoCoordinate

## Hierarchy

* **GeoCoordinate**

## Index

### Properties

* [latitude](#latitude)
* [longitude](#longitude)

## Properties

###  latitude

• **latitude**: *Readonly‹[Degree](#interfacesdegreemd)›*

*Defined in [location/geoCoordinate.ts:5](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/location/geoCoordinate.ts#L5)*

___

###  longitude

• **longitude**: *Readonly‹[Degree](#interfacesdegreemd)›*

*Defined in [location/geoCoordinate.ts:6](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/location/geoCoordinate.ts#L6)*


<a name="interfacessalahmd"></a>

[salahtimes](#readmemd) › [Globals](#globalsmd) › [Salah](#interfacessalahmd)

# Interface: Salah

## Hierarchy

* **Salah**

## Index

### Properties

* [name](#name)
* [time](#time)

## Properties

###  name

• **name**: *Readonly‹"fajr"› | Readonly‹"dhuhr"› | Readonly‹"asr"› | Readonly‹"maghrib"› | Readonly‹"isha"›*

*Defined in [salah/salah.ts:2](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/salah/salah.ts#L2)*

___

###  time

• **time**: *Readonly‹Date›*

*Defined in [salah/salah.ts:8](https://github.com/doniseferi/salahtimes/blob/2762ffc/src/salah/salah.ts#L8)*
