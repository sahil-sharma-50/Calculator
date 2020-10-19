function dis(val){
    document.getElementById("data").value += val;
}

function clr(){
    document.getElementById("data").value = " ";
}

function total(){   
    let x = document.getElementById("data").value;
    let y = eval(x);
    document.getElementById("data").value = y;
}


//Evenet Listner:-
window.addEventListener('keypress',function(e){
    if (e.keyCode === 13) {
    total();
  }
});

window.addEventListener('keydown', function(e){
    if(e.keyCode === 46){
        clr();
    }
});

//Evenet Listner end.

function art(val){
    var a = document.getElementById("data").value;
    var a2 = a.toString();
    var res = a2.charAt(a2.length-1);

    if(res != '+' && res!= '*' && res != '-' && res != '/'){
        document.getElementById("data").value += val;
    }
    else{
        alert("Error!");
    }
} 
    