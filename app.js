
const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.route("/")

.get(function(req, res){
    res.sendFile(__dirname + "/views/index.html");
})

.post(function(req, res){
    app.use(bodyParser.json());
    let quest1 = req.body.question1;
    let quest2 = req.body.question2;

    console.log(quest1);
    console.log(quest2);
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});