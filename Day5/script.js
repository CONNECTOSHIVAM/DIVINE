let boxBtn = document.querySelectorAll('#box');
let resetBtn = document.querySelector('#resetGame');
let newBtn = document.querySelector('#newGame');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg')

let  turnO = true;
let  moveCount = 0;

let winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

boxBtn.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO)
        {
          box.innerText= "X";
          box.style.color = 'black';
          turnO=false;
        }
        else{
            box.innerText = "O"
            box.style.color = 'wheat';
            turnO=true;
        }
        moveCount++;
        box.disabled = true;
        checkWinner();
    })
})

const disableBox = ()=>{
    boxBtn.forEach((box)=>{
        box.disabled = true;
    })
}

const showWinner = (winner)=>{
    msg.innerText = `Winner is ${winner}`
    msgContainer.classList.remove('hide');
    disableBox();

}

//checkWinner functions is here ...
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        
        let pos1Value = boxBtn[pattern[0]].innerText;
        let pos2Value = boxBtn[pattern[1]].innerText;
        let pos3Value = boxBtn[pattern[2]].innerText;

        if(pos1Value != '' && pos2Value != '' & pos3Value != '')
        {
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                showWinner(pos1Value);
                return
            }
        }

        if (moveCount === 9){
            showDraw();
        }
    }
}