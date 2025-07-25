let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let gBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

 let turnO = true;

 const winPatterns = [[0, 1, 2],[0,3,6],[3,4,5],[6,7,8],[2,5,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 boxes.forEach((box)=>{
     box.addEventListener('click',()=>{
       if (turnO == true )
       {
         box.innerText = "O"
         box.style.color = 'green';
         turnO = false;
       }
       else{
        box.innerText = "X"
        turnO = true
       }
       box.disabled = true;

       checkWinner();
     })
 })

 const resetGame = () => {
    turnO = true;
    enableBox()
    msgContainer.classList.add("hide")
 }

const disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

const showWinner = (i)=>{
    msg.innerText = `winner is ${i}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

 const checkWinner= () =>{
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText,
        //             boxes[pattern[1]].innerText,
        //             boxes[pattern[2]].innerText
        // );
        pos1Value = boxes[pattern[0]].innerText;
        pos2Value = boxes[pattern[1]].innerText;
        pos3Value = boxes[pattern[2]].innerText;

        if(pos1Value != "" && pos1Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                console.log("Winner");
                showWinner(pos1Value)
            }
        else{

             msg.innerText = `Game is Draw`;
             msgContainer.classList.remove("hide");
             disableBox()
        }
        }
    }
 };

gBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);