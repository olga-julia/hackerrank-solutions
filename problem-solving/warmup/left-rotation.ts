function rotateLeft(d: number, arr: number[]): number[] {

    for (let i = 0; i < d; i++) {
        arr.push(arr[0])
        arr.shift()
    }


    return arr

}

const arr = [1, 2, 3, 4, 5]
const d = 2
const result = rotateLeft(d, arr)

console.log(result)