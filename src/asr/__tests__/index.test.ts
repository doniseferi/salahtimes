import asr from '../index';

test('Asr', () => {
    const expectedTime = "Thu Jan 23 2020 14:12:00 GMT+0000";
    expect(
        asr(new Date(Date.now()), 51.476852, -0.0005))
        .toEqual(expectedTime);
})