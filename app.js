const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

let forms = [];
let qId = 0;
let createItems = [];
let newForm = {};
let answeredForms  = [];
let newAnswer = {};
let ansID  = 0;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.route("/")

.get(function(req, res){
    res.redirect("/answer");
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

    let today = Date.now();

    let date = new Date(today);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    today = day + "-" + month + "-" + year;
    
    newForm = {
        formIndex: qId + 1,
        creatorName: req.body.name,
        title: req.body.formTitle,
        country: req.body.country,
        city: req.body.city,
        date: today
    };
    JSON.stringify(newForm);
    res.redirect("/create");
    
});

app.route("/create")
.get(function(req, res){
    res.render("create", {questId: qId + 1, questions: createItems});
})

.post(function(req, res){
    let newValue = req.body.newItem;
    
    if(req.body.button === 'add'){

        createItems.push(newValue);
        res.render("create", {questId: qId +1 , questions: createItems});

    }else if(req.body.button === 'save'){
        qId += 1;

        JSON.stringify(createItems);
        newForm.items = createItems;

        forms.push(newForm);
        createItems = [];
        newForm = {};
    }
    //console.log(req.body);
});

app.route("/answer")
.get(function(req, res){
    res.render("answer", {formData: forms});
})

.post(function(req, res){
    ansID += 1;
    let data = req.body;

    let today = Date.now();

    let date = new Date(today);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    today = day + "-" + month + "-" + year;
    
    newAnswer.date = today;
    newAnswer.latitude = data.lat;
    newAnswer.longitude = data.long;
    newAnswer.userName = data.name;
    delete data['name'];
    delete data['lat'];
    delete data['long'];
    newAnswer.answers = data;

    answeredForms.push(newAnswer);
    newAnswer = {};

    res.redirect("/forms");
});

app.route("/answer/:index")

.get(function(req, res){
    for (var i = 0; i < forms.length; i++){

        if(forms[i].formIndex === parseInt(req.params.index)){
            newAnswer.answerIndex = ansID + 1;
            newAnswer.formIndex = forms[i].formIndex;
            newAnswer.formTitle =  forms[i].title;
            res.render("index", {title: forms[i].title, itemsList: forms[i].items});
            break;
        }
    }
});

app.route("/forms")
.get(function(req, res){
    console.log(answeredForms);
    res.render("forms", {formData: answeredForms});
});

app.route("/forms/:index")
.get(function(req, res){

    for (var i = 0; i < answeredForms.length; i++){

        if(answeredForms[i].answerIndex === parseInt(req.params.index)){
            console.log(answeredForms[i]);
            res.render("checkform", {formData: answeredForms[i], formsQuest: forms[i].items});
            break;
        }
    }
});
app.listen(3000, function(){
    console.log("Server started on port 3000");
});