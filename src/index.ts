import {
    GeoCoordinate,
    geoCoordinate
} from './location/index'
import {
    degree, Degree
} from './maths/index';

const salahtimes = Object.freeze({
    geoCoordinate: (latitude: Degree, longitude: Degree): GeoCoordinate => geoCoordinate(latitude, longitude),
    degree: (value: number): Degree => degree(value)
});

export {
    salahtimes
}