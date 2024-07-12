const container = document.querySelector('.container');


//get grid size
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
   pixelOnSide = prompt('Enter the number of pixels you need on one side', 16);
   generatePixels(pixelOnSide)
});



//generate grid
let defaultPixelOnSide = 16;
generatePixels(defaultPixelOnSide);


//pixel generation
function generatePixels(numberOfPixels){
    numberOfPixels *= numberOfPixels;
    for(let i = 0; i <numberOfPixels; i++){
        pixel = document.createElement('div');;
        container.appendChild(pixel);
    }
}

//color changer
container.addEventListener('mouseover', changeColor);

function changeColor(e){
    e.target.style.backgroundColor = 'red';
}




