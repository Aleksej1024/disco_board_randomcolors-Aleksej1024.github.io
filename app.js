const board=document.querySelector('#board');
const Squares_Number=1500;



function RandomColor() { 
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color
    }

for(let i=0;i<Squares_Number;i++){
    const square=document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',()=>setColor(square));
    square.addEventListener('mouseleave',()=>removeColor(square));
    board.append(square);
}

function setColor(element){
    col=RandomColor()
    element.style.backgroundColor=col;
    element.style.boxShadow=`0 0 2px ${col}, 0 0 10px ${col}`;

}

function removeColor(element){
    element.style.backgroundColor='rgb(34, 34, 63)';
    element.style.boxShadow='0 0 2px lemonchiffon' ;
}

