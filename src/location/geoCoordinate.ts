import { angle, Angle } from "../maths"

type GeoCoordinate = {
    latitude: Readonly<Angle>,
    longitude: Readonly<Angle>
}

const GeoCoordinate =
    (latitude: number,
        longitude: number): GeoCoordinate => ({
            latitude: Latitude(latitude),
            longitude: Longitude(longitude)
        });


const Coordinate = (
    name: 'Latitude' | 'Longitude',
    value: number,
    min: Angle,
    max: Angle): Readonly<Angle> | (() => RangeError) =>
    value < min.degrees || value > max.degrees
        ? () => new RangeError(`${name} is set outside the valid range. 
        Please provide a value between ${min.degrees} and ${max.degrees}`)
        : angle(value)

const Latitude = (value: number) => Coordinate('Latitude', value, angle(-90), angle(90));

const Longitude = (value: number) => Coordinate('Latitude', value, angle(-180), angle(180));
