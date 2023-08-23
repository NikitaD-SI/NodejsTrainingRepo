const fs = require("node:fs");
let fileContent = JSON.parse(fs.readFileSync("herolist.json","utf-8"));
let heronames = ["Ironman","Thor","Hulk","black widow","Dr strange", "Black Panther"];
let herocities = ["New York","Mumabi","Pune","Banglore"];
let count = 0;
let si = setInterval(function(){
    let hero={
        title : heronames[Math.ceil(Math.random() * heronames.length -1)],
        power : Math.round(Math.random()*10),
        city : herocities[Math.ceil(Math.random() * herocities.length -1)],
    };
    if(count <= 100){
        fileContent.heroeslist.push(hero);
        fs.writeFile("herolist.json",JSON.stringify(fileContent),"utf-8",function(){
            count++;
            console.log("hero added");
        })
    }else{
        clearInterval(si);
    };
},10);