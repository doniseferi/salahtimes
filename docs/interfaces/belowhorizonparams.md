[salahtimes](../README.md) › [BelowHorizonParams](belowhorizonparams.md)

# Interface: BelowHorizonParams

## Hierarchy

* **BelowHorizonParams**

## Index

### Properties

* [date](belowhorizonparams.md#date)
* [geoCoordinates](belowhorizonparams.md#geocoordinates)
* [getSalahTimeUtc](belowhorizonparams.md#getsalahtimeutc)
* [salahAngle](belowhorizonparams.md#salahangle)

## Properties

###  date

• **date**: *[Date](__global.date.md)*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts:9](https://github.com/doniseferi/salahtimes/blob/c687593/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts#L9)*

___

###  geoCoordinates

• **geoCoordinates**: *[GeoCoordinate](geocoordinate.md)*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts:10](https://github.com/doniseferi/salahtimes/blob/c687593/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts#L10)*

___

###  getSalahTimeUtc

• **getSalahTimeUtc**: *function*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts:7](https://github.com/doniseferi/salahtimes/blob/c687593/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts#L7)*

#### Type declaration:

▸ (`angle`: number, `date`: [Date](__global.date.md), `Latitude`: number, `longitude`: number): *string*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | number |
`date` | [Date](__global.date.md) |
`Latitude` | number |
`longitude` | number |

___

###  salahAngle

• **salahAngle**: *Readonly‹[AngularDegrees](angulardegrees.md)›*

*Defined in [sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts:8](https://github.com/doniseferi/salahtimes/blob/c687593/src/sunDepressionAngle/getDateTimeUtcAtSunDepressionAngle.ts#L8)*
