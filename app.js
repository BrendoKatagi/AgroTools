
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
let forms = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.route("/")

.get(function(req, res){
    res.render("index");
})

.post(function(req, res){

    const newForm = {
        name: req.body.name,
        date: req.body.dateAns,
        quest1: req.body.question1,
        quest2: req.body.question2,
    };
    
    JSON.stringify(newForm);
    forms.push(newForm);

    console.log(forms);
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});