document.querySelector(".b").addEventListener("click", function(){// CLR btn
    document.querySelector("textarea").innerHTML="";
})


document.querySelector(".d").addEventListener("click",function(){//= btn
    calculation();
})



document.querySelector(".del").addEventListener("click",function(){// DEL btn
    var a= document.querySelector("textarea").innerHTML;
    b= a.slice(0,a.length-1);
    document.querySelector("textarea").innerHTML=b;
})


for(j=0; j<document.querySelectorAll("button").length; j++){// to prevent keypress triggers on btns
document.querySelectorAll("button")[j].addEventListener("keypress",function(event){
    event.preventDefault();
   return false;
})
}

for (i=0; i<document.querySelectorAll(".c").length; i++){//to display nums and operators when btn is clicked
    document.querySelectorAll(".c")[i].addEventListener("click",function(){
        var clickedNum=this.innerHTML;
        display(clickedNum);
     })
}




document.addEventListener("keydown", function(event){// to  display nums and operators when keys are pressed. 
 var appKey= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/'];
   
    if(appKey.indexOf(event.key)!= -1) // to only display appropriate keys
    {
        display(event.key);
    }

    else if(event.key==="Enter"){// to display result when enter is pressed
        calculation();
    }
    
})





function display(num){ 
    document.querySelector("textarea").innerHTML += num;
}


function calculation(){
    var calculate = document.querySelector("textarea").innerHTML;
   var calculated=(eval(calculate)); 
   document.querySelector("textarea").innerHTML= calculated;
}