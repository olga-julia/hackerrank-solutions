function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {

    const apple = apples.map((n) => a + n).filter((n) => n >= s && n <= t)
    const orange = oranges.map((m) => b + m).filter((m) => m >= s && m <= t)

    console.log(apple.length)
    console.log(orange.length)

}

const s = 7
const t = 11
const a = 5
const b = 15
const apples = [-2, 2, 1]
const oranges = [5, -6]

countApplesAndOranges(s, t, a, b, apples, oranges)