Aquí está el código que aparece en la imagen que proporcionaste:

```javascript
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
```
