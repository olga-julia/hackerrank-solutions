function diagonalDifference(arr: number[][]): number {

    let leftToRight = 0
    let rightToleft = 0

    for (let i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i]
        rightToleft += arr[i][arr[i].length - 1 - i]
    }

    return Math.abs(leftToRight - rightToleft)

}

const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

const result = diagonalDifference(arr)

console.log(result)