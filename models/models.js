// require mongoose
const mongoose = require("mongoose");
// schema create list item 
const todoListSchema = new mongoose.Schema({
    description:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});


const todo_list = mongoose.model("todo_list", todoListSchema);

// export to use the model
module.exports = todo_list;