// to check java file is linked 
a = "Hii successfully link the javascript file"
console.log(a);

// for the category color 
var category =document.querySelectorAll("#category");

for(let i of category){
    console.log(i.innerHTML);
    if(i.innerHTML=="Personal"){
        i.style.backgroundColor = "blue";
    }else if(i.innerHTML=="Work"){
        i.style.backgroundColor = "green";
    }else if(i.innerHTML=="School"){
        i.style.backgroundColor = "violet";
    }else if(i.innerHTML=="Cleaning"){
        i.style.backgroundColor = "grey";
    }else if(i.innerHTML=="Other"){
        i.style.backgroundColor = "rgb(240, 150, 150)"
    }
}


// date input set from Fri Dec 16 2022 05:30:00 GMT+0530 (India Standard Time)
// to dd/mm/yyyy format
var date_input = document.querySelectorAll("#date-view");

for(let j of date_input){
    console.log(j.innerHTML);
    var mnths = {
    Jan:"01", Feb:"02", Mar:"03", Apr:"04", May:"05", Jun:"06",
    Jul:"07", Aug:"08", Sep:"09", Oct:"10", Nov:"11", Dec:"12"
    },
    date = j.innerHTML.split(" ");
        
    var true_date= [date[2],mnths[date[1]], date[3] ].join("/");
    console.log(true_date);
    if(j.innerHTML!=true_date&&true_date!="//"){
        j.innerHTML=true_date;
    }
    
}


