import { Degree, degree } from "../maths/index"
import { left, right } from "../either/index";

interface GeoCoordinate {
    latitude: Readonly<Degree>
    longitude: Readonly<Degree>
}

/**
 * Returns the GeoCoordinate point represented by a latitude and longitude angle.
 *
 * Code sample:
 * ```ts
 *   const myHouse = geoCoordinate(degree(51.5034), degree(0.1276));
 * ```
 *
 * @param latitude - The latitude coordinate in degrees.
 * @param longitude - The longitude coordinate in degrees.
 * @returns THe GeoCoordinate value of coordinate latitude and longitude.
 *
 */
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