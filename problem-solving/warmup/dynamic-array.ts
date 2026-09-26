function dynamicArray(n: number, queries: number[][]): number[] {
    const arr: number[][] = Array.from({ length: n }, () => []);
    let lastAnswer = 0;
    const answers: number[] = [];

    for (const query of queries) {
        const type = query[0];
        const x = query[1];
        const y = query[2];

        const idx = (x ^ lastAnswer) % n;

        if (type === 1) {
            arr[idx].push(y);
        } else {
            const position = y % arr[idx].length;

            lastAnswer = arr[idx][position];

            answers.push(lastAnswer);
        }
    }

    return answers;
}

const n = 2
const queries = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1]
];

const result = dynamicArray(n, queries)

console.log(result)