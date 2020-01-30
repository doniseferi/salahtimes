import { Degree, degree } from "../maths"
import { left, right, match } from "../either/index";

interface GeoCoordinate {
    latitude: Readonly<Degree>
    longitude: Readonly<Degree>
}

const GeoCoordinate =
    (latitude: number,
        longitude: number): GeoCoordinate => ({
            latitude: match(Latitude(latitude), e => { throw e }, lat => lat),
            longitude: match(Longitude(longitude), e => { throw e }, lon => lon)
        });

const Latitude = (value: number) => Coordinate('Latitude', value, degree(-90), degree(90));

const Longitude = (value: number) => Coordinate('Latitude', value, degree(-180), degree(180));

const Coordinate = (
    name: 'Latitude' | 'Longitude',
    value: number,
    min: Degree,
    max: Degree) =>
    value < min.value || value > max.value
        ? left(new RangeError(`${name} is set outside the valid range. 
        Please provide a value between ${min.value} and ${max.value}`))
        : right(degree(value))

export {
    GeoCoordinate,
    Coordinate
}