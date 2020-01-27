import { Angle, angle } from "../maths"

interface IslamicConvention {
    value: Readonly<Date>
}

type GeoCoordinates = {
    latitude: Readonly<Latitude>,
    longitude: Readonly<Longitude>
}

const Coordinate = (
    name: 'Latitude' | 'Longitude',
    value: number, 
    min: Angle, 
    max: Angle): Angle | (() => RangeError) =>
    value < min.degrees || value > max.degrees
        ? () => new RangeError(`Value is set outside the valid range.`)
    : angle(value)

const Latitude = (value: number) => Coordinate('Latitude', value, angle(-90), angle(90));

const Longitude = (value: number) => Coordinate('Latitude', value, angle(-180), angle(180));
