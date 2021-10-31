console.log("tut18");
// let btn = document.getElementById('btn');
// // btn.addEventListener('click',func1);
// // btn.addEventListener('dblclick',func2);
// btn.addEventListener('mousedown',func2);
// function func1(e){
//     console.log("thanks",e);
//     e.preventDefault();
// }
// function func2(e){
//     console.log("thanks for double click",e);
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter', function(){
//     console.log("you have enter no")
// });
// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log("you have exited no")
// });
document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
    console.log("you have moved mouse")
});