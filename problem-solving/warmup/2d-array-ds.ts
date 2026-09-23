function hourglassSum(arr: number[][]): number {
    // Write your code here
    let maxSum = 0

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i + 2]) {
            continue
        }

        for (let j = 0; j < arr.length; j++) {
            let sum =
                arr[i][j] +
                arr[i][j + 1] +
                arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] +
                arr[i + 2][j + 1] +
                arr[i + 2][j + 2]

            if (i === 0 && j === 0) {
                maxSum = sum
            }

            if (sum > maxSum) {
                maxSum = sum
            }
        }
    }

    return maxSum
}

const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
]

const arr2 = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5],
]

const arr3 = [
    [0, 6, -7, 1, 6, 3],
    [-8, 2, 8, 3, -2, 7],
    [-3, 3, -6, -3, 0, -6],
    [5, 0, 5, -1, -5, 2],
    [6, 2, 8, 1, 3, 0],
    [8, 5, 0, 4, -7, 4],
]

const result = hourglassSum(arr)

console.log(result)