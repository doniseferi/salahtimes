import { angleBasedMethod } from '../../index';
import { iterativeTest, generateRandomWholeNumber } from '../../../testUtils/index';
import { TimeSpan, timeSpan } from '../../../time';
import { degree, Degree } from '../../../maths';

describe('High latitude calclulation method', () => {
    test('Angle based method returns', () => {
        iterativeTest<AngleBasedMethodTestSpec, void>({
            numberOfExecutions: 500,
            generateInput: () => angleBasedMethodTestSpec(degree(generateRandomWholeNumber(0, 90)), timeSpan(0, generateRandomWholeNumber(0, 23), 0, 0, 0)),
            assert: (val) => {
                const expectedMilliseconds =  (val.timeSpanBetweenSunsetAndSunrise.value / val.angle.value) >> 0;
                const epxectedTimeSpan = timeSpan(0,0,0,0, expectedMilliseconds);
                expect(val.actual.value).toEqual(epxectedTimeSpan.value);
            }
        });
    });
});

interface AngleBasedMethodTestSpec {
    timeSpanBetweenSunsetAndSunrise: TimeSpan,
    angle: Degree,
    actual: TimeSpan
}

const angleBasedMethodTestSpec = (degree: Degree, timeSpanBetweenSunsetAndSunrise: TimeSpan): AngleBasedMethodTestSpec => ({
    timeSpanBetweenSunsetAndSunrise,
    angle: degree,
    actual: angleBasedMethod(degree, timeSpanBetweenSunsetAndSunrise)
});

/*
Let α be the twilight angle for Isha.
Let t = α/60.
Let x = the time span between sunset and sunrise.
Let n = x / t
*/