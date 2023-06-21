// express import / use express
const express = require('express');
const app = express();
//  set a port  number
const port = 8000;

// import/use express-ejs-layout
const expressLayouts = require('express-ejs-layouts');

// connect the server to the database and give the directory mongoose code.
const db = require('./config/mongoose');

// middleware for request input 
app.use(express.urlencoded());



// import static files like css javascipt to server
app.use(express.static("./assets"));

// use express-ejs-layouts
app.use(expressLayouts);

// extracts all css and java scirpt to layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true)




// get the routes folder
app.use('/', require('./routes/routes'));

// set a views engine to view the html file/ejs file.
app.set('view engine', 'ejs');
// set the directory of the view file/ejs file
app.set('views', "./views");

// listen the server on port 8000
app.listen(port,function(err){
    if(err){
        console.log("Error in running the server");
    }
    console.log("Server is running at port",port);
})