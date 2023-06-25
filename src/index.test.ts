import {calcAveragesNegativeAndPositive, avgOfArr, isNegativeNum, isPositiveNum} from "./index";

test("calcAveragesNegativeAndPositive returns the correct output for arbitary, non edge case inputs", () => {
    expect(calcAveragesNegativeAndPositive([10, -100, 20, -200, -3])).toEqual({averageOfPositives: 15, averageOfNegatives: -101 });
    expect(calcAveragesNegativeAndPositive([1,2,3, -1, -7, -7])).toEqual({averageOfPositives: 2, averageOfNegatives: -5 });
})

test("calcAveragesNegativeAndPositive returns the correct output for an empty inital array", () => {
    expect(calcAveragesNegativeAndPositive([])).toEqual({averageOfPositives: 0, averageOfNegatives: 0 });
})

test("avgOfArr function works", () => {
    expect(avgOfArr([1,2,3])).toEqual(2);
    expect(avgOfArr([4.5, 5, 8.5])).toEqual(6)
})

test("isNegativeNum function works", () => {
    expect(isNegativeNum(3)).toEqual(false);
    expect(isNegativeNum(-1)).toEqual(true)
})

test("isPositiveNum function works", () => {
    expect(isPositiveNum(3)).toEqual(true);
    expect(isPositiveNum(-1)).toEqual(false)
})