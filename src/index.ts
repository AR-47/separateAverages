/**
 * Return the two separate averages of negative numbers and
 * positive numbers in an array of numbers
 * 
 * calcAveragesNegativeAndPositive([10, -100, 20, -200, -3]) should return either
 * the array [15, -101] 
 * *or*
 * the object {averageOfPositives: 15, averageOfNegatives: -101 }
 * 
 * pseudocode
 * program: calcAveragesNegativeAndPositive
 * input: inputArr - integers
 * return: object containing average of negative numbers and positive numbers
 * 
 * use .filter to create an array, negativeNums, containing all negative numbers from the input array
 * use .filter to create an array, positiveNums, containing all positive numbers from the input array
 * calculate the average of the numbers in negativeNums and positiveNums, store them in variables called avgNegative and avgPositive
 * dynamically add the averages in a new object, {averageOfPositives: avgPositive, averageOfNegatives: avgNegative }
 * return the object
 *  
*/

interface avgObject {
    'averageOfPositives': number;
    'averageOfNegatives': number
}

const isPositiveNum = (num: number) => (num > 0) ? true : false
const isNegativeNum = (num: number) => (num < 0) ? true : false
const avgOfArr = (arr: number[]): number => arr.reduce((acc,currVal) => acc + currVal / arr.length, 0)

const calcAveragesNegativeAndPositive = (arr: number[]) => {
    let negativeNums = arr.filter(isNegativeNum)
    let positiveNums = arr.filter(isPositiveNum)
    let avgNegative = avgOfArr(negativeNums)
    let avgPositive = avgOfArr(positiveNums)
    let averages: Record<string, number> = {}
    averages['averageOfPositives'] = avgPositive
    averages['averageOfNegatives'] = avgNegative
    return averages
}

export {calcAveragesNegativeAndPositive, avgOfArr, isNegativeNum, isPositiveNum };
