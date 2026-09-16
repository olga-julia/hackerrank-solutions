function aVeryBigSum(ar: number[]): number {

    const arr = Number(ar.map(BigInt).reduce((acc, cur) => acc + cur))

    return arr

}

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
const result = aVeryBigSum(ar)

console.log(result)