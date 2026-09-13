function migratoryBirds(arr: number[]): number {

    const frequency: { [key: number]: number } = {}

    for (const number of arr) {
        frequency[number] = (frequency[number] || 0) + 1
    }

    return Object.keys(frequency).map(Number).reduce((a, b) => {
        if (frequency[a] === frequency[b]) {
            return a < b ? a : b
        }

        return frequency[a] > frequency[b] ? a : b
    })


}

const arr = [1, 4, 4, 4, 5, 3]
const result = migratoryBirds(arr)

console.log(result)