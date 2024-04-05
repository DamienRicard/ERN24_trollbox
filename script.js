//on récupère notre div square
let square = document.getElementById('square')

document.body.style.backgroundImage = 'url(1.jpg)';

square.style.width = '200px' ;
square.style.height = '200px' ;
square.style.backgroundColor = '#aa1050' ;
square.style.position = 'absolute';
square.style.justifyContent = 'center';
square.style.lineHeight = '100px' ;
square.style.cursor = 'pointer';
square.style.display = 'flex';
square.style.alignItems = 'center';
square.style.borderRadius = '100%';
square.style.color = 'white';
square.innerText = 'Attrape moi';

//fonction pour générer un nombre aléatoire entre un min et un max
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}