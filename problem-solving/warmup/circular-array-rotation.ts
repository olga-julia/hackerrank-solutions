function circularArrayRotation(a: number[], k: number, queries: number[]): number[] {

    for (let i = 0; i < k; i++) {
        a.unshift(a[a.length - 1])
        a.pop()
    }

    const filtered = []

    for (let i = 0; i < queries.length; i++) {
        filtered.push(a[queries[i]])
    }

    return filtered
}

const a = [1, 2, 3]
const k = 2
const queries = [2, 0, 1]
const result = circularArrayRotation(a, k, queries)

console.log(result)