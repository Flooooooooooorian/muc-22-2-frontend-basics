const name2: String = "Florian";
let test: number = 3;

test = 59.5;

const result: number = test + 3

const result1: String = "Hallo " + name2;

console.log(result)
console.log(result1)


function add(a: number): number {
    console.log("Function a")
    const c = a - 6
    return c
}

console.log()
console.log(add(6))

console.log()

if (0) {
    console.log("truthy")
} else {
    console.log("falsy")
}

console.log()

const functionA = (b: string): string => {
    console.log(b)
    return b + 3
}

let b1 = "4";
console.log(functionA(b1))


let list: String[] = ["Hallo", "Welt", "Test"]

console.log(list)

list[0] = "Test"
console.log(list)
console.log(list[0])
console.log(list.length)


const result2 = list.push("Kuchen", "Banane")

console.log(result2)
console.log(list)

console.log()


// Arrow-Function
// const filterFunction = (element) => {
//     return element.length > 4
// }

//Anonyme function
const newList = list.filter((element) => {
    return element.length > 4
})

console.log(list)
console.log(newList)

console.log()

//Erstellt eine neue Liste   Parameter Name frei wählbar(bitte sinnvolle Namen wählen!)
const mappedList = list.map((currentElement) => {
    return currentElement + " TEST"
})

console.log(list)
console.log(mappedList)

//verändert die bestehende Liste
for (let i = 0; i < list.length; i++) {
    list[i] = list[i] + " TESTING"
}

console.log(list)


//Objekte


const obj: {
    name: String,
    age: number,
    canSing: boolean,
    toothBrush: {
        brand: string,
        technology: string
    }
} = {
    name: "Florian",
    age: 26,
    canSing: true,
    toothBrush: {
        brand: "",
        technology: "Ultraschall"
    }
}

obj.name = "Sergej"
obj.toothBrush = {
    brand: "",
    technology: "Ultraschall"
}
obj.canSing = true

console.log(obj)
console.log(obj.name)
console.log(obj.toothBrush.technology)


