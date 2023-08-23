const EventEmitter = require("node:events").EventEmitter;

let si = new EventEmitter();
let count = 0;

// si.addListener("cricket", function(){
//     console.log("cricket event happened");
// })

// si.emit("cricket");


//Assignment
let cricketHandler = function(evt){
    console.log("cricket event happened",evt);
}

si.addListener("cricket", cricketHandler);
let interval = setInterval(() => {
    count++;
    console.log("interval trigger",count);
    if(count <= 5){
        si.emit("cricket","cricket is a sport");
    }
    else{
        si.removeAllListeners("cricket",cricketHandler);
        clearInterval(interval);
    }
}, 1000);

