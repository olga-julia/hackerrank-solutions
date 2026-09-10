function pickingNumbers(a: number[]): number {

    const frequency: { [key: number]: number } = {}

    for (const number of a) {
        frequency[number] = (frequency[number] || 0) + 1
    }

    let max = 0

    for (const number of Object.keys(frequency)) {
        const currentNumber = Number(number)
        const current =
            frequency[currentNumber] + (frequency[currentNumber + 1] || 0)

        if (current > max) {
            max = current
        }
    }

    return max
}

const a = [4, 6, 5, 3, 3, 1]

const result = pickingNumbers(a)

console.log(result)