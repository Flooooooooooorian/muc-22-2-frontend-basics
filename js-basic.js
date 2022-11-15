const name = "Florian";
let test = 3;

test = "Hallo";

const result = test + 3

const result1 = "Hallo " + name;


console.log(result)
console.log(result1)


function add(a) {
    console.log("Function a")
    const c = a - 6
    return c
}

console.log()
console.log(add("6"))

console.log()

if (0) {
    console.log("truthy")
} else {
    console.log("falsy")
}

console.log()

const functionA = (b) => {
    console.log(b)
    return b + 3
}

console.log(functionA(4))
