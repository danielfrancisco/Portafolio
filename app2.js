var drobu = document.getElementById("drop")
var nav = document.getElementById("na")
function dro(){
    if(window.innerHeight>667){
        if (drobu.innerHTML != "X"){
            nav.style.transition= "height 0.5s"
            nav.style.height = "55vh"
            drobu.innerHTML = "X";
            drobu.style.top = "23px";
            drobu.style.left = "26px";
            drobu.style.fontSize = "24px";
    
        }
    
        else{
            nav.style.height = "11vh";
            drobu.innerHTML = "___<br>___";
            drobu.style.top = "16px"
            drobu.style.left = "20px"
            drobu.style.fontSize = "20px";
            c = 35
        }
       }
    
       if(window.innerHeight <= 667){
        if (drobu.innerHTML != "X"){
            nav.style.transition= "height 0.5s"
            nav.style.height = "58vh"
            drobu.innerHTML = "X";
            drobu.style.top = "23px";
            drobu.style.left = "26px";
            drobu.style.fontSize = "24px";
    
        }
    
        else{
            nav.style.height = "17vh";
            drobu.innerHTML = "___<br>___";
            drobu.style.top = "16px"
            drobu.style.left = "20px"
            drobu.style.fontSize = "20px";
            c = 35
        }
       }

    
}

function chome(){
    document.getElementById("home").style.color = "grey"
    
}

function cpor(){
    
    document.getElementById("por").style.color = "grey"
    
}

function cex(){
    
    document.getElementById("ex").style.color = "grey"
}
