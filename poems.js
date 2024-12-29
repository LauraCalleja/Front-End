const express = require("express");
const router = express.Router();
const fs = require("fs");

let poems = [];

router.get("/", (req, res) => {
    res.json(poems);
});

router.get("/:id", (req, res) => {
    res.json(poems[req.params.id]);
});

router.post("/", (req, res) => {
    poems.push(req.body);

    fs.writeFile("./data/poems.json", JSON.stringify(poems), err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Data saved!");
    });

    res.send(req.body);
    // console.log("Poem: " + JSON.stringify(req.body) + " added!");
});

module.exports = router;

