function catAndMouse(x: number, y: number, z: number): string {


    let positionCatA = z - x
    let positionCatB = z - y
    let res = ''

    if (positionCatA < 0) {
        positionCatA = positionCatA * -1
    }
    if (positionCatB < 0) {
        positionCatB = positionCatB * -1
    }


    if (positionCatA > positionCatB) {
        res = 'Cat B'
    }

    else if (positionCatB > positionCatA) {
        res = 'Cat A'
    }
    else {
        res = 'Mouse C'
    }

    return res

}

const x = 5
const y = 2
const z = 4
const result = catAndMouse(x, y, z)

console.log(result)
