const container = document.querySelector(".container");

function createPixels(num){
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
    
}

function resetColor(){
    //double for loop through and remove the class colorChange
    //needs to be given a container with stuff in it
}



//here's the div that we are gonna work w/ and we give it a class to make ti sketch


createPixels(64);

