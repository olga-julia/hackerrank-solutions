function staircase(n: number): void {

    for (let i = 1; i <= n; i++) {
        const blankSpace = " ".repeat(n - i);
        const hashtag = "#".repeat(i);
        console.log(blankSpace + hashtag);
    }
}

staircase(6);