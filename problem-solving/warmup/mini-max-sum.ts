function miniMaxSum(arr: number[]): void {

    const sortedArray = arr.sort((a, b) => a - b)
    const removedMini = sortedArray.slice(0, 4)
    const removedMax = sortedArray.splice(1, 4)
    const initialValue = 0;
    const sumMini = removedMini.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,)
    const sumMax = removedMax.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,)

    console.log(`${sumMini} ${sumMax}`);

}

const arr = [10, 5, 23, 1, 7]

miniMaxSum(arr)