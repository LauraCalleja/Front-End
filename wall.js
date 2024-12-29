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
