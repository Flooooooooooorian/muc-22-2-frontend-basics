const student1: { name: String, id: String } = {
    name: "Florian",
    id: "123"
}

const student2: { name: String, id: String } = {
    name: "Matthias",
    id: "456"
}

const students: { name: String; id: String }[] = [student1, student2]


const updateName = (students: { name: String, id: String }[], id: String, newName: String): { name: String, id: String }[] => {
    return students.map((student) => {
        if (student.id === id) {
            student.name = newName
        }
        return student
    })
}


console.log(students)

const newList = updateName(students, "123", "Sergej")

console.log(students)
console.log(newList)



const updateNameAndCopy = (students: { name: String, id: String }[], id: String, newName: String): { name: String, id: String }[] => {
    return students.map((student) => {
        if (student.id === id) {
            const newStudent: { name: String, id: String } = {name: newName, id: student.id}
            return newStudent
        }
        return student
    })
}

console.log()
console.log(students)

const copyList = updateNameAndCopy(students, "123", "Florian")

console.log(students)
console.log(copyList)
