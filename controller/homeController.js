// import file from db / give dir for model
const todo_list = require('../models/models');

// create a todo_list to check
var todo_list1 = [
    {description:"To check",
    category:"work",
    date:"14/12/22"}

];


// render a  home ejs file
module.exports.home = function(req,res){
    todo_list.find({},function(err,todoList){
        if(err){
            console.log("Error in fetching the data from the database");
            return;
        }
        return res.render("home",{
            title:"Todo list",
            todo:todoList
        });
    })
    
}

// add task controller
module.exports.addTask = function(req,res){
    console.log(req.body.description);
    todo_list.create({
        description:req.body.description,
        category : req.body.category,
        date : req.body.date
    },function(err,newTodo){
        if(err){
            console.log("Eror in creating todo");
        }
        console.log("**********************",newTodo);
        return res.redirect('back');
    })
}


// delte item  controller
module.exports.delete = function(req,res){
    console.log("delete request");
    var delete_items = req.body.name;
    console.log(req.body.name);
    console.log(todo_list);
    todo_list.deleteMany({description: delete_items}).then(function(){
        console.log("Data deleted");
    }).catch(function(error){
        console.log(error);
    });


    // return to home page
    return res.redirect("back");
}