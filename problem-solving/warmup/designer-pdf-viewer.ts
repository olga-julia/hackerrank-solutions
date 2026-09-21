function designerPdfViewer(h: number[], word: string): number {
    // Write your code here
    let maxHeight = 0;

    for (const letter of word) {
        const index = letter.charCodeAt(0) - "a".charCodeAt(0);
        maxHeight = Math.max(maxHeight, h[index]);
    }

    return maxHeight * word.length;
}

const h = [1, 3, 1];
const word = "abc";

const result = designerPdfViewer(h, word);

console.log(result);