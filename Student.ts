type Student = {
    name: String,
//? für Optionale Attribute, | für mehrere mögliche Typen
    id?: String | number
}


const student1: Student = {
    name: "Florian",
    id: "123"
}

const student2: Student = {
    name: "Matthias",
    id: "456"
}

const students: Student[] = [student1, student2]


const updateName = (students: Student[], id: String, newName: String): Student[] => {
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



const updateNameAndCopy = (students: Student[], id: String, newName: String): Student[] => {
    return students.map((student) => {
        if (student.id === id) {
            const newStudent: Student = {name: newName, id: student.id}
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

const student3: Student = {name: "Max Mustermann"}
const student4: Student = {name: "Max Mustermann", id: "4"}
const student5: Student = {name: "Max Mustermann", id: 5}
