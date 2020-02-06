<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Globals](#globals)
  - [salahtimes](#salahtimes)
    - [Index](#index)
    - [Type aliases](#type-aliases)
    - [Functions](#functions)
- [README](#readme)
  - [salahtimes](#salahtimes-1)
  - [Globals](#globals-1)
    - [salahtimes](#salahtimes-2)
  - [README](#readme-1)
    - [salahtimes](#salahtimes-3)
  - [Interfaces](#interfaces)
    - [Degree](#degree)
    - [Geocoordinate](#geocoordinate)
    - [Salah](#salah)
- [Interfaces](#interfaces-1)
  - [Degree](#degree-1)
    - [Interface: Degree](#interface-degree)
  - [Geocoordinate](#geocoordinate-1)
    - [Interface: GeoCoordinate](#interface-geocoordinate)
  - [Salah](#salah-1)
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

*Defined in [either/either.ts:5](https://github.com/doniseferi/salahtimes/blob/750ac44/src/either/either.ts#L5)*

___

####  Left

Ƭ **Left**: *object*

*Defined in [either/either.ts:1](https://github.com/doniseferi/salahtimes/blob/750ac44/src/either/either.ts#L1)*

##### Type declaration:

* **error**: *T*

* **path**: *"left"*

___

####  Right

Ƭ **Right**: *object*

*Defined in [either/either.ts:3](https://github.com/doniseferi/salahtimes/blob/750ac44/src/either/either.ts#L3)*

##### Type declaration:

* **path**: *"right"*

* **result**: *T*

### Functions

#### `Const` createCoordinate

▸ **createCoordinate**(`name`: "Latitude" | "Longitude", `value`: number, `min`: [Degree](#degree), `max`: [Degree](#degree)): *object | object*

*Defined in [location/geoCoordinate.ts:33](https://github.com/doniseferi/salahtimes/blob/750ac44/src/location/geoCoordinate.ts#L33)*

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

*Defined in [location/geoCoordinate.ts:29](https://github.com/doniseferi/salahtimes/blob/750ac44/src/location/geoCoordinate.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *object | object*

___

#### `Const` createLongitude

▸ **createLongitude**(`value`: number): *object | object*

*Defined in [location/geoCoordinate.ts:31](https://github.com/doniseferi/salahtimes/blob/750ac44/src/location/geoCoordinate.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *object | object*

___

#### `Const` degree

▸ **degree**(`value`: number): *[Degree](#degree)*

*Defined in [maths/degree.ts:10](https://github.com/doniseferi/salahtimes/blob/750ac44/src/maths/degree.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Degree](#degree)*

___

#### `Const` errorMessage

▸ **errorMessage**(`value`: number): *string*

*Defined in [maths/degree.ts:5](https://github.com/doniseferi/salahtimes/blob/750ac44/src/maths/degree.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

#### `Const` geoCoordinate

▸ **geoCoordinate**(`latitude`: Readonly‹[Degree](#degree)›, `longitude`: Readonly‹[Degree](#degree)›): *[GeoCoordinate](#geocoordinate)*

*Defined in [location/geoCoordinate.ts:22](https://github.com/doniseferi/salahtimes/blob/750ac44/src/location/geoCoordinate.ts#L22)*

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

*Defined in [either/either.ts:14](https://github.com/doniseferi/salahtimes/blob/750ac44/src/either/either.ts#L14)*

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

*Defined in [either/either.ts:7](https://github.com/doniseferi/salahtimes/blob/750ac44/src/either/either.ts#L7)*

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

*Defined in [either/either.ts:16](https://github.com/doniseferi/salahtimes/blob/750ac44/src/either/either.ts#L16)*

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

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Globals](#globals)
  - [salahtimes](#salahtimes)
    - [Index](#index)
    - [Type aliases](#type-aliases)
    - [Functions](#functions)
- [README](#readme)
  - [salahtimes](#salahtimes-1)
- [Interfaces](#interfaces)
  - [Degree](#degree)
    - [Interface: Degree](#interface-degree)
  - [Geocoordinate](#geocoordinate)
    - [Interface: GeoCoordinate](#interface-geocoordinate)
  - [Salah](#salah)
    - [Interface: Salah](#interface-salah)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Globals

[salahtimes](#globals)

### salahtimes

#### Index

##### Interfaces

* [Degree](#degree)
* [GeoCoordinate](#geocoordinate)
* [Salah](#salah)

##### Type aliases

* [Either](#either)
* [Left](#left)
* [Right](#right)

##### Functions

* [createCoordinate](#const-createcoordinate)
* [createLatitude](#const-createlatitude)
* [createLongitude](#const-createlongitude)
* [degree](#const-degree)
* [errorMessage](#const-errormessage)
* [geoCoordinate](#const-geocoordinate)
* [left](#const-left)
* [match](#const-match)
* [right](#const-right)

#### Type aliases

#####  Either

Ƭ **Either**: *[Left](#left)‹L› | [Right](#right)‹R›*

*Defined in [either/either.ts:5](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/either/either.ts#L5)*

___

#####  Left

Ƭ **Left**: *object*

*Defined in [either/either.ts:1](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/either/either.ts#L1)*

###### Type declaration:

* **error**: *T*

* **path**: *"left"*

___

#####  Right

Ƭ **Right**: *object*

*Defined in [either/either.ts:3](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/either/either.ts#L3)*

###### Type declaration:

* **path**: *"right"*

* **result**: *T*

#### Functions

##### `Const` createCoordinate

▸ **createCoordinate**(`name`: "Latitude" | "Longitude", `value`: number, `min`: [Degree](#degree), `max`: [Degree](#degree)): *object | object*

*Defined in [location/geoCoordinate.ts:33](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/location/geoCoordinate.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | "Latitude" &#124; "Longitude" |
`value` | number |
`min` | [Degree](#degree) |
`max` | [Degree](#degree) |

**Returns:** *object | object*

___

##### `Const` createLatitude

▸ **createLatitude**(`value`: number): *object | object*

*Defined in [location/geoCoordinate.ts:29](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/location/geoCoordinate.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *object | object*

___

##### `Const` createLongitude

▸ **createLongitude**(`value`: number): *object | object*

*Defined in [location/geoCoordinate.ts:31](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/location/geoCoordinate.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *object | object*

___

##### `Const` degree

▸ **degree**(`value`: number): *[Degree](#degree)*

*Defined in [maths/degree.ts:10](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/maths/degree.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Degree](#degree)*

___

##### `Const` errorMessage

▸ **errorMessage**(`value`: number): *string*

*Defined in [maths/degree.ts:5](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/maths/degree.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *string*

___

##### `Const` geoCoordinate

▸ **geoCoordinate**(`latitude`: Readonly‹[Degree](#degree)›, `longitude`: Readonly‹[Degree](#degree)›): *[GeoCoordinate](#geocoordinate)*

*Defined in [location/geoCoordinate.ts:22](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/location/geoCoordinate.ts#L22)*

Returns the GeoCoordinate value of the latitude and longitude.

Code sample:
```ts
  const myHouse = geoCoordinate(degree(51.5034), degree());
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`latitude` | Readonly‹[Degree](#degree)› | The latitude coordinate value |
`longitude` | Readonly‹[Degree](#degree)› | The longitude coordinate value |

**Returns:** *[GeoCoordinate](#geocoordinate)*

THe GeoCoordinate value of coordinate latitude and longitude

___

##### `Const` left

▸ **left**<**T**>(`err`: T): *[Left](#left)‹T›*

*Defined in [either/either.ts:14](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/either/either.ts#L14)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`err` | T |

**Returns:** *[Left](#left)‹T›*

___

##### `Const` match

▸ **match**<**T**, **L**, **R**>(`input`: [Either](#either)‹L, R›, `left`: function, `right`: function): *T*

*Defined in [either/either.ts:7](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/either/either.ts#L7)*

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

##### `Const` right

▸ **right**<**T**>(`res`: T): *[Right](#right)‹T›*

*Defined in [either/either.ts:16](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/either/either.ts#L16)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`res` | T |

**Returns:** *[Right](#right)‹T›*

## README

[salahtimes](#globals)

### salahtimes

## Interfaces

### Degree

[salahtimes](#globals) › [Degree](#degree)

#### Interface: Degree

##### Hierarchy

* **Degree**

##### Index

###### Properties

* [value](#value)

##### Properties

######  value

• **value**: *Number*

*Defined in [maths/degree.ts:2](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/maths/degree.ts#L2)*

### Geocoordinate

[salahtimes](#globals) › [GeoCoordinate](#geocoordinate)

#### Interface: GeoCoordinate

##### Hierarchy

* **GeoCoordinate**

##### Index

###### Properties

* [latitude](#latitude)
* [longitude](#longitude)

##### Properties

######  latitude

• **latitude**: *Readonly‹[Degree](#degree)›*

*Defined in [location/geoCoordinate.ts:5](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/location/geoCoordinate.ts#L5)*

___

######  longitude

• **longitude**: *Readonly‹[Degree](#degree)›*

*Defined in [location/geoCoordinate.ts:6](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/location/geoCoordinate.ts#L6)*

### Salah

[salahtimes](#globals) › [Salah](#salah)

#### Interface: Salah

##### Hierarchy

* **Salah**

##### Index

###### Properties

* [name](#name)
* [time](#time)

##### Properties

######  name

• **name**: *Readonly‹"fajr"› | Readonly‹"dhuhr"› | Readonly‹"asr"› | Readonly‹"maghrib"› | Readonly‹"isha"›*

*Defined in [salah/salah.ts:2](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/salah/salah.ts#L2)*

___

######  time

• **time**: *Readonly‹Date›*

*Defined in [salah/salah.ts:8](https://github.com/doniseferi/salahtimes/blob/2d441ee/src/salah/salah.ts#L8)*

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

*Defined in [maths/degree.ts:2](https://github.com/doniseferi/salahtimes/blob/750ac44/src/maths/degree.ts#L2)*

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

*Defined in [location/geoCoordinate.ts:5](https://github.com/doniseferi/salahtimes/blob/750ac44/src/location/geoCoordinate.ts#L5)*

___

#####  longitude

• **longitude**: *Readonly‹[Degree](#degree)›*

*Defined in [location/geoCoordinate.ts:6](https://github.com/doniseferi/salahtimes/blob/750ac44/src/location/geoCoordinate.ts#L6)*

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

*Defined in [salah/salah.ts:2](https://github.com/doniseferi/salahtimes/blob/750ac44/src/salah/salah.ts#L2)*

___

#####  time

• **time**: *Readonly‹Date›*

*Defined in [salah/salah.ts:8](https://github.com/doniseferi/salahtimes/blob/750ac44/src/salah/salah.ts#L8)*
