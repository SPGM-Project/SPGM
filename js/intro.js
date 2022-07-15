const moveClick1 = document.querySelector("#content1");
const moveClick2 = document.querySelector("#content2");
const moveClick3 = document.querySelector("#content3");
const moveClick4 = document.querySelector("#content4");

const headMenu = document.querySelector("#logo");

function click1(){
    moveClick1.classList.add("trans");
}   

function click2(){
    moveClick2.classList.add("trans");
}   

function click3(){
    moveClick3.classList.add("trans");
}   

function click4(){
    moveClick4.classList.add("trans");
}   

function headClick(){
    location.href='main.html';
}

moveClick1.addEventListener("mouseover", click1);
moveClick2.addEventListener("mouseover", click2);
moveClick3.addEventListener("mouseover", click3);
moveClick4.addEventListener("mouseover", click4);
headMenu.addEventListener("click", headClick);