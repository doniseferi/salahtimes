import { angleBasedMethod } from '../../index';
import { iterativeTest, generateRandomWholeNumber, generateRandomDate } from '../../../testUtils/index';
import { TimeSpan, timeSpan } from '../../../time';

describe('High latitude calclulation method', () => {
    test('Angle based method returns', () => {
        iterativeTest<AngleBasedMethodTestSpec, void>({
            numberOfExecutions: 500,
            generateInput: () => angleBasedMethodTestSpec(),
            assert: (val) => expect();

        })
    });
});

interface AngleBasedMethodTestSpec {
    angle: number,
    timeSpanBetweenSunsetAndSunrise: TimeSpan
};

const angleBasedMethodTestSpec = (): AngleBasedMethodTestSpec => ({
    angle: generateRandomWholeNumber(1, 20),
    timeSpanBetweenSunsetAndSunrise: timeSpan(0, generateRandomWholeNumber(1, 20), 0, 0, 0),
    actual: angleBasedMethod(angle, timeSpanBetweenSunsetAndSunrise)
});

/*
Let α be the twilight angle for Isha.
Let t = α/60.
Let x = the time span between sunset and sunrise.
Let n = x / t
/*