const gameArea = document.querySelector('.game');
const button = document.querySelector('button');
const message = document.querySelector('.message');

let score = 0;
let gamePlay = false
button.addEventListener('click', function(){
    if(!gamePlay){
        gamePlay = true;
        score =0;
        gameArea.innerHTML = '';
        maker();
        message.innerHTML =' adivinhe o resultado'
        button.innerHTML = 'Conferir Resultado'
    }else{
        console.log('checker');
        score++;
        message.innerHTML = 'Acertos'+ score
        const numbers = document.querySelectorAll('.numb');
        let = winCondition = 0;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i].value == numbers[i].correct){
                numbers[i].style.backgroundColor = 'green'
                numbers[i].style.color = 'white'
                winCondition++;
            }else{
                let color = (numbers[i].value < numbers[i].correct) ? 'red' : 'blue'
                    numbers[i].style.backgroundColor = color
                    numbers[i].style.color = 'black'
            }
            if(winCondition == numbers.length){
                console.log('game over')
                gameEND()
            }
        }
    }
})

function gameEND(){
    message.innerHTML = 'Você resolveu o enigma em ' + score + ' tentativas';
    gamePlay = false;
    button.innerHTML = 'Jogar novamente'
}


function maker(){
    for(let x = 0; x<6; x++){
        let el = document.createElement('input')
        el.setAttribute('type', 'number');
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.style.width= '50px'
        el.style.height= '30px'
        el.classList.add('numb');
        el.order = x;
        el.correct = Math.floor(Math.random()*10);
        el.value = 0;
        console.log(el)
        gameArea.appendChild(el);
    }
    
}























// dynamic generate every thing

// const h1 = 'Acerte a sequencia para desbloquear um tesouro';

// const instructions = document.createTextNode('Instruções: acerte o combo, azul significa que o numero deve ser maior, vermelho significa que o numero deve ser menor')
// const textHeader = document.createTextNode('Acerte a sequencia para desbloquear um tesouro')


// const container = document.createElement('div');
// const header = document.createElement('h2')
// header.appendChild(textHeader)
// container.appendChild(header)

// document.body.appendChild(container)

// header.style.color = '#000'


// const sequenceArray = document.createElement('div');
// document.body.appendChild(sequenceArray)


// const setPlace1 = document.createElement('input');
// setPlace1.setAttribute('type', 'number');
// setPlace1.setAttribute('value', '0');

// const setPlace2 = document.createElement('input');
// setPlace2.setAttribute('type', 'number');
// setPlace2.setAttribute('value', '0');

// const setPlace3 = document.createElement('input');
// setPlace3.setAttribute('type', 'number');
// setPlace3.setAttribute('value', '0');

// const setPlace4 = document.createElement('input');
// setPlace4.setAttribute('type', 'number');
// setPlace4.setAttribute('value', '0');

// const setPlace5 = document.createElement('input');
// setPlace5.setAttribute('type', 'number');
// setPlace5.setAttribute('value', '0');

// const setPlace6 = document.createElement('input');
// setPlace6.setAttribute('type', 'number');
// setPlace6.setAttribute('value', '0');


// sequenceArray.appendChild(setPlace1)
// sequenceArray.appendChild(setPlace2)
// sequenceArray.appendChild(setPlace3)
// sequenceArray.appendChild(setPlace4)
// sequenceArray.appendChild(setPlace5)
// sequenceArray.appendChild(setPlace6)


// const btn = document.createElement('button');
// btn.setAttribute('type', 'submit');
// btn.innerHTML = 'conferir';
// document.body.appendChild(btn);
// console.log(btn);

// const instructOutput = document.createElement('h3');
// instructOutput.appendChild(instructions)
// document.body.appendChild(instructOutput)



// let rand0 = Math.floor(Math.random()*10)
// let rand1 = Math.floor(Math.random()*10)
// let rand2 = Math.floor(Math.random()*10)
// let rand3 = Math.floor(Math.random()*10)
// let rand4 = Math.floor(Math.random()*10)
// let rand5 = Math.floor(Math.random()*10)

// const cryptogragh = [rand0, rand1, rand2, rand3, rand4, rand5]


// console.log(cryptogragh)

// btn.addEventListener('click', () => {
//     const result1 = parseInt(setPlace1.value)
//     const result2 = parseInt(setPlace2.value)
//     const result3 = parseInt(setPlace3.value)
//     const result4 = parseInt(setPlace4.value)
//     const result5 = parseInt(setPlace5.value)
//     const result6 = parseInt(setPlace6.value)
    
//     if(result1 === rand0) {
//         setPlace1.style.backgroundColor = 'green';
//         console.log('Acertou miserave')

//     }else if(result1 > rand0){
//         setPlace1.style.backgroundColor = 'blue';
        
//     }else if(result1 < rand0){
//         setPlace1.style.backgroundColor = 'red';
//     }

//     if(result2 === rand1) {
//         setPlace2.style.backgroundColor = 'green';
//         console.log('Acertou miserave')

//     }else if(result2 > rand1){
//         setPlace2.style.backgroundColor = 'blue';
        
//     }else if(result2 < rand1){
//         setPlace2.style.backgroundColor = 'red';
//     }

//     if(result3 === rand2) {
//         setPlace3.style.backgroundColor = 'green';
//         console.log('Acertou miserave')

//     }else if(result3 > rand2){
//         setPlace3.style.backgroundColor = 'blue';
        
//     }else if(result3 < rand2){
//         setPlace3.style.backgroundColor = 'red';
//     }

//     if(result4 === rand3) {
//         setPlace4.style.backgroundColor = 'green';
//         console.log('Acertou miserave')

//     }else if(result4 > rand3){
//         setPlace4.style.backgroundColor = 'blue';
        
//     }else if(result4 < rand3){
//         setPlace4.style.backgroundColor = 'red';
//     }

//     if(result5 === rand4) {
//         setPlace5.style.backgroundColor = 'green';
//         console.log('Acertou miserave')

//     }else if(result5 > rand4){
//         setPlace5.style.backgroundColor = 'blue';
        
//     }else if(result5 < rand4){
//         setPlace5.style.backgroundColor = 'red';
//     }

//     if(result6 === rand5) {
//         setPlace6.style.backgroundColor = 'green';
//         console.log('Acertou miserave')

//     }else if(result6 > rand5){
//         setPlace6.style.backgroundColor = 'blue';
        
//     }else if(result6 < rand5){
//         setPlace6.style.backgroundColor = 'red';
//     }
// })