'use strict'
//creat the global variables
let allStuff = [];
let maxAttemps = 25;
let firstElementIndex;
let secondElementIndex;
let lastElementIndex;
let counter=0;
let mainElement = document.getElementById('mainContainer');
let firstElement = document.getElementById('first');
let secondElement = document.getElementById('second');
let lastElement = document.getElementById('last');
let ProductList = document.getElementById('productList');
let button = document.createElement('button');
button.textContent='show result';

//create constructor object
function Product(name, path) {
    this.name = name,
        this.path = path,
        this.shown = 0,
        this.selected = 0;

    allStuff.push(this);
}
//create instances
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubble gum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

//generate random number
function randomNumber() {
    return Math.floor(Math.random() * 20);
}

//rendering the 3 imagaes
function renderImages() {
    firstElementIndex = randomNumber();
    secondElementIndex = randomNumber();
    lastElementIndex = randomNumber();

        while (firstElementIndex == secondElementIndex || firstElementIndex == lastElementIndex ||secondElementIndex==lastElementIndex) {
            firstElementIndex = randomNumber();
            secondElementIndex=randomNumber();
            lastElementIndex =randomNumber();
        }
      
    
    firstElement.src = allStuff[firstElementIndex].path;
    secondElement.src = allStuff[secondElementIndex].path;
    lastElement.src = allStuff[lastElementIndex].path;
    allStuff[firstElementIndex].shown++;
    allStuff[secondElementIndex].shown++;
    allStuff[lastElementIndex].shown++;
    
}



//handle user clicks
mainElement.addEventListener('click',userClicks);

function userClicks(event){
    if(counter<maxAttemps){

        if(event.target.id==='first'){
            counter++;
            allStuff[firstElementIndex].selected++;
            console.log(counter);
        }
        else if(event.target.id==='second'){
            counter++;
            allStuff[secondElementIndex].selected++;
            console.log(counter);
        }
        else if(event.target.id === 'last'){
            counter++;
            allStuff[lastElementIndex].selected++;
            console.log(counter);
        }

        renderImages();
    }else{
        mainElement.removeEventListener('click',userClicks);
    }
         
    if(counter == maxAttemps){
            mainElement.appendChild(button)
          
    }
}
//handle the button event
button.addEventListener('click',showResults);
function showResults(event){
    let listItem; 
    for(let i=0;i<allStuff.length;i++){
        listItem =document.createElement('li');
        listItem.textContent=`${allStuff[i].name} had ${allStuff[i].selected} votes and was seen ${allStuff[i].shown} times`
        ProductList.appendChild(listItem);
    }
    button.removeEventListener('click',showResults);
}
renderImages();