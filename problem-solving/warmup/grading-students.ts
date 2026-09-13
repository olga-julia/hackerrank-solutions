function gradingStudents(grades: number[]): number[] {

    const roundedGrades = []

    for (const grade of grades) {
        if (grade < 38) {
            roundedGrades.push(grade)
            continue
        }

        const rest = grade % 5
        const difference = 5 - rest
        const rounded = difference < 3 ? grade + difference : grade
        roundedGrades.push(rounded)
    }

    return roundedGrades

}

const grades = [57, 39, 24, 55]
const result = gradingStudents(grades)

console.log(result)

