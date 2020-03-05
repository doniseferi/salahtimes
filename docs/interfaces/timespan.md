[salahtimes](../README.md) › [TimeSpan](timespan.md)

# Interface: TimeSpan

## Hierarchy

* **TimeSpan**

## Index

### Properties

* [value](timespan.md#value)

### Methods

* [divide](timespan.md#divide)
* [divideByTimeSpan](timespan.md#dividebytimespan)

## Properties

###  value

• **value**: *number*

*Defined in [time/timeSpan.ts:7](https://github.com/doniseferi/salahtimes/blob/5c01234/src/time/timeSpan.ts#L7)*

## Methods

###  divide

▸ **divide**(`divisor`: number): *[Either](../README.md#either)‹Error, [TimeSpan](timespan.md)›*

*Defined in [time/timeSpan.ts:5](https://github.com/doniseferi/salahtimes/blob/5c01234/src/time/timeSpan.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`divisor` | number |

**Returns:** *[Either](../README.md#either)‹Error, [TimeSpan](timespan.md)›*

___

###  divideByTimeSpan

▸ **divideByTimeSpan**(`divisor`: [TimeSpan](timespan.md)): *[Either](../README.md#either)‹Error, [TimeSpan](timespan.md)›*

*Defined in [time/timeSpan.ts:6](https://github.com/doniseferi/salahtimes/blob/5c01234/src/time/timeSpan.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`divisor` | [TimeSpan](timespan.md) |

**Returns:** *[Either](../README.md#either)‹Error, [TimeSpan](timespan.md)›*
