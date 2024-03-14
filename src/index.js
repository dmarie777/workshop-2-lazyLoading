import { registerImage } from "./lazy";

console.log('Happy hacking :)')
const images = document.querySelector('.images');
const button = document.querySelector('button')

button.addEventListener('click', addFox)

//Create a function to add random Foxes
function addFox() {
    const newImg = createImg()
    images.appendChild(newImg);
    registerImage(newImg)
}

//create an img node 
function createImg() {
    const maximum = 125;
    const minimum = 1;
    const random = Math.floor(Math.random()*(maximum-minimum));
    const container = document.createElement('div')
    container.className = 'container'
    const img = document.createElement('img');
    img.dataset.src = `https://randomfox.ca/images/${random}.jpg`;
    container.appendChild(img)
    return container
}

