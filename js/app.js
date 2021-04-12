'use strict'
//creat the global variables
let allStuff = [];
let maxAttemps = 10;
let firstElementIndex;
let secondElementIndex;
let lastElementIndex;
let mainElement = document.getElementById('mainContainer');
let firstElement = document.getElementById('first');
let secondElement = document.getElementById('second');
let lastElement = document.getElementById('last');

//create constructor object
function Product(name, path, shown,) {
    this.name = name,
        this.path = path,
        this.shown = shown,
        this.selected = 0;

    allStuff.push(this);
}
//create instances
new Product('bag', 'img/bag.jpg', 0);
new Product('banana', 'img/banana.jpg', 0);
new Product('bathroom', 'img/bathroom.jpg', 0);
new Product('boots', 'img/boots.jpg', 0);
new Product('breakfast', 'img/breakfast.jpg', 0);
new Product('bubble gum', 'img/bubblegum.jpg', 0);
new Product('chair', 'img/chair.jpg', 0);
new Product('cthulhu', 'img/cthulhu.jpg', 0);
new Product('dog-duck', 'img/dog-duck.jpg', 0);
new Product('dragon', 'img/dragon.jpg', 0);
new Product('pen', 'img/pen.jpg', 0);
new Product('pet-sweep', 'img/pet-sweep.jpg', 0);
new Product('scissors', 'img/scissors.jpg', 0);
new Product('shark', 'img/shark.jpg', 0);
new Product('sweep', 'img/sweep.png', 0);
new Product('tauntaun', 'img/tauntaun.jpg', 0);
new Product('unicorn', 'img/unicorn.jpg', 0);
new Product('usb', 'img/usb.gif', 0);
new Product('water-can', 'img/water-can.jpg', 0);
new Product('wine-glass', 'img/wine-glass.jpg', 0);

//generate random number
function randomNumber() {
    return Math.floor(Math.random() * 20);
}

//rendering the 3 imagaes
function renderImages() {
    firstElementIndex = randomNumber();
    secondElementIndex = randomNumber();
    lastElementIndex = randomNumber();

        while (firstElementIndex == secondElementIndex || firstElementIndex == lastElementIndex) {
            firstElementIndex = randomNumber();
        }
        while (secondElementIndex == lastElementIndex) {
            secondElementIndex = randomNumber();
        }
    
    firstElement.src = allStuff[firstElementIndex].path;
    secondElement.src = allStuff[secondElementIndex].path;
    lastElement.src = allStuff[lastElementIndex].path;
    allStuff[firstElementIndex].shown++;
    allStuff[secondElementIndex].shown++;
    allStuff[lastElementIndex].shown++;
    // console.log(allStuff[firstElementIndex].shown)
    // console.log(allStuff[secondElementIndex].shown)
    // console.log(allStuff[lastElementIndex].shown)
    
}

renderImages();

