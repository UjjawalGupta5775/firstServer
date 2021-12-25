const express = require("express");
const app = express();
app.get("/", function(req, res){
    res.send("<h1>Hello, World!</h1>");
})

app.get("/contact", function(req, res) {
    res.send("Contact me at guptaujjawal12@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("I am Ujjawal Gupta <br> I am Always more than what one can think of.");
})

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Reading</li><li>Learning</li></li></ul>")
})

app.listen(3000, function () {
    console.log("Server started at port 3000.")
})