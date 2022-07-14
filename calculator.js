function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    if(num2 == 0) return "ERROR: DIVISION BY ZERO";
    else return num1/num2;
}

function exponent(num1, num2){
    return num1**num2;
}

const container = document.querySelector("#container");

const calcBody = document.createElement('div');
calcBody.setAttribute("id","calcBody");

const buttons = [["AC", "C", "%", "\u00F7"],["7","8","9","+"],["4","5","6","-"],["1","2","3","\u00d7"],["0",".","="]];
const buttonVals = [["AC", "C", "%", "/"],["7","8","9","+"],["4","5","6","-"],["1","2","3","*"],["0",".","equals"]];
const buttonBox = document.createElement('div');
buttonBox.setAttribute("id","buttonBox");

let screenVals = "";

function addListeners(div){
    div.addEventListener("click",()=>{
        screenVals += div.textContent;
        upDateScreen();
        console.log(div.id);
    });
}

function upDateScreen(){
    screen.textContent = screenVals;
}


let rows = [];
for(let i = 0; i<5; i++){
    let row = document.createElement('div');
    row.classList.add("row");
    row.setAttribute("id",`row${i+1}`);
    rows.push(row);
}

for(let i = 0; i<5; i++){
    let row = rows[i];
    let rowButtons = buttons[i];
    rowButtons.forEach((buttonName) => {
        let div = document.createElement('div');
        div.classList.add("button");
        div.setAttribute("id",buttonName);
        div.textContent = buttonName;
        addListeners(div);
        row.appendChild(div);
    })
    buttonBox.appendChild(row);
}

const screen = document.createElement('div');
screen.setAttribute("id","screen");
calcBody.appendChild(screen);
container.appendChild(calcBody);
calcBody.appendChild(buttonBox);
container.appendChild(calcBody);
const row5 = document.querySelector("#row5");
const equalButton = row5.lastChild;
equalButton.setAttribute("id","equalButton");







////first row of buttons
//const row1 = document.createElement('div');
//row1.classList.add("row");
// for (let i = 0; i<4; i++){
//     let div = document.createElement('div');
//     div.classList.add("button");
//     div.setAttribute("id",`${buttons[0][i]}`);
//     div.textContent = buttons[0][i];
//     row1.appendChild(div);
// }
// buttonBox.appendChild(row1);

// //second row of buttons
// const row2 = document.createElement('div');
// row2.classList.add("row");
// for (let i = 0; i<4; i++){
//     let div = document.createElement('div');
//     div.classList.add("button");
//     div.setAttribute("id",`${buttons[1][i]}`);
//     div.textContent = buttons[1][i];
//     row2.appendChild(div);
// }
// buttonBox.appendChild(row2);

// const row3 = document.createElement('div');
// row3.classList.add("row");
// for (let i = 0; i<4; i++){
//     let div = document.createElement('div');
//     div.classList.add("button");
//     div.setAttribute("id",`${buttons[2][i]}`);
//     div.textContent = buttons[2][i];
//     row3.appendChild(div);
// }
// buttonBox.appendChild(row3);

// const row4 = document.createElement('div');
// row4.classList.add("row");
// for (let i = 0; i<4; i++){
//     let div = document.createElement('div');
//     div.classList.add("button");
//     div.setAttribute("id",`${buttons[3][i]}`);
//     div.textContent = buttons[3][i];
//     row4.appendChild(div);
// }
// buttonBox.appendChild(row4);

// const row5 = document.createElement('div');
// row5.classList.add("row");
// for (let i = 0; i<3; i++){
//     let div = document.createElement('div');
//     div.classList.add("button");
//     div.setAttribute("id",`${buttons[4][i]}`);
//     div.textContent = buttons[4][i];
//     row5.appendChild(div);
// }
// const equalButton = row5.lastChild;
// equalButton.setAttribute("id","equalButton");
// buttonBox.appendChild(row5);

// calcBody.appendChild(buttonBox);
// container.appendChild(calcBody);



