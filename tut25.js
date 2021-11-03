console.log("tut25");
let divelem = document.createElement('div');
let text =document.createTextNode("click to edit it");
divelem.setAttribute("id",'elem');
divelem.setAttribute('style','elem');

let container =document.querySelector('.container');
let first = document.getElementById('myfirst');

console.log(divelem,container,first);