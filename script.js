const container = document.querySelector('.container');
//pixel generation
const pixel = [];
let numberOfPixels = 16*16;
for(let i = 0; i <numberOfPixels; i++){
    pixel[i] = document.createElement('div');;
    container.appendChild(pixel[i]);
}
//color changer
container.addEventListener('mouseover', changeColor);

function changeColor(e){
    e.target.style.backgroundColor = 'red';
}

