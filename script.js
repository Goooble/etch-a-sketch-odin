const container = document.querySelector('.container');
//pixel generation
let numberOfPixels = 16*16;
for(let i = 0; i <numberOfPixels; i++){
    pixel = document.createElement('div');;
    container.appendChild(pixel);
}
//color changer
container.addEventListener('mouseover', changeColor);

function changeColor(e){
    e.target.style.backgroundColor = 'red';
}

