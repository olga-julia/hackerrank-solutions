function matchingStrings(stringList: string[], queries: string[]): number[] {

    const filtered = queries.map(
        (query) => stringList.filter((string) => string === query).length
    )

    return filtered
}

const stringList = ['ab', 'ab', 'abc']
const queries = ['ab', 'abc', 'bc']
const result = matchingStrings(stringList, queries)

console.log(result)