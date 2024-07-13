const container = document.querySelector('.container');
const body = document.querySelector('body');
//get grid size
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
   pixelOnSide = Math.round(prompt('Enter the number of pixels you need on one side', 50));
   if(pixelOnSide > 100 || pixelOnSide < 1){
        alert("Please enter an integer less than 100 and above 0");
   }else{
   deletePixels();
   generatePixels(pixelOnSide);
   }
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
    pixelOnSide = numberOfPixels;
    numberOfPixels *= numberOfPixels;
    for(let i = 0; i <numberOfPixels; i++){
        pixel = document.createElement('div');
        pixel.style.width = `${480/pixelOnSide}px`;
        pixel.style.height = `${480/pixelOnSide}px`;
       pixel.style.opacity = 1;
        // pixel.textContent = i;
        container.appendChild(pixel);
    }
    
}

//color changer
container.addEventListener('mouseover', changeColor);


function randColor(){
    return Math.floor(Math.random() * 256);
}

function setOpacity(e){
    if(e.target.className === 'colored'){
        e.target.style.opacity -= 0.1;
        return true;
    }
    return false;
}
function changeColor(e){
    if(setOpacity(e) === true) return;
    e.target.setAttribute('class', 'colored');
    e.target.style.backgroundColor = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
}


//for loop remove nodes

