const playArea ={};
    const player = {};
    // const data = {"data":[{"icon":"\u0026#8902;","value":10},{"icon":"\u0026#10031;","value":30},{"icon":"\u0026#10036;","value":50},{"icon":"\u0026#10042;","value":70},{"icon":"\u0026#10084;","value":75},{"icon":"\u0026#9813;","value":50},{"icon":"\u0026#9822;","value":60},{"icon":"\u0026#9924;","value":40},{"icon":"\u0026#9971;","value":100},{"icon":"\u0026#9729;","value":-50},{"icon":"\u0026#9785;","value":-100},{"icon":"\u0026#9760;","value":-250},{"icon":"\u0026#9791;","value":-20}]}

    let gameObj;

    playArea.stats = document.querySelector('.stats');
    playArea.main = document.querySelector('.main');
    playArea.game = document.querySelector('.game');
    // Isso faz com que o buttons seja um array
    playArea.buttons = Array.from(document.querySelectorAll('.btn'));
    // Isso faz com que o buttons fosse um nodelist
    // playArea.buttons = document.querySelectorAll('.btn');
    // Isso faz com que as pages seja um array
    playArea.page = Array.from(document.querySelectorAll('.page'));
    // Isso faz com que as pages fosse um nodelist
    // playArea.buttons = document.querySelectorAll('.page');

    document.addEventListener('DOMContentLoaded', getData)
    playArea.buttons.forEach(function(item){
        console.log(item)
        item.addEventListener('click', handleBtn);
    });

    function getData(){
        playArea.main.classList.add('visible'); 
        // fetch faz parte do ecma06
        fetch("https://api.myjson.com/bins/gungm")
            .then(function(response){
            return response.json();
            })
            .then(function(data){
            gameObj=data.data;
            console.log(gameObj);
            buildBoard();
            })
        console.log('data recieved')
    }

    function updateScore(){
        playArea.scorer.innerHTML = 'Score: '+ player.score+' Vidas: '+player.items;
    }

    function buildBoard(){
        playArea.scorer = document.createElement('span');
        playArea.scorer.innerHTML = 'Clique no botão para começar!';
        playArea.stats.appendChild(playArea.scorer);
        let rows = 4;
        let cols = 4;
        let counter = 0;
        playArea.game.style.width = cols * 100 + (cols*2);
        playArea.game.style.margin = 'auto';
        for(let y = 0; y < rows; y++){
            let divMain = document.createElement('div');
            divMain.setAttribute('class', 'row');
            divMain.style.width = cols * 100 + (cols * 2);
            for(let x = 0; x < cols; x++){
                let div = document.createElement('div');
                div.setAttribute('class', 'pop');
                counter++;
                div.innerText = counter;
                div.counter = counter;
                divMain.appendChild(div)
            }    
            playArea.game.appendChild(divMain)
        }
    }

    function handleBtn(e){
        console.log(e.target)
        if(e.target.classList.contains('newGame')){
            console.log('YES')
            startGame();
        }
    }

    function startGame(){
        player.score = 0;
        player.items = 3;
        playArea.main.classList.remove('visible');
        playArea.game.classList.add('visible');
        for(let i = 0; i < 16; i++)
        console.log('start')
        player.gameOver = false;
        startPop();
        updateScore();
    }
    function randomUp(){
        let pops = document.querySelectorAll('.pop');
        let idx = Math.floor(Math.random()* pops.length);

        if(pops[idx].counter == playArea.last){
            return randomUp();
        }
        playArea.last = pops[idx].counter;
        return pops[idx];
    }

    function startPop(){
        let newPop =randomUp();
        console.log(newPop);
        newPop.classList.add('active');
        newPop.addEventListener('click', hitPop);
        let time = Math.round(Math.random()* (1500) + 750);
        const val = Math.floor(Math.random()* gameObj.length);

        newPop.old = newPop.innerText;
        newPop.v = gameObj[val].value;
        newPop.innerHTML = gameObj[val].icon + '<br>'+ gameObj[val].value;
        playArea.inPlay = setTimeout(function(){ 
            newPop.classList.remove('active');
            newPop.removeEventListener('click', hitPop);
            newPop.innerText = newPop.old;
            if(newPop.v > 0){
                player.items--;
                updateScore();
            }
            if(player.items <= 0){
                gameOver();
            }

            if(!player.gameOver){
                startPop();                
            }
        }, time);
    }

    function gameOver(){
        player.gameOver = true;
        playArea.main.classList.add('visible');
        playArea.game.classList.remove('visible');
        document.querySelector('.newGame').innerText = 'Tente novamente'
    }

    function hitPop(el){
        console.log(el.target.counter);
        console.log(el.target.v);
        let newPop = el.target;
        player.score = player.score + newPop.v;
        updateScore();
        newPop.classList.remove('active');
        newPop.removeEventListener('click', hitPop);
        newPop.innerText = newPop.old;
        clearTimeout(playArea.inPlay);
        if(!player.gameOver){
                startPop();
        }
    }
