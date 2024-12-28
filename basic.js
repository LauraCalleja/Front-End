if (document.readyState === "loading") {
    console.log("Document is loading");
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document ready after waiting!");
        initializeCode();
    });
} else {
    console.log("Document is ready");
    initializeCode();
}

let panicCounter = 0;

function initializeCode() {
    const addTextButton = document.getElementById("add-text");
    addTextButton.addEventListener("click", function() {
        const bigText = document.getElementById("big-text");
        bigText.innerHTML = bigText.innerHTML + (Math.random() + 1).toString(36);
    });

    const panicButton = document.getElementById("panic-button");
    panicButton.addEventListener("click", function() {
        const panicArea = document.getElementById("panic-area");
        let newParagraph = document.createElement("p");

        let stars = "*".repeat(panicCounter++);
        newParagraph.innerHTML = stars + " PANIC " + stars;
        panicArea.appendChild(newParagraph);
    });

    const reducePanicButton = document.getElementById("reduce-panic-button");
    reducePanicButton.addEventListener("click", function() {
        const panicArea = document.getElementById("panic-area");
        panicArea.removeChild(panicArea.lastChild);
        panicCounter--;
    });
}


'''
console.log("Hello!");

let numbers = [];
console.log(numbers);

numbers.push(125);
numbers.push(127);
numbers.push(225);
numbers.push(226);

console.log(numbers);

numbers.unshift(666);
console.log(numbers);

let number = numbers.pop();
console.log(numbers);
console.log(number);

let student = {
    name: "David",
    id: "063830"
};

console.log(student);

let students = [];
students.push(student);
students.push({ name: "Mike", id: "063830" });
students.push({ name: "Jonne", id: "063830" });
students.push({ name: "ES-pañina", id: "053830" });

console.log(students);

students.forEach(element => console.log(element));

while (students.length > 0) {
    console.log(students.pop());
}

console.log(students);

'''
