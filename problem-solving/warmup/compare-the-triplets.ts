function compareTriplets(a: number[], b: number[]): number[] {

    let alicePoints = 0
    let bobPoints = 0

    for (let i = 0; i < a.length; i++) {

        if (a[i] === b[i]) continue

        if (a[i] > b[i]) {
            alicePoints++
        }
        if (a[i] < b[i]) {
            bobPoints++
        }
    }

    return [alicePoints, bobPoints]

}

const a = [3, 5, 1]
const b = [6, 4, 1]
const result = compareTriplets(a, b)

console.log(result)