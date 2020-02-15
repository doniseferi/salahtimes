import { timeSpan } from "../index";
import { iterativeTest, generateRandomNumber } from "../../testUtils/index";

const staticMillisecondValues = ({
    days: 86400000,
    hour: 3600000,
    minute: 60000,
    second: 1000,
    milliseconds: 1
})

describe('TimeSpan returns the milliseconds value for', () => {
    test('span', () => {
        Object.keys(staticMillisecondValues).forEach(key => {
            iterativeTest<number, void>({
                numberOfExecutions: 500,
                generateInput: () => staticMillisecondValues[key],
                assert: () => console.log({key, x: staticMillisecondValues[key]})
            })    
        });
    })
});