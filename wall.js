let testJson = {
  "name": "Student",
  "age": 25,
  "school": "LUT",
  "courses": [
    "Web applications",
    "Object-oriented programming",
    "User Interfaces and Usability"
  ]
};

console.log(testJson.age);
console.log(JSON.stringify(testJson));
let jsonString = JSON.stringify(testJson);

console.log(JSON.parse(jsonString).school);



if (document.readyState === "loading") {
  console.log("Document is loading");
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const addPoemButton = document.getElementById("add-poem");
  addPoemButton.addEventListener("click", function () {
    const poemInput = document.getElementById("poem-input");
    const vip = document.getElementById("vip");
    addNewPoem(poemInput.value, vip.checked);
  });

const addPoemButtonFromApi = document.getElementById("add-poem-from-api");

addPoemButtonFromApi.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((poem) => {
        addNewPoem(poem.title, false);
      });
    });
});

// loadJson()

async function loadJson() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let response = await fetch(url);
  let poems = await response.json();
  console.log(poems);

  poems.forEach((poem) => {
    addNewPoem(poem.title, false);
  });
}




}

function addNewPoem(poem, vip) {
  const theWall = document.getElementById("the-wall");
  let newListItem = document.createElement("LI");
  if (vip === true) {
    newListItem.classList.add("vip");
  }
  newListItem.appendChild(document.createTextNode(poem));
  theWall.appendChild(newListItem);
  console.log("Working... adding new stuff...");
}



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

function initializeCode() {
    const addPoemButton = document.getElementById("add-poem");
    addPoemButton.addEventListener("click", function() {
        const poemInput = document.getElementById("poem-input");
        const theWall = document.getElementById("the-wall");
        const vip = document.getElementById("vip");

        let newListItem = document.createElement("li");

        if (vip.checked == true) {
            newListItem.classList.add("vip");
        }

        newListItem.appendChild(document.createTextNode(poemInput.value));
        theWall.appendChild(newListItem);

        console.log("Working... adding new stuff...");
    });
}
