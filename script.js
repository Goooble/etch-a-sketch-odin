const container = document.querySelector('.container');
const body = document.querySelector('body');

//get grid size
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
   pixelOnSide = prompt('Enter the number of pixels you need on one side', 17);
   deletePixels();
   generatePixels(pixelOnSide);

});

function deletePixels(){
    const pixels = container.children;
    
while(pixels.length !== 0){
    pixels[0].remove();
}
}

generatePixels();


//pixel generation
function generatePixels(numberOfPixels = 16){
    numberOfPixels *= numberOfPixels;
    for(let i = 0; i <numberOfPixels; i++){
        pixel = document.createElement('div');
        // pixel.textContent = i;
        container.appendChild(pixel);
    }
    
}

//color changer
container.addEventListener('mouseover', changeColor);

function changeColor(e){
    e.target.style.backgroundColor = 'red';
}


//for loop remove nodes

