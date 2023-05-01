// VAR FOR 'PULAR' FUNCTION
const mario = document.querySelector('.mario');
// VAR FOR TIMER (MUST BE EQUAL TO THE ONE IN THE CSS FILE)
let TIMER_MARIO_JUMP = 700

// JUMP FUNCTION
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, TIMER_MARIO_JUMP);
}
document.addEventListener('keydown', jump);

// VAR FOR COLISION
let POSICAO_COLISAO_PIPE = 105; 
let POSICAO_COLISAO_JUMP = 126;
const pipe = document.querySelector('.cano');
const chao = document.querySelector('.chao');
const nuvem = document.querySelector('.nuvem');
const nuvem2 = document.querySelector('.nuvem2');
const montanha = document.querySelector('.montanha');
const montanha2 = document.querySelector('.montanha2');

//VAR FOR POINTS
let points = 0;
let aux = 0;

const colLoop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const chaoPosition = chao.offsetLeft;
    const nuvemPosition = nuvem.offsetLeft;
    const nuvemPosition2 = nuvem2.offsetLeft;
    const montanhaPosition = montanha.offsetLeft;
    const montanhaPosition2 = montanha2.offsetLeft;

    if(pipePosition <= POSICAO_COLISAO_PIPE && pipePosition > 0 && marioPosition < POSICAO_COLISAO_JUMP ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        chao.style.animation = 'none';
        chao.style.left = `${chaoPosition}px`;

        nuvem.style.animation = 'none';
        nuvem.style.left = `${nuvemPosition}px`;

        nuvem2.style.animation = 'none';
        nuvem2.style.left = `${nuvemPosition2}px`;

        montanha.style.animation = 'none';
        montanha.style.left = `${montanhaPosition}px`;

        montanha2.style.animation = 'none'
        montanha2.style.left = `${montanhaPosition2}px`;
    }
    

    console.log(pipePosition);
    if(pipePosition >= -57 && pipePosition <= -47){
        points += 0.5;
    }
    document.getElementById('points').innerHTML=`PONTUAÇÃO: ${Math.round(points)}`;
}, 10);