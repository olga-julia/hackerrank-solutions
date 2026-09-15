function breakingRecords(scores: number[]): number[] {

    let maxScore = [scores[0]]
    let minScore = [scores[0]]

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore[maxScore.length - 1]) {
            maxScore.push(scores[i])
        }

        if (scores[i] < minScore[minScore.length - 1]) {
            minScore.push(scores[i])
        }

    }

    return [maxScore.length - 1, minScore.length - 1]

}

const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
const result = breakingRecords(scores)

console.log(result)