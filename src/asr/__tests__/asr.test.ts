import { geoCoordinate, latitude, longitude } from "../../location"
import { throwOnError } from "../../either"
import { asr } from '../asr'

describe('Asr', () => {
    test('returns the correct time', () => {
        expect(asr(
            new Date(2009, 11, 26),
            geoCoordinate(throwOnError(latitude(51.5073509)),
                throwOnError(longitude(-0.1277583))))).toEqual(new Date(2009, 11, 26, 13, 41))
        expect(asr(
            new Date(2020, 2, 9),
            geoCoordinate(throwOnError(latitude(51.5073509)),
                throwOnError(longitude(-0.1277583))))).toEqual(new Date(2020, 2, 9, 15, 55))
    })
})