function bonAppetit(bill: number[], k: number, b: number): void {

    const eatItens = bill.filter((_, index) => index != k)
    const initialValue = 0
    const sumEatItens = eatItens.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,)
    const sharedBill = sumEatItens / 2
    const refound = b - sharedBill

    if (refound === 0) {
        console.log('Bon Appetit')
    }
    if (refound != 0) {
        console.log(refound)
    }

}

const bill = [3, 10, 2, 9]
const k = 1
const b = 12
const mostra = bonAppetit(bill, k, b)


//console.log