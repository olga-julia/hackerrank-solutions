'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*

 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    // Write your code here
    
    const sortedArray = arr.sort((a, b) => a - b)
    const removedMini = sortedArray.slice(0, 4)
    const removedMax = sortedArray.splice(1, 4)    
    const initialValue = 0;
    const sumMini = removedMini.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,)
    const sumMax = removedMax.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,)
    
console.log(`${sumMini} ${sumMax}`);    
    
}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
