/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
const images = document.querySelector('.images');
const button = document.querySelector('button')

button.addEventListener('click', addFox)

//Create a function to add random Foxes
function addFox() {
    const newImg = createImg()
    images.appendChild(newImg);
}

//create an img node 
function createImg() {
    const maximum = 125;
    const minimum = 1;
    const random = Math.floor(Math.random()*(maximum-minimum));
    const container = document.createElement('div')
    container.className = 'container'
    const img = document.createElement('img');
    img.src = `https://randomfox.ca/images/${random}.jpg`;
    container.appendChild(img)
    return container
}

