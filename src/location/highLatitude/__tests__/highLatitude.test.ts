import { angleBasedMethod } from '../../index';
import { iterativeTest, generateRandomWholeNumber, generateRandomDate } from '../../../testUtils/index';
import { TimeSpan, timeSpan } from '../../../time';

describe('High latitude calclulation method', () => {
    test('Angle based method returns', () => {
        iterativeTest<TimeSpan, void>({
            numberOfExecutions: 500,
            generateInput: () => {},
            assert: (val) => expect(val).toEqual(val.value * 2);

        })
    });
});

const angleBasedMethodTestSpec = () => {
    angle: () => generateRandomWholeNumber(1, 20),
    sunset: () => generateRandonTimeAfter(15, 23),
    sunrise: () => generateRandonTimeAfter(3, 9)
}

/*
Let α be the twilight angle for Isha.
Let t = α/60.
Let x = the time span between sunset and sunrise.
Let n = x / t
/*