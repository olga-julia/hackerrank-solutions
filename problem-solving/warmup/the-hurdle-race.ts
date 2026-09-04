function hurdleRace(k: number, height: number[]): number {

    const sortedArray = height.sort((a, b) => a - b)
    const dose = sortedArray[sortedArray.length - 1] - k

    if (dose < 0) return 0
    return dose

}

const k = 2
const height = [1, 3, 7, 7, 6]

const result = hurdleRace(k, height)

console.log(result)