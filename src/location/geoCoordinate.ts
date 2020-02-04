import { Degree, degree } from "../maths/index"
import { left, right } from "../either/index";

interface GeoCoordinate {
    latitude: Readonly<Degree>
    longitude: Readonly<Degree>
}

const geoCoordinate =
    (latitude: Readonly<Degree>,
        longitude: Readonly<Degree>): GeoCoordinate => ({
            latitude: latitude,
            longitude: longitude
        });

const createLatitude = (value: number) => createCoordinate('Latitude', value, degree(-90), degree(90));

const createLongitude = (value: number) => createCoordinate('Longitude', value, degree(-180), degree(180));

const createCoordinate = (
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
    geoCoordinate,
    createLatitude,
    createLongitude
}