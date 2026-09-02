function birthdayCakeCandles(candles: number[]): number {

    let tallests = []

    for (let i = 0; i < candles.length; i++) {
        if (tallests[0] < candles[i]) tallests = []
        if (tallests[0] > candles[i]) continue

        tallests.push(candles[i])
    }

    return tallests.length

}
const candles = [5, 2, 5, 2]

console.log(birthdayCakeCandles(candles))
