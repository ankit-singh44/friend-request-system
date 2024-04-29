var rel=document.querySelector("h5");
var add=document.querySelector("#add");

var val=0;
add.addEventListener("click",function(){
    if(val==0){
        rel.innerHTML="Friends";
        rel.style.color="green";
        add.innerHTML="Remove Friend";
        val=1;  
    }
    else{
        rel.innerHTML="Stranger";
        rel.style.color="red";
        add.innerHTML="Add Friend";
        val=0;
    }
})