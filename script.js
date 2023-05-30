let num = parseInt(prompt("Please enter your desired number to FizzBuzz to!"))
let p = document.querySelector("p")


for (i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        p.innerHTML += `FizzBuzz, `
    } else if (i % 5 === 0) {
        p.innerHTML += `Buzz, `
    } else if (i % 3 === 0) {
        p.innerHTML += `Fizz, `
    } else {
        p.innerHTML += `${i}, `
    }

}




