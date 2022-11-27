const container = document.querySelector(".container");

const pixel = document.createElement("div");
//here's the div that we are gonna work w/ and we give it a class to make ti sketch
pixel.classList.add("pixel");

container.appendChild(pixel);

pixel.addEventListener("mouseover", function(){
    pixel.classList.add("colorChange");
});

