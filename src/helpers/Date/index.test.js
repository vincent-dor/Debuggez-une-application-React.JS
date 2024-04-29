import { getMonth } from './index';

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            const date = new Date('2022-01-15')
            expect(getMonth(date)).toEqual("janvier")
        });
        it("the function return juin for 2022-06-08 as date", () => {
            const date = new Date('2022-06-08')
            expect(getMonth(date)).toEqual("juin")
        });
    });
})

