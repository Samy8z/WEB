const cells = document.getElementsByClassName('game-cell')
const PAYER_X_CLASS = 'x'
const PLAYER_O_CLASS = 'circle'




for (let i = 0; i < cells.length; i++){
    const cell = cells[i]

    cell.addEventListener('click', function click(ev){
        console.log(ev.target.dataset)
    },{ once: true})
}