function gradingStudents(grades: number[]): number[] {

    const roundGrades = grades.map((n) => (grades[n]))


    return roundGrades

}

const grades = [57, 39, 24, 55]
const result = gradingStudents(grades)

console.log(result)


//se 