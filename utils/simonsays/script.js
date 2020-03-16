const gameArea = document.querySelector('.game-area');
const startBtn = document.querySelector('.start-btn');
const start = document.querySelector('.start');
const instructions = document.querySelector('.instructions');


const gameColors = ['green', 'red', 'yellow', 'blue'];

let nextButton;
let inPlay = false;
let gameClicks = [];
let userClicks = []
let numb = 2

// 0° COnferir se o jogador esta em jogo, caso esteja seguir em frente


window.addEventListener('load', setupGame)
startBtn.addEventListener('click', (el)=>{
    if(!inPlay){
        start.innerHTML = "next";
        player()
    }
})



function setupGame(){
    console.log('good to go')
    for(let i = 0; i < gameColors.length; i++){
        let blocks = generateBlocks('div');
        blocks.style.backgroundColor = gameColors[i];
        blocks.classList.add(`box`);
        blocks.classList.add(`block-${i}`);
        blocks.style.opacity = '.5'
        blocks.myColor = gameColors[i];
        if(blocks.classList.value === 'box block-0') blocks.style.borderRadius = '320px 0 0 0';
        else if(blocks.classList.value === 'box block-1') blocks.style.borderRadius = '0 320px 0 0';
        else if(blocks.classList.value === 'box block-2') blocks.style.borderRadius = '0 0 0 320px';
        else if(blocks.classList.value === 'box block-3') blocks.style.borderRadius = '0 0 320px 0';
        blocks.addEventListener('click', checkAnswer)
        gameArea.appendChild(blocks);
    }

}


function player(){
    start.desabled = true;
    gameClicks = []
    userClicks = []
    runSequence(numb);
}


function runSequence(num){
    let squares = document.querySelectorAll('.box')
    num--;
    if(num < 0){
        inPlay = true;
        return;
    }
    let randomNumber = Math.floor(Math.random()* gameColors.length);
    gameClicks.push(gameColors[randomNumber])
    console.log(gameClicks)
    squares[randomNumber].style.opacity = '1';
    setTimeout(() => {
        squares[randomNumber].style.opacity = '.5';
        setTimeout(() => {
            runSequence(num);
        }, 200);
    }, 500);
}


function checkAnswer(e){
    if(inPlay){
        let el = e.target;
        console.log(el.myColor)
        el.style.opacity = '1';
        setTimeout(() => {
            el.style.opacity = '.5';
        }, 500);
        userClicks.push(el.myColor);
        if(userClicks.length === gameClicks.length){
            inPlay = false;
            endGame();
        }
    }
    console.log(userClicks)
}

function endGame(){
    console.log('endgame')
    start.disabled = false;
    if(userClicks.toString() == gameClicks.toString()){
        numb++;
    }else{
        console.log('not okay bro')
        instructions.innerHTML = 'fudeu, perdeu!!'
        instructions.style.color = 'red'
    }
}

function generateBlocks(elType){
    const blocks = document.createElement(elType);
    return blocks;
}


function createNextButton(elType){
    const Button = document.createElement(elType);
    return Button;
}


// 1° clicar em start e desenhar 4 cores 'green, red, yellow, blue' dentro da gamearea, e tirar as intruções da tela também.

// 2° fazer as cores serem clicaveis, reconhecer quando clicar cada cor enviando de volta o valor da cor delas e coloca-las em uma array de cores na ordem clicada

//3° fazer o computaddor escolher randomicamente uma das cores na array default de cores e colocar as ecolhidas em outra array para que o jogador possa conferir com a array de cores clicadas por ele depois,

//3.1° o computador precisa escolher 2 cores de começo e assim aumentar de um em um o numero de cores a piscar
