//on récupère notre div square
let square = document.getElementById('square')

document.body.style.backgroundImage = "url('2.jpg')";

square.style.width = '10px' ;
square.style.height = '10px' ;
square.style.backgroundColor = '#af1050' ;
square.style.position = 'absolute';
square.style.justifyContent = 'center';
square.style.lineHeight = '100px' ;
square.style.cursor = 'pointer';
square.style.display = 'flex';
square.style.alignItems = 'center';
square.style.borderRadius = '100%';
square.style.color = 'white';
square.innerText = '';

//fonction pour générer un nombre aléatoire entre un min et un max
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

//fonction pour déplacer le carré à une position aléatoire

function moveSquare(){
    //largeur de l'écran - largeur du carré
    const screenWidth = window.innerWidth - 10;
    const screenHeight = window.innerHeight - 10;
    //déterminer une largeur aléatoire par rapport à l'écran (on peut prendre bottom et right si on veut)
    let newLeft = getRandomNumber(0, screenWidth);
    //déterminer une largeur aléatoire par rapport à l'écran
    let newTop = getRandomNumber(0, screenHeight);

    //on donne les valeurs de top et left à notre carré
    square.style.left = newLeft + "px";
    square.style.top = newTop + "px";

}

//on crée l'évènement pour déplacer le carré
square.addEventListener('mouseover', ()=>{
    setTimeout(moveSquare, 150);
})

//on ajoute un évènement click pour afficher une alerte avec Bravo
square.addEventListener('click', ()=>{
    alert('Félicitations, tu as atrapé mon zizi');
})