const poems = [
    { poem: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus." },
    { poem: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus." },
    { poem: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus." },
    { poem: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus." },
    { poem: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio purus." }
];

const express = require("express");
const os = require("os");
const path = require("path");
const app = express();
const port = 8000;


app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => console.log(`Server listening at port ${port}`));

/*
const http = require("http");

console.log("Server running... fully!");

http.createServer(function (req, res) {
    console.log(req);
    res.write("Hello World!");
    res.end();
    console.log("Browser reached us!");
}).listen(8000);
*/
