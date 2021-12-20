console.log("ajax");

let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log("clicked the fetch button");
    const xhr = new XMLHttpRequest();

    xhr.open('GET' , 'harry.txt',true);

    xhr.onprogress = function(){
        console.log("on progress");
    }

    xhr.onreadystatechange = function(){
        console.log("ready state ", xhr.readyState);
    }

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.log("some error");
        }

    }

    xhr.send();
}
