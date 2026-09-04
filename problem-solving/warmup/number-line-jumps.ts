function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    // Write your code here
    if (!(x1 < x2 && v1 > v2)) {
        return "NO"
    }

    const i = (x2 - x1) / (v1 - v2)

    if (Number.isInteger(i)) return "YES"

    return "NO"
}

const x1 = 13
const v1 = 5
const x2 = 27
const v2 = 3

console.log(kangaroo(x1, v1, x2, v2))