// Find the length of string.
// code is written by sultan 

// NOTE : count the number of requests.
const express = require("express");
const app = express();
const number = 0;
function counter() {
    number++;
}

app.get("/", counter, function (req, res){
    console.log("hello");
    res.send("hii")
}
)

app.listen(3000);