
let empty = true;
//this is a boolean value used to see if we need to reset the canvas if the screen resizes

const container = document.querySelector(".container");


function createPixels(num){
    if(empty == false){
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
          }
          empty = true;
        createPixels(num);
    }
    else{
        for(let j = 0; j< num; j++){   
            let row = document.createElement("div"); 
            row.classList.add('row');
            for(let i = 0;i<num;i++){
                let pixel = document.createElement("div");
                pixel.classList.add("pixel");

                pixel.addEventListener("mouseover", function(){
                    pixel.classList.add("colorChange");
                });

                row.appendChild(pixel);
            }
            container.appendChild(row);
        }
        empty = false;
    }
    
}

function resetColor(){
    //double for loop through and remove the class colorChange
    //needs to be given a container with stuff in it
}

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener('click', function(){
    createPixels(btn.value);
}));



//here's the div that we are gonna work w/ and we give it a class to make ti sketch



