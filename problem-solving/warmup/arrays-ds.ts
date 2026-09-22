function reverseArray(a: number[]): number[] {

    const reverse = []

    for (let i = 0; i < a.length; i++) {
        reverse.unshift(a[i])
    }

    return reverse

}

const a = [1, 2, 3, 4]

const result = reverseArray(a)

console.log(result)