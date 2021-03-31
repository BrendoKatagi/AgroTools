const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
let forms = [];
let qId = 1;
let createItems = [];
let newForm = {};

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.route("/")

.get(function(req, res){
    res.render("index", {questId: qId});
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

app.route("/modal")
.get(function(req, res){
    res.render("modal");
})

.post(function(req, res){

    newForm = {
        formIndex: qId + 1,
        creatorName: req.body.name,
        title: req.body.formTitle,
        country: req.body.country,
        city: req.body.city
    };
    JSON.stringify(newForm);
    res.redirect("/create");
    
});

app.route("/create")
.get(function(req, res){
    res.render("create", {questId: qId + 1, questions: createItems});
})

.post(function(req, res){
    console.log(req.body);
    let newValue = req.body.newItem;
    
    if(req.body.button === 'add'){

        createItems.push(newValue);
        console.log(createItems);
        res.render("create", {questId: qId +1 , questions: createItems});

    }else if(req.body.button === 'save'){
        qId += 1;

        JSON.stringify(createItems);
        newForm.items = createItems;

        forms.push(newForm);
        console.log(forms);
        createItems = [];
        newForm = {};
    }
    //console.log(req.body);
});

app.route("/answer")


app.listen(3000, function(){
    console.log("Server started on port 3000");
});