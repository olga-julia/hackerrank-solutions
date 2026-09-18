function angryProfessor(k: number, a: number[]): string {

    let onTime = []
    let cancelClass = ""

    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            onTime.push(a[i])
        }
    }


    if (onTime.length >= k) {
        cancelClass = "NO"
    }
    else {
        cancelClass = "YES"
    }

    return cancelClass

}

const k = 2
const a = [-1, -3, 4, 2]
const result = angryProfessor(k, a)

console.log(result)