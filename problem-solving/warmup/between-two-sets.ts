function getTotalX(a: number[], b: number[]): number {
    const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y));
    const lcm = (x: number, y: number): number => (x * y) / gcd(x, y);

    const l = a.reduce((acc, val) => lcm(acc, val));
    const g = b.reduce((acc, val) => gcd(acc, val));

    let count = 0;
    for (let i = l; i <= g; i += l) {
        if (g % i === 0) {
            count++;
        }
    }

    return count;
}

const a = [2, 6]
const b = [24, 36]
const result = getTotalX(a, b)

console.log(result)