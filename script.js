const p1 = {
    score:0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#p1Display')
}

const p2 = {
    score:0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const select = document.querySelector('select');
let winningScore = 3;
let isGameOver = false;

function updateScores(player,opponent) {
// if statement only works when the parameter inside it
// is true.It stops executing when it becomes false.
    if(!isGameOver){
        player.score += 1;
        player.display.textContent = player.score;
        if(player.score === winningScore){
            isGameOver=true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
    }
}

p1.button.addEventListener('click',() => (updateScores(p1,p2)));
p2.button.addEventListener('click',() => (updateScores(p2,p1)));

resetButton.addEventListener('click', reset)

select.addEventListener('input',function(){
    winningScore = parseInt(this.value);
    reset();
});

function reset(){
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled=false;
    }
    isGameOver=false;
}