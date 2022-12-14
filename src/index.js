const { port } = require("../config.json");

const path = require("path");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public"));

app.use(express.static("public"))

app.get("/", (request, response) => {
    response.render("index", {
        hello: "hello"
    });
});

app.listen(port, () => {
    console.log(`Website listening on port ${port}.`)
});
